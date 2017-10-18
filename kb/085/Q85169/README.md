---
layout: page
title: "Q85169: Color PRINT SCREEN from MS-DOS Application Is Black and White"
permalink: kb/085/Q85169/
---

## Q85169: Color PRINT SCREEN from MS-DOS Application Is Black and White

	Article: Q85169
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to Microsoft Windows operating system version 3.1.
	Images copied to the Clipboard from MS-DOS-based applications that use full-
	screen color graphics may appear in black and white. This does not occur under
	Windows 3.0.
	
	Windows 3.0 stores Clipboard images as device-dependent graphics. Windows 3.1
	stores Clipboard images as device-independent graphics. The color translation
	problem is caused by an incompatibility between device- independent graphics and
	MS-DOS-based applications that remap the color palette.
	
	MORE INFORMATION
	================
	
	If you have MS-DOS 5.0, you can perform the following test to demonstrate
	whether Windows 3.1 can capture full-screen color graphics from MS-DOS-based
	applications:
	
	1. Run the MS-DOS Shell from Windows 3.1 MS-DOS Prompt.
	
	2. Switch the MS-DOS Shell to graphics mode. The video mode can be changed by
	  choosing Display from the Options menu.
	
	3. Press the PRINT SCREEN key to send the image to the Clipboard.
	
	4. Run Clipboard.
	
	5. You should see the MS-DOS Shell image in color in the Clipboard.
	
	Additional query words: 3.10 3.11 re-map
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
