---
layout: page
title: "Q109801: PRB: MDI Child Form Painted Twice When Moved Before Loaded"
permalink: kb/109/Q109801/
---

## Q109801: PRB: MDI Child Form Painted Twice When Moved Before Loaded

	Article: Q109801
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you Load an MDI child form and then change the position or size of the MDI
	child form, it gets painted twice -- once in a default starting position and
	then in its final position.
	
	CAUSE
	=====
	
	When you access any properties of a form that is not currently loaded, the form
	is loaded immediately. Note that the Move method simply sets the Left, Top,
	Width, and Height form properties. Since MDI child forms cannot have their
	Visible property False, they cannot be loaded without being Visible. Therefore,
	when you try to set the position or size properties of an MDI child form before
	showing it, the MDI child form appears in a default position before your new
	settings take effect.
	
	RESOLUTION
	==========
	
	Initialize the position of MDI child forms from within their own Form_Load event
	handler. The Form_Load event handler is executed before the form actually
	becomes visible.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project. Form1 is created by default.
	
	2. Set the Form1.MDIChild property to True.
	
	3. From the File menu, choose New MDI Form.
	
	4. From the Options menu, choose Project, and set the Start Up Form to MDIForm1.
	
	5. Add the following code to the MDIForm1 Load event procedure:
	
	     Sub MDIForm_Load ()
	        Form1.Move 0, 0, MDIForm1.ScaleWidth, MDIForm1.ScaleHeight
	     End Sub
	
	6. Run the program. Form1 appears briefly in the upper-left region of MDIForm1,
	  then resizes to fill MDIForm1.
	
	7. To fix this problem, remove the code from the MDIForm1 Load event and place
	  the following code in the MDIForm1 and Form1 event procedures:
	
	     ' MDIForm1:
	     Sub MDIForm_Load ()
	        Form1.Show
	     End Sub
	
	     ' Form1:
	     Sub Form_Load ()
	        Form1.Move 0, 0, MDIForm1.ScaleWidth, MDIForm1.ScaleHeight
	     End Sub
	
	8. Run the program. Now Form1 appears once, in its final position and size.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
