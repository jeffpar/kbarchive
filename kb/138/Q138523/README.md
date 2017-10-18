---
layout: page
title: "Q138523: PRB: MDI Child Form Drawn Incorrectly with Missing Title Bar"
permalink: kb/138/Q138523/
---

## Q138523: PRB: MDI Child Form Drawn Incorrectly with Missing Title Bar

	Article: Q138523
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 3.0, 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 3.0, 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an MDI child form is maximized by setting the Windowstate property in the
	Load event of the MDI parent form, then the child form may be drawn incorrectly
	when first shown.
	
	WORKAROUND
	==========
	
	Resize the MDI parent form. Then the child form is drawn correctly with the
	Title Bar, Control Box and Restore button.
	
	Or set the height and width of the child form to the ScaleHeight and the
	ScaleWidth of the MDI parent instead of using numerical values. For example, the
	following code sizes the child to the same dimensions as the MDI parent form,
	and then maximizes the form:
	
	     MDIForm1.Width = 6000
	     MDIForm1.Height = 3000
	     Form1.Width = MDIForm1.ScaleWidth
	     Form1.Height = MDIForm1.ScaleHeight
	     Form1.WindowState = 2   ' Maximize the child window
	
	Replace the code in the MDIForm_Load procedure with this code to ensure that the
	child form is painted correctly.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project. Form1 is created by default.
	
	2. Add an MDI parent form by clicking MDI Form on the Insert menu in Visual
	  Basic version 4.0 or by clicking New MDI Form on the File menu in Visual
	  Basic version 3.0.
	
	3. Set the MDIChild property of Form1 to True.
	
	4. In the Load event of the MDI parent form, place the following code:
	
	     MDIForm1.Width = 6000
	     MDIForm1.Height = 3000
	     Form1.Width = 6000
	     Form1.Height = 3000
	     Form1.WindowState = 2   ' Maximize the child window
	
	5. Run the code by pressing the F5 key. The child form appears to be drawn
	  (painted) incorrectly. Refreshing the child form after it is maximized does
	  correct the behavior.
	
	Additional query words: 4.00 3.00 MDI vb4win vb4all
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB300Search kbVB400 kbVB300
	Version           : :3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
