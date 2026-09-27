#!/usr/bin/env python3
"""
OUR ENGINEERING STORY — SMART PHOTO SCANNER & MAPPER
Automatically detects real photos uploaded to the photos/ directory
and maps them intelligently into data.js!

Usage:
  python scan_photos.py
"""

import os
import sys
import codecs

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

VALID_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.mp4'}

def scan_directory():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    photos_dir = os.path.join(base_dir, 'photos')
    
    if not os.path.exists(photos_dir):
        print(f"[!] photos/ directory not found at {photos_dir}")
        return

    print("=" * 60)
    print(" [*] OUR ENGINEERING STORY -- PHOTO SCANNER")
    print("=" * 60)

    # 1. Check Hero & Final photos
    hero_photo = None
    final_photo = None

    for root, dirs, files in os.walk(photos_dir):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in VALID_EXTENSIONS:
                rel_path = os.path.relpath(os.path.join(root, f), base_dir).replace('\\', '/')
                f_lower = f.lower()
                if 'hero' in f_lower:
                    hero_photo = rel_path
                elif 'final' in f_lower or 'farewell' in f_lower:
                    final_photo = rel_path

    # Fallback to default expected names
    if not hero_photo and os.path.exists(os.path.join(photos_dir, 'hero.jpg')):
        hero_photo = 'photos/hero.jpg'
    if not final_photo and os.path.exists(os.path.join(photos_dir, 'final.jpg')):
        final_photo = 'photos/final.jpg'

    print(f"[*] Hero Photo:    {hero_photo if hero_photo else '[MISSING - will show placeholder]'}")
    print(f"[*] Final Photo:   {final_photo if final_photo else '[MISSING - will show placeholder]'}")

    # 2. Friends Photos
    friends_data = {}
    for i in range(1, 5):
        friend_dir = os.path.join(photos_dir, f'friend{i}')
        if os.path.exists(friend_dir):
            files = [
                os.path.join(f'photos/friend{i}', f).replace('\\', '/')
                for f in sorted(os.listdir(friend_dir))
                if os.path.splitext(f)[1].lower() in VALID_EXTENSIONS
            ]
            profile = next((f for f in files if 'profile' in f.lower()), files[0] if files else None)
            friends_data[f'friend{i}'] = {
                'profile': profile or f'photos/friend{i}/profile.jpg',
                'exists': profile is not None,
                'photos': files
            }
            status = f"[OK] Found ({len(files)} photos)" if files else "[EMPTY FOLDER]"
            print(f"[*] Friend {i}:      {status} (Profile: {profile if profile else 'Missing'})")
        else:
            friends_data[f'friend{i}'] = {
                'profile': f'photos/friend{i}/profile.jpg',
                'exists': False,
                'photos': []
            }
            print(f"[*] Friend {i}:      [MISSING DIR photos/friend{i}]")

    # 3. Year Timelines
    years_data = {}
    for y in range(1, 5):
        year_dir = os.path.join(photos_dir, f'year{y}')
        if os.path.exists(year_dir):
            files = [
                os.path.join(f'photos/year{y}', f).replace('\\', '/')
                for f in sorted(os.listdir(year_dir))
                if os.path.splitext(f)[1].lower() in VALID_EXTENSIONS
            ]
            years_data[f'year{y}'] = files
            status = f"[OK] Found ({len(files)} photos)" if files else "[EMPTY FOLDER]"
            print(f"[*] Year {y} Folder: {status}")
        else:
            years_data[f'year{y}'] = []
            print(f"[*] Year {y} Folder: [MISSING DIR photos/year{y}]")

    print("-" * 60)
    print("[*] Summary of Scan:")
    total_photos = (
        (1 if hero_photo and os.path.exists(os.path.join(base_dir, hero_photo)) else 0) +
        (1 if final_photo and os.path.exists(os.path.join(base_dir, final_photo)) else 0) +
        sum(len(f['photos']) for f in friends_data.values()) +
        sum(len(y) for y in years_data.values())
    )
    print(f"Total uploaded media files detected: {total_photos}")
    print("=" * 60)

if __name__ == '__main__':
    scan_directory()
