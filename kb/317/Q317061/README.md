---
layout: page
title: "Q317061: Software Distribution May Not Work with Exchange 2000 Server"
permalink: /kb/317/Q317061/
---

## Q317061: Software Distribution May Not Work with Exchange 2000 Server

	Article: Q317061
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
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
	
	If you distribute a package to a Systems Management Server (SMS) 2.0 site in
	which the site server and Microsoft Exchange 2000 Server are installed on the
	same computer, the package may not arrive at the distribution points for that
	site.
	
	CAUSE
	=====
	
	This issue occurs because SMS Distribution Manager (SMS_DISTRIBUTION_MANAGER)
	recognizes the Installable File System (IFS) drive of Exchange 2000 Server as a
	fixed drive instead of an IFS drive. Therefore, Distribution Manager may try to
	decompress the SMS package to the virtual drive, to which it does not have Write
	access. Distribution Manager selects the NTFS drive that has the most free disk
	space as the decompression drive.
	
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
	
	The English-language version of this fix for SMS 2.0 Service Pack 3 (SP3) should
	have the following file attributes or later:
	
	  Date         Time   Version         Size     File name     Platform
	  -------------------------------------------------------------------
	  01-Mar-2001  04:20  2.00.1493.3240  810,768  Baseutil.dll  Alpha
	  01-Mar-2001  04:20  2.00.1493.3240  359,184  Distmgr.dll   Alpha
	  01-Mar-2001  04:20  2.00.1493.3240  526,272  Baseutil.dll  i386
	  01-Mar-2001  04:20  2.00.1493.3240  230,800  Distmgr.dll   i386
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	To install the hotfix, use the appropriate method.
	
	Use the Hotfix Installer
	------------------------
	
	NOTE: This method is only for Intel-based computers.
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the update file (Q317061.exe) and platform folders to the new folder.
	  The folder structure must be such that the update file is located one folder
	  "above" the platform folders.
	
	3. From each of the primary and secondary SMS site servers in your environment,
	  log on to your site server by using an account with administrative
	  permissions.
	
	4. Quit the SMS Administrator console, if it is running.
	
	5. Run Q317061.exe, and then follow the directions in the wizard.
	
	Install the Hotfix Manually
	---------------------------
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the platform folders that contain the hotfix files to the new folder.
	
	3. From each of the primary and secondary SMS site servers in your environment,
	  log on to your site server by using an account with administrative
	  permissions.
	
	4. Quit the SMS Administrator console, if it is running.
	
	5. Stop all SMS services, and stop the Windows Management or Windows Management
	  Instrumentation service.
	
	6. Replace the Baseutil.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	7. Replace the Distmgr.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	8. Restart all of the SMS services, and restart the Windows Management or
	  Windows Management Instrumentation service.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can make the following registry change to hide the IFS drive from Windows
	Explorer, and to prevent SMS from using the IFS drive to decompress packages:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and then click the following registry value:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EXIFS\Parameters\DriveLetter
	
	3. Change the data value to be blank (remove the "M" and do not leave a space).
	
	4. Restart the server.
	
	NOTE: If you hide the Exchange 2000 Server IFS drive by modifying the registry
	value, Microsoft Outlook Web Access (OWA) may not function properly.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
