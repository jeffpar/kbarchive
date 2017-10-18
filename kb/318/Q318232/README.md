---
layout: page
title: "Q318232: SMS: The &quot;BROWSTAT.EXE STATUS&quot; Command Does Not Return a List"
permalink: kb/318/Q318232/
---

## Q318232: SMS: The &quot;BROWSTAT.EXE STATUS&quot; Command Does Not Return a List

	Article: Q318232
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200preSP3fix kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you are troubleshooting browsing services, running the "browstat.exe
	status" command may not return the server list. For example:
	
	  Status for domain Domain1 on
	  transport \Device\NetBT_Tcpip_{A6CF5547-5F56-443D-8EDE-EB587696F543}
	  Browsing is active on domain.
	  Master browser name is: SERVER01
	  Master browser is running build 2195
	  3 backup servers retrieved from master SERVER01
	  \\SERVER02
	  \\SERVER03
	  \\SERVER04
	  Unable to retrieve server list from SERVER01: 1230
	
	This problem may occur if a Systems Management Server (SMS) site is installed on
	the domain master browser.
	
	
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
	
	The English-language post-Service Pack 3 (SP3) version of this fix should have
	the following file attributes or later:
	
	  Date         Time   Version        Size     File name     Platform
	  ------------------------------------------------------------------
	  01-Mar-2001  07:45  2.0.1493.3245  145,680  Colleval.dll  Alpha
	  01-Mar-2001  07:45  2.0.1493.3245   91,024  Colleval.dll  I386
	  01-Mar-2001  07:45  2.0.1493.3245  173,328  Inboxmgr.dll  Alpha
	  01-Mar-2001  07:45  2.0.1493.3245  108,432  Inboxmgr.dll  I386
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains these files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, set the set the IsDomainMaster value to No under the
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Browser\Parameters registry
	key, and then restart the Computer Browser service.
	
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
	
	How to Install the Hotfix
	-------------------------
	
	Install this hotfix on all primary and secondary site servers that may become the
	master browser. To install the hotfix, use one of the following methods.
	
	How to Use the Hotfix Installer:
	
	NOTE: Use this method only on Intel-based computers.
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the update file (Q318232.exe) and platform folders to the new folder.
	  The update file must be located one folder "above" the platform folders.
	
	3. From each of the primary and secondary SMS site servers that may become the
	  master browser in your environment, log on to your site server by using an
	  account with administrative permissions.
	
	4. Quit the SMS Administrator console, if it is running.
	
	5. Run Q318232.exe, and follow the instructions in the wizard.
	
	How to Manually Install the Hotfix:
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the platform folders that contain the hotfix files to the new folder.
	
	3. From each of the primary and secondary SMS site servers that may become the
	  master browser in your environment, log on to your site server by using an
	  account with administrative permissions.
	
	4. Quit the SMS Administrator console, if it is running.
	
	5. Stop all of the SMS services.
	
	6. Replace the Colleval.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file from the hotfix.
	
	7. Replace the Inboxmgr.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file from the hotfix.
	
	8. Restart all SMS services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200preSP3fix kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
