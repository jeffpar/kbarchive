---
layout: page
title: "Q86576: The Number Nine Graphics Card and Windows 3.1"
permalink: /kb/086/Q86576/
---

## Q86576: The Number Nine Graphics Card and Windows 3.1

	Article: Q86576
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use a Number Nine Graphics Card Model GX with Microsoft Windows version
	3.1, you should have the TIGA display driver installed.
	
	MORE INFORMATION
	================
	
	The Number Nine Graphics card is a video card manufactured by Number Nine
	Corporation. Number Nine technical support recommends using the Windows TIGA
	display driver.
	
	You may also want to add an EMMExclude statement in the [386Enh] section of the
	SYSTEM.INI file. This line should read as follows:
	
	  EMMExclude=C000-CFFF
	
	
	NOTE: You may need to upgrade your Number Nine Graphics card if problems occur
	when you run Windows version 3.1.
	
	Microsoft Diagnostic (MSD) can detect if a Number Nine Graphics card is
	installed.
	
	For further information, contact Number Nine technical support.
	
	
	The Number Nine product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11,95
	
	=============================================================================
	
