---
layout: page
title: "Q171821: FIX: Memory Leak When Repeatedly Changing Toolbar Button Width"
permalink: /kb/171/Q171821/
---

## Q171821: FIX: Memory Leak When Repeatedly Changing Toolbar Button Width

	Article: Q171821
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When repeatedly changing the Width of one or more Toolbar Buttons at run- time,
	you may experience a degradation in performance and/or a resource leak that is
	not replenished until your application ends.
	
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
	
	1. Open a new "Standard EXE" project.
	
	2. Click Components on the Project menu. Check "Microsoft Windows Common
	  Controls 5.0".
	
	3. Add an ImageList control, a ToolBar control and a CommandButton to Form1.
	
	4. In the Custom property page for ImageList1, click the Images tab and insert
	  one picture. Click OK.
	
	5. In the Custom property page for Toolbar1, set the Imagelist property to
	  "ImageList1." Insert one button and set the Image property to 1. Insert
	  another button and set the style to 4-tbrPlaceholder. Click OK.
	
	6. Add the following code to the Click event of Command1.
	
	        For i = 1 To 100
	             Toolbar1.Buttons(2).Width = 500
	             Debug.Print i
	             DoEvents
	           Next
	
	7. Click Immediate Window on the View menu.
	
	8. Press the F5 key to run the application.
	
	9. Click Command1. Notice that performance degrades after each iteration of
	  changing the width of the Button Placeholder.
	
	Additional query words: memory leak comctl32.ocx tool bar
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
