---
layout: page
title: "Q82434: Windows Screen Savers Corrupted by Pull-Down Menus"
permalink: /kb/082/Q82434/
---

## Q82434: Windows Screen Savers Corrupted by Pull-Down Menus

	Article: Q82434
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After Dark and all other Microsoft Windows 3.0 screen savers are corrupted by
	pull-down menus when they are run in Windows version 3.1 or 3.11.
	
	This problem does not occur with Windows 3.0.
	
	CAUSE
	=====
	
	This problem occurs because Windows 3.0 screen savers are not aware of topmost
	windows. Windows 3.1 menus are topmost. A Windows 3.1 compatible screen saver
	from the application vender is required to hide the pull-down menu.
	
	In addition, Windows 3.1 and Windows 95 screen savers do not start if a pull-down
	menu is currently displayed (that is, when the menu is pulled down).
	
	WORKAROUND
	==========
	
	Use only Windows 3.1 compatible screen savers with Windows 3.1 or 3.11.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3.1 afterdark 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
