---
layout: page
title: "Q221652: FIX: Filter Ignored With REPORT FORM...NOWAIT and DE Table"
permalink: kb/221/Q221652/
---

## Q221652: FIX: Filter Ignored With REPORT FORM...NOWAIT and DE Table

	Article: Q221652
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a report has a table in the data environment and you use the NOWAIT clause
	with a filter, the first record of the table appears, ignoring the filter. This
	behavior only happens with the PREVIEW clause. Printing a report to the printer
	with the NOWAIT clause works as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a report.
	
	2. Add the Customer table to the data environment.
	
	3. Add the Cust_id, City, and Country fields to the report.
	
	4. Save the report with the name Ztest.
	
	5. Issue the following command in the Command window:
	
	  REPORT FORM Ztest FOR Country = "USA" PREVIEW NOWAIT
	
	Notice that the first record in the report is from the country Germany and not
	the United States.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbReportWriter kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
