---
layout: page
title: "Q219885: How to Enable the Quick Reboot Feature for Windows NT 4.0 SP4"
permalink: kb/219/Q219885/
---

## Q219885: How to Enable the Quick Reboot Feature for Windows NT 4.0 SP4

	Article: Q219885
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 4 (SP4) includes a feature that you can use to
	reboot the computer quickly by pressing SHIFT+CTRL+ALT+DELETE.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To enable the Quick Reboot feature, add a REG_SZ value named EnableQuickReboot
	with a data value of 1 in the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	
	After you make this change, quit Registry Editor and restart the computer.
	
	Note that rebooting the computer by using the SHIFT+CTRL+ALT+DELETE key
	combination does not shut down the computer gracefully and creates an
	"unexpected shutdown (event 6008)" message in the event log.
	
	For more information about event 6008, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q196452 Why WinNT Reports 6005, 6006, 6008, and 6009 Event Log Entries
	
	For information about obtaining Windows NT 4.0 SP4, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbhowto
	
	=============================================================================
	
