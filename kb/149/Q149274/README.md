---
layout: page
title: "Q149274: FIX: SSTab Is Locked When on Modal Form Shown at Load Time"
permalink: kb/149/Q149274/
---

## Q149274: FIX: SSTab Is Locked When on Modal Form Shown at Load Time

	Article: Q149274
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp500fix kbGrpDSVB
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
	
	Showing a modal form in the Form_Load event of a different form causes any SSTab
	controls on the modal form to ignore all mouse and keyboard commands. This
	problem occurs with both the 16-bit and 32-bit SSTab OCXs.
	
	RESOLUTION
	==========
	
	This problem occurs only when the tab control is on a form that is shown modally
	during the load event of another form. To avoid this problem, either show the
	form non-modally, or show the form modally, but in an event other than the
	Form_Load event of the first form. Alternatively, one can emulate the appearance
	of showing the second form modally using a scheme similar to the one outlined
	below, although any code placed in the Form_Load event will be executed because
	execution will not pause when the second form is shown. This should be taken
	into account if code is written using this method. The following code fragment
	makes the first form invisible and then shows the second form. When the second
	form is unloaded, one line of code in the Unload event of the second form makes
	the first form visible again.
	
	  Sample Code
	  ----------------
	
	     ' On Form1
	     Private Sub Form_Load()
	
	        Form1.Visible = False
	        Form2.Show
	
	     End Sub
	
	     ' On Form2
	     Private Sub Form_Unload()
	
	        Form1.Visible = True
	
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a second form to the project by selecting Form from the Insert menu.
	
	3. Add a single SSTab to Form2. Leave all properties as default.
	
	4. Add this code to the Form_Load event of Form1:
	
	     Private Sub Form_Load()
	        Form2.Show vbModal
	     End Sub
	
	5. Press F5 or select Start from the Run menu to start the application. Form2
	  displays, but the tab control does not respond to any mouse or keyboard
	  commands.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q145638 FIX: Cannot Select Sheridan Tab Control from Modal Form
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbCtrl
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
