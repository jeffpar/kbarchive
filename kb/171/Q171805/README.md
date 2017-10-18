---
layout: page
title: "Q171805: FIX: Problems Binding Controls to Nonexistent Data Control"
permalink: kb/171/Q171805/
---

## Q171805: FIX: Problems Binding Controls to Nonexistent Data Control

	Article: Q171805
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the DataSource property of a control to the name of a data control that
	does not exist may cause a GPF with the following information:
	
	  'Visual Basic 5.0 caused an invalid page fault in module KERNEL32.DLL at
	  0137:bff78053"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base: Q170365 INFO: Visual Studio
	97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the problem, place a data control (either standard or remote) on a
	form. Set its Name property to "ExtremelyLongName" and set its Index property to
	0. Place a textbox (or any other control that can be bound) on the form and set
	its DataSource property to "Food." Run the project and the problem will occur.
	
	Besides trying to bind a control to a non-existent data control, in order to
	reproduce the problem the data control must be part of a control array and its
	Name property must be longer than any name used in the DataSource property of
	the bound controls.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
