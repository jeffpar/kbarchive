---
layout: page
title: "Q219297: How to Disable the My Briefcase Icon on the Desktop"
permalink: /kb/219/Q219297/
---

## Q219297: How to Disable the My Briefcase Icon on the Desktop

	Article: Q219297
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
	
	This article describes how to disable the creation of the My Briefcase icon
	(located on the Windows NT 4.0 desktop) during startup for all new users who log
	on to a Windows NT-based computer.
	
	NOTE: Changing the following registry entry does not remove the icon from a
	user's desktop if the user has previously logged on to the Windows NT-based
	computer.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To disable the automatic creation of the My Briefcase icon:
	
	1. Click Start, click Run, type "regedt32" (without the quotation marks), and
	  then click OK.
	
	2. On the Window menu, click "HKEY_CURRENT_USER on Local Machine".
	
	3. Double-click the \Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	  folder.
	
	4. On the Edit menu, click Add Value.
	
	5. In the Value Name box, type "RunSyncApp" (without the quotation marks), click
	  REG_DWORD in the Data Type box, and then click OK.
	
	6. In the Data box, type "0" (without the quotation marks), and then click OK.
	
	7. Quit Registry Editor.
	
	8. At a command prompt, change to the %SystemRoot%\System32 folder, type "ren
	  syncapp.exe syncapp.old" (without the quotation marks), and then press ENTER.
	
	9. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
