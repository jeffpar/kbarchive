---
layout: page
title: "Q138065: HOWTO: Enforce Initialization of a VB OLE Class Object"
permalink: /kb/138/Q138065/
---

## Q138065: HOWTO: Enforce Initialization of a VB OLE Class Object

{% raw %}

	Article: Q138065
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode kbVBp400
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
	
	This article suggests a way to enforce the proper initialization of a Visual
	Basic OLE object that is instantiated from a class module. The class module has
	an Initialize event that is invoked each time an object of that class is
	instantiated.
	
	However, it is not possible to pass any parameters to the Initialize event of a
	class module. To implement an object constructor that takes parameters to
	properly initialize the object's members, you can define a Public method (called
	Create for example) in the class module and call it with parameters immediately
	after instantiating the object.
	
	MORE INFORMATION
	================
	
	The following step-by-step example shows how to implement a Create Method that
	enforces proper object instantiation. Note that the following statement must be
	the first statement in each method or property procedure in the class module:
	
	     If blnNotCreated Then Err.Raise vbObjectError, "MyServer", _
	        "Object Not Yet Created! Please Call the Create Method First"
	
	This will raise an error that is returned back to the client in case the Create
	Method is not called. Note also that the flag blnNotCreated is the only member
	that is set in the Initialize event. This is done to avoid the following action,
	which would result in the unnecessary overhead of the Not operator:
	
	     If Not blnCreated then Err.Raise
	
	Step-by-Step Example for Creating the Server
	--------------------------------------------
	
	1. Start a new project in Visual Basic. Insert a Class Module (Class1), and set
	  its instancing property to 1 - Creatable SingleUse and its Public property to
	  True.
	
	2. Add the following code to the Class Module:
	
	        Private intData As Integer
	        Private strData As String
	        Private blnNotCreated
	     
	        Public Function Create(param1 As Integer, param2 As _
	                     String) As Boolean
	            blnNotCreated = False
	            intData = param1
	            strData = param2
	        End Function
	     
	        Public Sub MyMethod()
	            If blnNotCreated Then Err.Raise vbObjectError, _
	             "MyServer", "Object Not Yet Created! Please Call _
	             the Create Method First"
	     
	            MsgBox strData
	        End Sub
	     
	        Private Sub Class_Initialize()
	            blnNotCreated = True
	        End Sub
	
	3. On the Tools menu, click Options, then click the Project tab, and set the
	  Project Name to MyServer.
	
	4. On the File menu, click Make EXE file to create an OLE server.
	
	Step-by-Step Example for Creating the Client
	--------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. On the Tools menu, click References to add a reference to MyServer.
	
	3. Add the following code to the Form_Click event of Form1:
	
	        Private Sub Form_Click()
	           Dim x As New MyServer.Class1
	           x.Create 7, "hello"
	           x.MyMethod
	        End Sub
	
	4. Press the F5 key to run the program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
