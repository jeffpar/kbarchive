---
layout: page
title: "Q321168: SMS: Advertisements for a User or User Group Can Run Again"
permalink: /kb/321/Q321168/
---

## Q321168: SMS: Advertisements for a User or User Group Can Run Again

{% raw %}

	Article: Q321168
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbAdvertisement kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install the Q296780 and Q316021 hotfixes, advertisements for user-based
	or user group-based collections may run again when a user logs on.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q296780 SMS: Program That Is Based on a Recurring Schedule Runs Multiple
	  Times
	
	  Q316021 SMS: Smsapm32 Does Not Remove Software or Generate Status Messages
	  for Software Uninstall
	
	CAUSE
	=====
	
	The version of Smsapm32.exe that is included with the hotfixes that are
	described in the "Symptoms" section of this article schedules the deletion of
	completed job files on the client. If an assigned advertisement for a user or
	user group has already been installed, it may run again if the user remains
	logged out for more than 23 hours.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  
	
	  Date         Time   Version        Size       File name        Platform
	  -----------------------------------------------------------------------
	  02-Mar-2001  01:30  2.0.92.9         395,032  Apasetup.exe        Intel
	  01-Mar-2001  13:00  2.0.1493.3125    259,936  Bindclin.dll        Intel
	  02-Mar-2001  00:15  2.0.1493.3251    182,096  Ccim32.dll          Intel
	  02-Mar-2001  00:30  2.0.92.9       1,324,075  Ccmcore.exe         Intel
	  02-Mar-2001  00:15  2.0.1493.3251  3,402,213  Clicore.exe         Intel
	  02-Mar-2001  00:10  2.0.1493.3238     88,432  Clisvcl.exe         Intel
	  02-Mar-2001  01:30                        67  Compverbase.ini     Intel
	  02-Mar-2001  01:30                        67  Compversmsapm32.ini Intel
	  02-Mar-2001  01:30                        67  Compverswdist.ini   Intel
	  01-Mar-2001  22:20  2.0.1493.3216     39,264  Cqmgr32.dll         Intel
	  01-Mar-2001  13:00  2.0.1493.3125    338,272  Mslmclin.dll        Intel
	  01-Mar-2001  13:00  2.0.1493.3125    269,664  Ndsclin.dll         Intel
	  02-Mar-2001  00:00  2.0.1493.3236     54,128  Odpsys32.exe        Intel
	  02-Mar-2001  00:00  2.0.1493.3236     60,272  Odpusr32.exe        Intel
	  25-Sep-2001  23:14  2.0.1250.7       762,688  Preinst.exe         Intel
	  02-Mar-2001  01:30  2.0.1493.3254    291,696  Smsapm32.exe        Intel
	  02-Mar-2001  00:00  2.0.92.9         639,507  Swdist32.exe        Intel
	  02-Mar-2001  01:30  2.0.92.9         655,463  Apasetup.exe        Alpha
	  02-Mar-2001  00:15  2.0.1493.3251    293,648  Ccim32.dll          Alpha
	  02-Mar-2001  00:30  2.0.92.9       1,925,229  Ccmcore.exe         Alpha
	  02-Mar-2001  00:15  2.0.1493.3251  4,442,606  Clicore.exe         Alpha
	  02-Mar-2001  00:10  2.0.1493.3238    125,712  Clisvcl.exe         Alpha
	  02-Mar-2001  01:30                        67  Compverbase.ini     Alpha
	  02-Mar-2001  01:30                        67  Compversmsapm32.ini Alpha
	  02-Mar-2001  01:30                        67  Compverswdist.ini   Alpha
	  01-Mar-2001  13:00  2.0.1493.3125    578,832  Mslmclin.dll        Alpha
	  02-Mar-2001  00:00  2.0.1493.3236     75,024  Odpsys32.exe        Alpha
	  02-Mar-2001  00:00  2.0.1493.3236     83,728  Odpusr32.exe        Alpha
	  02-Mar-2001  01:30  2.0.1493.3254    387,856  Smsapm32.exe        Alpha
	  02-Mar-2001  00:00  2.0.92.9         693,008  Swdist32.exe        Alpha
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	The hotfix in this article also fixes the problem that is described in the
	following Microsoft Knowledge Base article:
	
	  Q316868 Advertisements Do Not Start When a User Logs On
	
	How to Install the Hotfix
	-------------------------
	
	Apply this fix on all of the sites in the SMS hierarchy. To install the fix, use
	one of the following methods.
	
	How to Use the Hotfix Installer:
	
	NOTE: You can use this method only on i386-based computers.
	
	1. Copy the hotfix folder structure to a local folder on your site server or to
	  a share on your network. The I386 and Alpha subfolders are required; you must
	  also download them from the Microsoft FTP site. It is important to keep the
	  folder structure intact. The Q321168.exe file is a Microsoft Windows
	  Installer file that updates specific files on your site server.
	
	2. Log on to your site server by using an account with administrator
	  permissions.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run the Q316021.exe file and follow the instructions in the wizard. The
	  Systems Management Server services are stopped and restarted as part of the
	  installation process.
	
	How to Manually Install the Hotfix:
	
	1. Copy the update program file (Q321168.exe) and platform folders to a new
	  folder. The folder structure must be arranged so that the program file is
	  located one folder "above" the platform folders.
	
	2. Quit the SMS Administrator console and stop all SMS services in Control
	  Panel. If the SMS_SITE_BACKUP service is running, stop it also.
	
	3. Replace the Clicore.exe file in the
	  SMS\Inboxes\Clicomp.src\Base\<Platform> folder with the version in the
	  hotfix <Platform> folder.
	
	4. Replace the Compver.ini in the SMS\Inboxes\Clicomp.src\Base folder with the
	  Compverbase.ini file in the hotfix <Platform> folder. Change the file
	  name to Compver.ini.
	
	5. Replace the Ccmcore.exe file in the
	  SMS\Inboxes\Clicomp.src\Base\<Platform> folder with the version in the
	  hotfix <Platform> folder.
	
	6. Replace the Apasetup.exe file in the
	  SMS\Inboxes\Clicomp.src\smsapm32\<Platform> folder with the version in
	  the hotfix <Platform> folder.
	
	7. Replace the Compver.ini file in the SMS\Inboxes\Clicomp.src\smsapm32 folder
	  with the Compversmsapm32.ini file in the hotfix <Platform> folder.
	  Change the file name to Compver.ini.
	
	8. Replace the Swdist32.exe file in the
	  SMS\Inboxes\Clicomp.src\SWDist\<Platform> folder with the version in
	  the hotfix <Platform> folder.
	
	9. Replace the Compver.ini file in the SMS\Inboxes\Clicomp.src\SWDist folder
	  with the Compverswdist.ini file in the hotfix <Platform> Folder. Change
	  the file name to Compver.ini.
	
	10. Replace the Bindclin.dll file in the SMS\Bin\<Platform> folder with
	  the version in the hotfix <Platform> folder.
	
	11. Replace the cqmgr32.dll file the SMS\Bin\<Platform> folder with the
	  version in the hotfix <Platform> folder.
	
	12. Replace the Ccim32.dll file in the SMS\Bin\<Platform> folder with the
	  version in the hotfix <Platform> folder.
	
	13. Replace the Clisvcl.exe file in the SMS\Bin\<Platform> folder with the
	  version in the hotfix <Platform> folder.
	
	14. Replace the Mslmclin.dll file in the SMS\Bin\<Platform> folder with
	  the version in the hotfix <Platform> folder.
	
	15. Replace the Ndsclin.dll file in the SMS\Bin\<Platform> folder with the
	  version in the hotfix <Platform> folder.
	
	16. Replace the Odpsys32.exe file in the SMS\Bin\<Platform> folder with
	  the version in the hotfix <Platform> folder.
	
	17. Replace the Odpusr32.exe file in the SMS\Bin\<Platform> folder with
	  the version in the hotfix <Platform> folder.
	
	18. Replace the Smsapm32.exe file i the SMS\Bin\<Platform> folder with the
	  version in the hotfix <Platform> folder.
	
	19. Restart the SMS site services.
	
	Additional query words: prodsms advert
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbAdvertisement kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3 kbSMS200SP4
	Version           : :2.0 SP3,2.0 SP4
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
