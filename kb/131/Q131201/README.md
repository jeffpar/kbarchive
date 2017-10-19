---
layout: page
title: "Q131201: INFO: Print Setup Options Saved with the Report"
permalink: /kb/131/Q131201/
---

## Q131201: INFO: Print Setup Options Saved with the Report

	Article: Q131201
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Reports created and saved in Visual FoxPro contain printer setup information
	stored in the EXPR field of the first record in the report (.FRX) file. Only
	those options valid for the printer associated with the report are saved. You
	can use the PRTINFO() function to verify the value contained in the individual
	element, but the EXPR field contains all printer elements available to the
	report.
	
	MORE INFORMATION
	================
	
	The following lists all 13 report elements that can be saved with the report:
	
	ORIENTATION(1)
	PAPERSIZE(2)
	PAPERLENGTH(3)
	PAPERWIDTH(4)
	SCALE(5)
	COPIES(6)
	DEFAULTSOURCE(7)
	PRINTQUALITY(8)
	COLOR(9)
	DUPLEX(10)
	YRESOLUTION(11)
	TTOPTION(12)
	COLLATE(13)
	
	These 13 options are the only setup elements that change the user's current
	printer setup. This is true of both the binary setup information and the clear
	text. The numbers in parentheses correspond to the PRTINFO() function that
	allows read access to these fields. Each option is fully explained in the
	PRTINFO() topic in the Visual FoxPro Help file.
	
	To verify the above information, follow these steps:
	
	1. Create a new report in Visual FoxPro.
	
	2. From the File menu, choose Page Setup.
	
	3. In the Page Setup dialog box, select Printer Setup. In the printer Setup
	  dialog box, make changes to the default printer, orientation, and paper size.
	
	4. Click the More button, and make changes to the remaining elements.
	
	5. Save and run the report.
	
	6. Open the report file as a .DBF file using the USE command.
	
	7. In Browse mode, open the EXPR Memo field. All saved printer setup elements
	  are visible.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
