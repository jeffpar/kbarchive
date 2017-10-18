---
layout: page
title: "Q133163: HOWTO: Control Printer Attributes for a Report at Run Time"
permalink: kb/133/Q133163/
---

## Q133163: HOWTO: Control Printer Attributes for a Report at Run Time

	Article: Q133163
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbprint kbPrinting kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When designing a report, a developer does not always know which printer will be
	used. As a result, the developer needs to give the user a way to change the
	printer and printer attributes at run time. This article shows by example how to
	write code that does this.
	
	MORE INFORMATION
	================
	
	Visual FoxPro has enhanced and added commands and functions for controlling and
	getting printer information. Please see the Help menu for more information on
	these commands:
	
	  SET PRINTER TO
	  APRINTER()
	  PRTINFO()
	  GETPRINTER()
	
	The following example shows that a report can be sent to an HP LaserJet IIID on
	LPT2 with print duplex and landscape selected, and then the same report can be
	sent to a Panasonic KX-P1180 on LPT1 using a custom paper size.
	
	To run the example code, you must have the printers installed in Windows. If you
	don't, you need to install them, and set up a user-defined paper size under
	printer setup in Windows for the Panasonic. Set the user-defined size using
	Millimeters (MM) as the measuring unit with the Width at 2159 and the Length at
	1778.
	
	For testing purposes, you may connect the printers to FILE instead of LPT1 or
	LPT2. If you do connect to FILE, make sure that you also substitute FILE for
	LPT1 or LPT2 in the following example code.
	
	For more information on installing or changing Printer settings in Windows,
	please see Windows' Help menu.
	
	Step-by-Step Example
	--------------------
	
	This example works on the following platforms:
	
	  Windows 3.1
	  Windows for Workgroups 3.11
	  Windows 95
	  Windows NT 3.5 or 3.51
	  Windows NT 4.0
	
	NOTE: Visual FoxPro 5.0 and 6.0 run only under 32-bit operating systems such as
	Windows 95, Windows NT 3.5 and later.
	
	If you have trouble setting custom paper sizes or other printer attributes,
	verify that you have the latest printer driver for your specific platform, and
	check the printer documentation or contact the manufacturer to find out more
	about your printer's capabilities.
	
	1. Open Testdata.dbc in the Vfp\Samples\Data directory or in Visual FoxPro 6.0,
	  the sample path is under _samples+"Testrade\data".
	
	2. Create a new report by using Quick Report. Choose the Customer table and add
	  the Cust_id and Company fields to the report. Save the report as Myreport,
	  and then close the report.
	
	3. Create a text file called Panprint.txt that contains these lines:
	
	  
	
	     DEVICE=Panasonic KX-P1180
	     OUTPUT=LPT1:
	     ORIENTATION=0
	     PAPERSIZE=256
	     PAPERLENGTH=1778
	     PAPERWIDTH=2159
	     DEFAULTSOURCE=8
	
	  NOTE: Most dot-matrix printers use PAPERSIZE=256 to define a custom paper
	  size. If you use a custom paper size, you must include PAPERLENGTH and
	  PAPERWIDTH.
	
	4. Create a second text file called Hpprint.txt that contains these lines:
	
	  
	
	     DEVICE=HP LaserJet IIID
	     OUTPUT=LPT2:
	     ORIENTATION=1
	     PAPERSIZE=1
	     DEFAULTSOURCE=7
	     DUPLEX=2
	
	  NOTE: For more information about the different printer settings, please see
	  PRTINFO() in Visual FoxPro Help menu.
	
	5. Create a program called Runrpt.prg, and enter the following code:
	
	  
	
	     USE Myreport.frx  && Open the FRX as a table
	     LOCATE FOR Objtype = 1 AND Objcode = 53  && find the record that holds
	     ** the printer information. For more information on the Table Structure
	     ** of an .FRX file, see 'Table Structures of Table Files' in Help.
	
	     REPLACE Tag WITH ""  && Remove any Printer codes that may be stored in
	     ** the Tag memo
	
	     REPLACE Tag2 WITH ""  && Remove any Printer codes that may be stored in
	     ** the Tag2 memo
	
	     APPEND MEMO Expr FROM Hpprint.txt OVERWRITE  && Replace any printer
	     ** setting already there with the HP IIID Settings
	
	     USE  && Close Myreport.frx
	     SET PRINTER TO NAME 'HP LaserJet IIID'
	     REPORT FORM Myreport TO PRINT NEXT 60  && Send the report to the
	     ** HP IIID printer using the printer attributes specified in the
	     ** Expr memo field.
	
	     USE Myreport.frx  && Open the FRX as a table
	     LOCATE FOR Objtype = 1 AND Objcode = 53  && find the record that holds
	     ** the printer information
	
	     APPEND MEMO Expr FROM Panprint.txt OVERWRITE  && Replace any printer
	     ** setting already there with the Panasonic KX-P1180 Settings
	
	     USE  && Close Myreport.frx
	     SET PRINTER TO NAME 'Panasonic KX-P1180'
	     REPORT FORM Myreport TO PRINT NEXT 60  && Send the report to the
	     ** Panasonic KX-P1180 printer using the printer attributes
	     ** specified in the Expr memo field.
	
	6. Save and run the program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbprint kbPrinting kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
