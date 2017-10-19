---
layout: page
title: "Q143307: How to Retain the ForeColor in a Grid For a Selected Cell"
permalink: /kb/143/Q143307/
---

## Q143307: How to Retain the ForeColor in a Grid For a Selected Cell

	Article: Q143307
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to maintain the changed ForeColor of a grid
	cell upon selecting a cell that has had its default forecolor changed (based on
	criteria of the data) to something other than the default.
	
	MORE INFORMATION
	================
	
	The following example shows how to have a selected cell in a grid retain its
	changed ForeColor upon selecting the cell, instead of the cell changing its
	color back to the default color.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form and add the Customer table (located in Samples\Data) to the
	  Data Environment. Place a grid on the form by dragging the Customer table
	  from the Data Environment.
	
	2. Change the Grid1 ColumnCount property to 2.
	
	3. Ensure that the Grid1 RecordSource property is Customer.
	
	4. Ensure that the RecordSourceType property is 1 - Alias.
	
	5. Change the Grid1 Column1 ControlSource property to customer.cust_id.
	
	6. Change the Grid1 Column2 ControlSource property to customer.country.
	
	7. Place the following code in Grid1 Column1 DynamicForeColor method:
	
	        "IIF(customer.country='Germany',255,0)"  && use the quotation marks
	
	  NOTE: The previous line changes the ForeColor to Red if the country is
	  Germany, otherwise it is Black. (There should be an equal (=) sign in front
	  of this statement in the property sheet dialog line.
	
	8. Place the following code in the Grid1 Column1 Text1 GotFocus event:
	
	     This.SelectedForeColor=IIF(customer.country='Germany',255,0)
	
	  NOTE: The previous line retains the ForeColor of the cell upon selection.
	
	9. Save and run the Form.
	
	Using the up and down arrow keys, scroll through the grid and observe that the
	records having Germany in the Country column maintain red as the cells are
	selected - instead of changing to black. Remove the line of code in
	Grid1.Column1.Text1.GotFocus event, run the form, and observe that the selected
	Germany cell changes to black upon selection.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
