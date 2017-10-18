---
layout: page
title: "Q162081: PRB: In-Process Server Fails on CREATEOBJECT in VFP Run Time"
permalink: kb/162/Q162081/
---

## Q162081: PRB: In-Process Server Fails on CREATEOBJECT in VFP Run Time

	Article: Q162081
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Doing a CREATEOBJECT on a Visual FoxPro in-process OLE-server inside a Visual
	FoxPro run-time application gives the following error messages:
	
	Windows 95: "This program has performed an illegal operation and will be shut
	down"
	
	Windows NT: "The instruction at <memory address> referenced memory at
	<memory address>. The memory could not be read"
	
	CAUSE
	=====
	
	The run-time .exe file and the in-process OLE-server .dll file are using the
	same instance of Vfp500.dll, which has global variables that have different
	values depending on whether it is called from a .dll file or an .exe file .
	
	RESOLUTION
	==========
	
	NOTE: Your .exe file and your in-process server .dll file need to be in
	different folders, and each needs its own set of Visual FoxPro run-time files.
	
	1. Copy the following Visual FoxPro runtime files from your System
	  folder(System32 on NT) into the directories where your .exe file and .dll
	  file are located:
	
	        Vfp500.dll
	        Vfp5enu.dll (Last three letters change with localized versions)
	
	2. Delete the Visual FoxPro run-time files from of your System folder.
	
	Step 2 is required because Visual FoxPro looks in the System folder before
	looking in the current folder. VFP 5.0a does not need Step 2 because the stub
	loader looks in the current folder for Vfp500.dll.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project called Myserver1.
	
	2. Add a new program file to the project.
	
	3. Enter the following code in the program file:
	
	         DEFINE CLASS oleserver as custom OLEPUBLIC
	           FUNCTION Hello
	              RETURN "Hello World"
	           ENDFUNC
	         ENDDEFINE
	
	4. Save the program and build the project as an OLE DLL. (Click the Build button
	  in the Project Manager, then select Build OLE DLL from Build Options, and
	  then click OK.)
	
	5. Create a project called Main.
	
	6. Add a new program file to the project.
	
	7. Enter the following code in the program file:
	
	         oMyServer = CREATEOBJECT("myserver1.oleserver")
	         s = oMyServer.Hello
	         WAIT WINDOW s
	
	8. Save the program and build the project as an executable. (Click the Build
	  button in the Project Manager, then select Build Executable from Build
	  Options, and then click OK.)
	
	9. Shut down the Visual FoxPro IDE and run the Main.exe you created in step 8
	  (from the Windows Explorer double-click the Main.exe).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	
