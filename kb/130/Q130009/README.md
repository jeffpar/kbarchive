---
layout: page
title: "Q130009: Mac Bookshelf 94: Only Prints in Upper-Left Corner"
permalink: kb/130/Q130009/
---

## Q130009: Mac Bookshelf 94: Only Prints in Upper-Left Corner

	Article: Q130009
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for the Macintosh 1994 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use one of the following drivers and print from Microsoft Bookshelf
	1994, "The New Way to Look It Up," only part of the image prints in the
	upper-left corner of the page:
	
	- LaserWriter GX
	
	- Epson Stylus Color GX
	
	- Epson Stylus Color (non-GX)
	
	- StyleWriter 7.0 driver
	
	CAUSE
	=====
	
	This behavior is caused by the current version of the LaserWriter GX, Epson
	Stylus Color, and StyleWriter 7.0 drivers.
	
	RESOLUTION
	==========
	
	LaserWriter GX and Epson Stylus Printers
	----------------------------------------
	
	If you are using one of the following printer drivers, use the Apple non-GX
	LaserWriter driver instead:
	
	- LaserWriter GX
	
	- Epson Stylus Color GX
	
	- Epson Stylus Color (non-GX)
	
	NOTE: An AppleTalk card must be installed in the Epson printer for the
	LaserWriter driver to recognize the printer.
	
	To use a non-GX driver, disable QuickDraw GX as follows:
	
	1. Run the Apple QuickDraw GX Installer.
	
	2. Choose Custom install.
	
	3. Install the QuickDraw GX Helper.
	
	4. Restart the Macintosh.
	
	5. Run Bookshelf 1994.
	
	6. From the Apple menu, choose Turn Desktop Printing Off.
	
	  NOTE: Turning off desktop printing disables GX printing inside the current
	  application only. It does not affect printing from other applications.
	
	7. Use the non-GX LaserWriter driver to print to the Epson.
	
	After following these steps, you should be able to print successfully to the
	LaserWriter or Epson Color Stylist printer.
	
	StyleWriter Printer
	-------------------
	
	If you are using the StyleWriter 7.0 driver, use the StyleWriter 7.1 driver
	instead.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: mac 1994multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeMMsearch kbBookshelfSearch kbBookShelf1994Mac
	Version           : :1994 edition
	
	=============================================================================
	
