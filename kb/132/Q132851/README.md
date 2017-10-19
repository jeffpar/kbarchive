---
layout: page
title: "Q132851: Printing in PCL Mode from Adobe Illustrator Causes GP Fault"
permalink: /kb/132/Q132851/
---

## Q132851: Printing in PCL Mode from Adobe Illustrator Causes GP Fault

	Article: Q132851
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
	
	When you print from Adobe Illustrator versions 4.0 or 4.03 to an HP printer in
	PCL mode with EMF spooling enabled, you may received a general protection fault.
	
	CAUSE
	=====
	
	The original entry for Adobe Illustrator is never seen by the Unidrv.dll file;
	therefore, Adobe Illustrator incorrectly prints in vector mode.
	
	RESOLUTION
	==========
	
	To work around this behavior, do one of the following:
	
	- Disable EMF spooling for the HP printer when printing from Adobe Illustrator
	  4.0 or 4.03.
	
	-or-
	
	- In the [Compatibility] section of the Win.ini file, change the line that
	  reads
	
	  ILLUSTRATOR=0x8000
	
	  so that it reads:
	
	  ILLUSTRA=0x40008000
	
	  Note that the module name is truncated from ILLUSTRATOR in the original line
	  to ILLUSTRA in the new line.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
