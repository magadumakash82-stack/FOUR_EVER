import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable caching-control for development and CORS
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    print("=" * 60)
    print(f"  OUR ENGINEERING STORY — LOCAL SERVER")
    print(f"  URL: http://localhost:{PORT}")
    print("=" * 60)
    print("  Press Ctrl+C to stop the server anytime.\n")

    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            webbrowser.open(f"http://localhost:{PORT}")
            httpd.serve_forever()
    except OSError:
        # Fallback to port 8081 if 8080 is in use
        alt_port = 8081
        with socketserver.TCPServer(("", alt_port), Handler) as httpd:
            webbrowser.open(f"http://localhost:{alt_port}")
            httpd.serve_forever()

if __name__ == "__main__":
    main()
