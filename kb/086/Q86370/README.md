---
layout: page
title: "Q86370: Paintbrush Err Msg: Unable to Print, Not Enough Memory or ..."
permalink: kb/086/Q86370/
---

## Q86370: Paintbrush Err Msg: Unable to Print, Not Enough Memory or ...

	Article: Q86370
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message when you print from Paintbrush:
	
	  Unable to print, not enough memory or printer not installed properly. Close
	  other applications or check the Control Panel Printers icon for printer
	  configuration.
	
	CAUSE
	=====
	
	This error message can be caused by Cardinal video drivers. The following video
	driver set can cause the error message in Paintbrush if you are using the
	Cardinal VGA742 1-megabyte video card:
	
	  VGA443.DRV   9-20-91   84,192 bytes
	  V7VGA.3GR    3-10-92   13,824 bytes
	  VDDTLI4.386  9-20-90   39,996 bytes
	
	For more information, contact Cardinal technical support.
	
	WORKAROUND
	==========
	
	To correct this problem:
	
	- Run Setup again and change the video driver to the standard Windows 3.1 VGA
	  driver.
	
	  -or-
	
	- Use a 256-color third-party video driver rather than one with 32K or 64K
	  colors.
	
	
	MORE INFORMATION
	================
	
	For more information about running Setup after Windows is installed, refer to
	Chapter 10 of the Microsoft Windows "User's Guide" for version 3.1.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 3rdparty err msg true color
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
