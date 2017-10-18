---
layout: page
title: "Q248985: BUG: UserControl Containing ADO Data Control Fails to Unload"
permalink: kb/248/Q248985/
---

## Q248985: BUG: UserControl Containing ADO Data Control Fails to Unload

	Article: Q248985
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 30-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a contained (inside a UserControl) control's DataSource property is set to
	a contained ActiveX Data Objects (ADO) Data Control (MSADODC.OCX) at run-time,
	the container UserControl may fail to unload even when the form hosting the
	control is unloaded. As a result, the Terminate event of the UserControl does
	not fire as expected and if the form hosting the control is repeatedly loaded
	and unloaded, a memory leak may occur.
	
	RESOLUTION
	==========
	
	To work around the problem, use a temporary recordset as described in the "More
	Information" section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project (Project1.) Form1 is created by default.
	
	2. From the Project menu, add another form named Form2, and a UserControl named
	  UserControl1.
	
	3. From the Project menu, choose Components, and select Microsoft ADO Data
	  Control 6.0 (OLEDB). Click OK.
	
	4. From the Project menu, choose References, and then select Microsoft ActiveX
	  Data Objects Recordset 1.5 Library. Click OK.
	
	5. Add a text box named Text1, a command button named Command1, an ADO Data
	  Control (Adodc1), and the following code to UserControl1:
	
	  Private Sub Command1_Click()
	     Set Text1.DataSource = Adodc1
	     ' do something
	     Set Text1.DataSource = Nothing
	  End Sub
	
	  Private Sub UserControl_Terminate()
	     MsgBox "UserControl_Terminate"
	  End Sub
	
	6. Add an instance of the UserControl, a command button named Command1, and the
	  following code to Form2:
	
	  Private Sub Command1_Click()
	     Unload Me
	  End Sub
	
	  Private Sub Form_Terminate()
	     MsgBox "Form2 Terminate"
	  End Sub
	
	7. Add a command button named Command1 and the following code to Form1:
	
	  Private Sub Command1_Click()
	     Form2.Show vbModal
	  End Sub
	
	8. Press F5 to run the project and then click Command1 on Form1. You will then
	  see Form2 display.
	
	9. Press Command1 on the UserControl that is hosted in Form2, and then close
	  Form2. You will see the Terminate event for Form2 fire, but the
	  UserControl1's Terminate event does not fire (it will fire when you close the
	  application).
	
	10. To work around the problem, replace the code of Command1_Click() in the
	  UserControl with this code:
	
	  Private Sub Command1_Click()
	     Dim rs As RecordSet
	     Set rs = Adodc1.RecordSet
	     Set Text1.DataSource = rs
	
	     ' do something
	     Set Text1.DataSource = Nothing
	     Set rs = Nothing
	  End Sub
	
	  Repeat the previous test and note that the UserControl terminates normally.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
