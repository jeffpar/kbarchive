---
layout: page
title: "Q138396: HOWTO: Use the Default Windows Printer in Visual FoxPro"
permalink: /kb/138/Q138396/
---

## Q138396: HOWTO: Use the Default Windows Printer in Visual FoxPro

{% raw %}

	Article: Q138396
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbReportWriter kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Report Writer in Visual FoxPro saves specific printer settings in the .frx
	file. Sometimes, a user may want the report to always print to the default
	Windows printer.
	
	MORE INFORMATION
	================
	
	The following steps will remove specific printer settings from the report file:
	
	1. Open the report as a table:
	
	     USE MYREPORT.FRX
	
	2. Locate the record that holds the printer information:
	
	     LOCATE FOR Objtype = 1 AND Objcode = 53
	
	3. Remove the printer settings:
	
	     REPLACE Tag  WITH ""
	     REPLACE Tag2 WITH ""
	     REPLACE Expr WITH ""
	
	4. Close the report table:
	
	     USE
	
	At this point, the printer settings have been removed, and REPORT FORM will
	always print to the default Windows printer.
	
	REFERENCES
	==========
	
	For more information about controlling the printer for a report, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q133163 HOWTO: Control Printer Attributes for a Report at Run Time
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbReportWriter kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
