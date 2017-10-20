---
layout: page
title: "Q186143: HOWTO: Use the CallByName Function to Run a Procedure"
permalink: /kb/186/Q186143/
---

## Q186143: HOWTO: Use the CallByName Function to Run a Procedure

{% raw %}

	Article: Q186143
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
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CallByName function provides Visual Basic 6.0 with the ability to call a
	property or method of an object using a string at run-time. Unlike the previous
	versions of Visual Basic in which methods and properties had to be known at
	design-time, the CallByName function allows for a great deal of flexibility at
	run-time. The use of this function is limited to OLE servers and Visual Basic
	class modules.
	
	MORE INFORMATION
	================
	
	The following sample demonstrates how to use the CallByName function to call a
	method, a Property Let, and a Property Get. For more information on the
	CallByName function, please refer to the Visual Basic Help Files and the Books
	On-Line.
	
	Steps to Create Sample Project
	------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a Class Module (Class1) to the project.
	
	3. Add the following code to the Class Module:
	
	        Option Explicit
	        Private MyPropValue As Integer
	
	        Public Function Multiply(x As Integer, y As Integer) As Integer
	           Multiply = x * y
	        End Function
	
	        Public Property Get MyProperty() As Variant
	           MyProperty = MyPropValue
	        End Property
	
	        Public Property Let MyProperty(ByVal vNewValue As Variant)
	           MyPropValue = vNewValue
	        End Property
	
	4. Add the following code to the Form Module (Form1):
	
	        Option Explicit
	        Private Sub Form_Click()
	           Dim myclass As New Class1
	           Dim sum As Integer
	           Dim prop As Integer
	
	           ' Example of calling a method with CallByName
	           ' equivalent to -- sum = myclass.Multiply(12, 12)
	           sum = CallByName(myclass, "Multiply", VbMethod, 12, 12)
	           MsgBox sum
	
	           ' Example of a property let with CallByName
	           ' equivalent to -- myclass.MyProperty = 5
	           CallByName myclass, "MyProperty", VbLet, 5
	
	           ' Example of a property get with CallByName
	           ' equivalent to -- prop = myclass.MyProperty
	           prop = CallByName(myclass, "MyProperty", VbGet)
	           MsgBox prop
	        End Sub
	
	5. Run the Project and click on Form1. A message box displaying the number 144
	  and a message box displaying the number 5 are shown in succession.
	
	Additional query words: kbDSupport kbDSD kbVBA kbVBp600 kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
