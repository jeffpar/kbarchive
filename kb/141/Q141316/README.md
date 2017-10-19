---
layout: page
title: "Q141316: FIX: Report Is Wrong When You Relate Tables on Currency Field"
permalink: /kb/141/Q141316/
---

## Q141316: FIX: Report Is Wrong When You Relate Tables on Currency Field

	Article: Q141316
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you relate two tables on a currency field in the data environment of a
	report, incorrect data is displayed in a report. The same relation will display
	data correctly in a form.
	
	WORKAROUND
	==========
	
	Group on STR(<parent_table.currency_field>,20,4).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	By running the One-to-Many Form Wizard on two tables using the currency fields
	as the relating fields the correct data will be shown.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new report.
	
	2. Right-click the report, and select Data Environment.
	
	3. Add two tables that contain currency fields (the child table needs to have an
	  index on this currency field).
	
	4. Click the currency field in the parent table, and drag it to the currency
	  index expression in the child table. A relation is now set.
	
	5. Set the OnetoMany property to True (.T.) in the Properties sheet for the
	  relationship.
	
	6. Add a Data Grouping that is based on the currency field. Place some fields
	  from the parent table in the Group Header and some fields from the child
	  table in the Detail band.
	
	7. Right-click the report, and select Preview. Note that the data is displayed
	  incorrectly with respect to the relationship.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
