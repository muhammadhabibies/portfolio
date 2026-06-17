export interface IProject {
  id: number;
  image: string;
  alt: string;
  description: string;
  title: string;
  link: string;
  stack: Array<string>;
}

export const projects: Array<IProject> = [
  {
    id: 1,
    image: 'img/projects/mypro.jpg',
    alt: 'MyPro Project',
    title: 'MYPRO Property',
    link: 'https://myproindonesia.com/',
    description:
      'Application for clients who are looking for and becoming property agents.',
    stack: ['Laravel', 'React', 'Tailwind'],
  },
  {
    id: 2,
    image: 'img/projects/admin-mypro.jpg',
    alt: 'Admin Mypro Project',
    title: 'Admin MYPRO Property',
    link: 'https://admin.myproindonesia.com/',
    description:
      'Application for managing property agents from the company side.',
    stack: ['Laravel', 'React', 'Material UI', 'Emotion'],
  },
  {
    id: 3,
    image: 'img/projects/seller-swapup.jpg',
    alt: 'Seller SwapUp Project',
    title: 'SwapUp Seller',
    link: 'https://seller.swapup.com.au/',
    description: "Application for sellers to transact at SwapUp's.",
    stack: ['Laravel', 'React', 'Shadcn UI', 'Stripe'],
  },
  {
    id: 4,
    image: 'img/projects/mustika.jpg',
    alt: 'Mustika Petrotech Project',
    title: 'Mustika Petrotech',
    link: 'https://mustikapetrotech.com/',
    description: 'Landing page of PT Mustika Petrotech Indonesia company.',
    stack: ['WordPress'],
  },
  {
    id: 5,
    image: 'img/projects/digyta.jpg',
    alt: 'Digyta Project',
    title: 'Digyta',
    link: 'https://digyta.net/',
    description: 'Landing page of PT Digital Agensi Nusantara company.',
    stack: ['WordPress'],
  },
];
