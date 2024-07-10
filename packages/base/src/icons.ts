import * as HeroiconsOutline from '@heroicons/react/24/outline';
import * as HeroiconsSolid from '@heroicons/react/24/solid';
import Spinner180Ring from './spinners/Spinner180Ring';
import Spinner12DotsScaleRotate from './spinners/Spinner12DotScaleRotate';
import Spinner3DotsFade from './spinners/Spinner3DotsFade';

export interface IconMap {
	[key: string]: {
		component: React.FC<React.SVGProps<SVGSVGElement>>;
		title: string;
	};
}

export const outlineIconMap: IconMap = {
	'outline/academic-cap': {
		component: HeroiconsOutline.AcademicCapIcon,
		title: 'Academic Cap',
	},
	'outline/adjustments-horizontal': {
		component: HeroiconsOutline.AdjustmentsHorizontalIcon,
		title: 'Adjustments Horizontal',
	},
	'outline/adjustments-vertical': {
		component: HeroiconsOutline.AdjustmentsVerticalIcon,
		title: 'Adjustments Vertical',
	},
	'outline/archive-box-arrow-down': {
		component: HeroiconsOutline.ArchiveBoxArrowDownIcon,
		title: 'Archive Box Arrow Down',
	},
	'outline/archive-box-x-mark': {
		component: HeroiconsOutline.ArchiveBoxXMarkIcon,
		title: 'Archive Box X Mark',
	},
	'outline/archive-box': {
		component: HeroiconsOutline.ArchiveBoxIcon,
		title: 'Archive Box',
	},
	'outline/arrow-down-circle': {
		component: HeroiconsOutline.ArrowDownCircleIcon,
		title: 'Arrow Down Circle',
	},
	'outline/arrow-down-left': {
		component: HeroiconsOutline.ArrowDownLeftIcon,
		title: 'Arrow Down Left',
	},
	'outline/arrow-down-on-square-stack': {
		component: HeroiconsOutline.ArrowDownOnSquareStackIcon,
		title: 'Arrow Down On Square Stack',
	},
	'outline/arrow-down-right': {
		component: HeroiconsOutline.ArrowDownRightIcon,
		title: 'Arrow Down Right',
	},
	'outline/arrow-down-tray': {
		component: HeroiconsOutline.ArrowDownTrayIcon,
		title: 'Arrow Down Tray',
	},
	'outline/arrow-down': {
		component: HeroiconsOutline.ArrowDownIcon,
		title: 'Arrow Down',
	},
	'outline/arrow-left-circle': {
		component: HeroiconsOutline.ArrowLeftCircleIcon,
		title: 'Arrow Left Circle',
	},
	'outline/arrow-left-end-on-rectangle': {
		component: HeroiconsOutline.ArrowLeftEndOnRectangleIcon,
		title: 'Arrow Left End On Rectangle',
	},
	'outline/arrow-left-start-on-rectangle': {
		component: HeroiconsOutline.ArrowLeftStartOnRectangleIcon,
		title: 'Arrow Left Start On Rectangle',
	},
	'outline/arrow-left': {
		component: HeroiconsOutline.ArrowLeftIcon,
		title: 'Arrow Left',
	},
	'outline/arrow-long-down': {
		component: HeroiconsOutline.ArrowLongDownIcon,
		title: 'Arrow Long Down',
	},
	'outline/arrow-long-left': {
		component: HeroiconsOutline.ArrowLongLeftIcon,
		title: 'Arrow Long Left',
	},
	'outline/arrow-long-right': {
		component: HeroiconsOutline.ArrowLongRightIcon,
		title: 'Arrow Long Right',
	},
	'outline/arrow-long-up': {
		component: HeroiconsOutline.ArrowLongUpIcon,
		title: 'Arrow Long Up',
	},
	'outline/arrow-path-rounded-square': {
		component: HeroiconsOutline.ArrowPathRoundedSquareIcon,
		title: 'Arrow Path Rounded',
	},
	'outline/arrow-path': {
		component: HeroiconsOutline.ArrowPathIcon,
		title: 'Arrow Path',
	},
	'outline/arrow-right-circle': {
		component: HeroiconsOutline.ArrowRightCircleIcon,
		title: 'Arrow Right Circle',
	},
	'outline/arrow-right-end-on-rectangle': {
		component: HeroiconsOutline.ArrowRightEndOnRectangleIcon,
		title: 'Arrow Right End On Rectangle',
	},
	'outline/arrow-right-start-on-rectangle': {
		component: HeroiconsOutline.ArrowRightStartOnRectangleIcon,
		title: 'Arrow Right Start On Rectangle',
	},
	'outline/arrow-right': {
		component: HeroiconsOutline.ArrowRightIcon,
		title: 'Arrow Right',
	},
	'outline/arrow-top-right-on-square': {
		component: HeroiconsOutline.ArrowTopRightOnSquareIcon,
		title: 'Arrow Top Right On Square',
	},
	'outline/arrow-trending-down': {
		component: HeroiconsOutline.ArrowTrendingDownIcon,
		title: 'Arrow Trending Down',
	},
	'outline/arrow-trending-up': {
		component: HeroiconsOutline.ArrowTrendingUpIcon,
		title: 'Arrow Trending Up',
	},
	'outline/arrow-up-circle': {
		component: HeroiconsOutline.ArrowUpCircleIcon,
		title: 'Arrow Up Circle',
	},
	'outline/arrow-up-left': {
		component: HeroiconsOutline.ArrowUpLeftIcon,
		title: 'Arrow Up Left',
	},
	'outline/arrow-up-on-square-stack': {
		component: HeroiconsOutline.ArrowUpOnSquareStackIcon,
		title: 'Arrow Up On Square Stack',
	},
	'outline/arrow-up-on-square': {
		component: HeroiconsOutline.ArrowUpOnSquareIcon,
		title: 'Arrow Up On Square',
	},
	'outline/arrow-up-right': {
		component: HeroiconsOutline.ArrowUpRightIcon,
		title: 'Arrow Up Right',
	},
	'outline/arrow-up-tray': {
		component: HeroiconsOutline.ArrowUpTrayIcon,
		title: 'Arrow Up Tray',
	},
	'outline/arrow-up': {
		component: HeroiconsOutline.ArrowUpIcon,
		title: 'Arrow Up',
	},
	'outline/arrow-uturn-down': {
		component: HeroiconsOutline.ArrowUturnDownIcon,
		title: 'Arrow Uturn Down',
	},
	'outline/arrow-uturn-left': {
		component: HeroiconsOutline.ArrowUturnLeftIcon,
		title: 'Arrow Uturn Left',
	},
	'outline/arrow-uturn-right': {
		component: HeroiconsOutline.ArrowUturnRightIcon,
		title: 'Arrow Uturn Right',
	},
	'outline/arrow-uturn-up': {
		component: HeroiconsOutline.ArrowUturnUpIcon,
		title: 'Arrow Uturn Up',
	},
	'outline/arrows-pointing-in': {
		component: HeroiconsOutline.ArrowsPointingInIcon,
		title: 'Arrows Pointing In',
	},
	'outline/arrows-pointing-out': {
		component: HeroiconsOutline.ArrowsPointingOutIcon,
		title: 'Arrows Pointing Out',
	},
	'outline/arrows-right-left': {
		component: HeroiconsOutline.ArrowsRightLeftIcon,
		title: 'Arrows Right Left',
	},
	'outling/arrows-up-down': {
		component: HeroiconsOutline.ArrowsUpDownIcon,
		title: 'Arrows Up Down',
	},
	'outline/at-symbol': {
		component: HeroiconsOutline.AtSymbolIcon,
		title: 'At Symbol',
	},
	'outline/backspace': {
		component: HeroiconsOutline.BackspaceIcon,
		title: 'Backspace',
	},
	'outline/backward': {
		component: HeroiconsOutline.BackwardIcon,
		title: 'Backward',
	},
	'outline/banknotes': {
		component: HeroiconsOutline.BanknotesIcon,
		title: 'Banknotes',
	},
	'outline/bars-2': {
		component: HeroiconsOutline.Bars2Icon,
		title: 'Bars 2',
	},
	'outline/bars-3-bottom-left': {
		component: HeroiconsOutline.Bars3BottomLeftIcon,
		title: 'Bars 3 Bottom Left',
	},
	'outline/bars-3-bottom-right': {
		component: HeroiconsOutline.Bars3BottomRightIcon,
		title: 'Bars 3 Bottom Right',
	},
	'outline/bars-3-center-left': {
		component: HeroiconsOutline.Bars3CenterLeftIcon,
		title: 'Bars 3 Center Left',
	},
	'outline/bars-3': {
		component: HeroiconsOutline.Bars3Icon,
		title: 'Bars 3',
	},
	'outline/bars-4': {
		component: HeroiconsOutline.Bars4Icon,
		title: 'Bars 4',
	},
	'outline/bars-arrow-down': {
		component: HeroiconsOutline.BarsArrowDownIcon,
		title: 'Bars Arrow Down',
	},
	'outline/bars-arrow-up': {
		component: HeroiconsOutline.BarsArrowUpIcon,
		title: 'Bars Arrow Up',
	},
	'outline/battery-0': {
		component: HeroiconsOutline.Battery0Icon,
		title: 'Battery 0',
	},
	'outline/batter-100': {
		component: HeroiconsOutline.Battery100Icon,
		title: 'Battery 100',
	},
	'outline/battery-50': {
		component: HeroiconsOutline.Battery50Icon,
		title: 'Battery 50',
	},
	'outline/beaker': {
		component: HeroiconsOutline.BeakerIcon,
		title: 'Beaker',
	},
	'outline/bell-alert': {
		component: HeroiconsOutline.BellAlertIcon,
		title: 'Bell Alert',
	},
	'outline/bell-slash': {
		component: HeroiconsOutline.BellSlashIcon,
		title: 'Bell Slash',
	},
	'outline/bell-snooze': {
		component: HeroiconsOutline.BellSnoozeIcon,
		title: 'Bell Snooze',
	},
	'outline/bell': {
		component: HeroiconsOutline.BellIcon,
		title: 'Bell',
	},
	'outline/bolt-slash': {
		component: HeroiconsOutline.BoltSlashIcon,
		title: 'Bolt Slash',
	},
	'outline/bolt': {
		component: HeroiconsOutline.BoltIcon,
		title: 'Bolt',
	},
	'outline/book-open': {
		component: HeroiconsOutline.BookOpenIcon,
		title: 'Book Open',
	},
	'outline/bookmark-slash': {
		component: HeroiconsOutline.BookmarkSlashIcon,
		title: 'Bookmark Slash',
	},
	'outline/bookmark-square': {
		component: HeroiconsOutline.BookmarkSquareIcon,
		title: 'Bookmark Square',
	},
	'outline/bookmark': {
		component: HeroiconsOutline.BookmarkIcon,
		title: 'Bookmark',
	},
	'outline/briefcase': {
		component: HeroiconsOutline.BriefcaseIcon,
		title: 'Briefcase',
	},
	'outline/bug-ant': {
		component: HeroiconsOutline.BugAntIcon,
		title: 'Bug Ant',
	},
	'outline/building-library': {
		component: HeroiconsOutline.BuildingLibraryIcon,
		title: 'Building Library',
	},
	'outline/building-office-2': {
		component: HeroiconsOutline.BuildingOffice2Icon,
		title: 'Building Office 2',
	},
	'outline/building-office': {
		component: HeroiconsOutline.BuildingOfficeIcon,
		title: 'Building Office',
	},
	'outline/building-storefront': {
		component: HeroiconsOutline.BuildingStorefrontIcon,
		title: 'Building Storefront',
	},
	'outline/cake': {
		component: HeroiconsOutline.CakeIcon,
		title: 'Cake',
	},
	'outline/calculator': {
		component: HeroiconsOutline.CalculatorIcon,
		title: 'Calculator',
	},
	'outline/calendar-days': {
		component: HeroiconsOutline.CalendarDaysIcon,
		title: 'Calendar Days',
	},
	'outline/calendar': {
		component: HeroiconsOutline.CalendarIcon,
		title: 'Calendar',
	},
	'outline/camera': {
		component: HeroiconsOutline.CameraIcon,
		title: 'Camera',
	},
	'outline/chart-bar-square': {
		component: HeroiconsOutline.ChartBarSquareIcon,
		title: 'Chart Bar Square',
	},
	'outline/chart-bar': {
		component: HeroiconsOutline.ChartBarIcon,
		title: 'Chart Bar',
	},
	'outline/chart-pie': {
		component: HeroiconsOutline.ChartPieIcon,
		title: 'Chart Pie',
	},
	'outline/chat-bubble-bottom-center-text': {
		component: HeroiconsOutline.ChatBubbleBottomCenterTextIcon,
		title: 'Chat Bubble Bottom Center Text',
	},
	'outline/chat-bubble-bottom-center': {
		component: HeroiconsOutline.ChatBubbleBottomCenterIcon,
		title: 'Chat Bubble Bottom Center',
	},
	'outline/chat-bubble-left-ellipsis': {
		component: HeroiconsOutline.ChatBubbleLeftEllipsisIcon,
		title: 'Chat Bubble Left Ellipsis',
	},
	'outline/chat-bubble-left-right': {
		component: HeroiconsOutline.ChatBubbleLeftRightIcon,
		title: 'Chat Bubble Left Right',
	},
	'outline/chat-bubble-left': {
		component: HeroiconsOutline.ChatBubbleLeftIcon,
		title: 'Chat Bubble Left',
	},
	'outline/chat-bubble-oval-left-ellipsis': {
		component: HeroiconsOutline.ChatBubbleOvalLeftEllipsisIcon,
		title: 'Chat Bubble Oval Left Ellipsis',
	},
	'outline/chat-bubble-oval-left': {
		component: HeroiconsOutline.ChatBubbleOvalLeftIcon,
		title: 'Chat Bubble Oval Left',
	},
	'outline/check-badge': {
		component: HeroiconsOutline.CheckBadgeIcon,
		title: 'Check Badge',
	},
	'outline/check-circle': {
		component: HeroiconsOutline.CheckCircleIcon,
		title: 'Check Circle',
	},
	'outline/check': {
		component: HeroiconsOutline.CheckIcon,
		title: 'Check',
	},
	'outline/chevron-double-down': {
		component: HeroiconsOutline.ChevronDoubleDownIcon,
		title: 'Chevron Double Down',
	},
	'outline/chevron-double-left': {
		component: HeroiconsOutline.ChevronDoubleLeftIcon,
		title: 'Chevron Double Left',
	},
	'outline/chevron-double-right': {
		component: HeroiconsOutline.ChevronDoubleRightIcon,
		title: 'Chevron Double Right',
	},
	'outline/chevron-double-up': {
		component: HeroiconsOutline.ChevronDoubleUpIcon,
		title: 'Chevron Double Up',
	},
	'outline/chevron-down': {
		component: HeroiconsOutline.ChevronDownIcon,
		title: 'Chevron Down',
	},
	'outline/chevron-left': {
		component: HeroiconsOutline.ChevronLeftIcon,
		title: 'Chevron Left',
	},
	'outline/chevron-right': {
		component: HeroiconsOutline.ChevronRightIcon,
		title: 'Chevron Right',
	},
	'outline/chevron-up-down': {
		component: HeroiconsOutline.ChevronUpDownIcon,
		title: 'Chevron Up Down',
	},
	'outline/chevron-up': {
		component: HeroiconsOutline.ChevronUpIcon,
		title: 'Chevron Up',
	},
	'outline/circle-stack': {
		component: HeroiconsOutline.CircleStackIcon,
		title: 'Circle Stack',
	},
	'outline/clipboard-document-check': {
		component: HeroiconsOutline.ClipboardDocumentCheckIcon,
		title: 'Clipboard Document Check',
	},
	'outline/clipboard-document-list': {
		component: HeroiconsOutline.ClipboardDocumentListIcon,
		title: 'Clipboard Document List',
	},
	'outline/clipboard-document': {
		component: HeroiconsOutline.ClipboardDocumentIcon,
		title: 'Clipboard Document',
	},
	'outline/clipboard': {
		component: HeroiconsOutline.ClipboardIcon,
		title: 'Clipboard',
	},
	'outline/clock': {
		component: HeroiconsOutline.ClockIcon,
		title: 'Clock',
	},
	'outline/cloud-arrow-down': {
		component: HeroiconsOutline.CloudArrowDownIcon,
		title: 'Cloud Arrow Down',
	},
	'outline/cloud-arrow-up': {
		component: HeroiconsOutline.CloudArrowUpIcon,
		title: 'Cloud Arrow Up',
	},
	'outline/cloud': {
		component: HeroiconsOutline.CloudIcon,
		title: 'Cloud',
	},
	'outlin/code-bracket-square': {
		component: HeroiconsOutline.CodeBracketSquareIcon,
		title: 'Code Bracket Square',
	},
	'outline/code-bracket': {
		component: HeroiconsOutline.CodeBracketIcon,
		title: 'Code Bracket',
	},
	'outline/cog-6-tooth': {
		component: HeroiconsOutline.Cog6ToothIcon,
		title: 'Cog 6 Tooth',
	},
	'outline/cog-8-tooth': {
		component: HeroiconsOutline.Cog8ToothIcon,
		title: 'Cog 8 Tooth',
	},
	'outline/cog': {
		component: HeroiconsOutline.CogIcon,
		title: 'Cog',
	},
	'outline/command-line': {
		component: HeroiconsOutline.CommandLineIcon,
		title: 'Command Line',
	},
	'outline/computer-desktop': {
		component: HeroiconsOutline.ComputerDesktopIcon,
		title: 'Computer Desktop',
	},
	'outline/cpu-chip': {
		component: HeroiconsOutline.CpuChipIcon,
		title: 'CPU Chip',
	},
	'outline/credit-card': {
		component: HeroiconsOutline.CreditCardIcon,
		title: 'Credit Card',
	},
	'outline/cube-transparent': {
		component: HeroiconsOutline.CubeTransparentIcon,
		title: 'Cube Transparent',
	},
	'outline/cube': {
		component: HeroiconsOutline.CubeIcon,
		title: 'Cube',
	},
	'outline/currency-bangladeshi': {
		component: HeroiconsOutline.CurrencyBangladeshiIcon,
		title: 'Currency Bangladeshi',
	},
	'outline/currency-dollar': {
		component: HeroiconsOutline.CurrencyDollarIcon,
		title: 'Currency Dollar',
	},
	'outline/currency-euro': {
		component: HeroiconsOutline.CurrencyEuroIcon,
		title: 'Currency Euro',
	},
	'outline/currency-pound': {
		component: HeroiconsOutline.CurrencyPoundIcon,
		title: 'Currency Pound',
	},
	'outline/currency-rupee': {
		component: HeroiconsOutline.CurrencyRupeeIcon,
		title: 'Currency Rupee',
	},
	'outline/currency-yen': {
		component: HeroiconsOutline.CurrencyYenIcon,
		title: 'Currency Yen',
	},
	'outline/cursor-arrow-rays': {
		component: HeroiconsOutline.CursorArrowRaysIcon,
		title: 'Cursor Arrow Rays',
	},
	'outline/cursor-arrow-ripple': {
		component: HeroiconsOutline.CursorArrowRippleIcon,
		title: 'Cursor Arrow Ripple',
	},
	'outline/device-phone-mobile': {
		component: HeroiconsOutline.DevicePhoneMobileIcon,
		title: 'Device Phone Mobile',
	},
	'outline/device-tablet': {
		component: HeroiconsOutline.DeviceTabletIcon,
		title: 'Device Tablet',
	},
	'outline/document-arrow-down': {
		component: HeroiconsOutline.DocumentArrowDownIcon,
		title: 'Document Arrow Down',
	},
	'outline/document-arrow-up': {
		component: HeroiconsOutline.DocumentArrowUpIcon,
		title: 'Document Arrow Up',
	},
	'outline/document-chart-bar': {
		component: HeroiconsOutline.DocumentChartBarIcon,
		title: 'Document Chart Bar',
	},
	'outline/document-check': {
		component: HeroiconsOutline.DocumentCheckIcon,
		title: 'Document Check',
	},
	'outline/document-duplicate': {
		component: HeroiconsOutline.DocumentDuplicateIcon,
		title: 'Document Duplicate',
	},
	'outline/document-magnifying-glass': {
		component: HeroiconsOutline.DocumentMagnifyingGlassIcon,
		title: 'Document Magnifying Glass',
	},
	'outline/document-minus': {
		component: HeroiconsOutline.DocumentMinusIcon,
		title: 'Document Minus',
	},
	'outline/document-plus': {
		component: HeroiconsOutline.DocumentPlusIcon,
		title: 'Document Plus',
	},
	'outline/document-text': {
		component: HeroiconsOutline.DocumentTextIcon,
		title: 'Document Text',
	},
	'outline/document': {
		component: HeroiconsOutline.DocumentIcon,
		title: 'Document',
	},
	'outline/ellipsis-horizontal-circle': {
		component: HeroiconsOutline.EllipsisHorizontalCircleIcon,
		title: 'Ellipsis Horizontal Circle',
	},
	'outline/ellipsis-horizontal': {
		component: HeroiconsOutline.EllipsisHorizontalIcon,
		title: 'Ellipsis Horizontal',
	},
	'outline/ellipsis-vertical': {
		component: HeroiconsOutline.EllipsisVerticalIcon,
		title: 'Ellipsis Vertical',
	},
	'outline/envelope-open': {
		component: HeroiconsOutline.EnvelopeOpenIcon,
		title: 'Envelope Open',
	},
	'outline/envelope': {
		component: HeroiconsOutline.EnvelopeIcon,
		title: 'Envelope',
	},
	'outline/exclamation-circle': {
		component: HeroiconsOutline.ExclamationCircleIcon,
		title: 'Exclamation Circle',
	},
	'outline/exclamation-triangle': {
		component: HeroiconsOutline.ExclamationTriangleIcon,
		title: 'Exclamation Triangle',
	},
	'outline/eye-dropper': {
		component: HeroiconsOutline.EyeDropperIcon,
		title: 'Eye Dropper',
	},
	'outline/eye-slash': {
		component: HeroiconsOutline.EyeSlashIcon,
		title: 'Eye Slash',
	},
	'outline/eye': {
		component: HeroiconsOutline.EyeIcon,
		title: 'Eye',
	},
	'outline/face-frown': {
		component: HeroiconsOutline.FaceFrownIcon,
		title: 'Face Frown',
	},
	'outline/face-smile': {
		component: HeroiconsOutline.FaceSmileIcon,
		title: 'Face Smile',
	},
	'outline/film': {
		component: HeroiconsOutline.FilmIcon,
		title: 'Film',
	},
	'outline/finger-print': {
		component: HeroiconsOutline.FingerPrintIcon,
		title: 'Finger Print',
	},
	'outline/fire': {
		component: HeroiconsOutline.FireIcon,
		title: 'Fire',
	},
	'outline/flag': {
		component: HeroiconsOutline.FlagIcon,
		title: 'Flag',
	},
	'outline/folder-arrow-down': {
		component: HeroiconsOutline.FolderArrowDownIcon,
		title: 'Folder Arrow Down',
	},
	'outline/folder-minus': {
		component: HeroiconsOutline.FolderMinusIcon,
		title: 'Folder Minus',
	},
	'outline/folder-open': {
		component: HeroiconsOutline.FolderOpenIcon,
		title: 'Folder Open',
	},
	'outline/folder-plus': {
		component: HeroiconsOutline.FolderPlusIcon,
		title: 'Folder Plus',
	},
	'outline/folder': {
		component: HeroiconsOutline.FolderIcon,
		title: 'Folder',
	},
	'outline/forward': {
		component: HeroiconsOutline.ForwardIcon,
		title: 'Forward',
	},
	'outline/funnel': {
		component: HeroiconsOutline.FunnelIcon,
		title: 'Funnel',
	},
	'outline/gif': {
		component: HeroiconsOutline.GifIcon,
		title: 'Gif',
	},
	'outline/gift-top': {
		component: HeroiconsOutline.GiftTopIcon,
		title: 'Gift Top',
	},
	'outline/gift': {
		component: HeroiconsOutline.GiftIcon,
		title: 'Gift',
	},
	'outline/globe-alt': {
		component: HeroiconsOutline.GlobeAltIcon,
		title: 'Globe Alt',
	},
	'outline/globe-americas': {
		component: HeroiconsOutline.GlobeAmericasIcon,
		title: 'Globe Americas',
	},
	'outline/globe-asia-australia': {
		component: HeroiconsOutline.GlobeAsiaAustraliaIcon,
		title: 'Globe Asia Australia',
	},
	'outline/globe-europe-africa': {
		component: HeroiconsOutline.GlobeEuropeAfricaIcon,
		title: 'Globe Europe Africa',
	},
	'outline/hand-raised': {
		component: HeroiconsOutline.HandRaisedIcon,
		title: 'Hand Raised',
	},
	'outline/hand-thumb-down': {
		component: HeroiconsOutline.HandThumbDownIcon,
		title: 'Hand Thumb Down',
	},
	'outline/hand-thumb-up': {
		component: HeroiconsOutline.HandThumbUpIcon,
		title: 'Hand Thumb Up',
	},
	'outline/hashtag': {
		component: HeroiconsOutline.HashtagIcon,
		title: 'Hashtag',
	},
	'outline/heart': {
		component: HeroiconsOutline.HeartIcon,
		title: 'Heart',
	},
	'outline/home-modern': {
		component: HeroiconsOutline.HomeModernIcon,
		title: 'Home Modern',
	},
	'outline/home': {
		component: HeroiconsOutline.HomeIcon,
		title: 'Home',
	},
	'outline/identification': {
		component: HeroiconsOutline.IdentificationIcon,
		title: 'Identification',
	},
	'outline/inbox-arrow-down': {
		component: HeroiconsOutline.InboxArrowDownIcon,
		title: 'Inbox Arrow Down',
	},
	'outline/inbox-stack': {
		component: HeroiconsOutline.InboxStackIcon,
		title: 'Inbox Stack',
	},
	'outline/inbox': {
		component: HeroiconsOutline.InboxIcon,
		title: 'Inbox',
	},
	'outline/information-circle': {
		component: HeroiconsOutline.InformationCircleIcon,
		title: 'Information Circle',
	},
	'outline/key': {
		component: HeroiconsOutline.KeyIcon,
		title: 'Key',
	},
	'outline/language': {
		component: HeroiconsOutline.LanguageIcon,
		title: 'Language',
	},
	'outline/lifebuoy': {
		component: HeroiconsOutline.LifebuoyIcon,
		title: 'Lifebuoy',
	},
	'outline/light-bulb': {
		component: HeroiconsOutline.LightBulbIcon,
		title: 'Light Bulb',
	},
	'outline/link': {
		component: HeroiconsOutline.LinkIcon,
		title: 'Link',
	},
	'outline/list-bullet': {
		component: HeroiconsOutline.ListBulletIcon,
		title: 'List Bullet',
	},
	'outline/lock-closed': {
		component: HeroiconsOutline.LockClosedIcon,
		title: 'Lock Closed',
	},
	'outline/lock-open': {
		component: HeroiconsOutline.LockOpenIcon,
		title: 'Lock Open',
	},
	'outline/magnifying-glass-circle': {
		component: HeroiconsOutline.MagnifyingGlassCircleIcon,
		title: 'Magnifying Glass Circle',
	},
	'outline/magnifying-glass-minus': {
		component: HeroiconsOutline.MagnifyingGlassMinusIcon,
		title: 'Magnifying Glass Minus',
	},
	'outline/magnifying-glass-plus': {
		component: HeroiconsOutline.MagnifyingGlassPlusIcon,
		title: 'Magnifying Glass Plus',
	},
	'outline/magnifying-glass': {
		component: HeroiconsOutline.MagnifyingGlassIcon,
		title: 'Magnifying Glass',
	},
	'outline/map-pin': {
		component: HeroiconsOutline.MapPinIcon,
		title: 'Map Pin',
	},
	'outline/map': {
		component: HeroiconsOutline.MapIcon,
		title: 'Map',
	},
	'outline/megaphone': {
		component: HeroiconsOutline.MegaphoneIcon,
		title: 'Megaphone',
	},
	'outline/microphone': {
		component: HeroiconsOutline.MicrophoneIcon,
		title: 'Microphone',
	},
	'outline/minus-circle': {
		component: HeroiconsOutline.MinusCircleIcon,
		title: 'Minus Circle',
	},
	'outline/minus': {
		component: HeroiconsOutline.MinusIcon,
		title: 'Minus',
	},
	'outline/moon': {
		component: HeroiconsOutline.MoonIcon,
		title: 'Moon',
	},
	'outline/musical-note': {
		component: HeroiconsOutline.MusicalNoteIcon,
		title: 'Musical Note',
	},
	'outline/newspaper': {
		component: HeroiconsOutline.NewspaperIcon,
		title: 'Newspaper',
	},
	'outline/no-symbol': {
		component: HeroiconsOutline.NoSymbolIcon,
		title: 'No Symbol',
	},
	'outline/paint-brush': {
		component: HeroiconsOutline.PaintBrushIcon,
		title: 'Paint Brush',
	},
	'outline/paper-airplane': {
		component: HeroiconsOutline.PaperAirplaneIcon,
		title: 'Paper Airplane',
	},
	'outline/paper-clip': {
		component: HeroiconsOutline.PaperClipIcon,
		title: 'Paper Clip',
	},
	'outline/pause-circle': {
		component: HeroiconsOutline.PauseCircleIcon,
		title: 'Pause Circle',
	},
	'outline/pause': {
		component: HeroiconsOutline.PauseIcon,
		title: 'Pause',
	},
	'outline/pencil-square': {
		component: HeroiconsOutline.PencilSquareIcon,
		title: 'Pencil Square',
	},
	'outline/pencil': {
		component: HeroiconsOutline.PencilIcon,
		title: 'Pencil',
	},
	'outline/phone-arrow-down-left': {
		component: HeroiconsOutline.PhoneArrowDownLeftIcon,
		title: 'Phone Arrow Down Left',
	},
	'outline/phone-arrow-up-right': {
		component: HeroiconsOutline.PhoneArrowUpRightIcon,
		title: 'Phone Arrow Up Right',
	},
	'outline/phone-x-mark': {
		component: HeroiconsOutline.PhoneXMarkIcon,
		title: 'Phone X Mark',
	},
	'outline/phone': {
		component: HeroiconsOutline.PhoneIcon,
		title: 'Phone',
	},
	'outline/photo': {
		component: HeroiconsOutline.PhotoIcon,
		title: 'Photo',
	},
	'outline/play-circle': {
		component: HeroiconsOutline.PlayCircleIcon,
		title: 'Play Circle',
	},
	'outline/play-pause': {
		component: HeroiconsOutline.PlayPauseIcon,
		title: 'Play Pause',
	},
	'outline/play': {
		component: HeroiconsOutline.PlayIcon,
		title: 'Play',
	},
	'outline/plus-circle': {
		component: HeroiconsOutline.PlusCircleIcon,
		title: 'Plus Circle',
	},
	'outline/plus': {
		component: HeroiconsOutline.PlusIcon,
		title: 'Plus',
	},
	'outline/power': {
		component: HeroiconsOutline.PowerIcon,
		title: 'Power',
	},
	'outline/presentation-chart-bar': {
		component: HeroiconsOutline.PresentationChartBarIcon,
		title: 'Presentation Chart Bar',
	},
	'outline/presentation-chart-line': {
		component: HeroiconsOutline.PresentationChartLineIcon,
		title: 'Presentation Chart Line',
	},
	'outline/printer': {
		component: HeroiconsOutline.PrinterIcon,
		title: 'Printer',
	},
	'outline/puzzle-piece': {
		component: HeroiconsOutline.PuzzlePieceIcon,
		title: 'Puzzle Piece',
	},
	'outline/qr-code': {
		component: HeroiconsOutline.QrCodeIcon,
		title: 'Qrcode',
	},
	'outline/question-mark-circle': {
		component: HeroiconsOutline.QuestionMarkCircleIcon,
		title: 'Question Mark Circle',
	},
	'outline/queue-list': {
		component: HeroiconsOutline.QueueListIcon,
		title: 'Queue List',
	},
	'outline/radio': {
		component: HeroiconsOutline.RadioIcon,
		title: 'Radio',
	},
	'outline/receipt-percent': {
		component: HeroiconsOutline.ReceiptPercentIcon,
		title: 'Receipt Percent',
	},
	'outline/receipt-refund': {
		component: HeroiconsOutline.ReceiptRefundIcon,
		title: 'Receipt Refund',
	},
	'outline/rectangle-group': {
		component: HeroiconsOutline.RectangleGroupIcon,
		title: 'Rectangle Group',
	},
	'outline/rectangle-stack': {
		component: HeroiconsOutline.RectangleStackIcon,
		title: 'Rectangle Stack',
	},
	'outline/rocket-launch': {
		component: HeroiconsOutline.RocketLaunchIcon,
		title: 'Rocket Launch',
	},
	'outline/rss': {
		component: HeroiconsOutline.RssIcon,
		title: 'Rss',
	},
	'outline/scale': {
		component: HeroiconsOutline.ScaleIcon,
		title: 'Scale',
	},
	'outline/scissors': {
		component: HeroiconsOutline.ScissorsIcon,
		title: 'Scissors',
	},
	'outline/server-stack': {
		component: HeroiconsOutline.ServerStackIcon,
		title: 'Server Stack',
	},
	'outline/server': {
		component: HeroiconsOutline.ServerIcon,
		title: 'Server',
	},
	'outline/share': {
		component: HeroiconsOutline.ShareIcon,
		title: 'Share',
	},
	'outline/shield-check': {
		component: HeroiconsOutline.ShieldCheckIcon,
		title: 'Shield Check',
	},
	'outline/shield-exclamation': {
		component: HeroiconsOutline.ShieldExclamationIcon,
		title: 'Shield Exclamation',
	},
	'outline/shopping-bag': {
		component: HeroiconsOutline.ShoppingBagIcon,
		title: 'Shopping Bag',
	},
	'outline/shopping-cart': {
		component: HeroiconsOutline.ShoppingCartIcon,
		title: 'Shopping Cart',
	},
	'outline/signal-slash': {
		component: HeroiconsOutline.SignalSlashIcon,
		title: 'Signal Slash',
	},
	'outline/signal': {
		component: HeroiconsOutline.SignalIcon,
		title: 'Signal',
	},
	'outline/sparkles': {
		component: HeroiconsOutline.SparklesIcon,
		title: 'Sparkles',
	},
	'oultine/speaker-wave': {
		component: HeroiconsOutline.SpeakerWaveIcon,
		title: 'Speaker Wave',
	},
	'outline/speaker-x-mark': {
		component: HeroiconsOutline.SpeakerXMarkIcon,
		title: 'Speaker X Mark',
	},
	'outline/square-2-stack': {
		component: HeroiconsOutline.Square2StackIcon,
		title: 'Square 2 Stack',
	},
	'outline/square-3-stack-3d': {
		component: HeroiconsOutline.Square3Stack3DIcon,
		title: 'Square 3 Stack 3d',
	},
	'outline/squares-2x2': {
		component: HeroiconsOutline.Squares2X2Icon,
		title: 'Squares 2x2',
	},
	'outline/squares-plus': {
		component: HeroiconsOutline.SquaresPlusIcon,
		title: 'Squares Plus',
	},
	'outline/star': {
		component: HeroiconsOutline.StarIcon,
		title: 'Star',
	},
	'outline/stop-circle': {
		component: HeroiconsOutline.StopCircleIcon,
		title: 'Stop Circle',
	},
	'outline/stop': {
		component: HeroiconsOutline.StopIcon,
		title: 'Stop',
	},
	'outline/sun': {
		component: HeroiconsOutline.SunIcon,
		title: 'Sun',
	},
	'outline/swatch': {
		component: HeroiconsOutline.SwatchIcon,
		title: 'Swatch',
	},
	'outline/table-cells': {
		component: HeroiconsOutline.TableCellsIcon,
		title: 'Table Cells',
	},
	'outline/tag': {
		component: HeroiconsOutline.TagIcon,
		title: 'Tag',
	},
	'outline/ticket': {
		component: HeroiconsOutline.TicketIcon,
		title: 'Ticket',
	},
	'outline/trash': {
		component: HeroiconsOutline.TrashIcon,
		title: 'Trash',
	},
	'outline/trophy': {
		component: HeroiconsOutline.TrophyIcon,
		title: 'Trophy',
	},
	'outline/truck': {
		component: HeroiconsOutline.TruckIcon,
		title: 'Truck',
	},
	'outline/tv': {
		component: HeroiconsOutline.TvIcon,
		title: 'Tv',
	},
	'outline/user-circle': {
		component: HeroiconsOutline.UserCircleIcon,
		title: 'User Circle',
	},
	'outline/user-group': {
		component: HeroiconsOutline.UserGroupIcon,
		title: 'User Group',
	},
	'outline/user-minus': {
		component: HeroiconsOutline.UserMinusIcon,
		title: 'User Minus',
	},
	'outline/user-plus': {
		component: HeroiconsOutline.UserPlusIcon,
		title: 'User Plus',
	},
	'outline/user': {
		component: HeroiconsOutline.UserIcon,
		title: 'User',
	},
	'outline/users': {
		component: HeroiconsOutline.UsersIcon,
		title: 'Users',
	},
	'outline/variable': {
		component: HeroiconsOutline.VariableIcon,
		title: 'Variable',
	},
	'outline/video-camera': {
		component: HeroiconsOutline.VideoCameraIcon,
		title: 'Video Camera',
	},
	'outline/view-columns': {
		component: HeroiconsOutline.ViewColumnsIcon,
		title: 'View Columns',
	},
	'outline/viewfinder-circle': {
		component: HeroiconsOutline.ViewfinderCircleIcon,
		title: 'Viewfinder Circle',
	},
	'outline/wallet': {
		component: HeroiconsOutline.WalletIcon,
		title: 'Wallet',
	},
	'outline/wifi': {
		component: HeroiconsOutline.WifiIcon,
		title: 'Wifi',
	},
	'outline/window': {
		component: HeroiconsOutline.WindowIcon,
		title: 'Window',
	},
	'outline/wrench-screwdriver': {
		component: HeroiconsOutline.WrenchScrewdriverIcon,
		title: 'Wrench Screwdriver',
	},
	'outline/x-circle': {
		component: HeroiconsOutline.XCircleIcon,
		title: 'X Circle',
	},
	'outline/x-mark': {
		component: HeroiconsOutline.XMarkIcon,
		title: 'X Mark',
	},
};

