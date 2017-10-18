---
layout: page
title: "Q175547: FIX: Toolbar Performance Degrades with Dynamic Modification"
permalink: kb/175/Q175547/
---

## Q175547: FIX: Toolbar Performance Degrades with Dynamic Modification

	Article: Q175547
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Continually changing the Image properties of buttons on a Toolbar control
	results in an increased refreshed rate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 2.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Issue
	------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Set a Reference to the "Microsoft Windows Common Controls" component.
	
	3. Add one CommandButton, one Toolbar, and one ImageList to Form1.
	
	4. Add two images to the ImageList control by completing the following steps:
	
	   - Click the Custom property of the ImageList control. The Property Pages
	     dialog box appears.
	
	   - Click the Images tab.
	
	   - Click the Insert Picture button. The Select picture dialog box appears.
	
	   - Select two bitmap or icon files and click Open.
	
	   - Click OK to close the dialog box.
	
	5. Complete the following steps for the toolbar control:
	
	   - Click Custom property. The Property Pages dialog box appears.
	
	   - From the General Tab, set the ImageList property to ImageList1.
	
	   - From the Buttons Tab, click Insert Button to insert a button in the
	     toolbar. Set the Image property to 1.
	
	   - Click OK to close the Property Pages dialog box.
	
	6. Copy the following code to the Code window of the Form1 form.
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           Dim z As Integer, y As Integer
	           For z = 1 To 100
	              y = y + 1
	              Toolbar1.Buttons(1).Image = y Mod 2 + 1
	              DoEvents
	           Next z
	        End Sub
	
	7. Press the F5 key to run the program. Note that the amount of time required to
	  refresh the toolbar control increases with each iteration.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation
	
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
