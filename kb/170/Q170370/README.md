---
layout: page
title: "Q170370: BUG: Deactivate Event of Non-Modal ActiveX Form Fails to Fire"
permalink: /kb/170/Q170370/
---

## Q170370: BUG: Deactivate Event of Non-Modal ActiveX Form Fails to Fire

	Article: Q170370
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Basic versions 5.0 and higher allow developers to create in-process
	ActiveX servers with non-modal forms. However, when a user switches between a
	non-modal form that is part of the main application and a non-modal form that is
	part of an in-process ActiveX server, the Deactivate Event of the forms will not
	fire.
	
	RESOLUTION
	==========
	
	You can work around this limitation using any message hooking control or
	AddressOf. See the REFERENCES section below for more information.
	
	The message you need to hook is WM_ACTIVATE. When you receive WM_ACTIVATE you
	should check the lower word of the wParam to see if it is equal to WA_INACTIVE.
	If it is then your form is being deactivated and you can call your deactivation
	code. The following code snippet shows how your message handler would work:
	
	     Private Const WM_ACTIVATE As Long = &H6
	     Private Const WA_INACTIVE As Integer = 0
	     Private Const WA_ACTIVE As Integer = 1
	     Private Const WA_CLICKACTIVE As Integer = 2
	
	     Function WindowProc(ByVal hw As Long, ByVal uMsg As _
	        Long, ByVal wParam As Long, ByVal lParam As Long) As Long
	        Select Case Msg
	           Case WM_ACTIVATE
	              Dim fActive As Integer
	              fActive = &HFFFF& And wparam
	              Select Case fActive
	                 Case WA_INACTIVE
	                    ' Call deactivation code here
	                 Case WA_ACTIVE
	                    ' Call activation code here
	                 Case WA_CLICKACTIVE
	                    ' Call activation code here
	                 Case Else
	              End Select
	           Case Else
	        End Select
	     End Function
	
	NOTE: If you have third-party controls on your form, they may be subclassing the
	form as well. If you try to remove your subclass in this scenario, you could
	crash. In these circumstances, you can just leave your subclass in place.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Visual Basic Help topic for the Deactivate event explains the following:
	
	  "If an .exe file built by Visual Basic displays a dialog box created by a
	  .dll file also built in Visual Basic, the .exe file's form will get the
	  Deactivate and LostFocus events. This may be unexpected, because you should
	  not get the Deactivate event:
	
	- If the object is an out-of-process component.
	
	- If the object isn't written in Visual Basic.
	
	- In the development environment when calling a DLL built in Visual Basic."
	
	This documentation is a little misleading and should state the following
	instead:
	
	  "You should not get a Deactivate event if the focus is changed to another
	  form that is not part of the VB Project containing the form that currently
	  has the focus."
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project in Visual Basic. From the Project Menu,
	  select Add Form.
	
	2. Add a Label to the new for,m and set the Caption to the following:
	
	        Non-modal ActiveX form
	
	3. Add the following code to the Form_Deactivate:
	
	        Beep
	
	4. Change the Name of the Form to "frmActiveX" (without the quotation marks).
	
	5. Change the name of Class1 to "FormClass" (without the quotation marks).
	
	6. Change the name of the Project to "FormPrb" (without the quotation marks).
	
	7. Add the following code the class module:
	
	        Public Sub ShowForm()
	          frmActiveX.Show 0 'show it modeless
	        End Sub
	
	8. Save the Project, and then choose Make FormPrb.DLL from the File menu.
	
	9. From the File Menu, select New Project, and then select Standard EXE.
	
	10. Add a CommandButton to the Form.
	
	11. Add the following code to the Form:
	
	        Dim oFormPrb As Object
	
	        Private Sub Command1_Click()
	           oFormPrb.showform
	        End Sub
	
	        Private Sub Form_Deactivate()
	           Beep
	        End Sub
	
	        Private Sub Form_Load()
	           Set oFormPrb = CreateObject("FormPrb.formclass")
	        End Sub
	
	12. Run the Form and then click the CommandButton.
	
	13. Try moving between the two forms.
	
	  NOTE: The Beep in the Form_Deactivate does not fire. However, the title bar
	  of forms changes to show which form has the focus.
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q170570 HOWTO: Build a Windows Message Handler with AddressOf in VB5
	
	  Q168795 HOWTO: Hook Into a Window's Messages Using AddressOf
	
	Additional query words: KBAutomation kbActiveX KBComp KBDLL kbVBp kbdsd kbDSupport kbVBp500bug kbVBp600bug kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug kbprb
	
	=============================================================================
	
