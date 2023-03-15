OC.L10N.register(
    "auto_groups",
    {
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Settings > Administration > Additional settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Menambahkan pengguna secara otomatis ke Grup Otomatis yang ditentukan, kecuali pengguna yang termasuk dalam salah satu Grup Pengganti yang ditentukan.\nOpsional, penetapan grup dapat dipicu pada setiap login yang berhasil, yang berguna untuk backend pengguna eksternal.\n\n## Konfigurasi\n\n- Buka \"Setelan > Administrasi > Setelan tambahan\"\n- Konfigurasi Grup Otomatis\n- Jika diperlukan, konfigurasikan Grup Pengganti (mis., untuk Akun Layanan)\n- Secara opsional, aktifkan Login Hook, yang akan menerapkan keanggotaan grup yang benar pada setiap login yang berhasil\n\nPerhatikan bahwa aplikasi ini mencegah penghapusan grup untuk grup yang direferensikan sebagai Grup Otomatis atau Grup Timpa.\n\n## Perbandingan dengan Aplikasi serupa\n\n* [Grup Semua Orang](https://apps.nextcloud.com/apps/group_everyone): Aplikasi \"Grup Semua Orang\" menambahkan Backend Grup virtual, selalu mengembalikan semua pengguna. Sebaliknya, \"Grup Otomatis\" beroperasi pada grup \"nyata\" di Backend Grup normal Anda. Selain itu, dimungkinkan untuk menentukan Override Groups yang akan mencegah pengguna ditambahkan ke Auto Groups.\n* [Grup Default](https://apps.nextcloud.com/apps/defaultgroup): \"Grup Otomatis\" sebenarnya adalah garpu \"Grup Default\" yang dimodernisasi dan dipelihara, yang tampaknya ditinggalkan sejak NC12 atau lebih. Dari segi fungsionalitas, keduanya hampir identik.\n\nSelain itu, saya berencana untuk menambahkan beberapa fitur lainnya dari waktu ke waktu, misalnya, \"Grup Serikat\" - lihat [Rencana Pencapaian](https://github.com/stjosh/auto_groups/milestones) untuk detail lebih lanjut."
},
"nplurals=1; plural=0;");
