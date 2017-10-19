---
layout: page
title: "Q308646: SMS: Screen-Redraw Issues Advertising Programs with Custom Icons"
permalink: /kb/308/Q308646/
---

## Q308646: SMS: Screen-Redraw Issues Advertising Programs with Custom Icons

	Article: Q308646
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Systems Management Server (SMS) client software, you
	may experience one or more display-related symptoms. For example, the screen may
	appear to be jittery, drop-down list boxes may not appear, you may see
	screen-redraw issues, and so on. If you configure Windows Task Manager to
	display the "GDI objects" column, you may see an increasing number of GDI
	objects that are allocated for the Smsmon32.exe process.
	
	CAUSE
	=====
	
	This problem can occur if an SMS package that contains a program that is set to
	use a custom icon is advertised. This condition can cause Smsmon32.exe to
	allocate GDI objects that are never freed, and this can cause various
	screen-redraw issues to occur. The number of allocated GDI objects increases
	each time the SMS client looks for new advertisements from its Client Access
	Point (CAP).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English post-SP3 version of this fix should have the following file
	attributes or later:
	
	Date         Time   Version        Size       File name            Platform
	---------------------------------------------------------------------------
	01-Mar-2001  18:30  2.0.92.9         395,032  Apasetup.exe         Intel
	01-Mar-2001  06:00  2.0.1493.3125    259,936  Bindclin.dll         Intel
	01-Mar-2001  17:15  2.0.1493.3251    182,096  Ccim32.dll           Intel
	01-Mar-2001  17:30  2.0.92.9       1,324,075  Ccmcore.exe          Intel
	01-Mar-2001  17:15  2.0.1493.3251  3,402,213  Clicore.exe          Intel
	01-Mar-2001  17:10  2.0.1493.3238     88,432  Clisvcl.exe          Intel
	09-May-2002  19:46                        67  Compverbase.ini
	09-May-2002  19:46                        67  Compversmsapm32.ini
	09-May-2002  19:46                        67  Compverswdist.ini
	01-Mar-2001  15:20  2.0.1493.3216     39,264  Cqmgr32.dll          Intel
	01-Mar-2001  06:00  2.0.1493.3125    338,272  Mslmclin.dll         Intel
	01-Mar-2001  06:00  2.0.1493.3125    269,664  Ndsclin.dll          Intel
	01-Mar-2001  17:00  2.0.1493.3236     54,128  Odpsys32.exe         Intel
	01-Mar-2001  17:00  2.0.1493.3236     60,272  Odpusr32.exe         Intel
	01-Mar-2001  18:30  2.0.1493.3254    291,696  Smsapm32.exe         Intel
	01-Mar-2001  19:05  2.0.1493.3261    118,208  Smsmon32.exe         Intel
	01-Mar-2001  19:05  2.0.92.9         639,658  Swdist32.exe         Intel
	01-Mar-2001  18:30  2.0.92.9         655,463  Apasetup.exe         Alpha
	01-Mar-2001  17:15  2.0.1493.3251    293,648  Ccim32.dll           Alpha
	01-Mar-2001  17:30  2.0.92.9       1,925,229  Ccmcore.exe          Alpha
	01-Mar-2001  17:15  2.0.1493.3251  4,442,606  Clicore.exe          Alpha
	01-Mar-2001  17:10  2.0.1493.3238    125,712  Clisvcl.exe          Alpha
	09-May-2002  19:46                        67  Compverbase.ini
	09-May-2002  19:46                        67  Compversmsapm32.ini
	09-May-2002  19:46                        67  Compverswdist.ini
	01-Mar-2001  15:20  2.0.1493.3216     66,832  Cqmgr32.dll          Alpha
	01-Mar-2001  06:00  2.0.1493.3125    578,832  Mslmclin.dll         Alpha
	01-Mar-2001  05:00  2.0.1493.3236     75,024  Odpsys32.exe         Alpha
	01-Mar-2001  05:00  2.0.1493.3236     83,728  Odpusr32.exe         Alpha
	01-Mar-2001  18:30  2.0.1493.3254    387,856  Smsapm32.exe         Alpha
	01-Mar-2001  19:05  2.0.1493.3261    175,888  Smsmon32.exe         Alpha
	01-Mar-2001  19:05  2.0.92.9         693,202  Swdist32.exe         Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	
	To install the hotfix, use the appropriate method.
	
	Use the Hotfix Installer
	------------------------
	
	NOTE: This method is only for Intel-based computers.
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the update file (Q308646.exe) and platform folders to the new folder.
	  The folder structure must be such that the update file is located one folder
	  "above" the platform folders.
	
	3. From each of the primary and secondary SMS site servers in your environment,
	  log on to your site server by using an account with administrative
	  privileges.
	
	4. Quit the SMS Administrator console, if it is running.
	
	5. Run Q308646.exe, and then follow the directions in the wizard.
	
	Manual Installation
	-------------------
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the platform folders that contain the hotfixed files to the new folder.
	
	3. From each of the primary and secondary SMS site servers in your environment,
	  log on to your site server by using an account with administrative
	  privileges.
	
	4. Quit the SMS Administrator console, if it is running.
	
	5. Stop all SMS services.
	
	6. Replace the Bindclin.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	7. Replace the Ccim32.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	8. Replace the Clisvcl.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	9. Replace the Cqmgr32.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	10. Replace the Mslmclin.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	11. Replace the Ndsclin.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	12. Replace the Odpsys32.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	13. Replace the Odpusr32.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	14. Replace the Smsapm32.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	15. Replace the Smsmon32.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	16. Replace the Swdist32.exe file in the
	  <Sms_root_folder>\inboxes\clicomp.src\SWDist\<Platform> folder
	  with the version you obtained from the hotfix.
	
	17. Replace the Apasetup.exe file in the
	  <Sms_root_folder>\inboxes\clicomp.src\smsapm32\<Platform> folder
	  with the version you obtained from the hotfix.
	
	18. Replace the Ccmcore.exe file in the
	  <Sms_root_folder>\inboxes\clicomp.src\base\<Platform> folder
	  with the version you obtained from the hotfix.
	
	19. Replace the Clicore.exe file in the
	  <Sms_root_folder>\inboxes\clicomp.src\base\<Platform> folder
	  with the version you obtained from the hotfix.
	
	20. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\SWDist folder with the
	  Compverswdist.ini file you obtained from the hotfix. Note that you must
	  rename the Compverswdist.ini file to Compver.ini.
	
	21. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\smsapm32 folder with the
	  Compversmsapm32.ini file you obtained from the hotfix. Note that you must
	  rename the Compversmsapm32.ini file to Compver.ini.
	
	22. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\base folder with the
	  Compverbase.ini file you obtained from the hotfix. Note that you must rename
	  the Compverbase.ini file to Compver.ini.
	
	23. Restart all SMS services.
	
	WORKAROUND
	==========
	
	To work around this problem, configure all programs to use the default icon as
	suggested by the message in the Program Properties dialog box when you first
	create a program. The GDI resources can be freed if you reboot the client, or
	end the Smsmon32.exe process.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsetup kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
