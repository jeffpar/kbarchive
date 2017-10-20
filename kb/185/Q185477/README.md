---
layout: page
title: "Q185477: BUG: ActiveX Control in MDI Child Form Does Not Maintain Focus"
permalink: /kb/185/Q185477/
---

## Q185477: BUG: ActiveX Control in MDI Child Form Does Not Maintain Focus

{% raw %}

	Article: Q185477
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A multiple document interface (MDI) child form contains an ActiveX control, and
	the ActiveX control has the focus. When you leave and return to the MDI child
	form, the focus does not return to the ActiveX control.
	
	RESOLUTION
	==========
	
	To work around this problem, add Me.SetFocus to the GotFocus event of all
	ActiveX controls in the MDI child form.
	
	For Example:
	
	     Private Sub RichTextBox1_GotFocus()
	        Me.SetFocus
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a reference to the Microsoft Rich TextBox Control 5.0 by completing the
	  following steps:
	
	  a. From the Project menu, click Components to display the Components dialog
	     box.
	
	  b. In the Controls tab, check Microsoft Rich Textbox Control 5.0.
	
	  c. Click OK to close the Components dialog box.
	
	3. Add a TextBox and a Rich TextBox control to Form1. Set the MDIChild property
	  of Form1 to True.
	
	4. Add an MDI form to the project. From the Project menu, click Add MDI form.
	  MDIForm1 is created by default.
	
	5. Add a PictureBox control to the MDI form.
	
	6. On the Run menu, click Start (or press the F5 key) to start the program.
	
	7. Click on the TextBox control, and then click on the PictureBox control.
	
	8. Click anywhere on the MDI child form except in the TextBox. Note that the
	  cursor goes to the TextBox.
	
	9. Repeat the same action but use the Rich TextBox control instead.
	
	  RESULTS: The cursor does not return to the Rich TextBox control.
	
	To work around this problem, copy the following code to the code window of
	Form1:
	
	     Option Explicit
	     Private Sub RichTextBox1_GotFocus()
	
	        Me.SetFocus
	
	     End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
