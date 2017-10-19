---
layout: page
title: "Q196102: PRB: User Defined Page Size May Causes Report Distortion"
permalink: /kb/196/Q196102/
---

## Q196102: PRB: User Defined Page Size May Causes Report Distortion

	Article: Q196102
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbReportWriter kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the Width and Length values of the Custom page size using dialogs
	within the Visual FoxPro Report Writer may cause the report to appear distorted
	when the report is reopened. Additionally, the report loses the values typed in
	the Width and Length fields.
	
	RESOLUTION
	==========
	
	To work around this problem, use the Windows Control Panel Printers icon and set
	the Custom paper size as the default.
	
	MORE INFORMATION
	================
	
	This problem does not occur when running on Windows NT since there is no such
	dialog box. To setup a custom paper size, you must create a custom form in
	Windows NT.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Windows 95 or Windows 98, load a dot matrix printer driver, such as the
	  Epson LX-800. Set the dot matrix driver as your default printer in Windows.
	
	2. Use the Printers icon in Control Panel to make sure that the dot matrix
	  printer has a paper size set to something other than Custom.
	
	3. Create a report in Visual FoxPro 3.0, 5.0, or 6.0 and add a few fields. From
	  the File menu, choose Page Setup. In the Page Setup dialog box, click the
	  Print Setup button. In the Print Setup dialog box, click the Properties
	  button and double click the Custom icon. In the User Defined Size dialog box,
	  type in new values for the Width and Length. For example, in the User-Defined
	  Size dialog box, set Unit to 0.01 inches, Width to 850 and Length to 1100 for
	  an 8.5 inch x 11 inch page. Save the changes and close the various dialog
	  boxes.
	
	4. Preview the report. The report looks normal.
	
	  NOTE: This step may produce the following error and you may not be able to
	  preview the report:
	
	  Page Header band is Too Large to fit on Page.
	
	5. Save the report.
	
	6. Reopen the report.
	
	You expect that it should retain the values entered and not cause distortion in
	the report.
	
	However, the report loses the values you typed into the User-Defined Width and
	Length fields. Furthermore, the report may shrink to a much smaller size or the
	header, detail, or footer band may become distorted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbReportWriter kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
