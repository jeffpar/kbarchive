---
layout: page
title: "Q171471: FIX: VB-Created Controls Fail to Print w/UserControl_Paint"
permalink: /kb/171/Q171471/
---

## Q171471: FIX: VB-Created Controls Fail to Print w/UserControl_Paint

	Article: Q171471
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
	
	When printing forms, drawings within UserControls will not be printed. The
	problem occurs when you print forms from the Visual Basic 5.0 IDE using either
	the Print command on the File menu or the PrintForm method at run- time. The
	problem does not occur when the project is made into an EXE.
	
	CAUSE
	=====
	
	When a UserControl contains drawing methods within its Paint event, this event
	is not triggered in the IDE in the same way as it is when the UserControl is
	within a compiled application. The IDE disables this event when its Print
	functionality is used. This same behavior is apparent in Run Mode when using the
	PrintForm method.
	
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
	
	1. Create a standard EXE project.
	
	2. Add a UserControl to this project.
	
	3. Add the following code to the UserControl code window:
	
	        Private Sub UserControl_Paint()
	           Dim r As Single
	           Dim smidX As Single
	           Dim smidY As Single
	
	           UserControl.DrawWidth = 3
	           smidX = ScaleWidth / 2
	           smidY = ScaleHeight / 2
	           Do While smidX - r > 0
	              Circle (smidX, smidY), r
	              r = r + 200
	           Loop
	        End Sub
	
	4. Close the code window and the UserControl designer.
	
	5. Add an instance of the control to Form1.
	
	6. Click Print from the File menu. Select the Form Image option. Note that the
	  graphics painted in the UserControl_Paint event do not appear on the printed
	  output.
	
	Additional query words: circle line
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
