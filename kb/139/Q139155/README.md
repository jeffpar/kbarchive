---
layout: page
title: "Q139155: PRB: Current Edit Not Saved with TABLEUPDATE() from Toolbar"
permalink: /kb/139/Q139155/
---

## Q139155: PRB: Current Edit Not Saved with TABLEUPDATE() from Toolbar

	Article: Q139155
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the TABLEUPDATE() command in a toolbar command button click event while
	row or table buffering is enabled does not save the current object's value.
	
	CAUSE
	=====
	
	When you click a toolbar command button, the focus never leaves the object on
	the form. Therefore, any changes that are made to that object are not sent to
	the buffer.
	
	RESOLUTION
	==========
	
	The following code sample is very generic and only handles edit and text boxes.
	The code must be modified for combo boxes and grids containing text boxes, edit
	boxes, and combo boxes. Note that with combo boxes, you will have to use the
	DisplayValue instead of Value.
	
	Add the following code to the Click event of the Toolbar command button:
	
	  *-- Code begins here
	  IF ;
	     INLIST(_screen.ActiveForm.ActiveControl.BaseClass,'Textbox','Editbox')
	     REPLACE (_screen.ActiveForm.ActiveControl.ControlSource) ;
	        WITH _screen.ActiveForm.ActiveControl.Value
	  ENDIF
	     =TABLEUPDATE()
	     _screen.ActiveForm.Refresh
	  *-- Code ends here
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When editing data in a text box, edit box, or combo list box, you must leave the
	object to force the data to be written to the buffer or table if you are using
	table or row buffering.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Toolbar Class.
	
	2. Add a command button to the toolbar.
	
	3. In the click event of that command button, add this code:
	
	     =TABLEUPDATE()
	     _Screen.ActiveForm.ActiveControl.Refresh
	
	4. Save and close the toolbar.
	
	5. Create the table. Type the following in the Command window:
	
	     CREATE TABLE temp (myfield C(10))
	     INSERT INTO temp VALUES ("Hello")
	
	6. Create the form:
	
	  a. Type the following command in the Command window:
	
	        CREATE FORM ztest
	
	  b. Add the Temp table to the Data Environment (DE) of the form.
	
	  c. Set the BufferModeOverride of Cursor1 to 3, optimistic row buffering in
	     the DE.
	
	  d. Click and drag myfield from the DE to the form.
	
	7. Run the test.
	
	  a. Instantiate the toolbar with CREATEOBJECT().
	
	  b. Type the following in the Command window:
	
	        DO FORM ztest
	
	  c. Type "TESTING" (without the quotation marks) in the field.
	
	8. Click the Toolbar command button. Notice that the value has changed back to
	  "Hello."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
