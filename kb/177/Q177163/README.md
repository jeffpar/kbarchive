---
layout: page
title: "Q177163: FIX: Focus Doesn't Return to MDI Form After Modal Form Is Closed"
permalink: /kb/177/Q177163/
---

## Q177163: FIX: Focus Doesn't Return to MDI Form After Modal Form Is Closed

	Article: Q177163
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
	
	An MDI child form shows a second non-MDI form modally. The second form displays
	a message box (or another modal form). When you close the second form after
	dismissing the message box, the focus does not return to the MDI child form as
	expected. The focus returns to the MDI child form only when the second form does
	not display a message box (or a modal form).
	
	RESOLUTION
	==========
	
	To work around this problem, set the focus to the MDI child form after you've
	shown the non-MDI child. The workaround is illustrated in the MORE INFORMATION
	section of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default. From the Form1 properties dialog box, set the MDIChild property to
	  True.
	
	2. From the Project menu, click Add MDI Form to display the Add MDI Form dialog
	  box. Click Open to add an MDI Form to the project.
	
	3. Add a second form to the project.
	
	4. Add a CommandButton to each of the forms.
	
	5. Copy the following code to the code window of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Command1.Caption = "Show Modal Form"
	        End Sub
	
	        Private Sub Command1_Click()
	           Form2.Show vbModal
	           'Uncomment the following statement to work around the problem
	           'Me.SetFocus
	        End Sub
	
	6. Copy the following code to the code window of the Form2 form:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Command1.Caption = "Show Message Box."
	        End Sub
	
	        Private Sub Command1_Click()
	           MsgBox "Displayed from the non-MDI form."
	        End Sub
	
	7. Press the F5 key to run the program, and then complete the following steps:
	
	   - Click Show Modal Form in the MDI Child form and the second form appears.
	
	   - Click Show Message Box in the second form and the message box appears (a
	     message box is modal).
	
	   - Click OK in the message box to close the message box.
	
	   - Close the second form.
	
	  Results: Focus does not return to the MDI child form as expected.
	
	Additional query words: kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport kbMDI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
