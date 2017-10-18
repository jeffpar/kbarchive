---
layout: page
title: "Q123201: Bookshelf Atlas Map Printed on LaserJet III/IIISi Is Dithered"
permalink: kb/123/Q123201/
---

## Q123201: Bookshelf Atlas Map Printed on LaserJet III/IIISi Is Dithered

	Article: Q123201
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
	
	When you print a selected map from the Microsoft Bookshelf '94 Atlas to a
	Hewlett-Packard (HP) LaserJet III or IIISi, the printed map appears to contain
	dots or dithering. These dots do not occur when you print from Windows version
	3.1.
	
	CAUSE
	=====
	
	The Windows 95 Universal Printer Driver dithering option is set to a value other
	than None.
	
	RESOLUTION
	==========
	
	To print a non-dithered map, set the Windows 95 dithering option for the HP
	LaserJet III or IIISi to None. To change the dithering option, perform the
	following steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right (secondary) mouse button to select the HP LaserJet III or IIISi
	  printer.
	
	3. Click Properties, then click the Graphics tab.
	
	4. Under Dithering, click None.
	
	5. Click OK.
	
	MORE INFORMATION
	================
	
	This behavior is caused by changes in the Windows 95 printing system. With the
	Windows 3.x HP printer driver, GDI.EXE is given a non-dithered bitmap to
	stretch; with the Windows 95 Universal Printer Driver, GDI.EXE is given a
	dithered bitmap to stretch, which results in the dithering pattern.
	
	Additional query words: spots dots dotted 3rdparty laser jet
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
