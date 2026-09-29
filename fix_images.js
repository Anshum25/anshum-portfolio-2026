const fs = require('fs');
let content = fs.readFileSync('src/data/projects.ts', 'utf8');

const images = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2068&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", 
];

let i = 0;
content = content.replace(/image: '[^']+'/g, () => `image: '${images[i++]}'`);

content = content.replace(/tags: \['Enterprise', 'ERP'\]\n  \},/g, () => `tags: ['Enterprise', 'ERP'],\n    image: '${images[i++]}'\n  },`);
content = content.replace(/tags: \['Web', 'Full Stack'\]\n  \},/g, () => `tags: ['Web', 'Full Stack'],\n    image: '${images[i++]}'\n  },`);
content = content.replace(/tags: \['React', 'Web', 'Full Stack'\]\n  \}/g, () => `tags: ['React', 'Web', 'Full Stack'],\n    image: '${images[i++]}'\n  }`);

fs.writeFileSync('src/data/projects.ts', content);
console.log('Fixed images');
