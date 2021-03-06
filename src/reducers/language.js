const initialState = {
  en: {
    locale: 'en-US',
    messages: {
      // Header
      vmLocale: 'VPS',
      vmHostLocale: 'VPS-Host',
      hostingLocale: 'Hosting',
      supportLocale: 'Support',
      fileManagerLocale: 'File Cloud',
      accountLocale: 'Account',
      invoiceLocale: 'Invoices',
      giftWalletLocale: 'Gift Wallet',
      walletLocale: 'Wallet',
      signoutLocale: 'Logout',
      // Search
      serverSearchLocale: 'Search server',
      allServersLocale: 'All servers',
      // Modal
      yesLocale: 'Yes',
      noLocale: 'No',
      // VMBillsPage
      titleLocale: 'PersianGig - VPS',
      deleteLocale: 'Server will be deleted',
      poweroffMsgLocale: 'Server will be powered Off',
      activateLocale: 'Activate',
      serverLocale: 'Server',
      idleMiddleLocale: ' after powering off',
      idleEndLocale: 'will be idled',
      areYouSureLocale: 'Are you sure',
      idleAlertLocale: 'Note that server cannot be activated until next 24 hours.',
      idleIsActivatedLocale: 'Idle is activated for daily services. By clicking idle button, server will be first powered off and then idled and can be activated after 24 hours',
      activeEndLocale: 'will be activated',
      poweronMsgLocale: 'Server will be powered on',
      buyServerLocale: 'Buy server',
      serverNotFoundLocale: 'Server not found',
      serverNotDefinedLocale: 'Server not defined',
      loadingLocale: 'Loading',
      noteLocale: 'Note',
      // Remote
      vncTitleLocale: 'Connect to VPS via VNC',
      vncNoteLocale: 'For security reasons, connection address with this protocol is reset after anytime the computer is reconfigured and will be always in access via this part',
      passwordEmailedLocale: 'Password is sent to your email',
      vncRequestLocale: 'VNC Connection request',
      serverIdleLocale: 'Server is idled',
      sshServerLocale: 'Connection to server via SSH',
      serverConnectionLocale: 'Connection to server via',
      teamViewerLocale: 'Team Viewer Software',
      remoteLocale: 'Remote Connection',
      remote1Locale: 'Go to start menu and type Remote and open the program "Remote Desktop Connection"',
      remote2Locale: 'Click "Options" in the left corner',
      ipAddressLocale: 'IP Address',
      remote4Locale: 'and your username',
      remote5Locale: 'fill and click "Enter" button',
      remote6Locale: 'in the next window for viewing your VPS Desktop, enter your password which is sent to your email',
      remote7Locale: 'After connection, Team Viewer Software is run and connection information is given to you via this software',
      remote8Locale: 'Now open the Team Viewer software on your computer and click connection button',
      // Buttons
      deleteServerLocale: 'Delete Server',
      showInvoiceLocale: 'Show Invoice',
      renewInvoiceLocale: 'Renew Invoice',
      expiredInDateLocale: 'Expired in',
      createServerLocale: 'Create Server',
      recreateServerLocale: 'Recreate Server',
      idleLocale: 'Idle',
      activateInLocale: 'Activated in',
      remaindHoursLocale: 'hours',
      poweroffLocale: 'Shut down',
      poweronLocale: 'Power On',
      serverHasProblemLocale: 'Server has problem',
      turnOffLocale: 'Power off',
      chartLocale: 'Chart',
      settingsLocale: 'Settings',
      remoteConnectionLocale: 'Remote',
      rialLocale: 'IRR',
      // Settings
      serverNotCreatedLocale: 'Server is not created',
      serverIsOnLocale: 'Server is ON',
      networksLocale: 'Networks',
      activeNetCardsLocale: 'Active Network Cards',
      networkNameLocale: 'Network Name',
      ipCountLocale: 'IP Count',
      // Support
      nameLocale: 'Name',
      emailLocale: 'Email',
      phoneLocale: 'Phone',
      skypeLocale: 'Skype',
      telegramLocale: 'I have telegram',
      noTelegramLocale: 'I don\'t have telegram',
      subjectLocale: 'Subject',
      messageLocale: 'Message',
      sendLocale: 'Send',
      // CustomizeStep
      // customizeLocale: 'Step 3 - Select customize settings',
      planLocale: 'Plan',
      cpuLocale: 'Process',
      memoryLocale: 'Memory',
      selectPlanLocale: 'Select plan',
      cancelLocale: 'Cancel',
      nextLocale: 'Next',
      previousLocale: 'Previous',
      // Step
      oneLocale: '1',
      firstStepLocale: 'Step 1',
      selectOsLocale: 'Select Operating System',
      twoLocale: '2',
      secondStepLocale: 'Step 2',
      selectServiceDurationLocale: 'Select service period time',
      threeLocale: '3',
      thirdStepLocale: 'Step 3',
      selectCustomizeSettingsLocale: 'Select customize settings',
      selectPlanOrCustomizeLocale: 'Select plan or customize settings',
      fourLocale: '4',
      forthStepLocale: 'Step 4',
      networkCardInfoLocale: 'Network card information',
      fiveLocale: '5',
      fifthStepLocale: 'Step 5',
      finalSubmitLocale: 'Select server name and final submit',
      // Discount
      discountLocale: 'Discount',
      percentDoneLocale: 'percent applied successfully',
      discountCodeLocale: 'Discount code',
      applyDiscountCodeLocale: 'Apply discount code',
      // FinalStep
      serverNameErrorLocale: 'Server name should start with an english letter and contain only english letters, numbers and hyphen',
      servernameLocale: 'Server Name',
      exportInvoiceLocale: 'Create invoice',
      // HelpHeader
      dailyInvoiceHelpLocale: 'After buying a daily plan, your server will be renewed everyday. If you want to stop it, you can delete your server',
      //InfoFooter
      dayLocale: 'Daily',
      monthLocale: 'Monthly',
      tmonthLocale: 'Three Months',
      smonthLocale: 'Six Months',
      yearLocale: 'Yearly',
      osLocale: 'Operating System',
      ramLocale: 'Ram',
      diskLocale: 'Disk',
      processorLocale: 'Processor',
      serviceDurationLocale: 'Service',
      // InvoiceFooter
      siteDiscountLocale: 'Site discount',
      discountByDiscountCodeLocale: 'Discount by discountCode',
      servicePriceLocale: 'Service price',
      refundPriceLocale: 'Refund price',
      calculatedPriceLocale: 'Price',
      // NetworkStep
      addNetworkCardLocale: 'Add Network Card',
      createPrivateNetworkLocale: 'Create private network',
      // OsStep
      osIsNeededLocale: 'OS is not selected',
      // PlanStep
      planIsNeededLocale: 'Plan is not selected',
      trafficLocale: 'Traffic',
      unlimitedLocale: 'Unlimited',
      priceLocale: 'Price',
      // ServiceStep
      serviceLocale: 'Service',
      // Upgrade
      cancelUpgradeLocale: 'Cancel upgrade',
      applyUpgradeLocale: 'Apply upgrade',
      upgradeSettingsLocale: 'Upgrade settings',

      selectUpgradeSettingsLocale: 'Select upgrade settings',

      serverNameNotValidLocale: 'Server name is not valid',

      deleteServerAlert1Locale: 'Note that by deleting the server, your information will be erased',
      deleteServerAlert2Locale: 'Before deleting, server should be turned off',

      serverErrorLocale: 'A server error occurred',
      serverErrorDescriptionLocale: 'A server error occurred. You can refresh the page or try again in some minutes',

      // Upgrade Locales
      currencyLabelLocale: 'Rials',
      upgradeLoadingLocale: 'Upgrading...',
      negativeTotalPriceLocale: 'Total Price can not be negative'
    }
  },
  fa: {
    locale: 'fa-IR',
    messages: {
      // Header
      vmLocale: 'سرور مجازی',
      vmHostLocale: 'وی پی اس هاست',
      hostingLocale: 'وب هاستینگ',
      supportLocale: 'پشتیبانی',
      fileManagerLocale: 'میزبانی فایل',
      accountLocale: 'حساب کاربری',
      invoiceLocale: 'صورتحساب ها',
      giftWalletLocale: 'کیف پول هدیه',
      walletLocale: 'کیف پول',
      signoutLocale: 'خروج',
      // Search
      serverSearchLocale: 'جستجوی سرور',
      allServersLocale: 'همه سرورها',
      // Modal
      yesLocale: 'بله',
      noLocale: 'خیر',
      // VMBillsPage
      titleLocale: 'پرشین گیگ - سرور مجازی',
      deleteLocale: 'سرور حذف می شود',
      poweroffMsgLocale: 'سرور خاموش می شود',
      activateLocale: 'فعال سازی',
      serverLocale: 'سرور',
      idleMiddleLocale: 'خاموش و سپس ',
      idleEndLocale: 'تعلیق می شود',
      areYouSureLocale: 'آیا مطمئن هستید؟',
      idleAlertLocale: 'توجه داشته باشید تا ۲۴ ساعت سرور قابل فعال سازی نیست.',
      idleIsActivatedLocale: 'امکان تعلیق برای سرویس های روزانه فعال شده است. با زدن دکمه تعلیق سرور خاموش و سپس تعلیق می شود و  پس از ۲۴ ساعت قابل فعال سازی است',
      activeEndLocale: 'فعال می شود',
      poweronMsgLocale: 'سرور روشن می شود',
      buyServerLocale: 'خرید سرور',
      serverNotFoundLocale: 'سرور مجازی یافت نشد',
      serverNotDefinedLocale: 'سرور مجازی تعریف نشده است',
      loadingLocale: 'کمی صبر کنید...',
      noteLocale: 'توجه',
      // Remote
      vncTitleLocale: 'اتصال به کنسول سرور مجازی از طریق VNC',
      vncNoteLocale: 'ئل امنیتی، آدرس اتصال با این پروتوکل پس از هربار روشن شدن این کامپیوتر مجددا تنظیم می گردد و همواره از طریق این بخش قابل دسترس خواهد بود.',
      passwordEmailedLocale: 'رمز عبور به ایمیل شما فرستاده شده است.',
      vncRequestLocale: 'VNC درخواست تنضیمات اتصال',
      serverIdleLocale: 'سرور تعلیق شده است.',
      sshServerLocale: 'اتصال به سرور از طریق SSH',
      serverConnectionLocale: 'نحوه‌ی اتصال به سرور مجازی از طریق',
      teamViewerLocale: 'نرم‌افزار Team Viewer',
      remoteLocale: 'اتصال  Remote',
      remote1Locale: 'به منوی استارت رفته و عبارت remote را تایپ کنید و برنامه Remote Desktop Connection را باز کنید.',
      remote2Locale: 'در گوشه سمت چپ گزینه‌ی Options را کلیک کنید.',
      ipAddressLocale: 'آدرس آی پی',
      remote4Locale: 'و نام کاربری خود',
      remote5Locale: 'را وارد کنید و کلید enter را بزنید.',
      remote6Locale: 'در پنجره بعدی رمز عبور خود را که به ایمیل شما ارسال شده است، وارد کنید تا وارد میز کار سرور مجازی خود شوید.',
      remote7Locale: 'به محض اتصال نرم‌افزار Team Viewer اجرا خواهد شد و اطلاعات اتصال از طریق این نرام‌افزار را به شما خواهد‌داد.',
      remote8Locale: 'حال نرم‌افزار Team viewer را روی سیستم خود باز کنید و اطلاعات اتصال را در آن وارد کرده و کلید اتصال را بزنید.',
      // Buttons
      deleteServerLocale: 'حذف سرور',
      showInvoiceLocale: 'مشاهده صورتحساب',
      renewInvoiceLocale: 'تمدید صورتحساب',
      expiredInDateLocale: 'منقضی شده در تاریخ',
      createServerLocale: 'ایجاد سرور',
      recreateServerLocale: 'ایجاد مجدد سرور',
      idleLocale: 'تعلیق',
      activateInLocale: 'فعال سازی',
      remaindHoursLocale: 'ساعت دیگر',
      poweroffLocale: 'خاموش کن',
      poweronLocale: 'روشن کن',
      serverHasProblemLocale: 'سرور دچار مشکل شده است',
      turnOffLocale: 'از برق بکش',
      chartLocale: 'نمودار',
      settingsLocale: 'تنظیمات',
      remoteConnectionLocale: 'اتصال از دور',
      rialLocale: 'ریال',
      // Settings
      serverNotCreatedLocale: 'سرور ایجاد نشده است',
      serverIsOnLocale: 'سرور روشن است',
      networksLocale: 'شبکه ها',
      activeNetCardsLocale: 'کارت های شبکه فعال',
      networkNameLocale: 'نام شبکه',
      ipCountLocale: 'تعداد IP ها',
      // Support
      nameLocale: 'نام',
      emailLocale: 'ایمیل',
      phoneLocale: 'تلفن',
      skypeLocale: 'اسکایپ',
      telegramLocale: 'تلگرام دارم',
      noTelegramLocale: 'تلگرام ندارم',
      subjectLocale: 'عنوان',
      messageLocale: 'پیام',
      sendLocale: 'ارسال',
      // CustomizeStep
      // customizeLocale: 'مرحله ۳ - انتخاب تنظیمات سفارشی',
      planLocale: 'طرح',
      cpuLocale: 'پردازنده',
      memoryLocale: 'حافظه',
      selectPlanLocale: '       انتخاب طرح       ',
      cancelLocale: 'انصراف',
      nextLocale: 'بعدی',
      previousLocale: 'قبلی',
      // Step
      oneLocale: '۱',
      firstStepLocale: 'مرحله ۱',
      selectOsLocale: 'انتخاب سیستم عامل',
      twoLocale: '۲',
      secondStepLocale: 'مرحله ۲',
      selectServiceDurationLocale: 'انتخاب مدت سرویس',
      threeLocale: '۳',
      thirdStepLocale: 'مرحله ۳',
      selectCustomizeSettingsLocale: 'انتخاب تنظیمات سفارشی',
      selectPlanOrCustomizeLocale: 'انتخاب طرح یا سفارشی',
      fourLocale: '۴',
      forthStepLocale: 'مرحله ۴',
      networkCardInfoLocale: 'اطلاعات کارت شبکه',
      fiveLocale: '۵',
      fifthStepLocale: 'مرحله ۵',
      finalSubmitLocale: 'انتخاب نام سرور و ثبت نهایی',
      // Discount
      discountLocale: 'تخفیف',
      percentDoneLocale: 'درصد با موفقیت اعمال شد',
      discountCodeLocale: 'کد تخفیف',
      applyDiscountCodeLocale: 'اعمال کد تخفیف',
      // FinalStep
      serverNameErrorLocale: 'نام سرور با یک حرف انگلیسی شروع شود و تنها شامل حرف، عدد و خط تیره باشد.',
      servernameLocale: 'نام سرور',
      exportInvoiceLocale: 'صدور صورتحساب',
      // HelpHeader
      dailyInvoiceHelpLocale: 'با خرید پلن روزانه، سرور شما هر روز به صورت خودکار تمدید می شود. هر گاه از تمدید منصرف شدید، می توانید سرور را حذف نمایید.',
      //InfoFooter
      dayLocale: 'روزانه',
      monthLocale: 'ماهانه',
      tmonthLocale: 'سه ماهه',
      smonthLocale: 'شش ماهه',
      yearLocale: 'سالانه',
      osLocale: 'سیستم عامل',
      ramLocale: 'حافظه',
      diskLocale: 'فضای دیسک',
      processorLocale: 'پردازنده',
      serviceDurationLocale: 'مدت سرویس',
      // InvoiceFooter
      siteDiscountLocale: 'تخفیف سایت',
      discountByDiscountCodeLocale: 'تخفیف کد تخفیف',
      servicePriceLocale: 'هزینه سرویس',
      refundPriceLocale: 'هزینه استرداد',
      calculatedPriceLocale: 'کل هزینه',
      // NetworkStep
      addNetworkCardLocale: 'افزودن کارت شبکه',
      createPrivateNetworkLocale: 'ایجاد شبکه خصوصی',
      // OsStep
      osIsNeededLocale: 'سیستم عامل انتخاب نشده است',
      // ServiceStep
      serviceLocale: 'سرویس',
      // PlanStep
      planIsNeededLocale: 'طرح انتخاب نشده است',
      trafficLocale: 'ترافیک',
      unlimitedLocale: 'نامحدود',
      priceLocale: 'قیمت',
      // Upgrade
      cancelUpgradeLocale: 'انصراف از ارتقا',
      applyUpgradeLocale: 'اعمال ارتقا',
      upgradeSettingsLocale: 'تنظیمات ارتقا',

      selectUpgradeSettingsLocale: 'انتخاب تنظیمات ارتقا',

      serverNameNotValidLocale: 'سرور مجازی با این نام تعریف نشده است',

      deleteServerAlert1Locale: 'توجه داشته باشید با حذف سرور اطلاعات شما پاک می شود',
      deleteServerAlert2Locale: 'پیش از حذف باید سرور خاموش شود',

      serverErrorLocale: 'خطایی از سمت سرور رخ داده است',
      serverErrorDescriptionLocale: 'با عرض پوزش خطایی از سمت سرور رخ داده است.  لطفا در چند دقیقه دیگر دوباره تلاش کنید',

      // Upgrade Locales
      currencyLabelLocale: 'ریال',
      upgradeLoadingLocale: 'درحال ارتقا',
      negativeTotalPriceLocale: 'کل هزینه نباید منفی باشید'
    }
  }
}
export default function language(state = initialState, action) {
  return state
}
