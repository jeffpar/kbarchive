---
layout: page
title: "Q142398: How the Paint Event of a Form Works"
permalink: kb/142/Q142398/
---

## Q142398: How the Paint Event of a Form Works

	Article: Q142398
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Help file or reference manual for the Paint event, it says that the Paint
	event will fire when part or all of a form or toolbar is exposed after it has
	been moved or sized -- or after a window that was covering the form or toolbar
	has been moved.
	
	This is true, but the Paint event also fires at other times, such as when a value
	of an object changes or when moving the cursor from one object to another object
	on the form. With this in mind, you should be aware of the consequences of
	certain code that is placed in the Paint event.
	
	MORE INFORMATION
	================
	
	The Paint event is an event of the form and is useful for checking the status of
	objects, forms, variables, or a toolbar. It is wise to not place any code in the
	Paint event that would affect the size or appearance of any objects or
	properties. Changing the caption of an object or changing the value of an object
	on a form would be examples of code that would make the form act strange.
	
	Example
	-------
	
	1. Create a form and add a new property for the form. On the Form menu, click
	  New Property, and in the Name box, type:
	
	  " numcount " (without the quotation marks)
	
	  In the Properties sheet under the Other tab, scroll to the bottom, and change
	  the .F. beside the numcount property to the numeric value of 1.
	
	2. Add a text box to the form.
	
	3. In the Paint event of the form, add the following code:
	
	     THISFORM.NUMCOUNT = THISFORM.NUMCOUNT + 1
	     THISFORM.TEXT1.VALUE = STR(THISFORM.NUMCOUNT)
	
	4. Run the form. Note that the text box is being constantly updated with a new
	  number. This is because the Paint event is being called repeatedly. Every
	  time the value of the text box is changed in Paint event, the Paint event is
	  called again because it sees that the value of an object in the form has
	  changed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
