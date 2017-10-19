---
layout: page
title: "Q149489: FIX: GotFocus Event Not Executed in Sub Main and SetFocus"
permalink: /kb/149/Q149489/
---

## Q149489: FIX: GotFocus Event Not Executed in Sub Main and SetFocus

	Article: Q149489
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	The GotFocus Event fails to execute when the form is displayed through a Sub
	Main event and the SetFocus event is executed.
	
	RESOLUTION
	==========
	
	Execute the DoEvents method after the SetFocus event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start 16-bit or 32-bit Visual Basic 4.0, or if it is already running, click
	  New Project on the File menu.
	
	2. Add a TextBox control to the Form1 form.
	
	3. On the Insert menu, click Module to create a module. Copy the following code
	  to the Module1 Code window:
	
	        Option Explicit
	
	        Sub Main()
	           Load Form1
	           Stop
	        End Sub
	
	4. Copy the following code to the Code window of the Form1 form:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Me.Show
	           Text1.SetFocus
	           'Uncomment the next line for Workaround
	           'DoEvents
	        End Sub
	
	        Private Sub Text1_GotFocus()
	           Text1.Text = "GotFocus"
	        End Sub
	
	5. On the Tools menu, click Options to display the Options dialog box. Click the
	  Project tab and set Sub Main as the Startup Form.
	
	6. Step through the application by pressing F8. Note that after the SetFocus
	  event, the GotFocus event is skipped. If the DoEvents statement is
	  uncommented, the GotFocus event will be fired if the application is not run
	  in debug mode. If F8 is used to step through each line of code, the GotFocus
	  event will still not be fired.
	
	Additional query words: SetFocus GotFocus Module kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
