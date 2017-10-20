---
layout: page
title: "Q129931: Using For Each to Loop Through Arrays Is Not Recommended"
permalink: /kb/129/Q129931/
---

## Q129931: Using For Each to Loop Through Arrays Is Not Recommended

{% raw %}

	Article: Q129931
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The For Each statement can be used on variant type arrays and collections that
	contain generic object, variant, or OLE automation variables.
	
	You can also use the For Each statement with an array that is not a variant type,
	but the result is a substantial decrease in performance. This article shows by
	example how to use the For Each statement to loop through collections and
	demonstrates the decrease in performance that occurs when you use the For Each
	statement to loop through arrays.
	
	MORE INFORMATION
	================
	
	Although it is possible to use For Each on an array, there is rarely a reason to
	do so. You pay a substantial performance penalty on For Each statements. The For
	Each statement is advantageous in situations where the number of elements is
	unknown, but the number of elements in an array is almost always known. The only
	exceptions are arrays created by Visual Basic, such as ParamArray arguments
	(using the ParamArray keyword in a procedure creates arrays based on an
	indefinite number of arguments) and possibly control arrays.
	
	For Each deals with objects rather than variables. A For Each on an array
	essentially does this:
	
	     Dim MyArray(i to j) as Variant
	     Dim VArray As Variant
	     For i = LBound(MyArray) to UBound(MyArray)
	        Set VArray = MyArray(i)
	        ' Do something with VArray
	     Next
	
	Usually, For Each is used on arrays or collections of objects or variants.
	However, if you are working on an array of strings (Dim MyArray(i to j) as
	String in the above example) Visual Basic converts each string element to a
	variant object internally in order to use Set on it. That is, Visual Basic
	performs the equivalent of:
	
	     Set VArray = CVar(MyArray(i))
	
	Therefore, there is additional overhead when using For Each on arrays.
	
	Steps to Demonstrate For Each versus For Next
	---------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the Form1_Click event Procedure:
	
	     Private Sub Form_Click()
	        ForEach
	     End Sub
	
	3. From the Insert Menu, choose Module to add Module1 to the project.
	
	4. Add the following code to the general declarations section of Module1:
	
	     #if Win32 Then
	        Declare Function GetTickCount Lib "kernel32" () As Long
	     #Else
	        Declare Function GetTickCount Lib "User" () As Long
	     #End If
	
	     Public Sub ForEach()
	        Dim MyArrayS(1 To 3000) As String
	        Dim MyArrayI(1 To 3000) As Integer
	        Dim MyArrayO(1 To 3000) As Object
	        Dim MyArrayV(1 To 3000) As Variant
	        Dim obj As Object
	        Dim j As Integer
	        Dim CurrElement, TheName, v
	        Dim Date1 As Long, Date2 As Long, Date3 As Long
	        Dim MyInt As New Collection
	        Dim MyClasses As New Collection
	
	        Date1 = GetTickCount()
	        For i = 1 To 3000
	           MyArrayS(i) = "dummy"
	        Next
	        Date2 = GetTickCount()
	        For Each CurrElement In MyArrayS
	           CurrElement = "dummy"
	        Next
	        Date3 = GetTickCount()
	        Form1.Print "For i on String Array    " & CStr(Date2 - Date1)
	        Form1.Print "For Each on String Array " & CStr(Date3 - Date2)
	
	        Date1 = GetTickCount()
	        For i = 1 To 3000
	           MyArrayI(i) = 1
	        Next
	        Date2 = GetTickCount()
	        For Each CurrElement In MyArrayI
	           CurrElement = 1
	        Next
	        Date3 = GetTickCount()
	        Form1.Print "For i on Integer Array    " & CStr(Date2 - Date1)
	        Form1.Print "For Each on Integer Array " & CStr(Date3 - Date2)
	
	        Date1 = GetTickCount()
	        For i = 1 To 3000
	           Set MyArrayO(i) = obj
	        Next
	        Date2 = GetTickCount()
	        For Each CurrElement In MyArrayO
	           Set CurrElement = obj
	        Next
	        Date3 = GetTickCount()
	        Form1.Print "For i on Object Array    " & CStr(Date2 - Date1)
	        Form1.Print "For Each on Object Array " & CStr(Date3 - Date2)
	
	        Date1 = GetTickCount()
	        For i = 1 To 3000
	           MyArrayV(i) = v
	        Next
	        Date2 = GetTickCount()
	        For Each CurrElement In MyArrayV
	           CurrElement = v
	        Next
	        Date3 = GetTickCount()
	        Form1.Print "For i on Variant Array    " & CStr(Date2 - Date1)
	        Form1.Print "For Each on Variant Array " & CStr(Date3 - Date2)
	
	        For i = 1 To 500
	           MyInt.Add Item:=j, Key:=CStr(i)
	        Next
	        Date1 = GetTickCount()
	        For i = 1 To 500
	           j = MyInt.Item(i)
	        Next
	        Date2 = GetTickCount()
	        For Each CurrElement In MyInt
	           j = CurrElement
	        Next
	        Date3 = GetTickCount()
	
	        Form1.Print "For i on Integer Collection    " & CStr(Date2 - Date1)
	        Form1.Print "For Each on Integer Collection " & CStr(Date3 - Date2)
	
	        For i = 1 To 500
	           Dim Inst As New Class1
	           TheName = "Mike" & CStr(i)
	           Inst.InstanceName = TheName
	           MyClasses.Add Item:=Inst, Key:=CStr(i)
	           Set Inst = Nothing
	        Next
	        Date1 = GetTickCount()
	        For i = 1 To 500
	           Set a = MyClasses.Item(i)
	        Next
	        Date2 = GetTickCount()
	        For Each CurrElement In MyClasses
	           Set a = CurrElement
	        Next
	        Date3 = GetTickCount()
	
	        Form1.Print "For i on Object Collection    " & CStr(Date2 - Date1)
	        Form1.Print "For Each on Object Collection " & CStr(Date3 - Date2)
	     End Sub
	
	5. From the Insert Menu, choose Class Module to add Class1 to the project.
	
	6. Add the following code to the general declarations section of Class1:
	
	     Public InstanceName
	
	7. Run the program.
	
	In general, the results illustrate why you should use the For...Next statement on
	arrays and use the For Each...Next statement on collections.
	
	Additional query words: 4.00 optimum optimal speedier faster quicker vb4win better best vb4all
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
