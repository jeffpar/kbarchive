---
layout: page
title: "Q148331: PRB: Cannot Open Form That Has =CREATEOBJECT() Property Value"
permalink: kb/148/Q148331/
---

## Q148331: PRB: Cannot Open Form That Has =CREATEOBJECT() Property Value

	Article: Q148331
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a form property is assigned the value =CREATEOBJECT(<classname>) with
	the WriteExpression() method, the form can no longer be opened in the Form
	Designer. If an attempt is made to open the form, the error message "Data type
	is invalid for this property" is displayed and the Form Designer is not opened.
	
	CAUSE
	=====
	
	Although WriteExpression allows storing an object reference to a form property,
	this is not valid in Visual FoxPro.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code:
	
	     IF FILE('myform.scx')
	       ERASE myform.scx
	       ERASE myform.sct
	     ENDIF
	     CLEAR TYPEAHEAD
	     KEYBOARD '{ALT+M}pmyprop{ENTER}'
	     KEYBOARD '{ALT+F}cy'
	     CREATE FORM myform
	     MODIFY FORM myform NOWAIT
	     =ASELOBJ(x,1)
	     x(1).WRITEEXPRESSION('myprop',"=CREATEOBJECT('commandbutton')")
	     CLEAR TYPEAHEAD
	     KEYBOARD 'Y'
	     CLOSE ALL
	
	2. Run the program.
	
	3. Try to open the Myform form in the Form Designer by choosing Open from the
	  File menu. Select Form under Files of Type, and then select Myform. The
	  message "Data type is invalid for this property" will be displayed and the
	  Form Designer does not open.
	
	NOTE: If =CREATEOBJECT(<classname>) is entered through the property sheet,
	the error message is displayed and the property is reset to its original value.
	
	How to Repair the Form
	----------------------
	
	If the form cannot be opened (as described in Step 3), you can repair it by using
	this procedure:
	
	1. Make a backup copy of the form's .scx and .sct files:
	
	  " Copy file <formname>.scx to file <formname>.sbx
	  Copy file <formname>.sct to file <formname>.sbt " (without the
	  quotation marks)
	
	2. Open the form's .scx file as a table by entering the following commands in
	  the Command window:
	
	     USE <formname>.scx
	     BROWSE FIELDS properties FOR UPPER("(crea") $ UPPER(properties)
	
	3. Double-click the word Memo. Then find and remove the following line where
	  PropertyName is the name of the property assigned the =CREATEOBJECT()
	  expression:
	
	        <PropertyName>=CREATEOBJECT(<classname>)
	
	  NOTE: Do not change any other lines. Changing any other lines may render the
	  form unusable.
	
	4. Type a USE command in the Command window to close the .scx file. You should
	  now be able to open the form in the Form Designer. If the form opens
	  properly, you can delete the backup files created in Step 1.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
