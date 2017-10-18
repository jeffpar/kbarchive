---
layout: page
title: "Q134802: Beyond Planet Earth Generates General Protection Fault"
permalink: kb/134/Q134802/
---

## Q134802: Beyond Planet Earth Generates General Protection Fault

	Article: Q134802
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
	
	When you try to run Beyond Planet Earth in Windows 95, you may receive the
	following error message:
	
	  SBP Caused a General Protection Fault in SBPUSA.EXE
	
	CAUSE
	=====
	
	This problem can occur if Windows 95 is using the High Color (16 bit) or True
	Color (24 bit) color palette. Beyond Planet Earth cannot run if Windows 95 is
	using either of these color palettes.
	
	RESOLUTION
	==========
	
	To work around this problem, configure Windows 95 to use the 256 Color or 16
	Color palette. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Display icon.
	
	3. Click the Settings tab.
	
	4. In the Color Palette box, click 16 Color or 256 Color.
	
	5. Click OK.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
