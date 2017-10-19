---
layout: page
title: "Q134860: Problems with MS-DOS Comm. Programs Using ATI Mouse Driver"
permalink: /kb/134/Q134860/
---

## Q134860: Problems with MS-DOS Comm. Programs Using ATI Mouse Driver

	Article: Q134860
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using an ATI mouse, MS-DOS-based communication programs may not
	operate properly in Windows 95.
	
	CAUSE
	=====
	
	There is an incompatibility with the real-mode ATI mouse driver.
	
	RESOLUTION
	==========
	
	Make a backup copy of the Config.sys file and then remove the ATI mouse driver
	line from the Config.sys file. When you restart your computer, the ATI mouse
	will operate correctly in Windows 95, but will be disabled in real mode.
	
	To get full functionality in both protected mode and real mode, contact ATI to
	inquire about obtaining an updated version of their mouse driver.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
