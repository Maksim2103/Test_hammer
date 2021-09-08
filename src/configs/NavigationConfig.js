import { 
  DashboardOutlined,
  SettingOutlined,
  MobileOutlined,
  ProfileOutlined 
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'Основные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboards',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'Дашбоард',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []    
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'Каталог',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-catalog-goods',
          path: `${APP_PREFIX_PATH}/main/catalog/goods`,
          title: 'Товары',
          icon: DashboardOutlined,
          breadcrumb: false,
          submenu: []    
        },
        {
          key: 'main-catalog-category',
          path: `${APP_PREFIX_PATH}/main/catalog/category`,
          title: 'Категории',
          icon: DashboardOutlined,
          breadcrumb: false,
          submenu: []    
        },
        {
          key: 'main-catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'Коллекции',
          icon: DashboardOutlined,
          breadcrumb: false,
          submenu: []    
        },
        {
          key: 'main-catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'Комбо',
          icon: DashboardOutlined,
          breadcrumb: false,
          submenu: []    
        },
      ]    
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'Заказы',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []    
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'Клиенты',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-clients-clientsList',
          path: `${APP_PREFIX_PATH}/main/clients/clients-list`,
          title: 'Список клиентов',
          icon: DashboardOutlined,
          breadcrumb: false,
          submenu: []    
        },
        {
          key: 'main-clients-clientsGroup',
          path: `${APP_PREFIX_PATH}/main/clients/clients-group`,
          title: 'Группы клиентов',
          icon: DashboardOutlined,
          breadcrumb: false,
          submenu: []    
        },
    

      ]    
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'Баннеры',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []    
    },
    {
      key: 'main-promoсode',
      path: `${APP_PREFIX_PATH}/main/promocods`,
      title: 'Промокоды',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []    
    },
    {
      key: 'main-offlinePoints',
      path: `${APP_PREFIX_PATH}/main/offline-points`,
      title: 'Офлайн точки',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-offlinePoints-adress',
          path: `${APP_PREFIX_PATH}/main/offline-points/adress`,
          title: 'Адрес',
          icon: DashboardOutlined,
          breadcrumb: false,
          submenu: []    
        },
        {
          key: 'main-offlinePoints-geoяone',
          path: `${APP_PREFIX_PATH}/main/offline-points/geozone`,
          title: 'Геозоны',
          icon: DashboardOutlined,
          breadcrumb: false,
          submenu: []    
        },
    
      ]    
    },
    {
      key: 'main-staff',
      path: `${APP_PREFIX_PATH}/main/staff`,
      title: 'Сотрудники',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []    
    },
    {
      key: 'main-mailing',
      path: `${APP_PREFIX_PATH}/main/mailing`,
      title: 'Рассылки',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []    
    },
  ]
}]

const systemsNavTree = [{
  key: 'systems',
  path: `${APP_PREFIX_PATH}/systems`,
  title: 'Системные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/systems/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mobileApp',
      path: `${APP_PREFIX_PATH}/systems/mobile-app`,
      title: 'Мобильные приложения',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/systems/logs`,
      title: 'Логи',
      icon: ProfileOutlined,
      breadcrumb: false,
      submenu: []
    },

  ]
}]

const navigationConfig = [
  ...mainNavTree,
  ...systemsNavTree
]

export default navigationConfig;

