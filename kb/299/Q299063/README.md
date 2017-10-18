---
layout: page
title: "Q299063: FIX: Print Preview Appears Inside Debug Frame"
permalink: kb/299/Q299063/
---

## Q299063: FIX: Print Preview Appears Inside Debug Frame

	Article: Q299063
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbReportWriter kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnip
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Visual FoxPro 6.0 (VFP6) Trace window to step through a REPORT
	FORM PREVIEW command, and the Trace window is inside the Debug frame, the Print
	Preview window and Print Preview toolbar are displayed inside the Debug frame.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this problem in VFP6, follow these steps:
	
	1. Open VFP and open the Options dialog box by selecting Options from the Tools
	  menu.
	
	2. Click the Debug tab and ensure that the Environment box is set to Debug
	  Frame. Click OK to close the Options dialog box.
	
	3. Paste the following code in a new program. Save and run the code (the program
	  name is not important).
	
	  *!* Q299063 FIX: Print Preview Appears Inside Debug Frame When Called From Trace Window
	  CREATE CURSOR Q299063 (f1 c(5))
	  INSERT INTO Q299063 (f1) VALUES ('XX')
	  ERASE Q299063_REPO.FR?
	  CREATE REPORT Q299063_REPO FROM Q299063
	  SET STEP ON
	  REPORT FORM Q299063_REPO PREVIEW
	  USE IN Q299063
	  RETURN
	
	4. When the debugger is displayed, click Resume or Step Into on the Debugger
	  toolbar. This executes the REPORT FORM PREVIEW line.
	
	Note that the Print Preview window and Print Preview toolbar are displayed inside
	the Debug frame.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbReportWriter kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
