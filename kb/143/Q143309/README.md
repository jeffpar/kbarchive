---
layout: page
title: "Q143309: FIX: Report Writer Ignores Constant Band Height Setting"
permalink: kb/143/Q143309/
---

## Q143309: FIX: Report Writer Ignores Constant Band Height Setting

	Article: Q143309
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Report Writer ignores the Constant Band Height setting of the Detail band
	when "Remove Line If Blank" is selected for the expressions in a single-column
	report and there are blank fields in the record source table.
	
	WORKAROUND
	==========
	
	For more information about preserving constant band height when some fields are
	empty in a single column report, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q143063 How to Remove White Lines in Mailing Labels and Reports
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Using the Report Writer, create a single column report based on the Customer
	  table located in the Samples\Data subdirectory.
	
	2. Place the following fields in the Detail band of the report:
	
	     cust_id
	     city
	     region
	     country
	     phone
	     fax
	
	3. Double-click each expression in the Detail band. Then choose the Print When
	  button, and select "Remove Line If Blank."
	
	4. Double-click the Detail band itself, and check "Constant Band Height."
	
	5. Preview the report and look at the record for Cust_id = "ANTON". Notice that
	  the fax number is missing. "Remove Line If Blank" worked; and "Constant Band
	  Height" did not have any effect.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
