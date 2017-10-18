---
layout: page
title: "Q190131: PRB: Instantiating a Project-Compatible Server Causes Error 430"
permalink: kb/190/Q190131/
---

## Q190131: PRB: Instantiating a Project-Compatible Server Causes Error 430

	Article: Q190131
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAppSetup kbide kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 21-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Instantiating a class within a server that has been previously compiled but is
	now running within the Visual Basic IDE, causes run-time error 430.
	
	CAUSE
	=====
	
	When a Visual Basic project is compiled with Project Compatibility, the CLSID
	remains the same while the IID changes for subsequent builds. Therefore,
	attempting to create the specific class in the "compatible" server generates the
	following error because the specific IID has changed and no longer exists:
	
	  Run-time error '430':
	  Class does not support Automation or does not support expected interface
	
	RESOLUTION
	==========
	
	Use Binary Compatibility.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. From the Project menu, select Project Properties, and then change the Project
	  Name to SPP2.
	
	3. From the File menu, select Make SPP2.DLL.
	
	4. Add the following code to the code module of Class1:
	
	        Private Sub Class_Initialize()
	           Debug.Print "Initialize"
	        End Sub
	
	5. Start a second instance of Visual Basic and create a new Standard EXE
	  project. Form1 is created by default.
	
	6. Select References from the Project menu, and add a reference to SPP2.dll.
	
	7. In Form1, place the following code:
	
	        Private Sub Form_Load()
	           Dim x As SPP2.Class1
	           Set x = New Class1
	        End Sub
	
	8. Switch back to the first instance of Visual Basic and run SPP2.
	
	9. Switch back to the second instance of Visual Basic and press the F8 key to
	  step into the code.
	
	10. Continue to press F8 until the Error 430 DialogBox pops up.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q161137 HOWTO: Use Project and Binary Compatibility
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbAppSetup kbide kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
