---
layout: page
title: "Q156550: PRB: Data Type Mismatch Error with Combo Box or List Box"
permalink: /kb/156/Q156550/
---

## Q156550: PRB: Data Type Mismatch Error with Combo Box or List Box

	Article: Q156550
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the ControlSource property of a combo or list box to a Date type field
	produces the following error at run time:
	
	  Error with <comboname>-Value: Data Type Mismatch. Unbinding object
	  <comboname>
	
	CAUSE
	=====
	
	Combo boxes and list boxes handle only Character, Numeric, and Null data types.
	Other field types produce an error when the form runs.
	
	WORKAROUND
	==========
	
	You can work around by using a SELECT - SQL statement to create an array,
	instead of setting the ControlSource property of a combo box or list box to a
	Date type field. Use the array in the RowSource property of the combo or list
	box. The DTOC() function changes the data type from Date to Character. For
	instance, to fix the example illustrated in the STEPS TO REPRODUCE BEHAVIOR
	section below, you can use the following code in the Init method of the form:
	
	     SELECT DTOC(order_date) FROM orders INTO ARRAY adates
	     THISFORM.combo1.RowSource=THISFORM.combo1.RowSource
	
	In the Valid event of the combo box or list box, use a REPLACE statement, instead
	of the ControlSource property, to place the value in the other table:
	
	     REPLACE employee.hire_date WITH CTOD(THISFORM.combo1.Value)
	
	The CTOD() function converts the selection back into a Date data type.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Combo box and list box objects do not handle all data types in the ControlSource
	property. The ControlSource property of a combo box or list box object can
	contain only data types of Character, Numeric, or Null.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called test.
	
	2. Place the orders and employee tables from the Testdata database in the data
	  environment of the form. Testdata is located in the Vfp\Samples\Data folder.
	
	  NOTE: In Visual FoxPro 6.0, Sample data is locate under \\Program
	  Files\Microsoft Visual Studio\Common\Samples\Data
	
	3. Add a combo box or list box to the form and set the following properties:
	
	        ControlSource=employee.hire_date
	        RowSource=orders.order_date
	        RowSourceType=Fields
	
	4. Run the form and the error appears.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
