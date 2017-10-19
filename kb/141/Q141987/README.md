---
layout: page
title: "Q141987: PRB: Values Are Not Updated in Each Column When Changing Rows"
permalink: /kb/141/Q141987/
---

## Q141987: PRB: Values Are Not Updated in Each Column When Changing Rows

	Article: Q141987
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the ActiveRow of a grid does not update the values of the object in
	every column.
	
	CAUSE
	=====
	
	Only the object that receives the focus will have an updated value.
	
	WORKAROUND
	==========
	
	1. Create a new property of the form named oldrow and assign an initial value of
	  -1.
	
	2. Place the following code in the grid's AfterRowColChange event:
	
	     ******* Begin AfterRowColChange *********
	     IF This.ActiveRow<>Thisform.oldrow
	        Thisform.oldrow=This.ActiveRow
	        FOR lnI=1 TO This.ColumnCount
	           lcsource=This.Columns(lnI).ControlSource
	           IF TYPE(lcsource)<>"G" AND TYPE(lcsource)<>"M"
	              This.Columns(lnI).SetAll("VALUE",&lcsource)
	           ENDIF
	        ENDFOR
	     ENDIF
	     ******** End AfterRowColChange *************
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add Vfp\Samples\Data\Employee.dbf to the DataEnvironment of the form.
	
	3. Create a grid by dragging the table from the DataEnvironment to the form.
	
	4. Run the form.
	
	5. Open the Debug window, and type the following on the left side of the Debug
	  window:
	
	     _Screen.Forms(1).Grid1.Column1.Text1.Value
	     _Screen.Forms(1).Grid1.Column2.Text1.Value
	     _Screen.Forms(1).Grid1.Column3.Text1.Value
	     _Screen.Forms(1).Grid1.Column4.Text1.Value
	
	6. Select a cell inside the first column of the grid.
	
	7. Only Grid1.Column1.Text1.Value is updated in the debug window. None of the
	  other values are updated.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	
