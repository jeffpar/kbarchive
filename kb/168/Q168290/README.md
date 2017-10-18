---
layout: page
title: "Q168290: FIX: GPF When Setting Font of Multi-selected Controls"
permalink: kb/168/Q168290/
---

## Q168290: FIX: GPF When Setting Font of Multi-selected Controls

	Article: Q168290
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
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
	
	When using Visual Basic 5.0 in Multiple Document Interface (MDI) mode, it is
	possible to display the Properties window either docked to the main window (the
	default) or floating.
	
	If the Properties window is floating and two or more controls are selected and
	you change the Font property of the controls using the floating Properties
	window, Visual Basic 5.0 will crash with the message:
	
	  "This program has performed an illegal operation and will be shut down. If
	  the problem persists, contact the program vendor. VB5 caused an invalid page
	  fault in module VB5.EXE"
	
	RESOLUTION
	==========
	
	Ensure that the property window is docked when changing the font property of
	multiple controls. Alternatively, if the property window is undocked, change the
	font properties for each control individually.
	
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
	
	1. Start Visual Basic 5.0 and open a new Standard EXE. Form1 is created by
	  default.
	
	2. Right-click on Properties window.
	
	3. Ensure that the Dockable option is checked.
	
	4. Ensure that the Properties window is undocked by selecting the Properties
	  window caption and dragging the Properties window off the docking area.
	
	5. On Form1, insert two label controls.
	
	6. Using the SHIFT key, select these two controls.
	
	7. Double-click on Font cell in the Properties window.
	
	8. In the Font dialog box, choose Times New Roman, Bold, 24-pts and click
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
