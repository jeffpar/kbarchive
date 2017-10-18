---
layout: page
title: "Q287650: BUG: &quot;Error loading printer driver&quot; with Space in Printer Name"
permalink: kb/287/Q287650/
---

## Q287650: BUG: &quot;Error loading printer driver&quot; with Space in Printer Name

	Article: Q287650
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbReportWriter kbvfp300 kbvfp300b kbvfp500 kbvfp500bug kbvfp600 kbOS
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a network printer whose share name contains spaces, you may
	receive the following error message:
	
	  Error loading printer driver.
	
	With Visual FoxPro version 3.0b, you receive the following error message:
	
	  Printer is not ready.
	
	This error only occurs if multiple printers are installed, and the printer with
	the space in the share name is not the default printer.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Make the printer with spaces in the share name the default printer.
	
	- Change the share name so that it contains no spaces.
	
	Note that you may need to quit and restart Visual FoxPro for these workarounds to
	take effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install a printer on a Microsoft Windows NT version 4.0 Server computer and
	  share the printer. Be sure to use a share name that contains spaces.
	
	2. Install two printers on a Windows 98 or Windows Millennium Edition (Me)
	  machine: one that has no spaces in the share name, and the printer that you
	  installed in Step 1. Make sure that the printer without spaces in the share
	  name is the default printer.
	
	3. Create a report with the name TestPrint and add one field. Use
	  TestPrint.TestField for the expression.
	
	4. Create a program using the following code:
	
	  *!* Q287650: PRB: Error Loading Printer Driver When Printing To A Printer With a Space In The Name
	  *!* This code is used to demonstrate the error.
	  LOCAL cPrinter
	  cPrinter = GETPRINTER()
	  IF !EMPTY(cPrinter)
	     SET PRINTER TO NAME (cPrinter)
	  ENDIF
	
	  CREATE CURSOR TESTPRINT (TESTFIELD C(20))
	  APPEND BLANK
	  REPLACE TESTPRINT.TESTFIELD WITH "This should Print."
	
	  REPORT FORM TESTPRINT NOCONSOLE TO PRINTER
	  USE
	
	5. In the Printer dialog box, make sure that you select the printer that has
	  spaces in the name.
	
	You receive the error described in the "Symptoms" section.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2001, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbReportWriter kbvfp300 kbvfp300b kbvfp500 kbvfp500bug kbvfp600 kbOSWin95 kbOSWin98 kbGrpDSFox kbDSupport kbCodeSnippet kbOSWinME kbOSWin98SE 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
