---
layout: page
title: "Q194570: PRB: TypeOf Operator Does Not Recognize Form Object"
permalink: kb/194/Q194570/
---

## Q194570: PRB: TypeOf Operator Does Not Recognize Form Object

	Article: Q194570
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
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
	
	You are passing an object to an ActiveX component, and attempting to use the
	TypeOf operator to determine if the passed object is a form. TypeOf returns
	False, even if the object is a form.
	
	RESOLUTION
	==========
	
	Do not pass or return forms, controls, or other private objects as method
	arguments of an ActiveX component or control. Such objects are not intended for
	use in this manner, even though such operations may have succeeded in previous
	versions of Visual Basic. See the REFERENCES section below for more information.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. Change the name of the project to TypeOfTest.
	
	3. Change the name of Class1 to testClass.
	
	4. Add the following code to testClass:
	
	        Public Function TestForm(AnyForm As Object) As Boolean
	           If TypeOf AnyForm Is Form Then
	              TestForm = True
	           Else
	              TestForm = False
	           End If
	        End Function
	
	5. Run the project.
	
	6. Start a second instance of Visual Basic, and choose Standard EXE.
	
	7. From the Project menu, add a reference for TestTypeOf.
	
	8. Add the following code to the code window of Form1:
	
	        Private Sub Form_Click()
	           Dim objTest As TypeOfTest.testClass
	           Set objTest = New testClass
	           MsgBox "TypeOf results: " & objTest.testForm(Me)
	           Set objTest = Nothing
	        End Sub
	
	9. Run the project, and click on Form1.
	
	10. The message box should display False, indicating that the TypeOf operator
	  did not recognize the passed object to be of type Form.
	
	REFERENCES
	==========
	
	For more information, query on the topic "On the Evils of Returning Private
	Objects" in Visual Basic 5.0 Books Online or Visual Basic 6.0 Online Help.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
