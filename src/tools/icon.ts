import type { App } from 'vue';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdToc, MdDashboardOutlined, MdCloud, MdSpacedashboardOutlined } from 'oh-vue-icons/icons/md';
import { WiRain, WiCloudy, WiDaySunny, WiMoonrise } from 'oh-vue-icons/icons/wi';
import { IoSearchSharp } from "oh-vue-icons/icons";

export function setupIcons(app: App) {
    addIcons(MdToc, MdDashboardOutlined, MdCloud, WiRain, WiCloudy, WiDaySunny, WiMoonrise, IoSearchSharp, MdSpacedashboardOutlined);
    app.component("oh-icon", OhVueIcon);
}
