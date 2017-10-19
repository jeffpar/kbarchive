---
layout: page
title: "Q243357: ABNT2 Keyboard Layout Is Not Included in Windows NT"
permalink: /kb/243/Q243357/
---

## Q243357: ABNT2 Keyboard Layout Is Not Included in Windows NT

	Article: Q243357
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	A Terminal Server client running on a Microsoft Windows 95-based computer using
	the ABNT2 Brazilian keyboard layout may receive the following error message when
	attempting to log on to the Terminal Server:
	
	  The keyboard layout of requested language could not be opened. US English
	  keyboard layout will be used instead. You may choose another layout from your
	  Client Settings.
	
	After you click Continue, the Terminal Server English keyboard layout is in use.
	This is true even if you only have the ABNT layout installed on the server or if
	you have multiple layouts installed and have the ABNT layout set as the default.
	
	CAUSE
	=====
	
	This behavior occurs because Windows NT Server 4.0, Terminal Server Edition,
	only includes the ABNT keyboard layout. Terminal Server Edition does not include
	the ABNT2 keyboard layout (Windows 95 and Windows 98 include both).
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layouts\00010416
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Layout File
	  Value Data: Kbdbr.dll
	
	4. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layouts\00010416
	
	5. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Layout Id
	  Value Date: 0010
	
	6. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layouts\00010416
	
	7. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Layout Text
	  Value Data: Portuguese (Brazilian ABNT2)
	
	8. Quit Registry Editor.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: ABTN ABTN2 tse wts
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : :4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
