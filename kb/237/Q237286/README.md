---
layout: page
title: "Q237286: BUG: Event Doesn't Fire when Raised from a DLL's Modal Form"
permalink: /kb/237/Q237286/
---

## Q237286: BUG: Event Doesn't Fire when Raised from a DLL's Modal Form

{% raw %}

	Article: Q237286
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600 kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using compiled components with events, and the event is triggered from a
	modal form inside the component, the event is not received by the client
	application when it is run from the Visual Basic Design Environment (IDE). This
	problem does not occur when both components have been compiled.
	
	RESOLUTION
	==========
	
	Display the form that triggers the event non-modally to avoid the problem when
	testing the application in the IDE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic ActiveX DLL project. Class1 is created by default.
	
	2. On the Project menu, click Project1 Properties. In the Project Properties
	  dialog box, set the Project Name field to MyEventsDll. Click OK.
	
	3. Add the following code to the General Declarations section of Class1:
	
	  Option Explicit
	
	  Public Event DoSomething()
	
	  Public Sub FireEvent()
	      RaiseEvent DoSomething
	  End Sub
	
	  Public Sub ShowForm(ByVal ShowType As Long)
	     Form1.SetEventObject Me
	     If ShowType = vbModeless Then
	        Form1.Caption = "Non-Modal"
	        Form1.Show
	     Else
	        Form1.Caption = "Modal"
	        Form1.Show vbModal
	     End If
	  End Sub
	
	4. On the Project menu, click Add Form to add a new form to the project. Form1
	  is created by default.
	
	5. Add a CommandButton to Form1.
	
	6. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Dim EventObject As Class1
	
	  Public Sub SetEventObject(objNew As Class1)
	     Set EventObject = objNew
	  End Sub
	
	  Private Sub Command1_Click()
	     EventObject.FireEvent
	  End Sub
	
	  Private Sub Form_Load()
	     Command1.Caption = "Fire Event"
	  End Sub
	
	7. Save the project and compile it.
	
	8. On the File menu, click New Project. Create a new Visual Basic Standard EXE
	  project. Form1 is created by default.
	
	9. Change the name of Form1 to frmTest.
	
	10. On the Project menu, click References. Add a reference by checking
	  MyEventsDll and clicking OK.
	
	11. Add two CommandButtons to frmTest.
	
	12. Add the following code to the General Declarations section of frmTest:
	
	  Option Explicit
	
	  Dim WithEvents MyObj As MyEventsDll.Class1
	
	  Private Sub Command1_Click()
	     MyObj.ShowForm vbModal ' Show Form Modal
	  End Sub
	
	  Private Sub Command2_Click()
	     MyObj.ShowForm vbModeless ' Show Form Non-Modal
	  End Sub
	
	  Private Sub Form_Load()
	     Set MyObj = New MyEventsDll.Class1
	     Command1.Caption = "Show Form Modal"
	     Command2.Caption = "Show Form Non-Modal"
	  End Sub
	
	  Private Sub MyObj_DoSomething()
	     MsgBox "Received event from DLL"
	  End Sub
	
	13. Save the project.
	
	14. Press the F5 key to run the project in the IDE.
	
	15. Click the Show Form Non-Modal button to display the form from the DLL as
	  non-modal. Click the Fire Event button. A message box displaying the text
	  "Received event from DLL" should be displayed, confirming that the event
	  fired from inside the DLL reached the client application.
	
	16. Close the non-modal form.
	
	17. Click the Show Form Modal button to display the form from the DLL as modal.
	  Click the Fire Event button and observe that the message box is not
	  displayed. This demonstrates that the event that was fired from the modal
	  form was not received by the client.
	
	18. On the Project menu, click Make Project1.exe to compile the client.
	
	19. Run Project1.exe and repeat the steps above. The message box should display
	  whether the form in the DLL is shown modally or non-modally.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q177996 BUG: UserControl Event Is Not Raised from a Modal Form
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600 kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
