---
layout: page
title: "Q134889: FIX: Filter Is Not Added for Integer Fields in View Wizards"
permalink: /kb/134/Q134889/
---

## Q134889: FIX: Filter Is Not Added for Integer Fields in View Wizards

	Article: Q134889
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use one of the view wizards, filter conditions are not added to the
	view if they are based on an integer field in the table. This problem occurs
	only with integer data types used with either the Local or Remote View wizards.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open a database.
	
	2. Create a table with an integer field.
	
	3. Add a few records, giving values for the integer field.
	
	4. Create a new view using the Local View wizard.
	
	5. Add the table you created and all the fields.
	
	6. Proceed to the filter page, and add some criteria on the integer field.
	
	7. Preview the query.
	
	The table shows all the records as if the filter condition did not exist.
	
	Additional query words: 3.00 VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
