import re

with open('src/data/projects.ts', 'r') as f:
    content = f.read()

images = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2068&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", 
]

class Counter:
    def __init__(self):
        self.i = 0
    def get(self):
        res = images[self.i]
        self.i += 1
        return res

c = Counter()
content = re.sub(r"image:\s*'[^']+'", lambda m: f"image: '{c.get()}'", content)

content = content.replace("tags: ['Enterprise', 'ERP']\n  },", f"tags: ['Enterprise', 'ERP'],\n    image: '{c.get()}'\n  },", 1)
content = content.replace("tags: ['Enterprise', 'ERP']\n  },", f"tags: ['Enterprise', 'ERP'],\n    image: '{c.get()}'\n  },", 1)
content = content.replace("tags: ['Web', 'Full Stack']\n  },", f"tags: ['Web', 'Full Stack'],\n    image: '{c.get()}'\n  },", 1)
content = content.replace("tags: ['React', 'Web', 'Full Stack']\n  }", f"tags: ['React', 'Web', 'Full Stack'],\n    image: '{c.get()}'\n  }", 1)

with open('src/data/projects.ts', 'w') as f:
    f.write(content)
