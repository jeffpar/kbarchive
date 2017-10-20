---
layout: page
title: "Q190460: PRB: Type Mismatch Error in Client After Modifying Server DLL"
permalink: /kb/190/Q190460/
---

## Q190460: PRB: Type Mismatch Error in Client After Modifying Server DLL

{% raw %}

	Article: Q190460
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an ActiveX DLL server has two classes and one class implements the other,
	running a compiled client project referencing the server will generate the
	following error after modifying and recompiling the server with binary
	compatibility:
	
	  Run-time error 13: Type mismatch
	
	RESOLUTION
	==========
	
	Reopen the client project and compile it again.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create the Server
	-----------------
	
	1. Start a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. Select Project1 Properties from the Project menu and change the Project Name
	  to "Server."
	
	3. Select Add Class Module from the Project menu to add Class2 to the project.
	
	4. Paste the following code in Class2:
	
	        Public Sub Test()
	        End Sub
	
	5. Paste the following code in Class1:
	
	        Implements Class2
	
	        Private Sub Class2_Test()
	           MsgBox "Testing the Server"
	        End Sub
	
	6. Select Make Server.dll from the File menu to compile the project.
	
	7. Save the Server project files.
	
	Create the Client
	-----------------
	
	1. Start a new Standard EXE project in Visual Basic 6.0. Form1 is created by
	  default.
	
	2. Select Project1 Properties from the Project menu, and change the Project Name
	  to "Client."
	
	3. Select References from the Project menu, and select "Server."
	
	4. Paste the following code in Form1's code module:
	
	        Private Sub Form_Load()
	           Dim x As Server.Class2
	           Set x = New Server.Class1
	           TestMethod x
	        End Sub
	
	        Private Sub TestMethod (x As Server.Class2)
	           x.Test
	        End Sub
	
	5. Select Make Client.exe from the File menu.
	
	Test the Client with the Server
	-------------------------------
	
	1. Run Client.exe outside the Visual Basic design environment. The program runs
	  correctly.
	
	2. Reopen the Server.dll project and add the following code to Class2:
	
	        Public Sub Test2()
	        End Sub
	
	3. Add the following code to Class1:
	
	        Private Sub Class2_Test2()
	        End Sub
	
	4. Select Server Properties from the Project menu, and select the Binary
	  Compatibility option on the Component tab.
	
	5. Select Make Server.dll from the File menu to compile the project. Overwrite
	  the existing Server.dll.
	
	6. Run Client.exe again. Note that the following error occurs:
	
	  Run-time error 13: Type mismatch
	
	7. To resolve this, recompile the client, overwriting Client.exe. Run Client.exe
	  and note that no error occurs.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600 kbCompiler
	
	======================================================================
	Keywords          : kbCompiler kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
