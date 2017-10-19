---
layout: page
title: "Q141503: FIX: Can't Connect to Excel Data Source in Remote View Wizard"
permalink: /kb/141/Q141503/
---

## Q141503: FIX: Can't Connect to Excel Data Source in Remote View Wizard

	Article: Q141503
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbMDAC250kbbuglist kbfixlist
	Last Modified: 10-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Remote View Wizard, after selecting Microsoft Excel as your data source
	and subsequently choosing a Microsoft Excel spreadsheet, you receive this error
	message:
	
	  Error connecting Excel Files
	
	RESOLUTION
	==========
	
	To create a remote view to a Microsoft Excel spreadsheet, use the New View
	option instead of the Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Before attempting the following steps, you must first have a Microsoft Excel 5.0
	driver data source created and available. If you are missing this data source,
	use the ODBC Administrator to create a new one. You must also have a Microsoft
	Excel spreadsheet available for testing.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, type these commands:
	
	  CREATE DATA mydata
	  MODIFY DATA mydata
	
	2. Right-click the Database Designer, and choose New Remote View. In the
	  displaying dialog box, click View Wizard.
	
	3. In Step 1, choose your Microsoft Excel data source from the list of available
	  data sources.
	
	4. In the Select Workbook dialog box, choose any Microsoft Excel spreadsheet by
	  double-clicking it. Alternatively, you can select the file and click OK. Note
	  that the Next button is disabled. After selecting the workbook, you will get
	  the error message. Click OK to return to step 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbMDAC250 kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
