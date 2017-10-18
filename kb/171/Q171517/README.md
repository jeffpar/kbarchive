---
layout: page
title: "Q171517: FIX: Animation Control Prints Incorrectly at Design-Time"
permalink: kb/171/Q171517/
---

## Q171517: FIX: Animation Control Prints Incorrectly at Design-Time

	Article: Q171517
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
	
	Random black bands and other distortions appear when printing a form image
	containing an Animation control. Only the Animation control is affected, the
	rest of the form image should print correctly.
	
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
	
	The Animation control is part of the Microsoft Windows Common Controls-2 5.0
	(comct232.ocx).
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project.
	
	2. Select Project->Components from the menu.
	
	3. Select Microsoft Windows Common Controls-2 5.0 (comct232.ocx) and click OK.
	
	4. Add an Animation control from the Toolbox to Form1.
	
	5. Select File->Print from the menu.
	
	6. Deselect the "Code" option and select the "Form Image" option.
	
	7. Click on the OK button. The result will be a form image with a distorted
	  Animation control on it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
