---
layout: page
title: "Q137448: How to Print a Report to a File"
permalink: kb/137/Q137448/
---

## Q137448: How to Print a Report to a File

	Article: Q137448
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes it is useful to have report output directed to a file first and
	printed at a later time. When this is done, the printer commands are embedded in
	the text of the file at the time the report is executed. This file can then be
	printed directly from Visual FoxPro to either PCL or PostScript printers.
	
	This can be done at the time a report is created (design mode or from the Report
	Wizard) or after the report is saved (programatically or from the Print dialog
	box). There are only a few steps to print to a file, and the steps are similar
	under the Windows, Windows 95, and Windows NT operating systems.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	Follow your Windows User's guide to install any new printers. Once a printer is
	installed, create a new printer of the same type, and connect it to the File:
	port. Set this printer up to be the default printer. As your default printer,
	any new reports will be printed directly to a file along with any
	printer-specific language. You can create a report with the Report Wizard or the
	Report Designer.
	
	When you save a report, the printer driver and printer output device information
	are stored in the internal structure of the report. When a report is saved and
	the output device is File:, the printer driver and printer output device
	settings are saved with the report. So each time a report is printed, the user
	is be prompted for a file name and the report is printed to a file.
	
	To print the files, first check that the destination printer is the same as the
	printer used during report creation. Then from the Print Setup dialog box,
	verify that the default printer is now connected to a real printer port such as
	LPT1. Next, issue the print command or click Print on the File menu.
	
	In the Type list, click ASCII File. You receive a warning that the file will be
	sent directly to the printer and should have all printer-specific language in
	the file. Enter the file name, and click OK. The file will be sent to the
	printer and printed exactly the as if the report had been sent directly to the
	printer.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
