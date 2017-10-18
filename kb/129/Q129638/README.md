---
layout: page
title: "Q129638: PRB: Visible Controls on MDIChild Report as Invisible"
permalink: kb/129/Q129638/
---

## Q129638: PRB: Visible Controls on MDIChild Report as Invisible

	Article: Q129638
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there are two MDI child forms that contain (visible) controls, and one of the
	forms is maximized and then closed, the visible properties for any controls on
	the remaining MDI child form will report False from the Resize event of that
	form.
	
	CAUSE
	=====
	
	Windows hides the MDI client briefly during a restore or close of a maximized
	MDI child. As a result, the other child form underneath the just closed child is
	indeed invisible. The status of the other MDI child form's controls is thus just
	being correctly reported.
	
	RESOLUTION
	==========
	
	This is a limitation of the implementation of MDI forms. However, to check the
	other MDI child form controls' Visible properties correctly, a timer control
	(with its Enabled property set to False at Design Time) can be enabled from the
	resize event of this other MDI child form. Checking the value of the control's
	Visible property from the timer event should result in a value of True.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. From the Insert menu, choose MDI Form. MDIForm1 will be added.
	
	3. From the Insert menu, choose Form. Form2 will be added.
	
	4. Set the MDIChild property of both Form1 and Form2 to True.
	
	5. In the Form_Load event of MDIForm1 add this code:
	
	     Form2.Show
	
	6. Add a text box (Text1) to Form2
	
	7. In the Form_Resize event for Form2, add this code:
	
	     Debug.Print Text1.Visible
	
	8. Press the F5 key to run the program. Maximize Form1. Choose Close from the
	  system menu of Form1, and view the Debug Window. False will be printed as the
	  value of Text1.Visible from Form2's Resize event.
	
	Additional query words: 4.00 hidden vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
