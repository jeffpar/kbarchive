---
layout: page
title: "Q132812: Cannot Use Quickstart in Dynacomm Elite"
permalink: kb/132/Q132812/
---

## Q132812: Cannot Use Quickstart in Dynacomm Elite

	Article: Q132812
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Dynacomm Elite's Quickstart application, the automated
	script does not choose Connect on the menu. Instead, it misses and chooses
	Transfer or the Scripts menu.
	
	CAUSE
	=====
	
	The font used in menus in Windows 95 is different from the font used in menus in
	earlier versions of Windows. Dynacomm relies on the font size used in the menus,
	but the font size in Windows 95 is different.
	
	RESOLUTION
	==========
	
	To correct this problem, change the menu font in Windows 95 from Arial to
	System. To do so, follow these steps:
	
	1. Use the right mouse button to click the desktop, then click Properties on the
	  menu that appears.
	
	2. On the Appearance tab, click Menu in the Item box, and then click System in
	  the Font box.
	
	3. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
