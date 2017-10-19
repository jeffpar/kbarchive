---
layout: page
title: "Q171841: FIX: Dragging Multiple Controls on a Form May Cause Crash"
permalink: /kb/171/Q171841/
---

## Q171841: FIX: Dragging Multiple Controls on a Form May Cause Crash

	Article: Q171841
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
	
	Moving all controls on a form may result in the following error:
	
	  "VB5 caused an invalid page fault in module VB5.EXE at 0137:00440cb9"
	
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
	
	1. Create a new Visual Basic 5.0 Standard EXE project.
	
	2. Add two controls to Form1.
	
	3. Ensure that none of the controls is currently selected.
	
	4. Press CTRL+A, or Edit | Select All to select both controls.
	
	5. Press and hold either the CTRL or SHIFT keys.
	
	6. Click and hold down the left-mouse button.
	
	7. Release the CTRL or SHIFT key or release the left-mouse button.
	
	8. Move the mouse and note the shadow of the controls.
	
	9. Click and release the left-mouse button. An invalid page fault in Visual
	  Basic results.
	
	NOTE: This behavior can be avoided by selecting and moving the controls after
	ensuring that at least one control has been selected. Additionally, use of the
	ESC key can circumvent the invalid page fault.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
