---
layout: page
title: "Q123402: Microsoft Office Manager ToolTips Don't Appear"
permalink: /kb/123/Q123402/
---

## Q123402: Microsoft Office Manager ToolTips Don't Appear

	Article: Q123402
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Office Manager (MOM) ToolTips feature is disabled in Windows NT
	version 3.5 if the toolbar does not have current window focus (even if you have
	selected Show ToolTips). ToolTips are not displayed when the mouse pointer is
	over an icon on the toolbar.
	
	CAUSE
	=====
	
	In MOM version 4.0, ToolTips caused newly started applications to lose focus.
	They also became associated with other applications besides the toolbar. To fix
	this, MOM version 4.2 under Windows NT only displays ToolTips when in focus.
	
	WORKAROUND
	==========
	
	To enable ToolTips, click the toolbar title once. If there is no title
	displayed, move the mouse over the toolbar and click the right mouse button or
	any icon to give the toolbar focus and enable ToolTips.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
