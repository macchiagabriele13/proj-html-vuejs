import { reactive } from 'vue'

export const store = reactive({
    navList: [
        {
            text: 'Home',
            href: '#',
            dropdown: false
        },
        {
            text: 'Pages',
            href: '#',
            dropdown: false
        },
        {
            text: 'Courses',
            href: '#',
            dropdown: false
        },
        {
            text: 'Features',
            href: '#',
            dropdown: false
        },
        {
            text: 'Blog',
            href: '#',
            dropdown: false
        },
        {
            text: 'Shop',
            href: '#',
            dropdown: false
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
    ],
    viewDropdown(index) {
        store.navList[index].dropdown = !store.navList[index].dropdown
    },
    viewDropdownout(index) {
        store.navList[index].dropdown = false
    }

})