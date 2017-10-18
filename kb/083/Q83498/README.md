---
layout: page
title: "Q83498: Print Option Unavailable in Windows-Based Applications"
permalink: kb/083/Q83498/
---

## Q83498: Print Option Unavailable in Windows-Based Applications

	Article: Q83498
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes circumstances in which the Microsoft Windows File menu
	Print command is unavailable in Windows-based applications.
	
	MORE INFORMATION
	================
	
	Windows 3.0
	-----------
	
	In Microsoft Windows version 3.0, the File menu's Print command is unavailable
	(dimmed) in Windows-based applications under the following circumstances.:
	
	- No printer driver is installed.
	
	- No default printer is selected.
	
	- The default printer is connected to "None."
	
	- There is no valid Set Temp setting in the AUTOEXEC.BAT file.
	
	You can verify the printer setup by choosing the Printers icon in the Control
	Panel and checking for the printer and the port, and you can determine if there
	is a default printer selected.
	
	To select a default printer, double-click the printer you want to be the default
	printer from the list of printers in the Installed Printers box. If the printer
	you choose is connected to None, choose Configure and select a port other than
	None.
	
	Be sure there is a valid Set Temp setting in the AUTOEXEC.BAT file. It should
	point to a valid directory and must have no trailing spaces.
	
	Windows 3.1
	-----------
	
	In Windows 3.1, you also need a printer driver installed, and a default printer
	selected. To verify the printer setup:
	
	1. Run Control Panel and Printers.
	
	2. Check for an installed printer driver.
	
	In the Printers option there is a Set Default Printer button that enables you to
	choose your default printer. Windows 3.1 also automatically sets up a default
	printer when a printer driver is installed.
	
	Having a printer drive on the "None" port is normally not an issue with Windows
	3.1 because it does not have a "None" port setting. However, if Windows 3.1 is
	installed over Windows 3.0 and a printer was configured for None, Windows will
	keep the None as the configuration. If this is the case:
	
	1. Run Control Panel and Printers.
	
	2. Highlight the printer driver and choose Connect and choose another port.
	
	In Windows 3.1, if a valid Set Temp setting is not found, a default of the
	Windows directory is used.
	
	REFERENCES
	==========
	
	For more information on installing a printer, see pages 158-180 in the
	"Microsoft Windows User's Guide" for version 3.0 or pages 159-163 of the
	"Microsoft Windows User's Guide" for version 3.1."
	
	
	Additional query words: 1.00 3.00 3.00A 3.10 3.11 greyed grayed gray grey
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
