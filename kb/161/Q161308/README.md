---
layout: page
title: "Q161308: HOWTO: Modify Properties of an Object Passed ByVal"
permalink: /kb/161/Q161308/
---

## Q161308: HOWTO: Modify Properties of an Object Passed ByVal

{% raw %}

	Article: Q161308
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you pass an object by value to a procedure, you can modify its properties
	in the procedure. Using ByVal with an object parameter affects how the object
	can be redefined in the procedure. If an object variable is passed to a
	procedure by using the ByVal keyword and the object parameter is set to a
	different object, the object variable still references the original object.
	Conversely, if an object variable is passed to a procedure by reference and the
	object parameter is set to a different object, the object variable references
	this different object. This article provides examples that highlight the
	functionality of the ByVal keyword.
	
	MORE INFORMATION
	================
	
	Consider the following sample code where Class1 has one public text property
	called Description:
	
	     Private Sub PassByVal(ByVal C As Class1)
	        C.Description = "Modified Value"
	     End Sub
	
	     Private Sub Form_Load()
	        Dim MyClass As Class1
	        Set MyClass = New Class1
	        MyClass.Description = "Original Value"
	        PassByVal MyClass
	        MsgBox MyClass.Description
	     End Sub
	
	In this case, the message box displays "Modified Value" even though the object is
	passed by value. You might expect that the ByVal would prevent the procedure
	from modifying the property. However, when used with objects, ByVal affects the
	procedure's ability to redefine the object.
	
	If an object variable is passed to a procedure by using the ByVal keyword and the
	object parameter is set to a different object, the object variable still
	references the original object. Consider the following example code with the
	same definition of Class1:
	
	     Private Sub PassByValSet(ByVal C As Class1)
	        Dim A As Class1
	        Set A = New Class1
	        A.Description = "New Value"
	        Set C = A
	     End Sub
	
	     Private Sub Form_Load()
	        Dim MyClass As Class1
	        Set MyClass = New Class1
	        MyClass.Description = "Original Value"
	        PassByValSet MyClass
	        MsgBox MyClass.Description
	     End Sub
	
	In this case, the message box displays "Original Value" because the ByVal
	prevents the procedure from redefining the object with "Set C = A." This is how
	ByVal works with objects.
	
	Conversely, if an object variable is passed to a procedure by reference and the
	object parameter is set to a different object, the object variable references
	this different object. The following example, using the same Class1, illustrates
	this:
	
	     Private Sub PassByRefSet(C As Class1)
	        Dim A As Class1
	        Set A = New Class1
	        A.Description = "New Value"
	        Set C = A
	     End Sub
	
	     Private Sub Form_Load()
	        Dim MyClass As Class1
	        Set MyClass = New Class1
	        MyClass.Description = "Original Value"
	        PassByRefSet MyClass
	        MsgBox MyClass.Description
	     End Sub
	
	In this example, the message box displays "New Value" because the object is
	passed by reference and the procedure is allowed to redefine it with "Set C =
	A."
	
	If you need to modify an object parameter's properties within a procedure without
	modifying the object passed, you need to create a copy of the object in the
	procedure. The example of this method below includes all the points previously
	discussed.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. Add a CommandButton to Form1.
	
	3. Add the following code to the General declarations section of Form1:
	
	        ' This procedure modifies the description of the object
	        ' passed in as expected.
	        Private Sub PassByRef(C As Class1)
	           C.Description = "Modified Value"
	        End Sub
	
	        ' You might expect that this procedure would not modify the
	        ' Description property of the object that was passed in.
	        ' However, it does modify it.
	        Private Sub PassByVal(ByVal C As Class1)
	           C.Description = "Modified Value"
	        End Sub
	
	        ' This procedure redefines the original object to the new
	        ' object with a new value for the description field.
	        Private Sub PassByRefAndSet(C As Class1)
	           Dim A As Class1
	           Set A = New Class1
	           A.Description = "New Value"
	           Set C = A
	        End Sub
	
	        ' This procedure does not redefine the original object.
	        ' However, within the scope of the procedure, it is redefined.
	        Private Sub PassByValAndSet(ByVal C As Class1)
	           Dim A As Class1
	           Set A = New Class1
	           A.Description = "New Value"
	           Set C = A
	        End Sub
	
	        ' This procedure shows how to redefine the object within the
	        ' procedure to a copy of itself. Changes made in the locally-
	        ' redefined parameter will not be reflected back to the
	        ' original object.
	        Private Sub PassByValAndCopy(ByVal C As Class1)
	           Set C = C.Copy
	           C.Description = "Modified Value"
	        End Sub
	
	        Private Sub Command1_Click()
	           Me.AutoRedraw = True
	
	           Print "Passing object by reference to modify property ";
	           Dim MyClass1 As Class1
	           Set MyClass1 = New Class1
	           MyClass1.Description = "Original Value"
	           PassByRef MyClass1
	           Print "results in: "; MyClass1.Description
	           Set MyClass1 = Nothing
	
	           Print "Passing object by value to modify property ";
	           Dim MyClass2 As Class1
	           Set MyClass2 = New Class1
	           MyClass2.Description = "Original Value"
	           PassByVal MyClass2
	           Print "results in: "; MyClass2.Description
	           Set MyClass2 = Nothing
	
	           Print "Passing object by reference to set object ";
	           Dim MyClass3 As Class1
	           Set MyClass3 = New Class1
	           MyClass3.Description = "Original Value"
	           PassByRefAndSet MyClass3
	           Print "results in: "; MyClass3.Description
	           Set MyClass3 = Nothing
	
	           Print "Passing object by value to set object ";
	           Dim MyClass4 As Class1
	           Set MyClass4 = New Class1
	           MyClass4.Description = "Original Value"
	           PassByValAndSet MyClass4
	           Print "results in: "; MyClass4.Description
	           Set MyClass4 = Nothing
	
	           Print "Passing object by value to set copy of object ";
	           Dim MyClass5 As Class1
	           Set MyClass5 = New Class1
	           MyClass5.Description = "Original Value"
	           PassByValAndCopy MyClass5
	           Print "results in: "; MyClass5.Description
	           Set MyClass5 = Nothing
	        End Sub
	
	4. Add a Class Module, Class1, to the project.
	
	5. Put the following code in the Class1 module:
	
	        Public Description As String
	
	        ' Create a member by member copy of Class1.
	        Public Function Copy() As Class1
	           Dim Ret As Class1
	           Set Ret = New Class1
	           Ret.Description = Me.Description
	           Set Copy = Ret
	        End Function
	
	6. Save the project.
	
	7. Run the project, and click the button.
	
	RESULT: The five tests are printed on the form as follows:
	
	- Passing object by reference to modify property results in: Modified Value
	
	- Passing object by value to modify property results in: Modified Value
	
	- Passing object by reference to set object results in: New Value
	
	- Passing object by value to set object results in: Original Value
	
	- Passing object by value to set copy of object results in: Original Value
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
