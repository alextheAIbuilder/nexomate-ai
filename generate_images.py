from google import genai
from google.genai import types
import subprocess, time, os

result = subprocess.run(['security', 'find-generic-password', '-s', 'google-imagen-api', '-w'], capture_output=True, text=True)
api_key = result.stdout.strip()
client = genai.Client(api_key=api_key)

prompts = {
    "hero-bg.png": "Abstract futuristic technology visualization with flowing data streams and neural network patterns, deep navy blue and purple gradient tones, subtle insurance iconography like shields and documents integrated into the digital landscape, cinematic wide composition, premium tech aesthetic, dark background",
    "dashboard-mockup.png": "Modern dark-themed SaaS dashboard interface for an insurance agency, showing real-time automation metrics, lead pipeline chart, renewal tracking timeline, response rate graphs, clean UI with indigo and purple accent colors on dark background, professional product screenshot style",
    "service-lead.png": "Minimalist isometric illustration of AI scanning and enriching lead data, magnifying glass over digital profile cards with data points highlighted, indigo and purple color scheme on dark background, clean modern tech illustration style",
    "service-autorespond.png": "Minimalist isometric illustration of AI chatbot responding to multiple phone calls and messages simultaneously, speech bubbles and phone icons, 24/7 clock element, indigo and purple color scheme on dark background, clean modern tech illustration style",
    "service-renewal.png": "Minimalist isometric illustration of automated calendar with renewal reminders and notification bells, policy documents with checkmarks, timeline visualization, indigo and purple color scheme on dark background, clean modern tech illustration style",
    "service-proposal.png": "Minimalist isometric illustration of AI generating professional insurance proposals, documents being assembled automatically with brand elements, indigo and purple color scheme on dark background, clean modern tech illustration style",
    "service-outreach.png": "Minimalist isometric illustration of automated email sequences being sent to different customer segments, personalized message flows, indigo and purple color scheme on dark background, clean modern tech illustration style",
    "service-analytics.png": "Minimalist isometric illustration of analytics dashboard with bar charts, pie charts and KPI metrics floating in space, indigo and purple color scheme on dark background, clean modern tech illustration style",
    "before-chaos.png": "Overhead photo of messy insurance office desk covered in paper files, sticky notes, multiple open spreadsheets on old monitor, unanswered phone ringing, stressed overwhelmed feeling, warm yellow harsh lighting, cluttered chaotic workspace",
    "after-clean.png": "Overhead photo of clean modern insurance office with single sleek monitor showing automated dashboard, organized minimal desk, calm professional atmosphere, cool blue-purple ambient lighting, everything streamlined and efficient",
}

os.makedirs('public/images', exist_ok=True)

for filename, prompt in prompts.items():
    path = f'public/images/{filename}'
    if os.path.exists(path):
        print(f"  Skipping {filename} (exists)")
        continue
    print(f"Generating {filename}...")
    try:
        response = client.models.generate_images(
            model='imagen-4.0-fast-generate-001',
            prompt=prompt,
            config=types.GenerateImagesConfig(number_of_images=1)
        )
        response.generated_images[0].image.save(path)
        print(f"  ✓ Saved {filename}")
        time.sleep(2)
    except Exception as e:
        print(f"  ✗ Failed: {e}")
        time.sleep(5)

print("Done generating images!")
