---
layout: page
title: "Q132799: General Protection Fault in Pscript.drv When Printing"
permalink: /kb/132/Q132799/
---

## Q132799: General Protection Fault in Pscript.drv When Printing

	Article: Q132799
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document on a PostScript printer, you may receive a general
	protection (GP) fault in the Pscript.drv file.
	
	CAUSE
	=====
	
	The current implementation of the Windows 95 PostScript driver can only support
	a maximum of 590 Adobe Type Manager (ATM) fonts. If the total number of ATM
	fonts installed is 590 or greater, you may receive a GP fault.
	
	RESOLUTION
	==========
	
	To work around this behavior, reduce the number of ATM fonts to a number less
	than 590.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
