---
layout: page
title: "Q309644: The Mandatory Countdown Timer Maximum Value Has Been Increased"
permalink: kb/309/Q309644/
---

## Q309644: The Mandatory Countdown Timer Maximum Value Has Been Increased

	Article: Q309644
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article describes a hotfix that increases the maximum value for the
	advertisement countdown timer from 60 minutes to 1,440 minutes (one day - 24
	hours).
	
	CAUSE
	=====
	
	A maximum countdown time of 60 minutes for scheduled advertisements may not be
	enough for some users, especially if the program restarts the client
	workstation. The maximum value has been increased to accommodate this situation.
	
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
	
	The English Service Pack 2 (SP2) version of this fix should have the following
	file attributes or later:
	
	  Date         Version         Size     File name         Platform
	  ----------------------------------------------------------------
	  10-JUN-2001  2.0.133.00      643,444  Swdist32.exe      I386
	  10-JUN-2001  2.00.1493.2225  118,712  Smsmon32.exe      I386
	  10-JUN-2001  2.00.1493.2225   94,912  Sms_papm.dll      I386
	  10-JUN-2001  2.00.1493.2188   60,784  Odpusr32.exe      I386
	  10-JUN-2001  2.00.1493.2188   54,640  Odpsys32.exe      I386
	  10-JUN-2001                       67  Comverswdist.ini  I386
	  10-JUN-2001  2.0.92.01       693,797  Swdist32.exe      Alpha
	  10-JUN-2001  2.00.1493.2225  176,400  Smsmon32.exe      Alpha
	  10-JUN-2001  2.00.1493.2225  192,272  Sms_papm.dll      Alpha
	  10-JUN-2001  2.00.1493.2188   84,240  Odpusr32.exe      Alpha
	  10-JUN-2001  2.00.1493.2188   76,048  Odpsys32.exe      Alpha
	  10-JUN-2001                       67  Comverswdist.ini  Alpha
	
	The English Service Pack 3 (SP3) version of this fix should have the following
	file attributes or later:
	
	  Date         Version         Size       File name            Platform
	  ---------------------------------------------------------------------
	  01-Mar-2001  2.0.92.09         637,710  Swdist32.exe         I386
	  01-Mar-2001  2.00.1493.3205    118,208  Smsmon32.exe         I386
	  01-Mar-2001  2.00.1493.3205     94,912  Sms_papm.dll         I386
	  01-Mar-2001  2.00.1493.3194     53,104  Odpusr32.exe         I386
	  01-Mar-2001  2.00.1493.2188     54,640  Odpsys32.exe         I386
	  01-Mar-2001                        67   Comverswdist.ini     I386
	  01-Mar-2001  2.00.92.09        654,012  Apasetup.exe         I386
	  01-Mar-2001  2.00.1493.3194    294,648  Ccim32.dll           I386
	  01-Mar-2001  2.00.92.09      1,925,227  Ccmcore.exe          I386
	  01-Mar-2001  2.00.92.09      4,440,136  Clicore.exe          I386
	  01-Mar-2001  2.00.1493.3112    125,712  Clisvcl.exe          I386
	  01-Mar-2001                         67  Compverbase.ini      I386
	  01-Mar-2001                         67  Compversmsapm32.ini  I386
	  01-Mar-2001  2.00.1493.3169     39,264  Cqmgr32.dll          I386
	  01-Mar-2001  2.00.1493.3205    654,096  Mmcpgres.dll         I386
	  01-Mar-2001  2.00.1493.3205     44,304  Monres.dll           I386
	  01-Mar-2001  2.00.1493.3125    338,272  Mslmclin.dll         I386
	  01-Mar-2001  2.00.1493.3125    269,664  Ndsclin.dll          I386
	  01-Mar-2001  2.0.92.09         691,589  Swdist32.exe         Alpha
	  01-Mar-2001  2.00.1493.3205    175,376  Smsmon32.exe         Alpha
	  01-Mar-2001  2.00.1493.3205    192,272  Sms_papm.dll         Alpha
	  01-Mar-2001  2.00.1493.3194     82,192  Odpusr32.exe         Alpha
	  01-Mar-2001  2.00.1493.3194     73,488  Odpsys32.exe         Alpha
	  01-Mar-2001                         67  Comverswdist.ini     Alpha
	  01-Mar-2001  2.00.92.09        654,012  Apasetup.exe         Alpha
	  01-Mar-2001  2.00.1493.3194    294,648  Ccim32.dll           Alpha
	  01-Mar-2001  2.00.92.09      1,925,227  Ccmcore.exe          Alpha
	  01-Mar-2001  2.00.92.09      4,440,136  Clicore.exe          Alpha
	  01-Mar-2001  2.00.1493.3112    125,712  Clisvcl.exe          Alpha
	  01-Mar-2001                         67  Compverbase.ini      Alpha
	  01-Mar-2001                         67  Compversmsapm32.ini  Alpha
	  01-Mar-2001  2.00.1493.3169     66,832  Cqmgr32.dll          Alpha
	  01-Mar-2001  2.00.1493.3205    659,216  Mmcpgres.dll         Alpha
	  01-Mar-2001  2.00.1493.3205     48,912  Monres.dll           Alpha
	  01-Mar-2001  2.00.1493.3125    578,832  Mslmclin.dll         Alpha
	
	The International Client Pack 1 (ICP1) SP3 version of this fix should have the
	following file attributes or later:
	
	  Date         Version         Size       File name            Platform
	  ---------------------------------------------------------------------
	  12-Apr-2001  2.0.92.09         836,820  Swdist32.exe         I386
	  01-Mar-2001  2.00.1493.3205    118,208  Smsmon32.exe         I386
	  01-Mar-2001  2.00.1493.3205     94,912  Sms_papm.dll         I386
	  01-Mar-2001  2.00.1493.3194     59,248  Odpusr32.exe         I386
	  01-Mar-2001  2.00.1493.3194     53,104  Odpsys32.exe         I386
	  12-Apr-2001                         67  Comverswdist.ini     I386
	  01-Mar-2001  2.00.92.09        393,670  Apasetup.exe         I386
	  01-Mar-2001  2.00.1493.3125    259,936  Bindclin.dll         I386
	  01-Mar-2001  2.00.1493.3194    181,584  Ccim32.dll           I386
	  01-Mar-2001  2.00.92.09      1,324,075  Ccmcore.exe          I386
	  01-Mar-2001  2.00.1493.3194  3,399,366  Clicore.exe          I386
	  01-Mar-2001  2.00.1493.3112     88,432  Clisvcl.exe          I386
	  12-Apr-2001                         67  Compverbase.ini      I386
	  12-Apr-2001                         67  Compversmsapm32.ini  I386
	  01-Mar-2001  2.00.1493.3169     39,264  Cqmgr32.dll          I386
	  01-Mar-2001  2.00.1493.3205    654,096  Mmcpgres.dll         I386
	  01-Mar-2001  2.00.1493.3125    338,272  Mslmclin.dll         I386
	  01-Mar-2001  2.00.1493.3125    269,664  Ndsclin.dll          I386
	  01-Mar-2001  2.00.1493.3194    286,576  Smsapm32.exe         I386
	  12-Apr-2001  2.0.92.09         891,074  Swdist32.exe         Alpha
	  01-Mar-2001  2.00.1493.3205    175,376  Smsmon32.exe         Alpha
	  01-Mar-2001  2.00.1493.3205    192,272  Sms_papm.dll         Alpha
	  01-Mar-2001  2.00.1493.3194     82,192  Odpusr32.exe         Alpha
	  01-Mar-2001  2.00.1493.3194     73,488  Odpsys32.exe         Alpha
	  12-Apr-2001                         67  Comverswdist.ini     Alpha
	  01-Mar-2001  2.00.92.09        654,012  Apasetup.exe         Alpha
	  01-Mar-2001  2.00.1493.3194    293,648  Ccim32.dll           Alpha
	  01-Mar-2001  2.00.92.09      1,925,227  Ccmcore.exe          Alpha
	  01-Mar-2001  2.00.92.09      4,440,136  Clicore.exe          Alpha
	  01-Mar-2001  2.00.1493.3112    125,712  Clisvcl.exe          Alpha
	  12-Apr-2001                         67  Compverbase.ini      Alpha
	  12-Apr-2001                         67  Compversmsapm32.ini  Alpha
	  01-Mar-2001  2.00.1493.3169     66,832  Cqmgr32.dll          Alpha
	  01-Mar-2001  2.00.1493.3205    659,216  Mmcpgres.dll         Alpha
	  01-Mar-2001  2.00.1493.3125    578,832  Mslmclin.dll         Alpha
	
	
	
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
	
	After you install this hotfix:
	
	- The administrator can modify the value on the Notification tab in the
	  Advertised Programs client agent to provide a countdown length between 1 and
	  1,440 minutes.
	
	- If clients have the ability to change their own software distribution
	  settings, users can change the countdown time on the Options tab in
	  Advertised Programs Monitor.
	
	How to Install the Hotfix
	-------------------------
	
	To install the hotfix, use one of the following methods on your SMS primary and
	secondary site servers. You must also install this hotfix on any computers that
	run the SMS Administrator console.
	
	How to Use the Hotfix Installer:
	
	NOTE: You can use this method only on Intel-based computers.
	
	To use the hotfix installer:
	
	1. Create a folder in a location that is accessible to your SMS site server or
	  site servers.
	
	2. Log on to your site server by using an account with administrative
	  permissions.
	
	3. Copy the Q309644.exe hotfix file and platform folders to the new folder. The
	  Q309644.exe hotfix file must be one folder "above" the platform folders.
	
	4. From each of the primary and secondary SMS site servers in your environment,
	  run Q309644.exe. Complete any necessary manual installation steps.
	
	How to Manually Install the Hotfix:
	
	To manually install the hotfix:
	
	1. Copy the hotfix folder structure to a local subfolder on your site server or
	  to a share on your network.
	
	2. Quit the SMS Administrator console and stop all SMS services.
	
	3. Replace the Smsapm32.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file from the hotfix.
	
	4. Replace the Apasetup.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Smsapm32\<Platform> folder
	  with the version of the file from the hotfix.
	
	5. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Smsapm32 folder with the version
	  of the file from the hotfix. Note that you must rename Compversmsapm32.ini to
	  Compver.ini.
	
	6. Replace the sms_papm.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file from the hotfix.
	
	7. Replace the odpusr32.exe and odpsys32.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file from the hotfix.
	
	8. Replace the Mmcpgres.dlL and Mslmclin.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file from the hotfix.
	
	9. If the site server is an I386 platform, replace the Bindclin.dll and
	  Ndsclin.dll file in the <Sms_root_folder>\Bin\<Platform> folder
	  with the version of the file from the hotfix.
	
	10. Replace the Swdist32.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\SwDist\<Platform> folder
	  with the version of the file from the hotfix.
	
	11. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\SWDist folder with the version
	  of the file from the hotfix. Note that you must rename Compverswdist.ini to
	  Compver.ini.
	
	12. Replace the Ccim32.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file from the hotfix.
	
	13. Replace the Ccmcore.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Base\Platform folder with the
	  version of the file from the hotfix.
	
	14. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Base folder with the version of
	  the file from the hotfix. Note that you must rename Compverbase.ini to
	  Compver.ini.
	
	15. Replace the Clisvcl.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file from the hotfix.
	
	16. Restart all SMS services.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
