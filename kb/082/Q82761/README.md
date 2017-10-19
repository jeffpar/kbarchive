---
layout: page
title: "Q82761: Document Causes PostScript Printer to Reset"
permalink: /kb/082/Q82761/
---

## Q82761: Document Causes PostScript Printer to Reset

	Article: Q82761
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
	
	In Windows version 3.1, if you use the PostScript driver version 3.5 to print a
	document with a large number of fonts to a PostScript printer, the printer may
	be reset. This causes the printer to print its startup page in the middle of the
	original print job.
	
	CAUSE
	=====
	
	This problem is usually the result of overflowing the PostScript printer's
	memory. Many older PostScript printers do not have a large amount of printer
	memory. This is a limitation of the printer's hardware.
	
	WORKAROUND
	==========
	
	Follow these steps to work around the problem:
	
	1. From Control Panel, choose the Printers icon.
	
	2. Choose the Setup button.
	
	3. Choose the Options button.
	
	4. Choose the Advanced button.
	
	5. Select Clear Memory Per Page. Make sure the Use Substitution Tab box is
	  selected. This option causes the printer driver to remap TrueType fonts to
	  the resident PostScript fonts built into the printer.
	
	6. If the problem still occurs, reformat the document using fewer fonts or more
	  printer-resident fonts rather than downloadable fonts.
	
	7. If the problem still occurs, scale down the size of bitmaps to make more
	  printer memory available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
