---
layout: page
title: "Q134879: Objects Are Refreshed in the Order They Were Added to the Form"
permalink: kb/134/Q134879/
---

## Q134879: Objects Are Refreshed in the Order They Were Added to the Form

	Article: Q134879
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you add objects to a form, the objects are referenced in the order they
	were added to the form. Therefore, a refresh causes the objects to be refreshed
	in the same order they were added to the form. It is not possible to alter this
	order from the form itself, other than by removing the objects and placing them
	back onto the form in the order desired.
	
	MORE INFORMATION
	================
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	1. Create a new form in Visual FoxPro.
	
	2. Add 2 text boxes and a command button.
	
	3. In the refresh method for Text1, enter this code:
	
	     WAIT WINDOW "Refresh method for text1"
	
	4. In the refresh method for Text2, enter this code:
	
	     WAIT WINDOW "Refresh method for text2"
	
	5. In the click event of the command button, add this code:
	
	     Thisform.refresh()
	
	6. Run the form. You will see the WAIT WINDOW for Text1 fire, then the WAIT
	  WINDOW for Text2 fire. Click the command button and the WAIT WINDOWs appear
	  in the same order again (Text1 then Text2).
	
	7. Modify the form, and click the Text1 box. Select the edit menu and choose
	  cut, or press CTRL+X. The Text1 box disappears from the form.
	
	8. Select edit and paste, or press CTRL+V. The Text1 box reappears.
	
	9. Run the form again, and notice that the refresh events of the text boxes fire
	  differently now (Text2 then Text1).
	
	It is possible to modify the .SCX file, and move records around to affect the
	order that objects are refreshed. The memo field "objname" in the .SCX file
	contains the names of the objects. Moving the records containing the objects on
	the form affects the refresh order.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
