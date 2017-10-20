---
layout: page
title: "Q142567: HOWTO: Filter a Child Grid Using a Parent Combo Box"
permalink: /kb/142/Q142567/
---

## Q142567: HOWTO: Filter a Child Grid Using a Parent Combo Box

{% raw %}

	Article: Q142567
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp600
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a one-to-many relationship, you can filter child records displayed in a Grid
	by using the Value property of a combo box. One method is to use the
	RelationalExpr and LinkMaster properties of a grid. This article gives you
	another method, which uses a SET FILTER command along with a SELECT-SQL
	statement as the row source of a combo box.
	
	MORE INFORMATION
	================
	
	To filter the records from the child grid, use the related field from the parent
	table as the RowSource of a combo box, and use the SET FILTER command.
	
	Step-by-step Example
	--------------------
	
	1. Create a new form by typing the following command in the Command window:
	
	     CREATE FORM <form name>.
	
	2. Open the Data Environment, and add the Customer and Orders tables from the
	  Testdata.dbc database located in the Vfp\Samples\Data subdirectory for Visual
	  FoxPro 5.0 or home(2)+"data" for Visual FoxPro 6.0.
	
	3. From the Form menu, choose New Property, and in the Name box, type MVAR. Then
	  click OK.
	
	4. Set the Properties window to the Form1 object. The MVAR property will be
	  located at the bottom of the list on the All tab. Set the value of MVAR to
	  "". This will initalize MVAR to a Character Data Type.
	
	5. Drag the Orders table to the form to create a grid. Change the name property
	  of the grid to Grid1.
	
	6. Place a combo box on the form after selecting it from the Form Controls
	  toolbar. Type the following statement in the RowSource property for the combo
	  box:
	
	        SELECT CUST_ID FROM CUSTOMER INTO CURSOR TEMP
	
	7. Choose 3-SQL Statement in the RowSourceType property.
	
	8. Open the Code window for the combo box, and add the following code to its
	  InteractiveChange event:
	
	        SELECT ORDERS
	        THISFORM.MVAR=THIS.VALUE
	        SET FILTER TO CUST_ID = THISFORM.MVAR
	        GO TOP
	        THISFORM.Grid1.RecordSource=THISFORM.Grid1.RecordSource
	
	9. Save and run the form. When you select an item from the combo box, the grid
	  should refresh and display the related child records.
	
	NOTE: An index must exist on the filtered field from the child table to take
	advantage of the Rushmore technology.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
