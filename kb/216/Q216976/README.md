---
layout: page
title: "Q216976: How to Change the Drive Letter Used for ROOTDRIVE"
permalink: kb/216/Q216976/
---

## Q216976: How to Change the Drive Letter Used for ROOTDRIVE

	Article: Q216976
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	To change the drive letter you are currently using for ROOTDRIVE in Windows NT
	Server 4.0, Terminal Server edition, perform the following steps:
	
	1. Open Windows Explorer and go to the %SYSTEMROOT%\Application Compatibility
	  Scripts folder.
	
	2. Right-click Rootdrv2.cmd, and then click Edit.
	
	3. The last line of the file should read
	
	     SET ROOTDRIVE=X:
	
	  where X: is the drive letter.
	
	4. Replace the existing drive letter with the new drive letter you want to use.
	
	5. On the File menu, click Save.
	
	6. On the File menu, click Exit.
	
	The drive letter change will take place the next time a user logs on. However,
	any application compatibility scripts that you had previously installed will
	need to be reinstalled.
	
	IMPORTANT NOTE: The updated registry entries from the application compatibility
	scripts will only be propagated to new users as they log on. Users that have an
	existing profile will NOT be updated. For users that have an existing profile,
	you will need to do one of the following:
	
	- WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	  For each user, remove the LastUserIniSyncTime value from the following key:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion
	     \Terminal Server
	
	- Delete each existing profile using the User Profile Tool from System
	  Properties.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
