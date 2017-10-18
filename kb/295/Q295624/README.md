---
layout: page
title: "Q295624: Stop 0x00000050/0x00000019 Printing Extended Chars to PS Printer"
permalink: kb/295/Q295624/
---

## Q295624: Stop 0x00000050/0x00000019 Printing Extended Chars to PS Printer

	Article: Q295624
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print a document that contains far eastern extended characters
	from US Microsoft Office 2000 PowerPoint to an HP PostScript printer, you may
	see a blue screen with a "stop error 0x00000050" or "stop error 0x00000019"
	message displayed on the screen. The parameters of the stop code may vary in
	either case.
	
	This specific error only occurs if the document that you are trying to print
	contains exended characters, such as the degree symbol or the plus or minus
	symbol from the far eastern font MSP Gothic, and you are trying to print to a
	PostScript printer on a computer that is running a US version of the Windows
	operating system.
	
	The far eastern font MSP Gothic is only available as part of a far eastern
	operating system installation and you cannot install it on US Windows-based
	computers.
	
	CAUSE
	=====
	
	This issue is caused by an overwrite in pool memory. The overwrite occurs
	because the printer driver does not correctly render the far eastern characters
	into PostScript code for printing.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the vendor of the printer for an updated
	PostScript printer driver.
	
	WORKAROUND
	==========
	
	To work around this issue, use the appropriate method.
	
	To Print the Document a Single Time
	-----------------------------------
	
	1. In the program from which you are trying to print, on the File menu, click
	  Print.
	
	2. On the Paper\Quality tab, click Advanced, and then expand PostScript Options.
	
	3. Click the TrueType Font Download option, and then change the setting to
	  Bitmap. Click Ok to close the window. This changes the print settings for
	  this document only so that you can print the document.
	
	To Change This Setting Globally
	-------------------------------
	
	To change this setting globally for all documents in a terminal server
	environment:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the PostScript printer that is causing this issue to occur, and
	  then click Document Defaults.
	
	3. On the Advanced tab, expand Document Options, and then expand PostScript
	  Options.
	
	4. Click the TrueType Font Download option, and then change the setting from
	  Automatic to Bitmap. Click Ok to close the window.
	
	MORE INFORMATION
	================
	
	The methods that are described in the "Workaround" section of this article do
	not work for printing documents that contain standard fonts, such as Arial.
	These fonts are substituted for a printer font from the printer font cartridge.
	For documents that contain TrueType fonts that have no printer font
	substitution, there is a slight increase in the size of the spool file.
	
	
	Additional query words: fatal
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTW400SP6a
	Version           : :4.0,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
