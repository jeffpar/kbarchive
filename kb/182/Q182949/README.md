---
layout: page
title: "Q182949: BUG: Modal Form Disabled When Launched From ActiveX Control"
permalink: /kb/182/Q182949/
---

## Q182949: BUG: Modal Form Disabled When Launched From ActiveX Control

{% raw %}

	Article: Q182949
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You open a Form from a UserControl and no object can have the focus. Users
	cannot click on anything, not even to close the Form.
	
	CAUSE
	=====
	
	If a UserControl on a Modal Form opens another Modal Form which was loaded in
	either the InitProperties or ReadProperties events, no object can have the
	focus.
	
	RESOLUTION
	==========
	
	- Do not load a Form modally from the InitProperties or ReadProperties Events
	  of a UserControl on a Modal Form.
	
	- Use a Timer to re-enable the window with the EnableWindow API function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem occurs only when using the compiled ocx. Everything works as
	expected if the UserControl Project is added to this test Project instead of
	using the compiled ocx. When this problem does occur, the only way to close the
	Form is from the keyboard by pressing the ALT+F4 key combination. If the
	BorderStyle property of the Form is set to 0 - None, the process will not work
	and you cannot close the application gracefully.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a New UserControl Project and name it UsrCtlModalTest.
	
	2. Add a CommandButton to the UserControl, and then add the following code:
	
	        Private Sub Command1_Click()
	           usrTestForm.Show vbModal, Me
	        End Sub
	
	        Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	        ' or in Sub UserControl_InitProperties ...
	           Load usrTestForm
	        End Sub
	
	3. Add a Form to the Project and name it usrTestForm. From the File menu, Make
	  UsrCtlModalTest.ocx. Close and Save the UserControl Project.
	
	4. Create a New Standard EXE Project. Form1 is created by default. Add a second
	  Form to the Project. Add a CommandButton to Form1 with the following code:
	
	        Form2.Show vbModal, Me
	
	5. Choose Components from the Project Menu, and then check UsrCtlModalTest and
	  OK.
	
	6. Add the UsrCtlModalTest control to Form2. Run the Project and click on the
	  buttons to open both Forms.
	
	7. Try to close the last Form by clicking on the Close button in the Control
	  Box.
	
	  Note that no matter where you click, nothing but a beep is produced. The only
	  way to close the Form is by pressing the ALT+F4 key combination. Once closed
	  and reopened, it works fine. This is because you unloaded the instance of the
	  Form that was loaded in either the InitProperties or ReadProperties Event. It
	  works fine to Load the Form from the Click of the button.
	
	Steps to Workaround Behavior
	----------------------------
	
	1. Open the UsrCtlModalTest.ocx project created above and place a Timer control
	  on the Modal Form being launched, usrTestForm.
	
	2. Set the Timer's Interval property to 100.
	
	3. Paste the following into the declarations section of usrTestForm:
	
	  Private Declare Function EnableWindow Lib "user32" (ByVal hwnd As Long, _
	     ByVal fEnable As Long) As Long
	
	  Sub Form_Load
	     Timer1.Enabled = True   ' Turn on the timer
	  End Sub
	
	  Private Sub Timer1_Timer()
	    EnableWindow Me.hwnd, 1
	    Timer1.Enabled = False   ' Turn off the timer
	  End Sub
	
	4. Repeat the steps above to create a Standard EXE project to test the
	  UserControl. This time the Modal From can receive focus and will close when
	  you click on the Close button.
	
	Additional query words: kbActiveX kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbControl kbCtrlCreate
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
