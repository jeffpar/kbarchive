---
layout: page
title: "Q130413: HOWTO: Create an Updatable Cursor (View) to Update Table"
permalink: kb/130/Q130413/
---

## Q130413: HOWTO: Create an Updatable Cursor (View) to Update Table

	Article: Q130413
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how an updatable view to update the data in underlying
	tables can be created. As long as referential integrity rules are not violated,
	this example will update the underlying tables.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example to Create Updatable View that Updates Underlying Table
	---------------------------------------------------------------------------
	
	1. Open the TestData database in SAMPLES\DATA directory. Type MODIFY DATABASE in
	  the Command window to open the Database Designer.
	
	2. Right-click the background. Then choose New Local View, and then choose New
	  View.
	
	3. Choose the CUSTOMER table from the Add Table or View list.
	
	4. In the View Designer, click the Fields tab, and add the CUST_ID and COMPANY
	  fields to the field list.
	
	5. In the Update Criteria tab, click next to CUST_ID in the key column. Then
	  click next to COMPANY in the pencil (updatable) column. Select the "Send SQL
	  Updates" check box.
	
	6. Select the Key Fields Only option.
	
	7. Save this view as UpdCust, and leave the View Designer.
	
	8. Right-click the view, and choose BROWSE. Change a company name, and then
	  close the BROWSE. When the view is closed, the database designer becomes the
	  active area.
	
	9. In the Command window, close the view by issuing USE, or issue
	  =TABLEUPDATE().
	
	10. Right-click the CUSTOMER table in the Database Designer. Choose BROWSE.
	  Notice that the changes made to the view's COMPANY field have been passed
	  back to the CUSTOMER table's COMPANY field.
	
	NOTE: The CUST_ID field, which is the primary key field, is not updatable.
	
	Same Example in Code
	--------------------
	
	This same View can also be created with this code:
	
	  CREATE SQL View UpdCust AS SELECT cust_id, company ;
	     FROM testdata!customer
	  =DBSETPROP('updcust.cust_id','Field','KeyField',.T.)
	  =DBSETPROP('updcust.company', 'Field','UpDatable',.T.)
	  =DBSETPROP('updcust.cust_id', 'Field','UpDatable',.F.)
	  =DBSETPROP('updcust','View','WhereType',1)
	  =DBSETPROP('updcust','View','SendUpdates',.T.)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
