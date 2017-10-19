---
layout: page
title: "Q59017: PRINT SCREEN Does Not Print More Than 25 Lines"
permalink: /kb/059/Q59017/
---

## Q59017: PRINT SCREEN Does Not Print More Than 25 Lines

	Article: Q59017
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Problem:
	
	I used special software to set my EGA/VGA display to 43 or 50 line mode under
	MS-DOS Packaged Product Versions 3.20, 3.21, 3.30, and 3.30a. Now, the PRINT
	SCREEN key only prints 25 lines of the screen, and seems to ignore the remaining
	18 or 25 lines, respectively.
	
	Response:
	
	This is not a problem with the MS-DOS Packaged Product Versions 3.2x and 3.3x.
	Because the ANSI.SYS driver for versions prior to MS-DOS Packaged Product
	Version 4.00 does not support more than 25 lines on a display, the PRINT SCREEN
	key does not print more than 25 lines of text.
	
	The MS-DOS Packaged Product Versions 4.00 and 4.01 ANSI.SYS drivers support 25,
	43, and 50 line modes (see Page 100 of the "MS-DOS User's Reference"). For these
	versions, the PRINT SCREEN key will print up to 50 lines of text, depending upon
	the display mode.
	
	Additional query words: 3.20 3.21 3.30 3.30a noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
