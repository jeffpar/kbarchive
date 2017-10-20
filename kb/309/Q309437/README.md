---
layout: page
title: "Q309437: SMS: Clients Do Not Work on Windows NT 4.0 Terminal Server"
permalink: /kb/309/Q309437/
---

## Q309437: SMS: Clients Do Not Work on Windows NT 4.0 Terminal Server

{% raw %}

	Article: Q309437
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) 2.0 client components may not be installed or
	may not start on Microsoft Windows NT Server 4.0, Terminal Server Edition,
	Service Pack 4 (SP4), Service Pack 5 (SP5), or Service Pack 6 (SP6). The SMS
	Control Panel tool lists most of the SMS components with a status of "Repair
	pending" if the SMS client was already installed when Windows NT Server 4.0,
	Terminal Server Edition, SP4 or later was applied. If the SMS client was
	installed after Windows NT Server 4.0, Terminal Server Edition, SP4 or later was
	installed, most of the components are missing from the Components tab.
	
	The following log entries are likely to be recorded.
	
	In the Apasetup.log file:
	
	  The file \ISMIF32.dll could not be copied. Make sure that the disk is not
	  full and the user has rights to the directory.
	
	In the Ccim32.log file:
	
	  Waiting for Process "i386\apasetup.exe /s" to finish... Process
	  "i386\apasetup.exe /s" finished; exit code = 1. ** Base Component
	  Installation Thread is finished ** Base install DLL finished. Base setup
	  status value not set to installed
	
	The Smsapm32.exe and Smsmon32.exe processes may also not be running.
	
	CAUSE
	=====
	
	Windows NT Server 4.0, Terminal Server Edition, SP4 changed the way in which the
	Windows folder is detected. SMS was not updated to handle this change.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next SMS service pack that contains this fix.
	
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
	
	The English-language version of this fix for SMS Service Pack 3 (SP3) sites
	should have the following file attributes or later:
	
	  
	
	  Date         Time    Version        Size    File name         Platform
	  ----------------------------------------------------------------------
	  01-Mar-2001  11:10a  2.0.92.9       396,951  Apasetup.exe         i386
	  01-Mar-2001  11:10a  2.0.92.9       133,097  Apaunins.exe         i386
	  01-Mar-2001  11:10a                      67  Compversmsapm32.ini  i386
	  01-Mar-2001  11:10a                      67  Compverswdist.ini    i386
	  01-Feb-2001  04:50a  2.0.1493.3111   54,640  Odpsys32.exe         i386
	  01-Feb-2001  04:50a  2.0.1493.3111   60,784  Odpusr32.exe         i386
	  01-Mar-2001  10:55a  2.0.1493.3187  288,624  smsapm32.exe         i386
	  01-Mar-2001  11:10a  2.0.92.9       639,775  Swdist32.exe         i386
	  01-Mar-2001  11:10a  2.0.92.9       133,244  Swdunins.exe         i386
	  01-Mar-2001  11:10a  2.0.92.9       658,569  Apasetup.exe        Alpha
	  01-Mar-2001  11:10a  2.0.92.9       248,390  Apaunins.exe        Alpha
	  01-Mar-2001  11:10a                      67  Compversmsapm32.ini Alpha
	  01-Mar-2001  11:10a                      67  Compverswdist.ini   Alpha
	  01-Feb-2001  04:50a  2.0.1493.3111   76,048  ODPSYS32.exe        Alpha
	  01-Feb-2001  04:50a  2.0.1493.3111   84,240  Odpusr32.exe        Alpha
	  01-Mar-2001  10:55a  2.0.1493.3187  385,296  smsapm32.exe        Alpha
	  01-Mar-2001  11:10a  2.0.92.9       693,592  Swdist32.exe        Alpha
	  01-Mar-2001  11:10a  2.0.92.9       248,505  Swdunins.exe        Alpha
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains these files may also contain additional files.
	
	
	
	How to Install the Hotfix
	-------------------------
	
	Using the Hotfix Installer:
	
	NOTE: This method is only for Intel-based computers.
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the update file (Q309437.exe) and platform folders to the new folder.
	  The folder structure must be such that the update file is located one folder
	  "above" the platform folders.
	
	3. From each of the primary and secondary SMS site servers in your environment,
	  log on to your site server by using an account with administrative
	  privileges.
	
	4. Quit the SMS Administrator console if it is running.
	
	5. Run Q309437.exe and follow the instructions in the wizard.
	
	Manual Installation:
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the platform folders that contain the hotfix files to the new folder.
	
	3. From each of the primary and secondary SMS site servers in your environment,
	  log on to your site server by using an account with administrative
	  privileges.
	
	4. Quit the SMS Administrator console if it is running.
	
	5. Stop all SMS services.
	
	6. Replace the Odpsys32.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	7. Replace the Odpusr32.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	8. Replace the Smsapm32.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	9. Replace the Swdist32.exe file in the
	  <Sms_root_folder>\inboxes\clicomp.src\SWDist\<Platform> folder
	  with the version from the hotfix.
	
	10. Replace the Apasetup.exe file in the
	  <Sms_root_folder>\inboxes\clicomp.src\smsapm32\<Platform> folder
	  with the version from the hotfix.
	
	11. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\SWDist folder with the
	  Compverswdist.ini file from the hotfix. Note that you must rename the
	  Compverswdist.ini file to Compver.ini.
	
	12. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\smsapm32 folder with the
	  Compversmsapm32.ini file from the hotfix. Note that you must rename the
	  Compversmsapm32.ini file to Compver.ini.
	
	13. Restart all SMS services.
	
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
	
	This issue is related to the problem that is documented in the following
	Microsoft Knowledge Base articles:
	
	  Q281316 DOC: GetSystemWindowsDirectory() Is Not Supported in Windows NT 4.0
	  Terminal Server Edition
	
	  Q215358 GetWindowsDirectory May Return Incorrect Data
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
