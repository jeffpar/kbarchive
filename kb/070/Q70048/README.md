---
layout: page
title: "Q70048: Top and Bottom of Printer Output Missing on Legal-Size Paper"
permalink: /kb/070/Q70048/
---

## Q70048: Top and Bottom of Printer Output Missing on Legal-Size Paper

	Article: Q70048
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print to legal-size paper from Microsoft Windows, the document appears
	to have a section missing at the top and the bottom of the page or it prints a
	single page on two sheets of paper.
	
	CAUSE
	=====
	
	- You may need to select legal-size paper in the Printers setup option of
	  Windows Control Panel.
	
	-or-
	
	- Your printer has a line-counting feature that defaults to 8.5 x 11 inches and
	  causes this problem.
	
	WORKAROUND
	==========
	
	Make sure that legal-size paper has been selected from Printers setup"
	
	1. Start Windows Control Panel.
	
	2. Select Printers, then choose Configure.
	
	3. Choose Setup and select legal-size paper.
	
	If the problem continues, try turning off the auto-formfeed on the printer.
	
	MORE INFORMATION
	================
	
	Formfeed on most printers defaults to an 8.5 x 11 inch sheet of paper. The
	printer is counting the number of lines it has printed, not how long the paper
	is. This might occur on any printer that has the option to print to legal-size
	paper.
	
	On laser printers and DeskJet printers, the output look like a section of it has
	been cut off at the top and the bottom. On a dot-matrix printer, the output will
	appear on two separate pages, if the paper is continuous feed.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide." Version 3.00, page 213.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a legal size
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
