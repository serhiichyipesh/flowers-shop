import { Button } from '@/shared/ui';
import { Facebook, InstagramIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex gap-4">
            <p className="font-inter">(555) 123-4567</p>
            <p className="font-inter">info@momsflowershop.com</p>
          </div>
          <div className="font-inter">
            <ul className="flex space-x-4">
              <li>
                <Button variant={'link'}>
                  <a href="#">
                    <Facebook className="size-6" />
                  </a>
                </Button>
              </li>
              <li>
                <Button variant={'link'}>
                  <a href="#">
                    <InstagramIcon className="size-6" />
                  </a>
                </Button>
              </li>
            </ul>
          </div>

          <p className="font-inter text-center">
            &copy; 2023 Mom&apos;s Flower Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
