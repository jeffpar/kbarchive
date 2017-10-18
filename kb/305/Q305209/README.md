---
layout: page
title: "Q305209: Cannot Migrate to SMS 2.0 If Any Component Uses the LANDesk Key"
permalink: kb/305/Q305209/
---

## Q305209: Cannot Migrate to SMS 2.0 If Any Component Uses the LANDesk Key

	Article: Q305209
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot upgrade a Systems Management Server (SMS) 1.2 client to SMS 2.0 if
	any software on the client uses the HKEY_LOCAL_MACHINE\Software\INTEL\LANDesk
	registry key. This may prevent migration for SMS 1.2 clients that are not
	running Intel LANDesk software, but instead are running other software that uses
	the HKEY_LOCAL_MACHINE\Software\INTEL\LANDesk key, such as Norton AntiVirus 6.0.
	
	CAUSE
	=====
	
	A previous hotfix for SMS 2.0 implements functionality to prevent remote control
	files from being upgraded during a client migration if Intel LANdesk is
	detected. This prevents the Intel LANDesk software from not working after SMS
	2.0 is installed. Intel LANDesk is detected if the
	HKEY_LOCAL_MACHINE\Software\INTEL\LANDesk registry key exists, even if a
	different program installed the key and Intel LANDesk is not installed.
	
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
	
	The English post-Service Pack 3 (SP3) version of this fix should have the
	following file attributes or later:
	
	  Date         Time   Version        Size       File name        Platform
	  -----------------------------------------------------------------------
	  22-Aug-2001  17:24  2.0.3.0          253,957  Q305209.exe      
	  10-Apr-2001  17:55  2.0.92.1       1,925,391  Ccmcore.exe      Alpha 
	  10-Apr-2001  17:55  2.0.1493.3175  4,800,854  Clicore.exe      Alpha
	  01-Mar-2001  17:45  2.0.1493.3170    203,024  Cliex32.dll      Alpha
	  01-Mar-2001  12:55  2.0.1493.3112    125,712  Clisvcl.exe      Alpha
	  01-Mar-2001  17:55  2.0.1493.3175     13,584  Cliver.exe       Alpha
	  01-Mar-2001  17:55                        67  Compverbase.ini
	  01-Mar-2001  17:40  2.0.1493.3169     66,832  Cqmgr32.dll      Alpha
	  01-Mar-2001  17:55  2.0.1493.3175    578,832  Migrat1x.exe     Alpha
	  01-Mar-2001  13:00  2.0.1493.3125    578,832  Mslmclin.dll     Alpha
	  01-Mar-2001  13:00  2.0.1493.3125    259,936  Bindclin.dll     X86
	  10-Apr-2001  17:55  2.0.92.1       1,324,282  Ccmcore.exe      X86
	  10-Apr-2001  17:55  2.0.1493.3175  3,658,842  Clicore.exe      X86
	  01-Mar-2001  17:45  2.0.1493.3170    128,864  Cliex32.dll      X86
	  01-Mar-2001  12:55  2.0.1493.3112     88,432  Clisvcl.exe      X86
	  01-Mar-2001  17:55  2.0.1493.3175      8,512  Cliver.exe       X86
	  01-Mar-2001  17:55                        67  Compverbase.ini
	  01-Mar-2001  17:40  2.0.1493.3169     39,264  Cqmgr32.dll      X86
	  01-Mar-2001  17:55  2.0.1493.3175    383,296  Migrat1x.exe     X86
	  01-Mar-2001  13:00  2.0.1493.3125    338,272  Mslmclin.dll     X86
	  01-Mar-2001  13:00  2.0.1493.3125    269,664  Ndsclin.dll      X86
	  05-Feb-2001  20:51  2.0.1250.7       762,688  Preinst.exe      X86
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains these files may also contain additional files.
	
	
	
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
	
	Hotfix Installation Instructions
	--------------------------------
	
	Apply the hotfix that is mentioned in this article to all sites in the SMS
	hierarchy. To install the fix, use one of the following methods.
	
	How to Use the Hotfix Installer:
	
	NOTE: You can use this method only on Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Note that
	  Q305209.exe is a Microsoft SMS Installer file that updates specific files on
	  your site server.
	
	2. Log on to the site server by using an account with administrative
	  permissions.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q305209.exe, and then follow the instructions in the wizard. You can run
	  the file in Quiet mode by using the /s switch.
	
	How to Manually Install the Hotfix:
	
	1. On the site server, quit the SMS Administrator console.
	
	2. Stop the SMS Site Component Manager, SMS Executive, and SMS SQL Monitor
	  services on the site server.
	
	3. Replace the Clicore.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Base\<Platform> folder with
	  the version of the file that is included with the hotfix.
	
	4. Replace the Ccmcore.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Base\<Platform> folder with
	  the version of the file that is included with the hotfix.
	
	5. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Base\ folder with the
	  compverbase.ini file that is included with the hotfix, and then rename the
	  file to compver.ini.
	
	6. Replace the Clisvcl.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that is included with the hotfix.
	
	7. Replace the Cliex32.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that is included with the hotfix.
	
	8. Replace the Cliver.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that is included with the hotfix.
	
	9. Replace the Cqmgr32.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that is included with the hotfix.
	
	10. Replace the Migrat1x.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that is included with the hotfix.
	
	11. Replace the Mslmclin.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that is included with the hotfix.
	
	12. Replace the Cqmgr32.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that is included with the hotfix.
	
	13. Replace the Bindclin.dll file in the <Sms_root_folder>\Bin\I386 folder
	  with the version of the file that is included with the hotfix (skip this
	  step for Alpha).
	
	14. Replace the Ndsclin.dll file in the <Sms_root_folder>\Bin\I386 folder
	  with the version of the file that is included with the hotfix (skip this
	  step for Alpha).
	
	15. Restart the SMS Site Component Manager, SMS Executive, Windows Management,
	  and SMS SQL Monitor services.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
