---
layout: page
title: "Q320797: SMS: Windows 98 Client Hangs When the Wuser32.exe Agent Starts"
permalink: /kb/320/Q320797/
---

## Q320797: SMS: Windows 98 Client Hangs When the Wuser32.exe Agent Starts

{% raw %}

	Article: Q320797
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Wuser32.exe Systems Management Server (SMS) Remote Control client agent
	starts on a Microsoft Windows 98-based computer, the client may cause the
	computer to stop responding (hang). When this occurs, only the mouse pointer
	continues to work.
	
	CAUSE
	=====
	
	This issue occurs if you are using the Intel 82830M video adapter driver
	(Ialmdrv.drv) with the SMS Remote Control feature. Dell Latitude C400 laptop
	computers (among others) use this driver. The SMS client was not updated to work
	properly with all multiple-monitor-aware Windows 98 video adapter drivers.
	
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
	
	The English-language version of this fix for SMS 2.0 Service Pack 3 (SP3) sites
	should have the following file attributes or later:
	
	  
	
	  Date         Time   Version         Size       File name       Platform
	  -----------------------------------------------------------------------
	  01-Mar-2001  18:55  2.00.1493.3259     23,520  Coexist.dll         I386
	  01-Mar-2001  18:55                         67  Compverremctrl.ini  I386
	  01-Mar-2001  18:55  2.0.92.09         740,363  Remc16.exe          I386
	  01-Mar-2001  18:55  2.0.92.09       1,360,348  Remctrl.exe         I386
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	Do not use the Ialmdrv.drv video adapter driver on Windows 98-based clients with
	the SMS Remote Control agent installed.
	
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
	
	To install the hotfix, use the appropriate method.
	
	Use the Hotfix Installer
	------------------------
	
	NOTE: This method is only for Intel-based computers.
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the update file (Q320797.exe) and platform folders to the new folder.
	  The folder structure must be arranged so that the update file is located one
	  folder "above" the platform folders.
	
	3. From each of the primary and secondary SMS site servers in your environment,
	  log on to your site server by using an account with administrator
	  permissions.
	
	4. Quit the SMS Administrator console, if it is running.
	
	5. Run Q320797.exe, and then follow the instructions in the wizard.
	
	Manual Installation
	-------------------
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the platform folders that contain the hotfix files to the new folder.
	
	3. From each of the primary and secondary SMS site servers in your environment,
	  log on to your site server by using an account with administrator
	  permissions.
	
	4. Quit the SMS Administrator console, if it is running.
	
	5. Stop all SMS services.
	
	6. Replace the Remc16.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Remctrl\<Platform> folder
	  with the version from the hotfix.
	
	7. Replace the Remctrl.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Remctrl\<Platform> folder
	  with the version from the hotfix.
	
	8. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Remctrl folder with the
	  Compverremctrl.ini file from the hotfix. Note that you must rename the
	  Compverremctrl.ini file to Compver.ini.
	
	9. Restart all SMS services.
	
	
	Additional query words: prodsms remote control hang intel 82830M
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
