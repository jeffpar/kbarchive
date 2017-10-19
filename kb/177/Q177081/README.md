---
layout: page
title: "Q177081: BUG: Control Displays Dithered Background in 256-Color Mode"
permalink: /kb/177/Q177081/
---

## Q177081: BUG: Control Displays Dithered Background in 256-Color Mode

	Article: Q177081
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbColor kbVBp kbVBp500bug kbGrpDSVB kbDSupport
	Last Modified: 14-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A form using a custom palette dithers the background color of any control placed
	on the form when the project is run on a computer configured to display 256
	colors. This symptom does not occur on a computer configured to display more
	than 256 colors.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Run the Visual Basic program on a system configured to display more than 256
	  colors.
	
	  -or-
	
	- Do not use a custom palette.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: To reproduce this problem, your system display should be set to 256-color.
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a Frame control to Form1.
	
	3. Set the following properties for Form1:
	
	  Property                 Value
	  --------                 -----
	  Picture                  pastel.dib
	  PaletteMode              1-UseZOrder
	
	  The file pastel.dib is located in the Samples\PGuide\PalMode directory where
	  you installed Visual Basic.
	
	4. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Me.BackColor = RGB(24, 180, 164)
	           Frame1.BackColor = RGB(24, 180, 164)
	        End Sub
	
	5. Press the F5 key to run the program and note that the Frame background
	  appears dithered.
	
	REFERENCES
	==========
	
	"Using Relative Palette Colors" topic in Readme.hlp
	
	For more information about Visual Basic and color palettes, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q74908 : SAMPLE: Using the Palette Under Windows
	
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Arsenio
	Locsin Microsoft Corporation
	
	Additional query words: display vga
	
	======================================================================
	Keywords          : kbColor kbVBp kbVBp500bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
