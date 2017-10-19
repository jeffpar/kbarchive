---
layout: page
title: "Q216445: How to Control the Delay of the Start Menu Display"
permalink: /kb/216/Q216445/
---

## Q216445: How to Control the Delay of the Start Menu Display

	Article: Q216445
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbui
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	It is possible to control the interval used to delay the appearance of the
	cascading menus when you click Start on the Taskbar.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change the Start menu display interval, follow these steps:
	
	1. Click Start, click Run, type "regedt32" (without the quotation marks), and
	  then click OK.
	
	2. On the Windows menu, click "HKEY_CURRENT_USER on Local Machine".
	
	3. Click the \Control Panel\Desktop folder.
	
	4. Double-click the MenuShowDelay value, type a number representing the menu
	  display delay (in number of milliseconds) in the String box, and then click
	  OK. You can enter any whole number between 0 and 4,000. If you use an entry
	  of 0, there is no menu display delay.
	
	5. Quit Registry Editor, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
