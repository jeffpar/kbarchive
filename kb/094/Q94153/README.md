---
layout: page
title: "Q94153: HPPCL5E: Wrong Colors with Adobe Type Manager"
permalink: kb/094/Q94153/
---

## Q94153: HPPCL5E: Wrong Colors with Adobe Type Manager

	Article: Q94153
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you use the printer driver for the Hewlett-Packard (HP) LaserJet 4/4M
	(HPPCL5E.DRV) version 1.03 or 1.04 and any version of Adobe Type Manager (ATM),
	colors assigned to objects (text and graphics) may be remapped incorrectly if
	you are printing in HP-GL/2 graphics mode.
	
	To work around this problem, use one of the following workarounds:
	
	1. Change the graphics mode to Raster.
	
	2. If you want HP-GL/2 graphics and ATM fonts are not needed for the output,
	  turn off ATM temporarily and print the file.
	
	3. If the problem concerns a graphics object only and ATM fonts are needed but
	  only in black, try changing the colors of the graphics object until an
	  acceptable output is achieved.
	
	MORE INFORMATION
	================
	
	For graphics objects, this problem occurs because the color remapping is being
	performed twice for the same object. When you print the document, ATM remaps the
	colors based on its remapping criteria, then the HPPCL5E driver remaps the
	colors chosen by ATM based on its own criteria. This increases the chance of
	error in what gray scale color is sent to the printer.
	
	All ATM text prints as black in HP-GL/2 graphics mode because of a mismatch
	between raster operations (ROPs) and HP-GL/2 graphics mode.
	
	For more information, contact Hewlett-Packard Technical Support.
	
	The ATM and HP products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: win31 HPGL2 HPGL 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
