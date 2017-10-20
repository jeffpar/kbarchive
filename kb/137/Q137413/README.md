---
layout: page
title: "Q137413: BUG: Report Writer Creates Child Records in One-to-Many Report"
permalink: /kb/137/Q137413/
---

## Q137413: BUG: Report Writer Creates Child Records in One-to-Many Report

{% raw %}

	Article: Q137413
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a one-to-many report by using the Visual FoxPro Report Writer,
	blank child records are created for parent records without matching children.
	Numeric fields are represented by zeroes, character fields are represented by
	spaces, date fields are represented by a blank date separated by slashes, and
	logical fields are represented by a false (.F.) value. This behavior occurs if
	data from the child table is placed in the Detail band of the report.
	
	WORKAROUND
	==========
	
	For each data type, the workaround is slightly different. The Report Expression
	for each field in the Detail band linked to the child table must be modified.
	
	For Character fields
	--------------------
	
	In the Print When clause, click Remove Line If Blank.
	
	For Any Numeric Data type
	-------------------------
	
	In the Format dialog box, click Blank if Zero. Then in the Print When dialog box,
	click Remove Line If Blank.
	
	For Date or DateTime Fields
	---------------------------
	
	In the Print When dialog box, click Remove Line if Blank. Type the following in
	the "Print Only When Expression is True" box:
	
	     !EMPTY(child.date_field)
	
	Here date_field is the name of your date field.
	
	For Logical Fields
	------------------
	
	In the Print When dialog box, click Remove Line if Blank. Type the following in
	the "Print Only When Expression is True" box:
	
	     !EMPTY(child.key_Field)
	
	In this expression, use the child table's key field that links it to the parent
	table to see if it is empty. If the child table's key field is empty, you know
	there is no child record. The Report Writer automatically assigns logical fields
	a value of false (.F.), therefore the Remove Line if Blank option will not work
	on its own.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the Testdata.dbc database located in the Samples\Data subdirectory under
	  the main Visual FoxPro directory.
	
	2. Create a Report using the one-to-many Report Wizard.
	
	3. In Step 1 of the Wizard, select Orders as the parent table, and select the
	  Order_id field as an output field.
	
	4. In Step 2, select Orditems as the child table, and select the Line_no,
	  Product_id, and Quantity fields for output.
	
	5. In Step 3, establish the relationship between the Order_id fields of the
	  parent and child tables.
	
	6. In Step 4, set the sort order to Order_id. Then click Finish, and save the
	  report for later use.
	
	7. Browse the Orditems.dbf table, mark the record with an Order_id of 10000 for
	  deletion.
	
	8. In the Command window, type:
	
	  " SET DELETED ON " (without the quotation marks)
	
	9. Open the report in the Report Designer, and preview the report. A blank child
	  record is created for Order_id 10000.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
