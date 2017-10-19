---
layout: page
title: "Q139877: &quot;Missing Shared DLLs&quot; When Starting WordPerfect 6.0"
permalink: /kb/139/Q139877/
---

## Q139877: &quot;Missing Shared DLLs&quot; When Starting WordPerfect 6.0

	Article: Q139877
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg win31 win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade an earlier version of Windows to Windows 95, you may receive
	one of the following error messages when you try to start WordPerfect version
	6.0 for Windows:
	
	- Missing shared DLLs
	
	- Cannot find SHWIN20.DLL
	
	
	CAUSE
	=====
	
	This error can occur if the WordPerfect shortcut is pointing to the wrong
	executable file.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Taskbar.
	
	2. On the Start Menu Programs tab, click Advanced.
	
	3. In the Contents Of Start Menu pane, double-click the Programs folder, and
	  then locate the WordPerfect shortcut.
	
	4. Use the right mouse button to click the WordPerfect shortcut, and then click
	  Properties on the menu that appears.
	
	5. On the Shortcut tab, change the Target line. Change the file name that reads
	
	  WPWIN60.EXE
	
	  to read:
	
	  WPWIN.EXE
	
	6. Click OK.
	
	7. Close Windows Explorer.
	
	8. Click OK.
	
	MORE INFORMATION
	================
	
	Changing a shortcut's Target line does not affect any other shortcuts for that
	program. If there are additional shortcuts for the program, you must modify them
	as well.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg win31 win95 appscomp kbAppCompatibility 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
