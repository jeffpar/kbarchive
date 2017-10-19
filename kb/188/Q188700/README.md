---
layout: page
title: "Q188700: Screensaver Password Works Even if Account Is Locked Out"
permalink: /kb/188/Q188700/
---

## Q188700: Screensaver Password Works Even if Account Is Locked Out

	Article: Q188700
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If account lockout option and password protected screen saver are enabled and
	the user tries to get past the screen saver password unsuccessfully, it
	increments the account lockout counter. Numerous bad attempts should result in
	the domain account being locked out. The problem is that the screen saver
	password does not check to see if the account is locked out. So, if the account
	lockout counter is set to five bad attempts before locking the account, the
	screen saver lets the user in if a correct password is entered even after five
	bad attempts.
	
	CAUSE
	=====
	
	This is the expected behavior. To change this default behavior so that the
	screen saver keeps track of bad password count and locks the account once the
	bad password count is reached, please apply service pack 4 and the registry
	entry mentioned in the Resolution section.
	
	RESOLUTION
	==========
	
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To install the fix:
	
	1. Click Start, Run, type "REGEDT32" (without the quotation marks) and click OK.
	
	2. Navigate to the key HKEY_LOCAL_MACHINE\Software\Microsoft\Windows
	  NT\CurrentVersion\Winlogon.
	
	3. If the ForceUnlockLogon value does not exist, add it. To do so click Edit,
	  select Add Value, type "ForceUnlockLogon" (without the quotation marks),
	  change Data Type to REG_DWORD and click OK. When the DWORD Editor opens, add
	  the number 1 into the Data field and ensure Hex is selected, then click OK.
	  The ForceUnlockLogon should appear in the right pane of the Winlogon screen.
	
	4. Close the Registry Editor.
	
	5. Restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
