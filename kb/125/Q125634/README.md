---
layout: page
title: "Q125634: Printing to a File with a Network Printer"
permalink: kb/125/Q125634/
---

## Q125634: Printing to a File with a Network Printer

	Article: Q125634
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
	
	Microsoft Windows for Workgroups version 3.11 contains the following text in the
	[ports] section of the WIN.INI file:
	
	  ; A line with [filename].PRN followed by an equal sign causes
	  ; [filename] to appear in the Control Panel's Printer Configuration
	  ; dialog box. A printer connected to [filename] directs its output
	  ; into this file. The file must be on one of your local drives; you
	  ; cannot print to a network file.
	
	In Windows 95, when you create a local printer connection to <filename>.PRN
	there is no option to share the printer. You cannot share the printer even if
	you add it to the WIN.INI file.
	
	CAUSE
	=====
	
	Windows 95 does not provide support for sharing <filename>.PRN when
	attached as a printer.
	
	WORKAROUND
	==========
	
	To work around this behavior, follow these steps:
	
	1. Double-click My Computer.
	
	2. Double-click the Printers folder.
	
	3. Double-click the Add Printer icon.
	
	4. Use the Add Printer Wizard to add the Generic/Text Only printer as a local
	  printer.
	
	5. Use the right mouse button to click the Generic/Text Only printer, then click
	  Properties on the menu that appears.
	
	6. On the Details tab, click Spool Settings. In the Spool Data Format box, click
	  RAW. Click the OK button.
	
	7. Click OK.
	
	8. Use the right mouse button to click the Generic/Text Only printer, then click
	  Pause Printing on the menu that appears.
	
	When you print to the Generic/Text Only printer, the print job is spooled to the
	Windows\SPOOL\PRINTERS subdirectory as an editable temporary file with an .SPL
	extension. A header file with an .SHD extension is also created. An .SHD file is
	a "shadow" file that contains all the information the spooler needs to resubmit
	a print job in the event that your computer restarts before the print job is
	finished.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