export type IconOutline = keyof typeof outlineIconMap;

export const solidIconMap: IconMap = {
	'solid/academic-cap': {
		component: HeroiconsSolid.AcademicCapIcon,
		title: 'Academic Cap',
	},
	'solid/adjustments-horizontal': {
		component: HeroiconsSolid.AdjustmentsHorizontalIcon,
		title: 'Adjustments Horizontal',
	},
	'solid/adjustments-vertical': {
		component: HeroiconsSolid.AdjustmentsVerticalIcon,
		title: 'Adjustments Vertical',
	},
	'solid/archive-box-arrow-down': {
		component: HeroiconsSolid.ArchiveBoxArrowDownIcon,
		title: 'Archive Box Arrow Down',
	},
	'solid/archive-box-x-mark': {
		component: HeroiconsSolid.ArchiveBoxXMarkIcon,
		title: 'Archive Box X Mark',
	},
	'solid/archive-box': {
		component: HeroiconsSolid.ArchiveBoxIcon,
		title: 'Archive Box',
	},
	'solid/arrow-down-circle': {
		component: HeroiconsSolid.ArrowDownCircleIcon,
		title: 'Arrow Down Circle',
	},
	'solid/arrow-down-left': {
		component: HeroiconsSolid.ArrowDownLeftIcon,
		title: 'Arrow Down Left',
	},
	'solid/arrow-down-on-square-stack': {
		component: HeroiconsSolid.ArrowDownOnSquareStackIcon,
		title: 'Arrow Down On Square Stack',
	},
	'solid/arrow-down-right': {
		component: HeroiconsSolid.ArrowDownRightIcon,
		title: 'Arrow Down Right',
	},
	'solid/arrow-down-tray': {
		component: HeroiconsSolid.ArrowDownTrayIcon,
		title: 'Arrow Down Tray',
	},
	'solid/arrow-down': {
		component: HeroiconsSolid.ArrowDownIcon,
		title: 'Arrow Down',
	},
	'solid/arrow-left-circle': {
		component: HeroiconsSolid.ArrowLeftCircleIcon,
		title: 'Arrow Left Circle',
	},
	'solid/arrow-left-end-on-rectangle': {
		component: HeroiconsSolid.ArrowLeftEndOnRectangleIcon,
		title: 'Arrow Left End On Rectangle',
	},
	'solid/arrow-left-start-on-rectangle': {
		component: HeroiconsSolid.ArrowLeftStartOnRectangleIcon,
		title: 'Arrow Left Start On Rectangle',
	},
	'solid/arrow-left': {
		component: HeroiconsSolid.ArrowLeftIcon,
		title: 'Arrow Left',
	},
	'solid/arrow-long-down': {
		component: HeroiconsSolid.ArrowLongDownIcon,
		title: 'Arrow Long Down',
	},
	'solid/arrow-long-left': {
		component: HeroiconsSolid.ArrowLongLeftIcon,
		title: 'Arrow Long Left',
	},
	'solid/arrow-long-right': {
		component: HeroiconsSolid.ArrowLongRightIcon,
		title: 'Arrow Long Right',
	},
	'solid/arrow-long-up': {
		component: HeroiconsSolid.ArrowLongUpIcon,
		title: 'Arrow Long Up',
	},
	'solid/arrow-path-rounded-square': {
		component: HeroiconsSolid.ArrowPathRoundedSquareIcon,
		title: 'Arrow Path Rounded',
	},
	'solid/arrow-path': {
		component: HeroiconsSolid.ArrowPathIcon,
		title: 'Arrow Path',
	},
	'solid/arrow-right-circle': {
		component: HeroiconsSolid.ArrowRightCircleIcon,
		title: 'Arrow Right Circle',
	},
	'solid/arrow-right-end-on-rectangle': {
		component: HeroiconsSolid.ArrowRightEndOnRectangleIcon,
		title: 'Arrow Right End On Rectangle',
	},
	'solid/arrow-right-start-on-rectangle': {
		component: HeroiconsSolid.ArrowRightStartOnRectangleIcon,
		title: 'Arrow Right Start On Rectangle',
	},
	'solid/arrow-right': {
		component: HeroiconsSolid.ArrowRightIcon,
		title: 'Arrow Right',
	},
	'solid/arrow-top-right-on-square': {
		component: HeroiconsSolid.ArrowTopRightOnSquareIcon,
		title: 'Arrow Top Right On Square',
	},
	'solid/arrow-trending-down': {
		component: HeroiconsSolid.ArrowTrendingDownIcon,
		title: 'Arrow Trending Down',
	},
	'solid/arrow-trending-up': {
		component: HeroiconsSolid.ArrowTrendingUpIcon,
		title: 'Arrow Trending Up',
	},
	'solid/arrow-up-circle': {
		component: HeroiconsSolid.ArrowUpCircleIcon,
		title: 'Arrow Up Circle',
	},
	'solid/arrow-up-left': {
		component: HeroiconsSolid.ArrowUpLeftIcon,
		title: 'Arrow Up Left',
	},
	'solid/arrow-up-on-square-stack': {
		component: HeroiconsSolid.ArrowUpOnSquareStackIcon,
		title: 'Arrow Up On Square Stack',
	},
	'solid/arrow-up-on-square': {
		component: HeroiconsSolid.ArrowUpOnSquareIcon,
		title: 'Arrow Up On Square',
	},
	'solid/arrow-up-right': {
		component: HeroiconsSolid.ArrowUpRightIcon,
		title: 'Arrow Up Right',
	},
	'solid/arrow-up-tray': {
		component: HeroiconsSolid.ArrowUpTrayIcon,
		title: 'Arrow Up Tray',
	},
	'solid/arrow-up': {
		component: HeroiconsSolid.ArrowUpIcon,
		title: 'Arrow Up',
	},
	'solid/arrow-uturn-down': {
		component: HeroiconsSolid.ArrowUturnDownIcon,
		title: 'Arrow Uturn Down',
	},
	'solid/arrow-uturn-left': {
		component: HeroiconsSolid.ArrowUturnLeftIcon,
		title: 'Arrow Uturn Left',
	},
	'solid/arrow-uturn-right': {
		component: HeroiconsSolid.ArrowUturnRightIcon,
		title: 'Arrow Uturn Right',
	},
	'solid/arrow-uturn-up': {
		component: HeroiconsSolid.ArrowUturnUpIcon,
		title: 'Arrow Uturn Up',
	},
	'solid/arrows-pointing-in': {
		component: HeroiconsSolid.ArrowsPointingInIcon,
		title: 'Arrows Pointing In',
	},
	'solid/arrows-pointing-out': {
		component: HeroiconsSolid.ArrowsPointingOutIcon,
		title: 'Arrows Pointing Out',
	},
	'solid/arrows-right-left': {
		component: HeroiconsSolid.ArrowsRightLeftIcon,
		title: 'Arrows Right Left',
	},
	'outling/arrows-up-down': {
		component: HeroiconsSolid.ArrowsUpDownIcon,
		title: 'Arrows Up Down',
	},
	'solid/at-symbol': {
		component: HeroiconsSolid.AtSymbolIcon,
		title: 'At Symbol',
	},
	'solid/backspace': {
		component: HeroiconsSolid.BackspaceIcon,
		title: 'Backspace',
	},
	'solid/backward': {
		component: HeroiconsSolid.BackwardIcon,
		title: 'Backward',
	},
	'solid/banknotes': {
		component: HeroiconsSolid.BanknotesIcon,
		title: 'Banknotes',
	},
	'solid/bars-2': {
		component: HeroiconsSolid.Bars2Icon,
		title: 'Bars 2',
	},
	'solid/bars-3-bottom-left': {
		component: HeroiconsSolid.Bars3BottomLeftIcon,
		title: 'Bars 3 Bottom Left',
	},
	'solid/bars-3-bottom-right': {
		component: HeroiconsSolid.Bars3BottomRightIcon,
		title: 'Bars 3 Bottom Right',
	},
	'solid/bars-3-center-left': {
		component: HeroiconsSolid.Bars3CenterLeftIcon,
		title: 'Bars 3 Center Left',
	},
	'solid/bars-3': {
		component: HeroiconsSolid.Bars3Icon,
		title: 'Bars 3',
	},
	'solid/bars-4': {
		component: HeroiconsSolid.Bars4Icon,
		title: 'Bars 4',
	},
	'solid/bars-arrow-down': {
		component: HeroiconsSolid.BarsArrowDownIcon,
		title: 'Bars Arrow Down',
	},
	'solid/bars-arrow-up': {
		component: HeroiconsSolid.BarsArrowUpIcon,
		title: 'Bars Arrow Up',
	},
	'solid/battery-0': {
		component: HeroiconsSolid.Battery0Icon,
		title: 'Battery 0',
	},
	'solid/batter-100': {
		component: HeroiconsSolid.Battery100Icon,
		title: 'Battery 100',
	},
	'solid/battery-50': {
		component: HeroiconsSolid.Battery50Icon,
		title: 'Battery 50',
	},
	'solid/beaker': {
		component: HeroiconsSolid.BeakerIcon,
		title: 'Beaker',
	},
	'solid/bell-alert': {
		component: HeroiconsSolid.BellAlertIcon,
		title: 'Bell Alert',
	},
	'solid/bell-slash': {
		component: HeroiconsSolid.BellSlashIcon,
		title: 'Bell Slash',
	},
	'solid/bell-snooze': {
		component: HeroiconsSolid.BellSnoozeIcon,
		title: 'Bell Snooze',
	},
	'solid/bell': {
		component: HeroiconsSolid.BellIcon,
		title: 'Bell',
	},
	'solid/bolt-slash': {
		component: HeroiconsSolid.BoltSlashIcon,
		title: 'Bolt Slash',
	},
	'solid/bolt': {
		component: HeroiconsSolid.BoltIcon,
		title: 'Bolt',
	},
	'solid/book-open': {
		component: HeroiconsSolid.BookOpenIcon,
		title: 'Book Open',
	},
	'solid/bookmark-slash': {
		component: HeroiconsSolid.BookmarkSlashIcon,
		title: 'Bookmark Slash',
	},
	'solid/bookmark-square': {
		component: HeroiconsSolid.BookmarkSquareIcon,
		title: 'Bookmark Square',
	},
	'solid/bookmark': {
		component: HeroiconsSolid.BookmarkIcon,
		title: 'Bookmark',
	},
	'solid/briefcase': {
		component: HeroiconsSolid.BriefcaseIcon,
		title: 'Briefcase',
	},
	'solid/bug-ant': {
		component: HeroiconsSolid.BugAntIcon,
		title: 'Bug Ant',
	},
	'solid/building-library': {
		component: HeroiconsSolid.BuildingLibraryIcon,
		title: 'Building Library',
	},
	'solid/building-office-2': {
		component: HeroiconsSolid.BuildingOffice2Icon,
		title: 'Building Office 2',
	},
	'solid/building-office': {
		component: HeroiconsSolid.BuildingOfficeIcon,
		title: 'Building Office',
	},
	'solid/building-storefront': {
		component: HeroiconsSolid.BuildingStorefrontIcon,
		title: 'Building Storefront',
	},
	'solid/cake': {
		component: HeroiconsSolid.CakeIcon,
		title: 'Cake',
	},
	'solid/calculator': {
		component: HeroiconsSolid.CalculatorIcon,
		title: 'Calculator',
	},
	'solid/calendar-days': {
		component: HeroiconsSolid.CalendarDaysIcon,
		title: 'Calendar Days',
	},
	'solid/calendar': {
		component: HeroiconsSolid.CalendarIcon,
		title: 'Calendar',
	},
	'solid/camera': {
		component: HeroiconsSolid.CameraIcon,
		title: 'Camera',
	},
	'solid/chart-bar-square': {
		component: HeroiconsSolid.ChartBarSquareIcon,
		title: 'Chart Bar Square',
	},
	'solid/chart-bar': {
		component: HeroiconsSolid.ChartBarIcon,
		title: 'Chart Bar',
	},
	'solid/chart-pie': {
		component: HeroiconsSolid.ChartPieIcon,
		title: 'Chart Pie',
	},
	'solid/chat-bubble-bottom-center-text': {
		component: HeroiconsSolid.ChatBubbleBottomCenterTextIcon,
		title: 'Chat Bubble Bottom Center Text',
	},
	'solid/chat-bubble-bottom-center': {
		component: HeroiconsSolid.ChatBubbleBottomCenterIcon,
		title: 'Chat Bubble Bottom Center',
	},
	'solid/chat-bubble-left-ellipsis': {
		component: HeroiconsSolid.ChatBubbleLeftEllipsisIcon,
		title: 'Chat Bubble Left Ellipsis',
	},
	'solid/chat-bubble-left-right': {
		component: HeroiconsSolid.ChatBubbleLeftRightIcon,
		title: 'Chat Bubble Left Right',
	},
	'solid/chat-bubble-left': {
		component: HeroiconsSolid.ChatBubbleLeftIcon,
		title: 'Chat Bubble Left',
	},
	'solid/chat-bubble-oval-left-ellipsis': {
		component: HeroiconsSolid.ChatBubbleOvalLeftEllipsisIcon,
		title: 'Chat Bubble Oval Left Ellipsis',
	},
	'solid/chat-bubble-oval-left': {
		component: HeroiconsSolid.ChatBubbleOvalLeftIcon,
		title: 'Chat Bubble Oval Left',
	},
	'solid/check-badge': {
		component: HeroiconsSolid.CheckBadgeIcon,
		title: 'Check Badge',
	},
	'solid/check-circle': {
		component: HeroiconsSolid.CheckCircleIcon,
		title: 'Check Circle',
	},
	'solid/check': {
		component: HeroiconsSolid.CheckIcon,
		title: 'Check',
	},
	'solid/chevron-double-down': {
		component: HeroiconsSolid.ChevronDoubleDownIcon,
		title: 'Chevron Double Down',
	},
	'solid/chevron-double-left': {
		component: HeroiconsSolid.ChevronDoubleLeftIcon,
		title: 'Chevron Double Left',
	},
	'solid/chevron-double-right': {
		component: HeroiconsSolid.ChevronDoubleRightIcon,
		title: 'Chevron Double Right',
	},
	'solid/chevron-double-up': {
		component: HeroiconsSolid.ChevronDoubleUpIcon,
		title: 'Chevron Double Up',
	},
	'solid/chevron-down': {
		component: HeroiconsSolid.ChevronDownIcon,
		title: 'Chevron Down',
	},
	'solid/chevron-left': {
		component: HeroiconsSolid.ChevronLeftIcon,
		title: 'Chevron Left',
	},
	'solid/chevron-right': {
		component: HeroiconsSolid.ChevronRightIcon,
		title: 'Chevron Right',
	},
	'solid/chevron-up-down': {
		component: HeroiconsSolid.ChevronUpDownIcon,
		title: 'Chevron Up Down',
	},
	'solid/chevron-up': {
		component: HeroiconsSolid.ChevronUpIcon,
		title: 'Chevron Up',
	},
	'solid/circle-stack': {
		component: HeroiconsSolid.CircleStackIcon,
		title: 'Circle Stack',
	},
	'solid/clipboard-document-check': {
		component: HeroiconsSolid.ClipboardDocumentCheckIcon,
		title: 'Clipboard Document Check',
	},
	'solid/clipboard-document-list': {
		component: HeroiconsSolid.ClipboardDocumentListIcon,
		title: 'Clipboard Document List',
	},
	'solid/clipboard-document': {
		component: HeroiconsSolid.ClipboardDocumentIcon,
		title: 'Clipboard Document',
	},
	'solid/clipboard': {
		component: HeroiconsSolid.ClipboardIcon,
		title: 'Clipboard',
	},
	'solid/clock': {
		component: HeroiconsSolid.ClockIcon,
		title: 'Clock',
	},
	'solid/cloud-arrow-down': {
		component: HeroiconsSolid.CloudArrowDownIcon,
		title: 'Cloud Arrow Down',
	},
	'solid/cloud-arrow-up': {
		component: HeroiconsSolid.CloudArrowUpIcon,
		title: 'Cloud Arrow Up',
	},
	'solid/cloud': {
		component: HeroiconsSolid.CloudIcon,
		title: 'Cloud',
	},
	'outlin/code-bracket-square': {
		component: HeroiconsSolid.CodeBracketSquareIcon,
		title: 'Code Bracket Square',
	},
	'solid/code-bracket': {
		component: HeroiconsSolid.CodeBracketIcon,
		title: 'Code Bracket',
	},
	'solid/cog-6-tooth': {
		component: HeroiconsSolid.Cog6ToothIcon,
		title: 'Cog 6 Tooth',
	},
	'solid/cog-8-tooth': {
		component: HeroiconsSolid.Cog8ToothIcon,
		title: 'Cog 8 Tooth',
	},
	'solid/cog': {
		component: HeroiconsSolid.CogIcon,
		title: 'Cog',
	},
	'solid/command-line': {
		component: HeroiconsSolid.CommandLineIcon,
		title: 'Command Line',
	},
	'solid/computer-desktop': {
		component: HeroiconsSolid.ComputerDesktopIcon,
		title: 'Computer Desktop',
	},
	'solid/cpu-chip': {
		component: HeroiconsSolid.CpuChipIcon,
		title: 'CPU Chip',
	},
	'solid/credit-card': {
		component: HeroiconsSolid.CreditCardIcon,
		title: 'Credit Card',
	},
	'solid/cube-transparent': {
		component: HeroiconsSolid.CubeTransparentIcon,
		title: 'Cube Transparent',
	},
	'solid/cube': {
		component: HeroiconsSolid.CubeIcon,
		title: 'Cube',
	},
	'solid/currency-bangladeshi': {
		component: HeroiconsSolid.CurrencyBangladeshiIcon,
		title: 'Currency Bangladeshi',
	},
	'solid/currency-dollar': {
		component: HeroiconsSolid.CurrencyDollarIcon,
		title: 'Currency Dollar',
	},
	'solid/currency-euro': {
		component: HeroiconsSolid.CurrencyEuroIcon,
		title: 'Currency Euro',
	},
	'solid/currency-pound': {
		component: HeroiconsSolid.CurrencyPoundIcon,
		title: 'Currency Pound',
	},
	'solid/currency-rupee': {
		component: HeroiconsSolid.CurrencyRupeeIcon,
		title: 'Currency Rupee',
	},
	'solid/currency-yen': {
		component: HeroiconsSolid.CurrencyYenIcon,
		title: 'Currency Yen',
	},
	'solid/cursor-arrow-rays': {
		component: HeroiconsSolid.CursorArrowRaysIcon,
		title: 'Cursor Arrow Rays',
	},
	'solid/cursor-arrow-ripple': {
		component: HeroiconsSolid.CursorArrowRippleIcon,
		title: 'Cursor Arrow Ripple',
	},
	'solid/device-phone-mobile': {
		component: HeroiconsSolid.DevicePhoneMobileIcon,
		title: 'Device Phone Mobile',
	},
	'solid/device-tablet': {
		component: HeroiconsSolid.DeviceTabletIcon,
		title: 'Device Tablet',
	},
	'solid/document-arrow-down': {
		component: HeroiconsSolid.DocumentArrowDownIcon,
		title: 'Document Arrow Down',
	},
	'solid/document-arrow-up': {
		component: HeroiconsSolid.DocumentArrowUpIcon,
		title: 'Document Arrow Up',
	},
	'solid/document-chart-bar': {
		component: HeroiconsSolid.DocumentChartBarIcon,
		title: 'Document Chart Bar',
	},
	'solid/document-check': {
		component: HeroiconsSolid.DocumentCheckIcon,
		title: 'Document Check',
	},
	'solid/document-duplicate': {
		component: HeroiconsSolid.DocumentDuplicateIcon,
		title: 'Document Duplicate',
	},
	'solid/document-magnifying-glass': {
		component: HeroiconsSolid.DocumentMagnifyingGlassIcon,
		title: 'Document Magnifying Glass',
	},
	'solid/document-minus': {
		component: HeroiconsSolid.DocumentMinusIcon,
		title: 'Document Minus',
	},
	'solid/document-plus': {
		component: HeroiconsSolid.DocumentPlusIcon,
		title: 'Document Plus',
	},
	'solid/document-text': {
		component: HeroiconsSolid.DocumentTextIcon,
		title: 'Document Text',
	},
	'solid/document': {
		component: HeroiconsSolid.DocumentIcon,
		title: 'Document',
	},
	'solid/ellipsis-horizontal-circle': {
		component: HeroiconsSolid.EllipsisHorizontalCircleIcon,
		title: 'Ellipsis Horizontal Circle',
	},
	'solid/ellipsis-horizontal': {
		component: HeroiconsSolid.EllipsisHorizontalIcon,
		title: 'Ellipsis Horizontal',
	},
	'solid/ellipsis-vertical': {
		component: HeroiconsSolid.EllipsisVerticalIcon,
		title: 'Ellipsis Vertical',
	},
	'solid/envelope-open': {
		component: HeroiconsSolid.EnvelopeOpenIcon,
		title: 'Envelope Open',
	},
	'solid/envelope': {
		component: HeroiconsSolid.EnvelopeIcon,
		title: 'Envelope',
	},
	'solid/exclamation-circle': {
		component: HeroiconsSolid.ExclamationCircleIcon,
		title: 'Exclamation Circle',
	},
	'solid/exclamation-triangle': {
		component: HeroiconsSolid.ExclamationTriangleIcon,
		title: 'Exclamation Triangle',
	},
	'solid/eye-dropper': {
		component: HeroiconsSolid.EyeDropperIcon,
		title: 'Eye Dropper',
	},
	'solid/eye-slash': {
		component: HeroiconsSolid.EyeSlashIcon,
		title: 'Eye Slash',
	},
	'solid/eye': {
		component: HeroiconsSolid.EyeIcon,
		title: 'Eye',
	},
	'solid/face-frown': {
		component: HeroiconsSolid.FaceFrownIcon,
		title: 'Face Frown',
	},
	'solid/face-smile': {
		component: HeroiconsSolid.FaceSmileIcon,
		title: 'Face Smile',
	},
	'solid/film': {
		component: HeroiconsSolid.FilmIcon,
		title: 'Film',
	},
	'solid/finger-print': {
		component: HeroiconsSolid.FingerPrintIcon,
		title: 'Finger Print',
	},
	'solid/fire': {
		component: HeroiconsSolid.FireIcon,
		title: 'Fire',
	},
	'solid/flag': {
		component: HeroiconsSolid.FlagIcon,
		title: 'Flag',
	},
	'solid/folder-arrow-down': {
		component: HeroiconsSolid.FolderArrowDownIcon,
		title: 'Folder Arrow Down',
	},
	'solid/folder-minus': {
		component: HeroiconsSolid.FolderMinusIcon,
		title: 'Folder Minus',
	},
	'solid/folder-open': {
		component: HeroiconsSolid.FolderOpenIcon,
		title: 'Folder Open',
	},
	'solid/folder-plus': {
		component: HeroiconsSolid.FolderPlusIcon,
		title: 'Folder Plus',
	},
	'solid/folder': {
		component: HeroiconsSolid.FolderIcon,
		title: 'Folder',
	},
	'solid/forward': {
		component: HeroiconsSolid.ForwardIcon,
		title: 'Forward',
	},
	'solid/funnel': {
		component: HeroiconsSolid.FunnelIcon,
		title: 'Funnel',
	},
	'solid/gif': {
		component: HeroiconsSolid.GifIcon,
		title: 'Gif',
	},
	'solid/gift-top': {
		component: HeroiconsSolid.GiftTopIcon,
		title: 'Gift Top',
	},
	'solid/gift': {
		component: HeroiconsSolid.GiftIcon,
		title: 'Gift',
	},
	'solid/globe-alt': {
		component: HeroiconsSolid.GlobeAltIcon,
		title: 'Globe Alt',
	},
	'solid/globe-americas': {
		component: HeroiconsSolid.GlobeAmericasIcon,
		title: 'Globe Americas',
	},
	'solid/globe-asia-australia': {
		component: HeroiconsSolid.GlobeAsiaAustraliaIcon,
		title: 'Globe Asia Australia',
	},
	'solid/globe-europe-africa': {
		component: HeroiconsSolid.GlobeEuropeAfricaIcon,
		title: 'Globe Europe Africa',
	},
	'solid/hand-raised': {
		component: HeroiconsSolid.HandRaisedIcon,
		title: 'Hand Raised',
	},
	'solid/hand-thumb-down': {
		component: HeroiconsSolid.HandThumbDownIcon,
		title: 'Hand Thumb Down',
	},
	'solid/hand-thumb-up': {
		component: HeroiconsSolid.HandThumbUpIcon,
		title: 'Hand Thumb Up',
	},
	'solid/hashtag': {
		component: HeroiconsSolid.HashtagIcon,
		title: 'Hashtag',
	},
	'solid/heart': {
		component: HeroiconsSolid.HeartIcon,
		title: 'Heart',
	},
	'solid/home-modern': {
		component: HeroiconsSolid.HomeModernIcon,
		title: 'Home Modern',
	},
	'solid/home': {
		component: HeroiconsSolid.HomeIcon,
		title: 'Home',
	},
	'solid/identification': {
		component: HeroiconsSolid.IdentificationIcon,
		title: 'Identification',
	},
	'solid/inbox-arrow-down': {
		component: HeroiconsSolid.InboxArrowDownIcon,
		title: 'Inbox Arrow Down',
	},
	'solid/inbox-stack': {
		component: HeroiconsSolid.InboxStackIcon,
		title: 'Inbox Stack',
	},
	'solid/inbox': {
		component: HeroiconsSolid.InboxIcon,
		title: 'Inbox',
	},
	'solid/information-circle': {
		component: HeroiconsSolid.InformationCircleIcon,
		title: 'Information Circle',
	},
	'solid/key': {
		component: HeroiconsSolid.KeyIcon,
		title: 'Key',
	},
	'solid/language': {
		component: HeroiconsSolid.LanguageIcon,
		title: 'Language',
	},
	'solid/lifebuoy': {
		component: HeroiconsSolid.LifebuoyIcon,
		title: 'Lifebuoy',
	},
	'solid/light-bulb': {
		component: HeroiconsSolid.LightBulbIcon,
		title: 'Light Bulb',
	},
	'solid/link': {
		component: HeroiconsSolid.LinkIcon,
		title: 'Link',
	},
	'solid/list-bullet': {
		component: HeroiconsSolid.ListBulletIcon,
		title: 'List Bullet',
	},
	'solid/lock-closed': {
		component: HeroiconsSolid.LockClosedIcon,
		title: 'Lock Closed',
	},
	'solid/lock-open': {
		component: HeroiconsSolid.LockOpenIcon,
		title: 'Lock Open',
	},
	'solid/magnifying-glass-circle': {
		component: HeroiconsSolid.MagnifyingGlassCircleIcon,
		title: 'Magnifying Glass Circle',
	},
	'solid/magnifying-glass-minus': {
		component: HeroiconsSolid.MagnifyingGlassMinusIcon,
		title: 'Magnifying Glass Minus',
	},
	'solid/magnifying-glass-plus': {
		component: HeroiconsSolid.MagnifyingGlassPlusIcon,
		title: 'Magnifying Glass Plus',
	},
	'solid/magnifying-glass': {
		component: HeroiconsSolid.MagnifyingGlassIcon,
		title: 'Magnifying Glass',
	},
	'solid/map-pin': {
		component: HeroiconsSolid.MapPinIcon,
		title: 'Map Pin',
	},
	'solid/map': {
		component: HeroiconsSolid.MapIcon,
		title: 'Map',
	},
	'solid/megaphone': {
		component: HeroiconsSolid.MegaphoneIcon,
		title: 'Megaphone',
	},
	'solid/microphone': {
		component: HeroiconsSolid.MicrophoneIcon,
		title: 'Microphone',
	},
	'solid/minus-circle': {
		component: HeroiconsSolid.MinusCircleIcon,
		title: 'Minus Circle',
	},
	'solid/minus': {
		component: HeroiconsSolid.MinusIcon,
		title: 'Minus',
	},
	'solid/moon': {
		component: HeroiconsSolid.MoonIcon,
		title: 'Moon',
	},
	'solid/musical-note': {
		component: HeroiconsSolid.MusicalNoteIcon,
		title: 'Musical Note',
	},
	'solid/newspaper': {
		component: HeroiconsSolid.NewspaperIcon,
		title: 'Newspaper',
	},
	'solid/no-symbol': {
		component: HeroiconsSolid.NoSymbolIcon,
		title: 'No Symbol',
	},
	'solid/paint-brush': {
		component: HeroiconsSolid.PaintBrushIcon,
		title: 'Paint Brush',
	},
	'solid/paper-airplane': {
		component: HeroiconsSolid.PaperAirplaneIcon,
		title: 'Paper Airplane',
	},
	'solid/paper-clip': {
		component: HeroiconsSolid.PaperClipIcon,
		title: 'Paper Clip',
	},
	'solid/pause-circle': {
		component: HeroiconsSolid.PauseCircleIcon,
		title: 'Pause Circle',
	},
	'solid/pause': {
		component: HeroiconsSolid.PauseIcon,
		title: 'Pause',
	},
	'solid/pencil-square': {
		component: HeroiconsSolid.PencilSquareIcon,
		title: 'Pencil Square',
	},
	'solid/pencil': {
		component: HeroiconsSolid.PencilIcon,
		title: 'Pencil',
	},
	'solid/phone-arrow-down-left': {
		component: HeroiconsSolid.PhoneArrowDownLeftIcon,
		title: 'Phone Arrow Down Left',
	},
	'solid/phone-arrow-up-right': {
		component: HeroiconsSolid.PhoneArrowUpRightIcon,
		title: 'Phone Arrow Up Right',
	},
	'solid/phone-x-mark': {
		component: HeroiconsSolid.PhoneXMarkIcon,
		title: 'Phone X Mark',
	},
	'solid/phone': {
		component: HeroiconsSolid.PhoneIcon,
		title: 'Phone',
	},
	'solid/photo': {
		component: HeroiconsSolid.PhotoIcon,
		title: 'Photo',
	},
	'solid/play-circle': {
		component: HeroiconsSolid.PlayCircleIcon,
		title: 'Play Circle',
	},
	'solid/play-pause': {
		component: HeroiconsSolid.PlayPauseIcon,
		title: 'Play Pause',
	},
	'solid/play': {
		component: HeroiconsSolid.PlayIcon,
		title: 'Play',
	},
	'solid/plus-circle': {
		component: HeroiconsSolid.PlusCircleIcon,
		title: 'Plus Circle',
	},
	'solid/plus': {
		component: HeroiconsSolid.PlusIcon,
		title: 'Plus',
	},
	'solid/power': {
		component: HeroiconsSolid.PowerIcon,
		title: 'Power',
	},
	'solid/presentation-chart-bar': {
		component: HeroiconsSolid.PresentationChartBarIcon,
		title: 'Presentation Chart Bar',
	},
	'solid/presentation-chart-line': {
		component: HeroiconsSolid.PresentationChartLineIcon,
		title: 'Presentation Chart Line',
	},
	'solid/printer': {
		component: HeroiconsSolid.PrinterIcon,
		title: 'Printer',
	},
	'solid/puzzle-piece': {
		component: HeroiconsSolid.PuzzlePieceIcon,
		title: 'Puzzle Piece',
	},
	'solid/qr-code': {
		component: HeroiconsSolid.QrCodeIcon,
		title: 'Qrcode',
	},
	'solid/question-mark-circle': {
		component: HeroiconsSolid.QuestionMarkCircleIcon,
		title: 'Question Mark Circle',
	},
	'solid/queue-list': {
		component: HeroiconsSolid.QueueListIcon,
		title: 'Queue List',
	},
	'solid/radio': {
		component: HeroiconsSolid.RadioIcon,
		title: 'Radio',
	},
	'solid/receipt-percent': {
		component: HeroiconsSolid.ReceiptPercentIcon,
		title: 'Receipt Percent',
	},
	'solid/receipt-refund': {
		component: HeroiconsSolid.ReceiptRefundIcon,
		title: 'Receipt Refund',
	},
	'solid/rectangle-group': {
		component: HeroiconsSolid.RectangleGroupIcon,
		title: 'Rectangle Group',
	},
	'solid/rectangle-stack': {
		component: HeroiconsSolid.RectangleStackIcon,
		title: 'Rectangle Stack',
	},
	'solid/rocket-launch': {
		component: HeroiconsSolid.RocketLaunchIcon,
		title: 'Rocket Launch',
	},
	'solid/rss': {
		component: HeroiconsSolid.RssIcon,
		title: 'Rss',
	},
	'solid/scale': {
		component: HeroiconsSolid.ScaleIcon,
		title: 'Scale',
	},
	'solid/scissors': {
		component: HeroiconsSolid.ScissorsIcon,
		title: 'Scissors',
	},
	'solid/server-stack': {
		component: HeroiconsSolid.ServerStackIcon,
		title: 'Server Stack',
	},
	'solid/server': {
		component: HeroiconsSolid.ServerIcon,
		title: 'Server',
	},
	'solid/share': {
		component: HeroiconsSolid.ShareIcon,
		title: 'Share',
	},
	'solid/shield-check': {
		component: HeroiconsSolid.ShieldCheckIcon,
		title: 'Shield Check',
	},
	'solid/shield-exclamation': {
		component: HeroiconsSolid.ShieldExclamationIcon,
		title: 'Shield Exclamation',
	},
	'solid/shopping-bag': {
		component: HeroiconsSolid.ShoppingBagIcon,
		title: 'Shopping Bag',
	},
	'solid/shopping-cart': {
		component: HeroiconsSolid.ShoppingCartIcon,
		title: 'Shopping Cart',
	},
	'solid/signal-slash': {
		component: HeroiconsSolid.SignalSlashIcon,
		title: 'Signal Slash',
	},
	'solid/signal': {
		component: HeroiconsSolid.SignalIcon,
		title: 'Signal',
	},
	'solid/sparkles': {
		component: HeroiconsSolid.SparklesIcon,
		title: 'Sparkles',
	},
	'solid/speaker-wave': {
		component: HeroiconsSolid.SpeakerWaveIcon,
		title: 'Speaker Wave',
	},
	'solid/speaker-x-mark': {
		component: HeroiconsSolid.SpeakerXMarkIcon,
		title: 'Speaker X Mark',
	},
	'solid/square-2-stack': {
		component: HeroiconsSolid.Square2StackIcon,
		title: 'Square 2 Stack',
	},
	'solid/square-3-stack-3d': {
		component: HeroiconsSolid.Square3Stack3DIcon,
		title: 'Square 3 Stack 3d',
	},
	'solid/squares-2x2': {
		component: HeroiconsSolid.Squares2X2Icon,
		title: 'Squares 2x2',
	},
	'solid/squares-plus': {
		component: HeroiconsSolid.SquaresPlusIcon,
		title: 'Squares Plus',
	},
	'solid/star': {
		component: HeroiconsSolid.StarIcon,
		title: 'Star',
	},
	'solid/stop-circle': {
		component: HeroiconsSolid.StopCircleIcon,
		title: 'Stop Circle',
	},
	'solid/stop': {
		component: HeroiconsSolid.StopIcon,
		title: 'Stop',
	},
	'solid/sun': {
		component: HeroiconsSolid.SunIcon,
		title: 'Sun',
	},
	'solid/swatch': {
		component: HeroiconsSolid.SwatchIcon,
		title: 'Swatch',
	},
	'solid/table-cells': {
		component: HeroiconsSolid.TableCellsIcon,
		title: 'Table Cells',
	},
	'solid/tag': {
		component: HeroiconsSolid.TagIcon,
		title: 'Tag',
	},
	'solid/ticket': {
		component: HeroiconsSolid.TicketIcon,
		title: 'Ticket',
	},
	'solid/trash': {
		component: HeroiconsSolid.TrashIcon,
		title: 'Trash',
	},
	'solid/trophy': {
		component: HeroiconsSolid.TrophyIcon,
		title: 'Trophy',
	},
	'solid/truck': {
		component: HeroiconsSolid.TruckIcon,
		title: 'Truck',
	},
	'solid/tv': {
		component: HeroiconsSolid.TvIcon,
		title: 'Tv',
	},
	'solid/user-circle': {
		component: HeroiconsSolid.UserCircleIcon,
		title: 'User Circle',
	},
	'solid/user-group': {
		component: HeroiconsSolid.UserGroupIcon,
		title: 'User Group',
	},
	'solid/user-minus': {
		component: HeroiconsSolid.UserMinusIcon,
		title: 'User Minus',
	},
	'solid/user-plus': {
		component: HeroiconsSolid.UserPlusIcon,
		title: 'User Plus',
	},
	'solid/user': {
		component: HeroiconsSolid.UserIcon,
		title: 'User',
	},
	'solid/users': {
		component: HeroiconsSolid.UsersIcon,
		title: 'Users',
	},
	'solid/variable': {
		component: HeroiconsSolid.VariableIcon,
		title: 'Variable',
	},
	'solid/video-camera': {
		component: HeroiconsSolid.VideoCameraIcon,
		title: 'Video Camera',
	},
	'solid/view-columns': {
		component: HeroiconsSolid.ViewColumnsIcon,
		title: 'View Columns',
	},
	'solid/viewfinder-circle': {
		component: HeroiconsSolid.ViewfinderCircleIcon,
		title: 'Viewfinder Circle',
	},
	'solid/wallet': {
		component: HeroiconsSolid.WalletIcon,
		title: 'Wallet',
	},
	'solid/wifi': {
		component: HeroiconsSolid.WifiIcon,
		title: 'Wifi',
	},
	'solid/window': {
		component: HeroiconsSolid.WindowIcon,
		title: 'Window',
	},
	'solid/wrench-screwdriver': {
		component: HeroiconsSolid.WrenchScrewdriverIcon,
		title: 'Wrench Screwdriver',
	},
	'solid/x-circle': {
		component: HeroiconsSolid.XCircleIcon,
		title: 'X Circle',
	},
	'solid/x-mark': {
		component: HeroiconsSolid.XMarkIcon,
		title: 'X Mark',
	},
};

