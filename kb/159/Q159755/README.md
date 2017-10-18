---
layout: page
title: "Q159755: FIX: REPORT FORM TO PRINT PROMPT with Landscape FRX Broken"
permalink: kb/159/Q159755/
---

## Q159755: FIX: REPORT FORM TO PRINT PROMPT with Landscape FRX Broken

	Article: Q159755
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprint kbusage kbvfp500aFIXkbfixlist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 95, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Visual FoxPro 5.0 on Windows 95 and use the PROMPT clause on the
	REPORT FORM command, the Page Footer does not print and some records might be
	missing between pages of a landscape report.
	
	CAUSE
	=====
	
	The PROMPT clause on the REPORT FORM command in Windows 95 causes the page
	footer and some records not to print.
	
	WORKAROUND
	==========
	
	1. Do not use the PROMPT clause.
	
	  -or-
	
	  Use the Windows NT 4.0 operating system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	This problem occurs only on the Windows 95 operating system. It does not occur
	in Visual FoxPro 3.0 or 3.0b.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following instructions assume a working knowledge of the Visual FoxPro Report
	Designer:
	
	1. Create a new report.
	
	2. On the File menu, click Page Setup.
	
	3. Choose the Print Setup button in the Page Setup dialog box and click
	  landscape orientation. Click OK to exit both dialog boxes.
	
	4. Add a table to the Data Environment of the report. (The sample Customer table
	  from the Samples\Data directory may be a good choice.)
	
	5. Add a field from the Customer table to the detail band of the report.
	
	6. Create another field in the detail band of the report and use the RECNO()
	  function for the expression in this field.
	
	7. Create a field in the Page Footer of the report. Use
	  "Page"+ALLTRIM(STR(_pageno)) for the expression.
	
	8. Save the report, and click Print Preview. Note that the record numbers are
	  consecutive (assuming the table doesn't have an index order set) and that the
	  page number appears in the Page Footer.
	
	9. In the Command window, type the following command to print the report:
	
	         REPORT FORM <report name> TO PRINT RANGE 1,3
	
	  The RANGE clause allows the first three pages to print. Note that the Page
	  Footer appears on all three pages and the record numbers are in sequence. The
	  report matches the Print Preview.
	
	10. Now use the PROMPT clause on the REPORT FORM command:
	
	         REPORT FORM <report name> TO PRINT PROMPT RANGE 1,3
	
	  In the Print dialog box, click OK. In the printed report, the Page Footer and
	  several records are missing between the pages.
	
	11. If you modify the report to print in portrait orientation, the missing
	  records from the landscape version are printed in the report.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbusage kbvfp500aFIX kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
