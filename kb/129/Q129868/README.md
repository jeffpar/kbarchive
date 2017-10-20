---
layout: page
title: "Q129868: How to Pass a UDT to an OLE Automation Server in VB 4.0"
permalink: /kb/129/Q129868/
---

## Q129868: How to Pass a UDT to an OLE Automation Server in VB 4.0

{% raw %}

	Article: Q129868
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to pass a user-defined type (UDT) to an OLE
	Automation server in Visual Basic version 4.0.
	
	MORE INFORMATION
	================
	
	A UDT cannot be passed to a public member function of an OLE Automation Server.
	This behavior is by design. However, it is possible to pass a UDT to a private
	member function or to declare a private variable of a user defined type within a
	class module. But because these are private, they cannot be accessed directly by
	an OLE Automation Controller or Client. Therefore, you need to pass each field
	of the UDT, element by element, or create a class with public variables
	corresponding to each field of the UDT.
	
	Step-by-Step Example
	--------------------
	
	There are two parts to this example - creating the OLE Automation Server and
	creating the OLE Automation Controller.
	
	Part One: Create the OLE Automation Server
	------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Choose Class Module from the Insert menu. Class1 is created by default.
	
	3. Add the following code to the General Declarations section of Class1:
	
	     Private Type UDT
	        age As Integer
	        name As String
	     End Type
	
	     Private ClassUDT As UDT
	
	     Public Sub GetUDTFields(age As Integer, name As String)
	        ClassUDT.age = age
	        ClassUDT.name = name
	     End Sub
	
	     Public Sub DispalyClassUDT()
	     MsgBox "Hi! My Name is " & ClassUDT.name & ". I am " & _
	        ClassUDT.age & " years old"
	     End Sub
	
	4. Set the following properties for Class1:
	
	  Properties     Value
	  -------------------------------------
	  Instancing     2 - Creatable MultiUse
	  Name           Class1
	  Public         True
	
	5. Choose Module from the Insert menu. Module1 is created by default.
	
	6. Add the following code to the General Declarations section of Module1:
	
	     Sub main()
	
	     End Sub
	
	7. Choose Options from the Tools menu, and in the Project Options, select Sub
	  Main as the Startup Form and OLE Server as the StartMode.
	
	8. The OLE Automation server is now ready. Press the F5 key to run the program,
	  and then minimize it.
	
	Part Two: Create the OLE Automation Controller
	----------------------------------------------
	
	1. Start a new instance of Visual Basic.
	
	2. Start a new project in Visual Basic. Form1 is created by default.
	
	3. Add the following code to the General Declarations section of Form1:
	
	     Private Type UDT
	        age As Integer
	        name As String
	     End Type
	
	4. Add the following code to the Form_Click event of Form1:
	
	     Dim x As Object
	     Dim MyUDT As UDT
	
	     MyUDT.age = 25
	     MyUDT.name = "Joe"
	     Set x = CreateObject("Project1.Class1")
	     x.GetUDTFields MyUDT.age, MyUDT.name
	     x.DispalyClassUDT
	
	5. Press the F5 key to run the program. Click Form1. A message box will display
	  the fields of the UDT passed element-by-element to the OLE Automation server.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	

{% endraw %}
