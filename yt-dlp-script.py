import yt_dlp
import sys

# Define default path
path = r"/home/animeshkumar923/Videos/"

# Define download rate limit in byte
# ratelimit = 5000000

# Define download format
format = 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best'

# Get url as argument
try:
    url = sys.argv[1]
except:
    sys.exit('Usage: python thisfile.py URL')

# Download all videos of a channel
if url.startswith((
    'https://www.youtube.com/c/', 
    'https://www.youtube.com/channel/', 
    'https://www.youtube.com/user/')):
    ydl_opts = {
        'ignoreerrors': False,
        'abort_on_unavailable_fragments': True,
        'format': format,
        'outtmpl': path + '\\Channels\%(uploader)s\%(title)s ## %(uploader)s ## %(id)s.%(ext)s',
        'ratelimit': ratelimit,
    }

# Download all videos in a playlist
elif url.startswith('https://www.youtube.com/playlist'):
    ydl_opts = {
        'ignoreerrors': False,
        'abort_on_unavailable_fragments': True,
        'format': format,
        'outtmpl': path + '\\Playlists\%(playlist_uploader)s ## %(playlist)s\%(title)s ## %(uploader)s ## %(id)s.%(ext)s',
        'ratelimit': ratelimit,
    }

# Download single video from url
elif url.startswith((
    'https://www.youtube.com/watch', 
    'https://www.twitch.tv/', 
    'https://clips.twitch.tv/')):
    ydl_opts = {
        'ignoreerrors': False,
        'abort_on_unavailable_fragments': True,
        'format': format,
        'outtmpl': (path + '/Videos%(title)s ## %(uploader)s ## %(id)s.%(ext)s'),
        'ratelimit': ratelimit,
    }

# Downloads depending on the options set above
ydl_opts={}
if ydl_opts is not None:
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download(url)

