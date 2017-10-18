---
layout: page
title: "Q171807: FIX: Selected Tab Changes After Removing Tab in Tabstrip"
permalink: kb/171/Q171807/
---

## Q171807: FIX: Selected Tab Changes After Removing Tab in Tabstrip

	Article: Q171807
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
	
	When removing a tab from a Tabstrip control at run-time, the first Tab in the
	Tabstrip is not selected. This behavior is not consistent with Visual Basic 4.0.
	In Visual Basic 4.0, the first Tab in the Tabstrip is always selected when a Tab
	is removed at run-time.
	
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
	
	1. Create a new Standard EXE project in Visual Basic 5.0.
	
	2. Choose Components from the Project menu and select "Microsoft Windows Common
	  Controls 5.0."
	
	3. Add a Tabstrip control to Form1.
	
	4. Add a CommandButton to Form1.
	
	5. Type the following code in the module for Form1.
	
	        Option Explicit
	
	              Private Sub Command1_Click()
	                 TabStrip1.Tabs.Remove 1
	              End Sub
	
	              Private Sub Form_Load()
	                 TabStrip1.Tabs(1).Caption = "Tab1"
	                 TabStrip1.Tabs.Add , , "Tab2"
	                 TabStrip1.Tabs.Add , , "Tab3"
	                 TabStrip1.Tabs.Add , , "Tab4"
	                 TabStrip1.Tabs.Add , , "Tab5"
	              End Sub
	
	6. Run the project.
	
	7. Select Tab3.
	
	8. Click Command1.
	
	Tab3 was selected before you clicked the CommandButton to remove Tab1. However,
	now Tab4 is the selected tab. To be consistent with the behavior in Visual Basic
	4.0, the selected tab should be the first Tab in the Tabstrip after any Tab is
	removed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
