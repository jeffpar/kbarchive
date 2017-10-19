---
layout: page
title: "Q193172: PRB: Runtime Error 430 in Client After Server Type is Changed"
permalink: /kb/193/Q193172/
---

## Q193172: PRB: Runtime Error 430 in Client After Server Type is Changed

	Article: Q193172
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the project type of an ActiveX server is changed from DLL to EXE and
	recompiled, any client code that attempts to create an instance of an object
	from the server generates the following error:
	
	  "Run-time error '430' : Class does not support Automation or does not
	  support expected interface."
	
	CAUSE
	=====
	
	The error results from project compatibility and the change of the project type
	from DLL to EXE. In project compatibility, Visual Basic preserves the Class ID
	(CLSID) of the class but not the Interface ID (IID). Because the CLSID is
	preserved, the class ends up being registered with two servers; the in-proc
	server (DLL) and the local server (EXE). As you create an instance of the class
	from a client, the class from the DLL is chosen. Because the class from the DLL
	does not support the new IID, the above error occurs.
	
	RESOLUTION
	==========
	
	Use the RegSvr32.EXE utility to unregister the old DLL server and re- register
	the new EXE server to eliminate this error.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. Select Project1 in the Project Explorer and press the F4 key to bring up the
	  Property Window. In the Property Window, change the value of (Name) to
	  "Server."
	
	3. Paste the following code into Class1:
	
	        Public Test As Collection
	   
	
	4. Compile the DLL by selecting Make Server.dll from the File menu.
	
	5. Start another instance of Visual Basic and create a new Standard EXE project.
	  Form1 is created by default.
	
	6. Select References from the Project menu and make a reference to Server.
	
	7. Paste the following code in Form1:
	
	        Private Sub Form_Load()
	           Dim x as Server.Class1
	           set x = new Server.Class1
	        End Sub
	
	8. Press the F5 key to run the project. No error is produced.
	
	9. Switch back to the Server project. Select Server Properties from the Project
	  menu. Select the General tab and change the Project Type to ActiveX EXE.
	
	10. Recompile the project by selecting Make Server.EXE from the File menu.
	
	11. Switch back to the client instance of Visual Basic. Select References from
	  the Project menu. Remove the reference to Server.dll and check Server.EXE
	
	12. Press the F5 key to run the project, and note that the following error
	  occurs:
	
	  "Run-time error '430' : Class does not support Automation or does not
	  support expected interface."
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600 kbCompiler kberrmsg
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
