---
layout: page
title: "Q254790: Desktop Refreshes When You Access the Control Panel"
permalink: kb/254/Q254790/
---

## Q254790: Desktop Refreshes When You Access the Control Panel

	Article: Q254790
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbhw kbtool kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enter the Control Panel from My Computer, and you open any program in the
	Control Panel (for example, if you open "System") and then you click Up One
	Level in Microsoft Explorer to return to My Computer, the Explorer refreshes
	your complete desktop. At first your desktop is blank, and then all icons are
	repainted.
	
	CAUSE
	=====
	
	This behavior occurs if you have installed the "Matrox Millennium Tools," that
	are included with the Matrox Millennium display adapter. The Matrox Millennium
	Tools is located in the Control Panel as "MGA Display Properties."
	
	WORKAROUND
	==========
	
	To resolve this behavior, delete the Mgapanel.cpl file located in the
	%SYSTEMROOT%\system32-folder.
	
	
	Additional query words: repaint refresh reinitialize
	
	======================================================================
	Keywords          : kbenv kbhw kbtool kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
