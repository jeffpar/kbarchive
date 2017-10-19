---
layout: page
title: "Q130299: PRB: CURVAL() Returns Same Value as OLDVAL()"
permalink: /kb/130/Q130299/
---

## Q130299: PRB: CURVAL() Returns Same Value as OLDVAL()

	Article: Q130299
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, CURVAL() and OLDVAL() return the same value.
	
	CAUSE
	=====
	
	This is by design. CURVAL() and OLDVAL() only return different values when the
	following two conditions are both true:
	
	- Optimistic buffering is enabled.
	
	- Another user has modified the current record in a table while you were
	  editing it.
	
	In addition, CURVAL() and OLDVAL() return the same value if the all three of the
	following conditions are met:
	
	- Two forms in the same Visual FoxPro session are using the same table.
	
	- The data on one instance of the form has been modified.
	
	- The data on another instance of the form has not been modified.
	
	In this case, CURVAL() does not return a different value because the two
	instances of the forms share a data session by default. Because the user has
	locked the record in the first form, the data session in the second form
	considers itself to have locked the record as well.
	
	RESOLUTION
	==========
	
	Choose one of the following threee alternatives:
	
	- If you want to write code to determine if the current user has modified the
	  current record, use the GETFLDSTATE() function. The GETFLDSTATE() function
	  returns a numeric value indicating if one or more fields in the current
	  record have changed, if a record was appended, or if the deletion status of
	  the current record has changed. For more information on using GETFLDSTATE(),
	  please see the Visual FoxPro Help file.
	
	-or-
	
	- If you want to test code in a multiuser scenario, you must have two data
	  sessions running. To do this:
	
	   - Run two instances of Visual FoxPro simultaneously on the same or networked
	     computers.
	
	  -or-
	
	   - Set the DataSession property of the form to 2 - Private Data Session, and
	     run two instances of the form.
	
	
	  -or-
	
	- If you are using pessimistic buffering, or no buffering, change to optimistic
	  row or table buffering by using the CURSORSETPROP() function in the init
	  method of the form. For example, enter the following command to set
	  optimistic table buffering:
	
	     =CURSORSETPROP("BUFFERING",5)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and add a table to the data environment.
	
	2. Drag at least one field from the data environment onto the form.
	
	3. Add a command button to the form. Set the caption of the button to "Display"
	  (without the quotation marks). In the click event of the button, type the
	  following code, substituting the field name from step 2 for
	  <fieldname>. The field name should be enclosed in quotation marks:
	
	     =MESSAGEBOX("Current value of field:  " + CURVAL(<'fieldname'>) + ;
	                CHR(13) + ;
	                "Old value of field:      " + OLDVAL(<'fieldname'>))
	
	4. Add a second command button to the form. Set the caption of the button to
	  "Update" (without the quotation marks). In the click event of the button,
	  type the following code:
	
	     =TABLEUPDATE()
	
	5. In the init event of the form, add the following code:
	
	     =CURSORSETPROP("BUFFERING",5)
	
	6. Save the form as TESTFORM.
	
	7. In the Command window, type DO FORM TESTFORM and press ENTER. Repeat this
	  step.
	
	8. Move the forms so that you can see each form on the screen.
	
	9. Change the data in one copy of the form, and press ENTER. Click the Display
	  button. The current value and old value should be the same. Click the Update
	  button.
	
	10. Click the second copy of the form. Click the Display button. The current and
	  old value should be the same.
	
	11. Close both instances of the form. Change the form.DataSession property to 2,
	  and run both copies of the form again. The curval() and oldval() functions
	  should display the same value on the copy of the form in which you changed
	  the data. After clicking the Update button in this copy of the form, the
	  unmodified copy of the form should display different values for the curval
	  and oldval functions.
	
	Additional query words: VFoxWin multi-user
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	
	=============================================================================
	
