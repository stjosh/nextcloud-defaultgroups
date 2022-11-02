OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "\"%1$s\" grubu Otomatik Gruplar uygulamasında kullanıldığından silinemedi.",
    "Auto Groups" : "Otomatik gruplar",
    "Automatically adds all users to one or multiple specified groups." : "Tüm kullanıcıları otomatik olarak bir ya da bir kaç belirli gruba ekler.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Settings > Administration > Additional settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Belirtilmiş \"Ayrıcalıklı gruplar\" dışında bulunan kullanıcıları otomatik olarak \"Otomatik gruplar\" içine ekler. \nİsteğe bağlı olarak, grup ataması her başarılı oturum açma girişiminden sonra denetlenir. Bu özellik dış kullanıcı yönetimi uygulamaları için kullanışlıdır.\n\n## Yapılandırma\n\n- \"Ayarlar > Yönetim > Ek ayarlar\" bölümüne gidin\n- Otomatik grupları yapılandırın\n- Gerekiyorsa, Ayrıcalıklı grupları yapılandırın (hizmet hesapları gibi)\n- İsteğe bağlı olarak, her başarılı oturum açma girişiminde grup üyeliği atamalarını yapacak seçeneği ayarlayın\n\nBu uygulamanın Otomatik ya da Ayrıcalıklı olarak belirtilmiş grupların silinmesini engelleyeceğini unutmayın.\n\n## Benzer Uygulamalar ile Karşılaştırma\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): \"Everyone Group\" uygulaması, herzaman tüm kullanıcıları döndüren bir sanal grup yönetim bölümü ekler. \"Everyone Group\" uygulamasına göre \"Otomatik gruplar\" uygulaması, normal grup yönetim bölümünde \"gerçek\" gruplar ile çalışır. Ek olarak, \"Ayrıcalıklı gruplar\" kullanılarak kullanıcıların \"Otomatik gruplar\" içine eklenmesi engellenebilir.\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Otomatik gruplar\" uygulaması, Nextcloud 12 sonrası geliştirilmesi durdurulmuş gibi görünen \"Default Group\" uygulamasının geliştirilmekte olan bir dalıdır ve özellikleri hemen hemen aynıdır. \n\nZaman içinde bazı \"Birleşik gruplar\" gibi bazı özellikler daha eklenecektir. Ayrıntılı bilgi almak için [Geliştirme planları](https://github.com/stjosh/auto_groups/milestones) bölümüne bakabilirsiniz.",
    "Automatically add all users to these groups." : "Tüm kullanıcılar otomatik olarak bu gruplara eklenir.",
    "Override Groups:" : "Ayrıcalıklı gruplar:",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Bu gruplardan en az birine üye olan kullanıcılar otomatik gruplardan çıkarılır. Bu uygulama, kullanıcının oluşturulmasından sonra bu gruplardan birine eklenmesi durumunda da geçerlidir. Ayrıcalıklı gruplar içindeki üyelikler her grup değişikliğinden sonra denetlenir.",
    "Set Auto Group membership on user creation." : "Kullanıcı eklenirken otomatik grup üyeliği ayarlansın.",
    "If checked, Auto Group membership will be enforced on user creation." : "Bu seçenek işaretlendiğinde, kullanıcı eklenirken otomatik grup üyeliği yeniden uygulanır.",
    "Check for correct Auto Group membership on every login." : "Her oturum açıldığında doğru Otomatik Grup üyeliği denetlensin.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Bu seçenek etkinleştirildiğinde, kullanıcılar her başarılı oturum açma işleminden sonra doğru Otomatik Grup üyeliğine geçirilir. Bu özellik, kullanıcılar Nextcloud üzerinde oluşturulmamış ise (dış kullanıcı yönetimi arayüzleri gibi) ya da Otomatik Gruplar / Ayrıcalıklı Gruplar değiştirilmiş ise tüm kullanıcıların doğru grup üyeliğine geçirilmesi için kullanışlıdır."
},
"nplurals=2; plural=(n > 1);");
