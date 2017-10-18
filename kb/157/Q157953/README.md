---
layout: page
title: "Q157953: FIX: Print Button in Preview Does Not Respect the FOR Clause"
permalink: kb/157/Q157953/
---

## Q157953: FIX: Print Button in Preview Does Not Respect the FOR Clause

	Article: Q157953
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0 the Print button in the Report Preview toolbar does not
	respect the FOR clause or Scope statement in the REPORT FORM <report name>
	FOR expression PREVIEW command.
	
	WORKAROUND
	==========
	
	Use the SET FILTER TO command instead of the FOR clause or Scope statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a report in Report Designer.
	
	2. Add the \Samples\Data\Customer.dbf table to the DataEnvironment.
	
	3. Add a couple of fields from the customer table to the report.
	
	4. Save the report as Test.frx and close the Report Designer.
	
	5. In the Command window, type the following:
	
	  " REPORT FORM TEST FOR Country = "USA" PREVIEW. " (without the quotation
	  marks)
	
	  NOTE: The Preview window comes up with only those records that have Country =
	  "USA."
	
	6. Now click on the Print icon in the Preview toolbar.
	
	The entire report prints out instead of only those records that have Country =
	"USA."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
