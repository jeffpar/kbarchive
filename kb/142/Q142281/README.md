---
layout: page
title: "Q142281: How to Display Columns Other than Default in a Combo Box"
permalink: /kb/142/Q142281/
---

## Q142281: How to Display Columns Other than Default in a Combo Box

	Article: Q142281
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Combo boxes by default come up with an empty text area. However, you can display
	a value in the combo box other than the BoundColumn property value y using the
	DisplayValue Property in conjunction with the InteractiveChange Event. This
	article shows by example how to do it.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form.
	
	2. Add the Customer table from the Samples\Data directory to the Data
	  Environment of the form. This can be done by either right-clicking the form
	  and selecting Data Environment from the menu or by selecting Data Environment
	  from the View Menu.
	
	3. Drop a combo box on the form.
	
	4. In the Properties Window, set the following properties:
	
	     ColumnCount = 2
	     DisplayValue = "=Company" (without the quotes)
	     RowSource = SELECT cust_id,company FROM CUSTOMER INTO CURSOR mycombo
	     RowSourceType = 3 -SQL Statement
	
	  NOTE: Code was tested with the RowSourceType set to 3 - SQL Select and 2 -
	  Alias. However, you should be able to implement this logic with other
	  RowSourceTypes. You can eliminate the display of the cust_id by setting the
	  ColumnWidths Property to something like this:
	
	     ColumnWidths = "0,100"
	
	  (Eliminate the quotation marks if you are in the Property Window.)
	
	5. Add the following code to the InteractiveChange event:
	
	     This.DisplayValue = This.List(This.ListIndex,2)
	
	6. Save and run the form.
	
	The combo box should display the first company in the table. As you select
	different companies the name should remain in the combo box display.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	
