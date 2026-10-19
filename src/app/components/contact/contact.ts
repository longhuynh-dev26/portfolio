import { Component } from '@angular/core';

interface ContactMethod {
  label: string;
  value: string;
  link: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactMethods: ContactMethod[] = [
    { label: 'Email', value: 'mazicozin112@gmail.com', link: 'https://mail.google.com/mail/u/0/#sent?compose=CllgCKCDkzhhHQHwcmPPJGjtkxbCxLMSGRPkgvNBFtlfGwGmjdmnrjvVwvvLZgDGjmdRGCwbMcL' },
    { label: 'Phone', value: '+84 765 756 110', link: '#' },
    { label: 'Location', value: 'Ho Chi Minh City', link: 'https://www.google.com/maps/place/Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.0615082,105.6294821,8z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D' },
    { label: 'Facebook', value: 'Long Huynh', link: 'https://www.facebook.com/huynh.long.834186'}
  ];
}