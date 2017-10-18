---
layout: page
title: "Q297803: FIX: VFP Crashes With Two REPORT Previews Active"
permalink: kb/297/Q297803/
---

## Q297803: FIX: VFP Crashes With Two REPORT Previews Active

	Article: Q297803
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbvfp300bBUG kbvfp300BUG kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to preview a report for a second time while a preview window from
	that report is still active, Visual FoxPro (VFP) may crash.
	
	RESOLUTION
	==========
	
	Test for an existing window by using the WEXIST function. To do this, add the
	following code before the REPORT command in the code that is given in the "More
	Information" section.
	
	  WEXIST("Report Designer - testreport.frx")
	
	VFP detects that a window is already open for this report and does not attempt to
	open a second preview window for the same report.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the behavior, run the following code:
	
	  *!* Q297803 FIX: Visual FoxPro Crashes When Two Instances of REPORT FORM PREVIEW Are Active
	  SET SAFETY OFF
	
	  CREATE CURSOR test (field1 C(10))
	  INSERT INTO test VALUES ("Alec")
	  INSERT INTO test VALUES ("Seregil")
	
	  CREATE REPORT testReport FROM test
	
	  REPORT FORM testReport PREVIEW NOWAIT
	  INSERT INTO test VALUES ("Nysander")
	  REPORT FORM testReport PREVIEW NOWAIT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbReportWriter kbvfp300bBUG kbvfp300BUG kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
