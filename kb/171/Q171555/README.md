---
layout: page
title: "Q171555: FIX: More Than One Sub Main May Cause EXE to Crash"
permalink: /kb/171/Q171555/
---

## Q171555: FIX: More Than One Sub Main May Cause EXE to Crash

	Article: Q171555
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
	
	If a project contains more than one Sub Main in different modules, it may run as
	expected in the IDE and compile without errors in either native or p- code, but
	will crash when run as an EXE. Visual Basic 5.0 will generate an application
	error, such as:
	
	  "The instruction at <address> referenced memory at <address>. The
	  memory could not be "written"."
	
	CAUSE
	=====
	
	To avoid this problem, either include only one parameter-less Sub Main in the
	project, or install Visual Studio 97 Service Pack 2 (SP2).
	
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
	
	1. Start a new Standard EXE project(Project1) in Visual Basic 5.0.
	
	2. Go to Project | Add Module, and add a .bas module(Module1) to Project1.
	
	3. Add the following code to Module1:
	
	        Sub Main ()
	        End
	
	4. Click on menu Project | Project1 Properties, select the General tab, and set
	  the Startup object as Sub Main.
	
	5. Click on Project | Add Class Module, and add a class module (Class1) to
	  Project1.
	
	6. Add the following code to Class1:
	
	        Sub Main ()
	        End
	
	7. Make Project1.EXE, using either p-code or native code.
	
	8. Run Project1.EXE. Note that Project1.EXE should crash with an Application
	  Error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
