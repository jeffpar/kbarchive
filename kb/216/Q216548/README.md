---
layout: page
title: "Q216548: HOWTO: Add Submenus Using Add-Ins"
permalink: kb/216/Q216548/
---

## Q216548: HOWTO: Add Submenus Using Add-Ins

	Article: Q216548
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAddIn kbMenu kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to add submenus to both the Visual Basic IDE and
	the currently active form of the project using an Add-in.
	
	MORE INFORMATION
	================
	
	The following steps explain how to write an Add-in that adds submenus to the
	Visual Basic IDE:
	
	1. Start a new Visual Basic Add-in project. A frmAddIn form and Connect
	  AddinDesigner (Class) are created by default.
	
	2. Open the Connect code window and locate the function AddToAddInCommandBar.
	  Replace the existing code with the following:
	
	  Function AddToAddInCommandBar(sCaption As String)
	     Dim cbMenuCommandBar    As Office.CommandBarPopup  ' cmd bar object
	     Dim cbSubMenuItem       As Office.CommandBarButton ' Added
	     Dim cbMenu              As Object
	     On Error GoTo AddToAddInCommandBarErr
	
	     ' see if we can find the Add-Ins menu
	     Set cbMenu = VBInstance.CommandBars("Add-Ins")
	     If cbMenu Is Nothing Then
	         ' not available so you fail
	         Exit Function
	     End If
	
	     ' add it to the command bar,  Next line Added
	     Set cbMenuCommandBar = cbMenu.Controls.Add(msoControlPopup, , , 1)
	     ' set the caption
	     cbMenuCommandBar.Caption = sCaption
	        ' Next line Added
	     Set cbSubMenuItem = cbMenuCommandBar.Controls.Add(msoControlButton)
	     cbSubMenuItem.Caption = "One"  ' Added
	
	     Set AddToAddInCommandBar = cbSubMenuItem  ' Added
	     Exit Function
	
	  AddToAddInCommandBarErr:
	  End Function
	
	3. Run the project.
	
	4. Start another instance of the Visual Basic IDE creating a new Standard EXE
	  project. Form1 is created by default.
	
	5. Click the Add-In menu. It contains "My AddIn," which in turn contains one
	  submenu named "One."
	
	The following code can be used to create an Add-in to automate the process of
	adding submenus to the active form:
	
	1. Start a new Visual Basic Add-in project. A frmAddIn form and Connect
	  AddinDesigner (Class) are created by default.
	
	2. Open frmAddIn in design mode and place a CommandButton on it. Command1 is
	  created by default.
	
	3. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Command1_Click()
	     Dim CurrentForm As VBComponent      ' current form
	     Dim Ctls        As VBControls       ' form's controls
	     Dim Parent      As VBControl
	     Dim Child       As VBControl
	     Dim GrandChild  As VBControl
	
	     Set CurrentForm = VBInstance.SelectedVBComponent
	     Set Ctls = CurrentForm.Designer.VBControls
	     Set Parent = Ctls.Add("VB.Menu")
	     Parent.Properties!Caption = "&Parent"
	     Set Child = Parent.ContainedVBControls.Add("VB.Menu", Parent)
	     Child.Properties!Caption = "&Child"
	     Set GrandChild = Child.ContainedVBControls.Add("VB.Menu", Child)
	     GrandChild.Properties!Caption = "&Grand Child"
	  End Sub
	
	4. Run this project.
	
	5. Start another instance of the Visual Basic IDE creating a new Standard EXE
	  project. Form1 is created by default.
	
	6. Click the Add-In menu and select "My AddIn."
	
	7. Click the Command1 button in the My Add In dialog.
	
	8. A menu Parent will be added to Form1. The Parent contains submenu Child,
	  which in turn contains a submenu GrandChild.
	
	Additional query words: addin
	
	======================================================================
	Keywords          : kbAddIn kbMenu kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
