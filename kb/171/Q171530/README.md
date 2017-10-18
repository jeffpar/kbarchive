---
layout: page
title: "Q171530: FIX: Crash on Data Tip After Enum Name Changed"
permalink: kb/171/Q171530/
---

## Q171530: FIX: Crash on Data Tip After Enum Name Changed

	Article: Q171530
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Checking the Data Tips for an enumerated object in a Standard EXE (the client)
	after changing the name of the Enum in the ActiveX EXE project (the server) may
	generate the following error:
	
	  "VB5 has caused an invalid page fault in module <module> at
	  <address>"
	
	CAUSE
	=====
	
	An untrapped error occurs within Visual Basic when the referenced type library
	becomes unavailable after the server is disconnected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX EXE project in Visual Basic 5.0.
	
	2. Place the following code in Class1:
	
	        Enum Test
	          xxx
	          yyy
	        End Enum
	
	3. In the Project Properties Window, change the name of the project to
	  "ProjectTest."
	
	4. Run the ActiveX EXE.
	
	5. Launch another instance of Visual Basic 5.0.
	
	6. Create a new Standard EXE project.
	
	7. Select Project...References and set a reference to ProjectTest.
	
	8. Select Project...Add Module to create a new module.
	
	9. Place the following code in Module1:
	
	        Sub Main()
	          Dim a as Test
	          a = xxx
	          Stop
	        End Sub
	
	10. Select Project...Project1 Properties and set the startup object to Sub Main.
	
	11. Run the client (Project1).
	
	12. At the Stop statement, select the instance of Visual Basic where the server
	  is running.
	
	13. Stop the server from running.
	
	14. Modify the Enum name to be "Test2."
	
	15. Run the server.
	
	16. Select the instance of Visual Basic where the client is running.
	
	17. Move the mouse over the "xxx" to view the Data Tip. This generates an
	  invalid page fault in Visual Basic.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
