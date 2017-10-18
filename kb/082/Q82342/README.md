---
layout: page
title: "Q82342: Epson FX-286 Prints Page Shifted to the Right in Excel 3.0"
permalink: kb/082/Q82342/
---

## Q82342: Epson FX-286 Prints Page Shifted to the Right in Excel 3.0

	Article: Q82342
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print from Microsoft Excel 3.0 using the Epson FX-286 Printer under
	Microsoft Windows version 3.1, and you use the center vertically/horizontally
	options, the page is shifted to the right.
	
	CAUSE
	=====
	
	This is a problem with the printer hardware, not Windows 3.1. The Epson printer
	manual states:
	
	  Position the pin-feed holder midway between the two stops on the
	  tractor bar....
	
	  (When running the self test) align the left edge of the paper with
	  the first black mark on the paper bail.
	
	WORKAROUND
	==========
	
	To work around the problem, move the paper in the printer over to the right so
	that the very edge of the paper lines up with the |1| mark on the paper bail.
	
	CAUTION: This workaround causes the document to print over the perforated edge of
	the paper when you print from the MS-DOS command line.
	
	
	MORE INFORMATION
	================
	
	The printer driver in Windows 3.1 does not print the same (left to right) as in
	Windows 3.0 or in MS-DOS. When printing from MS-DOS, the driver places text
	right against, but not over, the perforation.
	
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
