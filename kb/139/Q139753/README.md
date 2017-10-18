---
layout: page
title: "Q139753: Fonts Do Not Appear in Corel Draw 4.0 or 5.0"
permalink: kb/139/Q139753/
---

## Q139753: Fonts Do Not Appear in Corel Draw 4.0 or 5.0

	Article: Q139753
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 appscomp kbAppCompatibility kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have more than approximately 250 fonts installed, the Fonts dialog box in
	Corel Draw versions 4.0 and 5.0 may be blank. If you quit Corel Draw and then
	restart it, the fonts appear.
	
	CAUSE
	=====
	
	This behavior occurs because of the way in which Windows 95 manages the dynamic
	swap file. When you open the Fonts dialog box in Corel Draw, it tries to load
	every installed font. If the swap file is needed but it is too small, Corel Draw
	displays an empty dialog box. Windows 95, however, increases the swap file size
	to accommodate the large number of fonts. When you restart Corel Draw, the swap
	file is large enough to load all the fonts.
	
	RESOLUTION
	==========
	
	To resolve this situation, choose the "Let me specify my own virtual memory
	settings" option and set the Minimum setting to approximately 30 megabytes (MB).
	The actual Minimum setting required depends on the number of fonts installed,
	and can be as large as Windows 95 will allow. To access the "Let me specify my
	own virtual memory settings" option, double-click the System icon in Control
	Panel, click the Performance tab, and then click Virtual Memory.
	
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : diskmem win95 appscomp kbAppCompatibility kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
