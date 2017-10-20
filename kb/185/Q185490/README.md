---
layout: page
title: "Q185490: Explorer Expands System Drive by Default"
permalink: /kb/185/Q185490/
---

## Q185490: Explorer Expands System Drive by Default

{% raw %}

	Article: Q185490
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows NT Explorer is started, it automatically expands the drive C (or
	System drive).
	
	RESOLUTION
	==========
	
	To start Explorer without expanding any drives, perform the following steps:
	
	1. Click start, and then click run.
	
	2. Type the following line and then press ENTER:
	
	  %systemroot%\explorer.exe /e,::{20D04FE0-3AEA-1069-A2D8-08002B30309D}
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can use the following steps to modify the Windows NT Explorer shortcut on
	the Start Menu to open with no drives expanded:
	
	1. Right-click the taskbar, and then select Properties.
	
	2. Click the Start Menu Programs tab, and then click Advanced.
	
	3. In the right pane, double-click Programs.
	
	4. Right-click Windows NT Explorer, click Properties, and then click the
	  Shortcut tab.
	
	5. For target, type the following command line:
	
	  %systemroot%\explorer.exe /e,::{20D04FE0-3AEA-1069-A2D8-08002B30309D}
	
	6. Click OK.
	
	Additional query words: launches starts runs drives c folder plus open opened
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
