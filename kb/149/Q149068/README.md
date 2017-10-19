---
layout: page
title: "Q149068: FIX: Reprint Group Header on Each Page Malfunctions"
permalink: /kb/149/Q149068/
---

## Q149068: FIX: Reprint Group Header on Each Page Malfunctions

	Article: Q149068
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
	
	If you create a report with two or more data groupings with "Reprint Group
	Header on Each Page" selected for all data groupings, the groupings will print
	in incorrect order on the first page and on subsequent pages when a new outer
	grouping starts on a new page.
	
	WORKAROUND
	==========
	
	Follow steps 1-7 in the "Steps to Reproduce Problem" section of this article.
	Then create and run the following program:
	
	     STORE .T. TO lFlag1
	     REPORT FORM myreport TO PRINT && or PREVIEW
	
	     PROCEDURE PgHead
	     lFlag1 = .T.
	
	     PROCEDURE Grp1
	     lFlag1 = .F.
	
	Now make the following changes to the report:
	
	1. Double-click the Page Header bar, and in the Page Header dialog box, type the
	  following as the On Entry expression:
	
	  " PgHead() " (without the quotation marks)
	
	2. Double-click the Group Header 1 bar, and in the Group Header dialog box, type
	  the following as the On Exit expression:
	
	  " Grp1() " (without the quotation marks)
	
	3. For every object in Group Header 2, add the following expression in the Print
	  When dialog box:
	
	  " lFlag1 = .F. " (without the quotation marks)
	
	4. Select the "Remove Line If Blank" check box.
	
	It is possible to expand on this technique. For example if you have three data
	groupings and you want to reprint the group header on each page, make the
	following changes to the program:
	
	1. Modify the first line of the program to:
	
	     STORE .T. TO lFlag1, lFlag2
	
	2. Add the following line to the PgHead procedure:
	
	     lFlag2 = .T.
	
	3. Add a procedure:
	
	     PROCEDURE Grp2
	     lFlag2 = .F.
	
	4. Modify the report, adding Grp2() as the On Exit expression for Group Header
	  2. Then for every object in the third group, add the following as the "Print
	  Only When Expression Is True" condition:
	
	     lFlag1 = .F. AND lFlag2 = .F.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open Orders.dbf from the Testdata database located in the Samples\Data
	  subdirectory.
	
	2. Create a new index tag named cust_emp on the expression:
	
	     cust_id + emp_id
	
	3. Create a new report, and add the Orders table to the Data Environment.
	
	4. In the properties sheet of the Data Environment, in the Data tab of the
	  Cursor object, set the Order property to cust_emp.
	
	5. Add two Data Groupings to the report, the first (outer) being cust_id and the
	  second (inner) being emp_id. In both cases, select the "Reprint Group Header
	  on Each Page" check box.
	
	6. Add a label "outer group" to Group Header 1 and "inner group" to Group Header
	  2.
	
	7. Save the report as myreport.
	
	8. Preview the report.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
