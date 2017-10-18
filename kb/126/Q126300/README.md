---
layout: page
title: "Q126300: Errors Using Lexmark IBM 4039 Printer"
permalink: kb/126/Q126300/
---

## Q126300: Errors Using Lexmark IBM 4039 Printer

	Article: Q126300
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print from any Windows-based application, you receive the
	following error message:
	
	  File Error: Cannot find TOR.DRV
	  Not enough memory to print, quit one or more applications to increase
	  available memory and try again.
	
	You may also receive this error message when you start Paintbrush.
	
	Or, you receive the following error message when you start Write:
	
	  Application Error: WRITE Caused a General Protection Fault in Module
	  KRNL386.EXE
	
	Or, when you select the IBM 4039 Print Accelerator from the list of installed
	printers in the Print Setup dialog box, you receive the following error
	message:
	
	  IBM4039-10R Print Accelerator driver TOR is not found. Please reinstall
	  through Control Panel or choose another printer.
	
	CAUSE
	=====
	
	These problems can occur after you install the IBM 4039 Print Accelerator
	printer driver version 02.12.93 and set it as the default printer.
	
	WORKAROUND
	==========
	
	To correct this problem, select another printer as the default printer in the
	Print Setup dialog box. To install the Generic/Text Only printer driver and
	select it as the default printer, follow these steps:
	
	1. Double-click the Control Panel icon in the Main program group.
	
	2. Double-click the Printers icon.
	
	3. Choose the Add button.
	
	4. In the List Of Printers box, select Generic/Text Only, and then choose the
	  Install button.
	
	5. In the Installed Printers box, select Generic/Text Only.
	
	6. Choose the Set As Default Printer button.
	
	Note that when you use the Generic/Text Only printer, you can print only text.
	You cannot print TrueType fonts and you may lose some of the formatting in
	documents. Using the Generic/Text Only printer is a temporary workaround only
	until you can obtain the correct printer driver from the printer's
	manufacturer.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
