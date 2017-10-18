---
layout: page
title: "Q139287: Canon Printer Cannot Print Mixed Orientations to FILE: Port"
permalink: kb/139/Q139287/
---

## Q139287: Canon Printer Cannot Print Mixed Orientations to FILE: Port

	Article: Q139287
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a Canon printer and you print a multiple-orientation document
	to the FILE: port, some of the fonts in the document may not be printed when you
	print the output file.
	
	CAUSE
	=====
	
	This behavior is caused by a problem in the firmware of some Canon printers. The
	following printers are known to exhibit this behavior:
	
	- Canon LBP-4
	
	- Canon LBP-4U
	
	- Canon LBP-4 Lite
	
	- Canon LBP-4 Plus
	
	- Canon LBP-8 III
	
	- Canon LBP-8 III Plus
	
	- Canon LBP-8 IIIR
	
	- Canon LBP-8 IIIT
	
	- Canon LBP-8 IV
	
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Enable the Print TrueType As Graphics option. To do so, follow these steps:
	
	  1. Click the Start button, point to Settings, and then click Printers.
	
	  2. Use the right mouse button to click the printer you are using, and then
	     click Properties on the menu that appears.
	
	  3. On the Fonts tab, click the Use TrueType As Graphics option, and then
	     click OK.
	
	- Do not use multiple orientations in one document. Print each section of a
	  multiple-orientation document as a separate document.
	
	MORE INFORMATION
	================
	
	This behavior occurs only with documents printed to the FILE: port that contain
	multiple orientations and more than one TrueType font.
	
	For additional information about these printers, please contact Canon Technical
	Support.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
