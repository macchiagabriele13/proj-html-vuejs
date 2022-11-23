import { reactive } from 'vue'

export const store = reactive({
    navList: [
        {
            text: 'Home',
            href: '#'
        },
        {
            text: 'Pages',
            href: '#'
        },
        {
            text: 'Courses',
            href: '#'
        },
        {
            text: 'Features',
            href: '#'
        },
        {
            text: 'Blog',
            href: '#'
        },
        {
            text: 'Shop',
            href: '#'
        },
    ],
    socials: [
        {
            icon: "fa-facebook",
            href: "#",
        },
        {
            icon: "fa-twitter",
            href: "#",
        },
        {
            icon: "fa-instagram",
            href: "#",
        },
        {
            icon: "fa-linkedin",
            href: "#",
        },
    ],
    footList: [
        {
            text: 'Start here',
            href: '#'
        },
        {
            text: 'Blog',
            href: '#'
        },
        {
            text: 'About us',
            href: '#'
        },
        {
            text: 'Success story',
            href: '#'
        },
        {
            text: 'Courses',
            href: '#'
        },
        {
            text: 'Contact us',
            href: '#'
        },
    ]

})