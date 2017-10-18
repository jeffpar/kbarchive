---
layout: page
title: "Q137683: Duplicate .fon Files Installed During Setup"
permalink: kb/137/Q137683/
---

## Q137683: Duplicate .fon Files Installed During Setup

	Article: Q137683
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
	
	When you upgrade Windows 3.1 to Windows 95, you may find duplicate .fon files in
	the Windows\Fonts and Windows\System folders.
	
	CAUSE
	=====
	
	Setup does not delete the .fon files in the Windows\System folder because they
	are in use when you are upgrading from Windows 3.1 to Windows 95. Once Windows
	95 is installed, these files are no longer needed. Setup copies the necessary
	font files into the Windows\Fonts folder.
	
	RESOLUTION
	==========
	
	Delete the .fon files in the Windows\System folder. To do so, follow these
	steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode Command Prompt Only from the Startup
	  menu.
	
	2. Change to the Windows\System folder by typing the following line:
	
	  " cd windows\system " (without the quotation marks)
	
	3. Delete the .fon files by typing the following line: del *.fon
	
	4. Restart your computer normally.
	
	Additional query words: ttf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