export type IconSolid = keyof typeof solidIconMap;

export const spinnerIconMap: IconMap = {
	'spinner/spinner-180-ring': {
		component: Spinner180Ring,
		title: 'Spinner 180 Ring',
	},
	'spinner/spinner-12-dot-scale-rotate': {
		component: Spinner12DotsScaleRotate,
		title: 'Spinner 12 Dot Scale Rotate',
	},
	'spinner/spinner-3-dots-fade': {
		component: Spinner3DotsFade,
		title: 'Spinner 3 Dots Fade',
	},
};

export type IconSpinners = keyof typeof spinnerIconMap;

export const iconMap = {
	...outlineIconMap,
	...solidIconMap,
	...spinnerIconMap,
} as const;

export type OutlineIconKey = keyof typeof outlineIconMap;
export type SolidIconKey = keyof typeof solidIconMap;
export type CustomIconKey = keyof typeof spinnerIconMap;
export type IconKey = OutlineIconKey | SolidIconKey | CustomIconKey;

export const outlineIconKeys = Object.keys(
	outlineIconMap
) as ReadonlyArray<OutlineIconKey>;
export const solidIconKeys = Object.keys(
	solidIconMap
) as ReadonlyArray<SolidIconKey>;
export const spinnerIconKeys = Object.keys(
	spinnerIconMap
) as ReadonlyArray<CustomIconKey>;

export const iconKeys = Object.keys(iconMap) as ReadonlyArray<IconKey>;
