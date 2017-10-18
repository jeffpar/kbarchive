---
layout: page
title: "Q103735: PostScript Error: Offending Command: MSTT#### Undefined"
permalink: kb/103/Q103735/
---

## Q103735: PostScript Error: Offending Command: MSTT#### Undefined

	Article: Q103735
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print to a PostScript printer using the Microsoft Windows PSCRIPT.DRV
	driver, the error "Offending Command: MSTT<####> Undefined" (where
	<####> is a four-digit number) may print if the printer runs out of
	virtual memory.
	
	CAUSE
	=====
	
	Microsoft Windows downloads TrueType fonts to PostScript printers with the
	MSTT#### naming scheme. If the printer runs out of memory, it may drop fonts,
	causing the error to occur when the font is called again in the print job.
	
	RESOLUTION
	==========
	
	To prevent this problem, first make sure that the virtual memory setting in the
	Options Advanced Options dialog box of the Windows PostScript driver is set
	correctly for the amount of virtual memory available in the printer. Microsoft
	includes a test file with Windows that prints a suggested memory setting for the
	printer. Copy the TESTPS.TXT file to the printer from the Windows SYSTEM
	subdirectory. For example, if Windows is installed in the directory "WINDOWS"
	and the printer is on port LPT1, type the following at the MS-DOS command
	prompt:
	
	  " copy c:\windows\system\testps.txt lpt1:" (without the quotation marks)
	
	The amount of printer memory that Windows uses can be conserved by clearing the
	Clear Memory Per Page box in the Options Advanced Options dialog box of the
	PostScript printer driver. This may slow printing.
	
	For more information on PostScript printers and virtual memory, query on the
	following words in the Microsoft Knowledge Base:
	
	  "virtual" (without the quotation marks) and "printer" (without the quotation
	  marks) and "memory" (without the quotation marks) and "defined" (without the
	  quotation marks) and "connection" (without the quotation marks)
	
	
	Additional query words: win31 Adobe PS unrecognized LaserJet hp Hewlett-Packard II III 4 si m mx IID IIID IIP IIIP IIIsi Apple Laserwriter IINT IINTX NT NTX Pro 600 630 AST Turbolaser NEC Silentwriter 2 290 90 95 990 LC 890 Okidata Okilaser OL 840 Agfa Compugraphic 400 900 Plus Series Dataproducts LZR R4081 2665 DEC LN03R ScriptPrinter LPS PrtServer 40 IBM Pageprinter II-30 31 Model 20 Linotronic 100 300 500 Colormate OS XL Olivetti PG 303 308 HS QMS Colorscript 800 810 TI Omnilaser 2108 2115 Varityper VT-600 Wang LCS15 FontPlus Agfa 9000 Panasonic KX-p4455 410 820 860 3.50 3.51 3.52
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
