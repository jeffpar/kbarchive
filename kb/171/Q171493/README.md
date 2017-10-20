---
layout: page
title: "Q171493: FIX: Viewing Property Pages and Exiting Causes Memory Leak"
permalink: /kb/171/Q171493/
---

## Q171493: FIX: Viewing Property Pages and Exiting Causes Memory Leak

{% raw %}

	Article: Q171493
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
	
	Viewing property pages several times and exiting causes a memory leak.
	
	CAUSE
	=====
	
	The Visual Basic IDE fails to release its object property list before
	re-allocating space for a new list.
	
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
	
	The detection of this problem requires a memory checker or debug version of
	Visual Basic.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. On Form1, place a Toolbar control (from Comctl32.ocx - Windows Common
	  Controls 5.0).
	
	3. Right-click the Toolbar control to bring up the context menu.
	
	4. Select Properties from the context menu.
	
	5. Click either the "OK" or the "Cancel" button of the property page.
	
	6. Repeat steps 3-5.
	
	7. Click File, Exit. Say "No" to the question "Save changes to the following
	  files?"
	
	Upon exiting, the Debug version of Visual Basic will raise the error:
	
	  "Heap Memory leak detected."
	
	Results by third-party memory checkers may vary.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
