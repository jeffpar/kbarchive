---
layout: page
title: "Q215391: BUG: Testing to See if the Current Form is &quot;Me&quot; Returns False"
permalink: kb/215/Q215391/
---

## Q215391: BUG: Testing to See if the Current Form is &quot;Me&quot; Returns False

	Article: Q215391
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500bug kbVBp600bug kbOSWinCEsearch kbGrpDSVB kbDSupport
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When testing to see if the current form is "Me" always returns False in a
	Windows CE Toolkit for Visual Basic (VBCE) or eMbedded Visual Basic (eVB)
	project, the expectation is that this should always return True.
	
	RESOLUTION
	==========
	
	The workaround for this is to compare the Caption properties of Me and Form1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Add a command button to Form1.
	
	3. Paste the following code into Form1:
	
	  Option Explicit
	
	  Public Sub Test(frm)
	      MsgBox "Form1 is frm = " & (Form1 Is frm)
	  End Sub
	
	  Private Sub Command1_Click()
	      Test Me
	      Test Form1
	  End Sub
	
	4. Run the project and target either emulation or the remote device.
	
	Additional query words: vbce vbce6 wce evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500bug kbVBp600bug kbOSWinCEsearch kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
