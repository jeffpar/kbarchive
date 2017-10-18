---
layout: page
title: "Q216481: PRB: ByRef Has No Effect on Form's Public Variables"
permalink: kb/216/Q216481/
---

## Q216481: PRB: ByRef Has No Effect on Form's Public Variables

	Article: Q216481
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a subroutine that has a ByRef parameter, the subroutine changes
	the values of that parameter when it returns. However, if you pass a form's
	public variables to this subroutine, you find that the variable you passed in
	has not been changed.
	
	CAUSE
	=====
	
	Form Modules, Class Modules, and User Control Modules are object modules. The
	public variables defined in these modules are actually implemented as
	properties, as demonstrated in the following:
	
	  Public FormPubVar as Integer
	
	is effectively implemented as:
	
	  Private m_FormPubVar as Integer
	
	  Public Property Get FormPubVar() as Integer
	     FormPubVar = m_FormPubVar
	  End Property
	
	  Public Property Let FormPubVar(newVal as Integer)
	     m_FormPubVar = newVal
	  End Property
	
	When you pass a form's public variable into a subroutine with the syntax
	Form1.FormPubVar, the Property Get is called and the result is placed in a
	temporary variable. It is this temporary variable that is actually passed to the
	subroutine. When the subroutine returns, only the value stored in the temporary
	variable is changed. The same problem occurs when passing a String parameter
	ByVal.
	
	RESOLUTION
	==========
	
	Use a temporary variable as in the following code snippet to work around the
	problem:
	
	  Dim temp as Integer
	  temp = Form1.FormPubVar
	  ChangeVar temp ' where ChangeVar is the Sub receiving the ByRef parameter
	  Form1.FormPubVar = temp
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a CommandButton to Form1.
	
	3. Paste the following code in the General Declarations section of Form1:
	
	  Option Explicit
	  Public FormPubVar As Integer
	
	  Private Sub Command1_Click()
	  Dim LocVar As Integer
	
	  LocVar = 10
	  ChangeVar LocVar
	  MsgBox "LocVar is changed from 10 to " & LocVar
	
	  ModulePubVar = 10
	  ChangeVar Module1.ModulePubVar
	  MsgBox "ModulePubVar is changed from 10 to " & ModulePubVar
	
	  FormPubVar = 10
	  ChangeVar FormPubVar
	  MsgBox "FormPubVar is changed from 10 to " & FormPubVar
	
	  FormPubVar = 10
	  ChangeVar Me.FormPubVar
	  MsgBox "Me.FormPubVar is changed from 10 to " & Me.FormPubVar
	  End Sub
	
	4. On the Project menu, click Add module. Click the Open button in the Add
	  Module dialog box.
	
	5. Add the following code to the General Declarations section of Module1:
	
	  Option Explicit
	  Public ModulePubVar As Integer
	
	  Public Sub ChangeVar(ByRef v As Integer)
	      v = v + 10
	  End Sub
	
	6. Run the application and click Command1. Note the values displayed in each
	  message box, clicking OK on each one. The last message box demonstrates that
	  Me.FormPubVar has not been changed.
	
	NOTE: When you use FormPubVar directly in the form's code window, Visual Basic
	passes in the internal representation of the FormPubVar instead of a temporary
	variable as is the case when you pass Me.FormPubVar.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
