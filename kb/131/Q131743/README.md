---
layout: page
title: "Q131743: Fatal Exception Selecting to End of Line in Edit"
permalink: kb/131/Q131743/
---

## Q131743: Fatal Exception Selecting to End of Line in Edit

	Article: Q131743
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
	
	When you are editing a text file in an MS-DOS command prompt session with the
	Windows 95 Edit tool, you may receive the following error message:
	
	  A fatal exception occurred at 0028:C0037E2E in VXD VDD(01) + 00001D8A. The
	  current application will be terminated.
	
	This error occurs when you use the mouse to select and scroll text beyond the
	right edge of the screen.
	
	CAUSE
	=====
	
	This error can occur if the MS-DOS command prompt window is maximized and you
	are using Windows 3.1 Diamond Viper video drivers.
	
	RESOLUTION
	==========
	
	Either use the Windows 95 standard VGA video driver, or obtain updated drivers
	from Diamond for the Viper video card.
	
	Note that this error does not occur if you are using a full-screen MS-DOS command
	prompt session.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
