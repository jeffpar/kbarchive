---
layout: page
title: "Q129801: HOWTO: Create and Use a Minimal OLE Automation Server"
permalink: /kb/129/Q129801/
---

## Q129801: HOWTO: Create and Use a Minimal OLE Automation Server

	Article: Q129801
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic version 4.0 introduces the powerful new ability to create OLE
	Automation Servers. This article shows you, step by step, how to create a
	minimal OLE Automation server and use it from a minimal OLE Client. This article
	does not exercise the full functionality of OLE servers. It is intended to help
	you write your first OLE Automation Server.
	
	MORE INFORMATION
	================
	
	Phase One - Create the Server
	-----------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. From the File menu, choose Remove File to remove Form1.
	
	3. From the Insert menu, add a Module (Module1) and a Class Module (Class1) to
	  your project.
	
	4. Type the following code in the General Declarations section of Module1:
	
	        Sub Main ()
	
	NOTE: End Sub will be added automatically for you.
	
	1. Add the following code to the General Declaration section of Class1:
	
	        Public MyString As String
	
	        Public Function MyFunction() As String
	           MyFunction = "You never know what you're gonna get."
	        End Function
	
	2. Add the following code to the Class_Initialize event of Class1:
	
	        Public Sub Class_Initialize()
	           MyString = "Life is like a box of chocolates."
	        End Sub
	
	3. In the Properties window for Class1, set the following properties:
	
	  Property      Value
	  ------------------------------------
	  Instancing    2 - Creatable MultiUse
	  Public        True
	
	4. From the Tools menu, choose Options. In the StartMode group of the Project
	  tab, choose OLE Server. You now have a complete (though limited) OLE
	  automation server. You can choose Make EXE to make an .EXE file that you can
	  run later, or you can choose Make DLL to make an Inprocess OLE Server. Now
	  you're ready to automate your server.
	
	5. Start the program by choosing Start from the Run menu or by pressing the the
	  F5 key.
	
	6. Minimize Visual Basic.
	
	Phase Two - Create a Client to Access the Server
	------------------------------------------------
	
	1. Start a second copy of Visual Basic. A new project (Project1) with a default
	  form (Form1) is created.
	
	2. Add the following code to the appropriate events of Form1:
	
	        ' In the General Declarations section:
	        Private MyObj As Object
	
	        Private Sub Form_Load ()
	           Set MyObj = CreateObject("Project1.Class1")
	        End Sub
	
	        Private Sub Form_Click()
	           Print MyObj.MyString
	           Print MyObj.MyFunction
	        End Sub
	
	        Private Sub Form_Unload (Cancel As Integer)
	           Set MyObj = Nothing
	        End Sub
	
	3. Start the program by choosing Start from the Run menu or by pressing the the
	  F5 key.
	
	4. Click Form1. You'll see this output:
	
	  Life is like a box of chocolates.
	  You never know what you're gonna get.
	
	When Form1 loads, it instantiates one copy of your OLE automation server. On the
	click, it makes two OLE calls. One to retrieve the value of the MyString public
	variable and one to invoke the MyFunction public function.
	
	When Form1 unloads, it destroys its created instance of the OLE automation
	server. If this is the last instance in memory, the server process is removed
	from memory as well.
	
	======================================================================
	Keywords          : kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
