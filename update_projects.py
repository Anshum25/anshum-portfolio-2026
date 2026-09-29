import re

with open('src/data/projects.ts', 'r') as f:
    content = f.read()

# Replace images with highly relevant Unsplash premium placeholders
images = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", # TRMS
    "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop", # Chess
    "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2068&auto=format&fit=crop", # Manuscript
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", # ERP Invoice
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", # Verdict GPS
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", # ERP Manufacturing
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", # Churn
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop", # SkyERP
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", # SkyDot
]

# Quick hack: regex replace image: '...' with the new images sequentially
current_img_idx = 0
def replace_img(match):
    global current_img_idx
    res = f"image: '{images[current_img_idx]}'"
    current_img_idx = (current_img_idx + 1) % len(images)
    return res

# Replace existing images
content = re.sub(r"image:\s*'[^']+'", replace_img, content)

# For projects missing images, we need to inject them.
# Let's just do a manual string replace to inject the image fields for missing ones.
content = content.replace("tags: ['Enterprise', 'ERP']\n  },", f"tags: ['Enterprise', 'ERP'],\n    image: '{images[4]}'\n  },", 1)
content = content.replace("tags: ['Enterprise', 'ERP']\n  },", f"tags: ['Enterprise', 'ERP'],\n    image: '{images[5]}'\n  },", 1)
content = content.replace("tags: ['Web', 'Full Stack']\n  },", f"tags: ['Web', 'Full Stack'],\n    image: '{images[7]}'\n  },", 1)
content = content.replace("tags: ['React', 'Web', 'Full Stack']\n  }", f"tags: ['React', 'Web', 'Full Stack'],\n    image: '{images[8]}'\n  }", 1)

with open('src/data/projects.ts', 'w') as f:
    f.write(content)

