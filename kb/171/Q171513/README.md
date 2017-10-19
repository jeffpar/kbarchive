---
layout: page
title: "Q171513: FIX: Cannot Drag a Nested UserControl with Automatic DragMode"
permalink: /kb/171/Q171513/
---

## Q171513: FIX: Cannot Drag a Nested UserControl with Automatic DragMode

	Article: Q171513
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
	
	When you have a nested UserControl whose DragMode is set to Automatic and you
	attempt to drag the control at run-time, your application may quit unexpectedly
	or you may receive the following error:
	
	  "Run-time error '-2147417848 (80010108)':
	  Method 'DragMode' of object '_UserControl1' Failed"
	
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
	
	1. Start a new "Standard EXE" project.
	
	2. Add a UserControl to the project.
	
	3. Set the Backcolor property of the UserControl to &H000000FF& (red)
	  and the Name property to "usrMovable."
	
	4. Resize usrMovable so that it is fairly small.
	
	5. Add the following code to the Click event of the UserControl:
	
	        UserControl.Extender.DragMode = vbAutomatic
	
	6. Add another UserControl to the project and set its Name property to
	  "usrHolder."
	
	7. Add an instance of usrMovable to usrHolder.
	
	8. Add an instance of usrHolder to Form1.
	
	9. Run the project.
	
	10. Click usrMovable and then attempt to drag usrMovable. You will either
	  receive the error described at the beginning of this article or your Visual
	  Basic application will unexpectedly end.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
