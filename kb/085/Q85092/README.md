---
layout: page
title: "Q85092: Code Page Modifications Do Not Work in a Window"
permalink: /kb/085/Q85092/
---

## Q85092: Code Page Modifications Do Not Work in a Window

	Article: Q85092
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS-based applications running in a window from Microsoft Windows version 3.1
	do not support third-party font files (.CPI) used in supporting code pages. It
	is possible that these font files will be available when the MS-DOS-based
	application is run in a full screen.
	
	MORE INFORMATION
	================
	
	Font file is a parameter used to add additional font information to a device's
	code page. For example:
	
	  MODE CON CP PREP=((437) APL.CPI)
	
	This adds additional support for APL.CPI fonts to the display (con), which is set
	to code page 437 for the United States.
	
	It is the third-party company's responsibility to design and implement its
	font-file code page sets into Windows by supplying, installing, and supporting
	additional font files in Windows.
	
	Additional query words: 3.10 3.11 country driver.sys device 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
