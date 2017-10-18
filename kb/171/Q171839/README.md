---
layout: page
title: "Q171839: FIX: Crash When Compiling a Call to a UserControl Function"
permalink: kb/171/Q171839/
---

## Q171839: FIX: Crash When Compiling a Call to a UserControl Function

	Article: Q171839
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
	
	When compiling code that calls a function in a UserControl that accepts a
	ParamArray as an argument, Visual Basic may crash with an error similar to the
	following;
	
	  "VB5 caused an invalid page fault in module VBA5.DLL at <address>"
	
	CAUSE
	=====
	
	If the values passed to the ParamArray argument are empty or null, Visual Basic
	5.0 will crash.
	
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
	
	1. Create a new Standard EXE project in Visual Basic 5.0. Form1 will be created
	  by default.
	
	2. Add a UserControl to the Project by choosing Add UserControl from the Project
	  menu.
	
	3. View the code window for the UserControl. In the General Declarations
	  section, place the following code:
	
	        Function WatchOut(ParamArray Col() As Variant) As Boolean
	
	        End Function
	
	4. Close the UserControl.
	
	5. Add the UserControl to Form1 by selecting the UserControl from the Toolbox.
	  The UserControl will be named UserControl11 by default.
	
	6. View the code window for Form1. In the Load event for Form1, add he following
	  code:
	
	        UserControl11.WatchOut ,,,,vbNullString
	
	7. Run the Application. Visual Basic will crash with an error similar to the one
	  described above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
