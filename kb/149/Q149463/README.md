---
layout: page
title: "Q149463: FIX: RichTextBox Appears Even If Visible Property Is False"
permalink: /kb/149/Q149463/
---

## Q149463: FIX: RichTextBox Appears Even If Visible Property Is False

{% raw %}

	Article: Q149463
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic program contains two forms with the second form containing a
	RichTextBox control. When the first form executes a command to hide the
	RichTextBox control on the second form and then the focus is set to the second
	form, the RichTextBox control appears but the Visible property of this control
	remains False.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start 32-bit Visual Basic 4.0, or if it is already running, click New Project
	  on the File menu.
	
	2. On the Insert menu, click Form to insert a second form into the project.
	
	3. Add two RichTextBox controls and a Command button to the Form2 form.
	
	4. Copy the following code to the Code window of the Form1 form:
	
	        Option Explicit
	
	        Private Sub Form_Click()
	           Form2.RichTextBox1.Visible = False
	        End Sub
	
	        Private Sub Form_Load()
	           'Show the second form as modeless
	           Form2.Show
	        End Sub
	
	5. Copy the following code to the Code window of the Form2 form:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           'Show the Visible Property of the RichTextBox control
	           'in the Debug window
	           Debug.Print "The Visible Property is " & RichTextBox1.Visible
	        End Sub
	
	        Private Sub Form_Load()
	           Command1.Caption = "Show Visible Property"
	        End Sub
	
	6. On the Run menu, click Start or press the F5 key to start the program. Click
	  the Form1 form and note that the RichTextBox control on the Form2 form
	  disappears. Set the focus to the Form2 form and note that the RichTextBox
	  control appears. Click the Command1 button on Form2 and note that the Visible
	  property is False.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp400bug kbVBp600fix kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
