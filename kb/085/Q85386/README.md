---
layout: page
title: "Q85386: Font Substitution Does Not Work for Microtek TrueLaser"
permalink: kb/085/Q85386/
---

## Q85386: Font Substitution Does Not Work for Microtek TrueLaser

	Article: Q85386
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Windows version 3.1 Microtek TrueLaser PostScript
	printer driver (using the MT_TI101.WPD and PSCRIPT.DRV version 3.5 and 3.51
	drivers), the PostScript driver's ability to use the Font Substitution Table is
	disabled.
	
	For example, if you use the Font Substitution Table to remap Arial to the device
	font Symbol, the output from the TrueLaser printer will still be Helvetica. If
	the same test is done with the TI MicroLaser PS17 printer, the output is Symbol.
	
	WORKAROUND
	==========
	
	To work around this problem, select a PostScript printer with a feature set
	similar to that of the TrueLaser.
	
	MORE INFORMATION
	================
	
	When you select most of the PostScript printers that come with Windows 3.1, you
	are actually installing two files. The first file is PSCRIPT.DRV, which is the
	PostScript driver, and the second is a Windows printer definition file (.WPD)
	that further defines the PostScript driver with usable features such as paper
	sizes and sources.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run Control Panel.
	
	2. Choose the Printers icon.
	
	3. Select the appropriate printer, then choose the Setup button.
	
	4. Choose the Options button, then choose the Advanced button.
	
	5. Make sure the Use Substitution Table check box is selected.
	
	6. Choose the Edit Substitution Table button.
	
	7. In the For TrueType Font list box, select Arial.
	
	8. In the Use Printer Font list box, select Symbol.
	
	When the job is printed to the TrueLaser, the output will be Arial, and not
	Symbol.
	
	The TrueLaser printer is manufactured by Microtek, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
