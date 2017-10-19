---
layout: page
title: "Q215448: BUG: ComboBox Scroll Event Might Not Fire"
permalink: /kb/215/Q215448/
---

## Q215448: BUG: ComboBox Scroll Event Might Not Fire

	Article: Q215448
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances (outlined below), the Scroll Event of a ComboBox may
	not fire.
	
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
	
	2. Add a ComboBox to Form1.
	
	3. Add the following code to Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	      Dim x
	      For x = 1 To 10
	          Combo1.AddItem "item: " & x
	      Next
	  End Sub
	
	  Private Sub Combo1_Scroll()
	      Form1.Print "scroll"
	  End Sub
	
	4. Run the project.
	
	5. Click the first item in the ComboBox and drag the mouse (or stylus) down
	  until the ComboBox scrolls. Note that the Scroll Event of the ComboBox does
	  not fire.
	
	6. Scroll through the ComboBox using the vertical scrollbar. Note that the
	  Scroll Event fires as expected.
	
	Additional query words: vbce vbce6 wince wce eVB
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbVCeMb kbWinCETK100VB600
	Version           : :1.0,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
