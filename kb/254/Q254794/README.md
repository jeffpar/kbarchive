---
layout: page
title: "Q254794: FIX: Row in Grid Remains Highlighted After Selecting Another Row"
permalink: /kb/254/Q254794/
---

## Q254794: FIX: Row in Grid Remains Highlighted After Selecting Another Row

	Article: Q254794
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600fix kbOSWinCE200 kbGrpDSVB kbDSupport
	Last Modified: 07-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SelectionMode property of the GridCtrl control is set to
	flexSelectionByRow, the row in the grid that is highlighted when the form that
	contains the grid is first displayed remains highlighted when you select other
	rows in the control.
	
	STATUS
	======
	
	This problem was corrected in MSCEGrid.dll version 6.0.0.9313 for the Windows CE
	Toolkit for Visual Basic 6.0.
	
	To obtain MSCEGrid.dll version 6.0.0.9313, see the following article in the
	Microsoft Knowledge Base:
	
	  Q254796 FILE: Updated Grid Control for Handheld PC Platform
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE HPC Project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click Components, and add the Microsoft CE Grid Control
	  6.0 library to the project.
	
	3. Add a GridCtrl control to Form1.
	
	4. Paste the following code into the code module of Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	      ' Assign the dimensions of the grid control.
	      GridCtrl1.Cols = 3
	      GridCtrl1.Rows = 4
	      ' Highlight the third row in the grid.
	      GridCtrl1.Row = 2
	      GridCtrl1.SelectionMode = flexSelectionByRow
	  End Sub
	
	5. Run the project in emulation or on a remote device. Notice that the third row
	  in the grid is highlighted.
	
	6. Select the first row in the grid. Notice that the third row stays highlighted
	  even after you select another row.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q247701 FILE: Updated Grid Control for H/PC Pro and PsPC Platforms
	
	Additional query words:
	
	======================================================================
	Keywords          : kbToolkit kbVBp600fix kbOSWinCE200 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
