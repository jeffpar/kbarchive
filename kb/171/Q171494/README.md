---
layout: page
title: "Q171494: FIX: MouseUp Event Not Triggered in DblClick w/Comctl32"
permalink: kb/171/Q171494/
---

## Q171494: FIX: MouseUp Event Not Triggered in DblClick w/Comctl32

	Article: Q171494
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
	
	When you double-click one of the Windows Common Controls, the second MouseUp
	event is not triggered. The Windows Common Controls affected are the ToolBar
	(with AllowCustomize set to True or False), StatusBar, ListView, and TreeView.
	
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
	
	1. Create a new "Standard EXE" project.
	
	2. Click References on the Project menu. Select "Microsoft Windows Common
	  Controls 5.0," and click OK.
	
	3. Place a ListView control on the default form.
	
	4. Paste the following code in the form.
	
	        Private Sub ListView1_MouseDown(Button As Integer, _
	           Shift As Integer, x As Single, y As Single)
	           Debug.Print "MouseDown"
	        End Sub
	
	        Private Sub ListView1_MouseUp(Button As Integer, Shift As Integer, _
	           x As Single, y As Single)
	           Debug.Print "MouseUp"
	        End Sub
	
	        Private Sub ListView1_DblClick()
	           Debug.Print "DblClick"
	        End Sub
	
	5. Press the F5 key to run the application.
	
	6. Double-click the ListView control.
	
	When you double-click the ListView control, the Immediate Window will display the
	following text:
	
	  MouseDown
	  MouseUp
	  DblClick
	
	If you add code similar to that above to the events of Form1 (rather than the
	ListView control), the second MouseUp event is triggered as expected. The
	Immediate Window will display the following text:
	
	  MouseDown
	  MouseUp
	  DblClick
	  MouseUp
	
	Additional query words: comctl32.ocx
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
