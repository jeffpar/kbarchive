---
layout: page
title: "Q189741: BUG: Form Falls to Background When MsgBox Appears"
permalink: /kb/189/Q189741/
---

## Q189741: BUG: Form Falls to Background When MsgBox Appears

{% raw %}

	Article: Q189741
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a project has two or more visible forms and a message box is displayed, one
	or more forms fall to the background, possibly behind other forms. This behavior
	did not occur in Visual Basic version 4.0.
	
	CAUSE
	=====
	
	This problem occurs when a MsgBox is displayed from a form that has the
	following properties set:
	
	     ShowInTaskBar = False
	     BorderStyle = 3-FixedDialog
	
	RESOLUTION
	==========
	
	Change the ShowInTaskBar property to True or the BorderStyle property to
	something other than 3-FixedDialog.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce
	------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a new form (Form2) to the project.
	
	3. In the Form1 Click event, place the following code:
	
	        Private Sub Form1_Click()
	           Form2.Show
	        End Sub
	
	4. In the Form2 Click event, place the following code.
	
	        Private Sub Form2_Click()
	           MsgBox "Where's the Form?"
	        End Sub
	
	5. Change the BorderStyle property of Form2 to number 3-Fixed dialog.
	
	6. Change the ShowInTaskBar property of Form2 to False.
	
	7. Press the F5 key to run the project.
	
	8. Click on Form1 and then click Form2. The MsgBox is displayed and then Form2
	  drops to the background, possibly behind Form1.
	
	Additional query words: kbDSupport kbVBp500bug kbVBp400bug kbMessageBox kbdss kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
