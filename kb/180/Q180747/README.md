---
layout: page
title: "Q180747: FIX: Focus Does Not Return to an MDI Parent Form"
permalink: /kb/180/Q180747/
---

## Q180747: FIX: Focus Does Not Return to an MDI Parent Form

	Article: Q180747
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MDI child form opens a second modal form and you then switch to another
	Windows program. When you switch back to the second modal form and close the
	modal form, the focus goes to the other Windows program instead of the MDI child
	form.
	
	RESOLUTION
	==========
	
	There are two possible workarounds for this problem:
	
	- Set the focus to the MDI child form after showing the non-MDI child form with
	  the SetFocus method.
	
	  -or-
	
	- Use the SetForegroundWindow API in the unload event of the modal form. The
	  MORE INFORMATION section below shows you how to create a project that
	  demonstrates this problem. If you want this sample project to include the
	  workaround, add the following code to Form2:
	
	        Option Explicit
	        Private Declare Function SetForegroundWindow Lib "user32" _
	          (ByVal hwnd As Long) As Long
	
	        Private Sub Form_Unload(Cancel As Integer)
	           SetForegroundWindow MDIForm1.hwnd
	        End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default. Set the MDIChild property of Form1 to True.
	
	2. Add an MDI form to the project by completing the following steps:
	
	  a. From the Project menu, click Add MDI form to display the Add MDI Form
	     dialog box.
	
	  b. From the New tab, check that MDI form is highlighted.
	
	  c. Click Open to close the Add MDI Form dialog box.
	
	3. Add a second form to the project.
	
	4. Add a CommandButton to Form1.
	
	5. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	        Private Sub Command1_Click()
	           Form2.Show vbModal
	        End Sub
	
	6. Start another Windows program, such as Windows Explorer.
	
	7. Switch back to Visual Basic. On the Run menu, click Start or press the F5 key
	  to start the program. Click the Command Button to display the Second form.
	  Switch to the other Windows program using the ALT+TAB KEYS. Switch back to
	  the modal from with the ALT+TAB keys. Close the modal form. Note that the
	  focus goes to the Windows program rather than the MDI Parent form.
	
	Additional query words: kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
