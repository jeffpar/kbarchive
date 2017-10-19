---
layout: page
title: "Q93154: Printing to Non-Default Printer Causes Errors/Corrupt Output"
permalink: /kb/093/Q93154/
---

## Q93154: Printing to Non-Default Printer Causes Errors/Corrupt Output

	Article: Q93154
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the PSCRIPT.DRV printer driver is installed for more than one type of
	PostScript printer, printing to a non-default printer may cause printer errors
	or corrupted printer output.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows and Windows for
	Workgroups version 3.10 and 3.11. We are researching this problem and will post
	new information here as it becomes available.
	
	MORE INFORMATION
	================
	
	If your default printer is a PostScript printer using the PSCRIPT.DRV printer
	driver, and you select another PostScript printer from within an application,
	your printer output may be corrupted or you may receive printer errors if the
	default printer driver is a color PostScript printer.
	
	A common error message in this situation indicates an "Offending Command." This
	error message will occur in a format appropriate to your printer (either printed
	on a page or indicated by the front panel display of your printer).
	
	WORKAROUND
	==========
	
	To work around the printer errors and corrupted printer output, use the Windows
	Control Panel to select the printer you want to use as the default printer:
	
	1. From the Control Panel, choose the Printers icon.
	
	2. Select the printer you want to use to print your document and choose the Set
	  As Default Printer button.
	
	When you want to print to the other printer you will have to change the default
	printer in the Printers section of Control Panel.
	
	NOTE: If you choose the black and white PostScript printer as the default
	printer, you will not experience these difficulties. If you select the black and
	white printer as the default printer, you can select a printer from within an
	application and the color commands will be issued to the printer correctly.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
