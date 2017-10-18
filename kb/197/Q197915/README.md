---
layout: page
title: "Q197915: PRB: Report Width is Larger than the Paper Width"
permalink: kb/197/Q197915/
---

## Q197915: PRB: Report Width is Larger than the Paper Width

	Article: Q197915
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing or displaying a data report, the following error occurs:
	
	  Report Width is Larger than the Paper Width.
	
	CAUSE
	=====
	
	This error occurs because the width of your report exceeds the maximum width
	specified by the default printer.
	
	When a report prints or displays the default printer settings in Control Panel
	are used to determine the layout of the report. If your default printer
	orientation is set up as Portrait and you design a report that extends beyond
	8.5 inches wide, the preceding error occurs.
	
	The width of the report is determined by taking the sum of the RightMargin,
	LeftMargin and the ReportWidth. If this exceeds the width of your default
	printer, the error occurs.
	
	NOTE: The LeftMargin, RightMargin, and ReportWidth are denoted in twips.
	
	  1440 twips equate to 1 inch.
	
	RESOLUTION
	==========
	
	To resolve this problem you need to check the following:
	
	1. Make sure that there is no extra white space in the report. If there is any
	  extra white space in the report, close up that section so that the ruler
	  falls within the width of your default printer.
	
	2. Set your LeftMargin and RightMargin to 0.
	
	3. Check your printer setting to ensure that your default printer is set up
	  correctly. If the report is landscape (that is, greater than 8.5 inches) the
	  default printer should be set accordingly.
	
	There is a .dll file named Pageset.dll that allows you to programmatically switch
	the default printer orientation. For information on how to obtain this DLL,
	please refer to the REFERENCES section of this article.
	
	REFERENCES
	----------
	
	For additional information about Pageset.dll, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q198901 Sample: PageSet.exe Programmatically Changes Default Printer
	
	REFERENCES
	==========
	
	
	Additional query words: DataReport
	
	======================================================================
	Keywords          : kbReportWriter kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
