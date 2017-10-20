---
layout: page
title: "Q143042: PRB: Version Compatibility of OLE Servers"
permalink: /kb/143/Q143042/
---

## Q143042: PRB: Version Compatibility of OLE Servers

{% raw %}

	Article: Q143042
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0;
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When distributing an update to an OLE server you may receive the following error
	when accessing the server with an existing OLE client:
	
	  Run-time error '-2147319765 (8002802b)':
	
	  Ole Automation error
	  Element not found.
	
	CAUSE
	=====
	
	Version compatible is when objects and/or methods have been added to the type
	library, but no changes have been made to existing properties. Version identical
	is when interfaces are the same such that the type library is exactly the same
	as the old version.
	
	Making an update to an OLE server, which is version compatible but is not version
	identical, causes this error.
	
	RESOLUTION
	==========
	
	You must recompile the OLE client with the reference to the updated OLE server
	and redistribute the OLE client.
	
	MORE INFORMATION
	================
	
	Prior to following this example, make sure you have built the OLE server and OLE
	client. For additional information on building OLE clients and servers, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q129801 : How to Create and Use a Minimal OLE Automation Server
	
	Phase One - Modify the Client
	-----------------------------
	
	You will have to make the following modifications to the OLE client project:
	
	1. Change the code in the Form1_Click event procedure to:
	
	        Dim MyObj As New Project1.Class1
	        Print MyObj.MyString
	        Print MyObj.MyFunction
	
	2. Delete the code from the Form1_Load event procedure.
	
	3. From the Tools menu, select Options. In the Project tab set the Project Name
	  to Client.
	
	4. Add a reference to the OLE server by selecting Tools-Reference from the menu
	  and marking the checkbox which references the OLE server(Project1) in order
	  to successfully compile the OLE client.
	
	5. Make an executable file. Save the OLE client executable file as CLIENT.EXE.
	  Also save the OLE client project.
	
	Phase Two - Modify the Server
	-----------------------------
	
	Modify the server to make a version compatible but not version identical server.
	This will involve changing the OLE interface by simply adding a method to the
	class module.
	
	1. Open the OLE server project previously created.
	
	2. In the Class Module insert the following code in the general declarations
	  section:
	
	        Private Function MyFunction2() as Integer
	
	        End Function
	
	3. From the Tools menu, choose Options. In the Project tab place the name of the
	  previously created OLE server in the "Compatible OLE Server" editbox.
	
	4. From the File menu, select Make EXE File. Select Options from the file dialog
	  and change the version number to 1.
	
	5. Start the program by choosing Start from the Run menu or by pressing the F5
	  key to register the OLE server.
	
	6. Save the project. Exit Visual Basic.
	
	Phase Three - Test the OLE Client
	---------------------------------
	
	1. Run the OLE client executable file.
	
	2. Click Form1. You'll see the following error message:
	
	        Run-time error '-2147319765 (8002802b)':
	          Ole Automation error
	          Element not found.
	
	Phase Four - Fix the OLE Client
	-------------------------------
	
	In order to make the OLE client execute properly again it will have to be
	recompiled referencing the updated OLE server.
	
	1. Open the OLE client project.
	
	2. Make a new executable file.
	
	3. Run the executable file. Click Form1. You will see this output:
	
	  Life is like a box of chocolates.
	  You never know what you're gonna get.
	
	Additional query words: kbDSupport kbdss kbVBp400 kbole OLE version compatibility
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0;
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
