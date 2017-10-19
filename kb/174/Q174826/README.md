---
layout: page
title: "Q174826: Printing Using EMF May Not Allow Text to Wrap Correctly"
permalink: /kb/174/Q174826/
---

## Q174826: Printing Using EMF May Not Allow Text to Wrap Correctly

	Article: Q174826
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbprint win95
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable Enhanced Metafile (EMF) spooling in Windows 95, your program
	does not wrap text around objects properly.
	
	RESOLUTION
	==========
	
	To work around this situation, use one of the following methods:
	
	- Disable EMF spooling with the following steps:
	
	  1. Click the Start button.
	
	  2. On the Settings menu, click Control Panel, then double-click the Printers
	     icon.
	
	  3. In the Printers folder, double-click the icon for your printer.
	
	  4. Click the Printer menu, then click Properties.
	
	  5. Click the Detail tab, and then click the Spool Settings button.
	
	  6. Change the Spool Data Format from EMF to RAW.
	
	- In Micrografx Designer 4.0, you can print one page at a time.
	
	- Consult your software manufacturer about a possible software upgrade.
	
	MORE INFORMATION
	================
	
	The Enhanced Metafile format allows Windows 95 to use a full 32-bit GDI
	instruction set. When you print using the EMF spooling option, Windows 95
	creates an EMF that contains a complete set of instructions that re-create the
	image as printed output. This causes control of your computer to return more
	quickly than under previous versions of Windows.
	
	
	Additional query words: meta file wordwrap micrographics micrographx micrografix 3rdparty
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbprint win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
