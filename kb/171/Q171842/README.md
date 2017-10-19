---
layout: page
title: "Q171842: FIX: GetSetting Function Is Leaking Handles"
permalink: /kb/171/Q171842/
---

## Q171842: FIX: GetSetting Function Is Leaking Handles

	Article: Q171842
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbRegistry kbVBp kbVBp500fix kbVS97sp2 kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GetSetting function leaks one handle per use of the function.
	
	CAUSE
	=====
	
	The GetSetting function was not calling RegClose on the key that it was opening.
	This caused the key to be left open each time the function was called.
	
	RESOLUTION
	==========
	
	Install Visual Studio 97 Service Pack 2 (SP2) or use the registry API functions
	from the article in the REFERENCES section below.
	
	This problem does not occur on Windows 2000.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project and add a CommandButton (Command1) to the
	  default form (Form1).
	
	2. Put the following code in Command1's click event:
	
	        Private Sub Command1_Click()
	            Dim LoopCount As Integer
	
	            Call SaveSetting("MyApp", "Options", "TestValue", "Hello")
	            For LoopCount = 1 To 100
	                Call GetSetting("MyApp", "Options", "TestValue")
	            Next LoopCount
	        End Sub
	
	3. Under Windows NT, start the Windows NT Task Manager, select the Processes
	  tab, click on menu View | Select Columns and turn on the handle count column.
	  (Under Windows 95, Windows 98, and Windows Me, a third-party utility would be
	  required to monitor the handle count for a process.)
	
	4. Run the application and click the Command1 button. Note that the handle count
	  in the Task manager increase by 100 for every button click.
	
	  The expected result is that the handle should be released or should be re-used
	  on subsequent calls.
	
	REFERENCES
	==========
	
	For more information on the Registry API functions, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q145679 : HOWTO: Use the Registry API to Save and Retrieve Setting
	
	Additional query words:
	
	======================================================================
	Keywords          : kbRegistry kbVBp kbVBp500fix kbVS97sp2 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
