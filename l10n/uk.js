OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "Група \"%1$s\" використовується в програмі Auto Groups і не може бути видалена.",
    "Auto Groups" : "Автоматичні групи",
    "Automatically adds all users to one or multiple specified groups." : "Автоматично додає всіх користувачів до однієї або кількох указаних груп.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Settings > Administration > Additional settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Автоматично додавати користувачів до вказаних автоматичних груп, за винятком тих користувачів, які належать до однієї з указаних груп заміни. За бажанням, призначення групи може бути викликано після кожного успішного входу, що корисно для зовнішніх серверних програм користувачів. \n\n## Конфігурація \n- Перейти в «Налаштування > Адміністрування > Додаткові налаштування» \n- Налаштувати автоматичні групи \n- Якщо потрібно, налаштуйте групи заміни (наприклад, для облікових записів служби) \n- За бажанням увімкніть функцію входу в систему, яка забезпечуватиме правильне членство в групі після кожного успішного входу \n\nЗауважте, що ця програма запобігає видаленню груп, які називаються автоматичними групами або групами заміни. \n\n## Порівняння з подібними програмами \n* [Група для всіх](https://apps.nextcloud.com/apps/group_everyone): програма «Група для всіх» додає віртуальну групову серверну частину, яка завжди повертає всіх користувачів. На відміну від цього, «Автоматичні групи» працюють із «справжніми» групами у вашій звичайній системі обробки груп. Крім того, можна вказати групи перевизначення, які запобігатимуть додаванню користувачів до автоматичної групи (груп). \n* [Група за замовчуванням](https://apps.nextcloud.com/apps/defaultgroup): «Автоматичні групи» насправді є модернізованим і підтримуваним форком «Групи за замовчуванням», який, здається, було залишено з NC12 чи близько того. За функціональністю вони практично ідентичні. \n\nКрім того, я планую з часом додати ще деякі функції, наприклад, «Union Groups» — див. [Плани етапу](https://github.com/stjosh/auto_groups/milestones), щоб дізнатися більше.",
    "Automatically add all users to these groups." : "Автоматично додавати користувачів до цих груп.",
    "Override Groups:" : "Не застосовувати до груп:",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Користувачі, які є учасниками хоча б однієї з цих груп, видаляються з автоматичних груп. Це також стосується випадків, коли користувача додають до однієї з цих груп після створення, тобто участь у групах заміни перевіряється після кожної зміни групи.",
    "Set Auto Group membership on user creation." : "Установіть автоматичне членство в групі під час створення користувача.",
    "If checked, Auto Group membership will be enforced on user creation." : "Якщо позначено, автоматичне членство в групі застосовуватиметься після створення користувача.",
    "Check for correct Auto Group membership on every login." : "Щоразу під час входу перевіряти на правильність участи у автоматичних групах.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Увімкніть цей параметр, щоб забезпечити належне членство в автоматичній групі після кожного успішного входу. Це корисно, якщо користувачі не створені в Nextcloud (наприклад, із зовнішніми серверами користувачів) або для забезпечення правильного членства в групах для всіх користувачів, коли змінилися автоматичні групи / групи заміни."
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
