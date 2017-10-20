---
layout: page
title: "Q197582: FIX: FlexGrid SelChange Occurs for Every Selected Row or Column"
permalink: /kb/197/Q197582/
---

## Q197582: FIX: FlexGrid SelChange Occurs for Every Selected Row or Column

{% raw %}

	Article: Q197582
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbusage kbservicepack kbCtrl kbVBp kbVBp500 kbVBp600bug kbGrpDSVB kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SelChange event of the Microsoft FlexGrid control fires once for each row
	and/or column added to the selection.
	
	CAUSE
	=====
	
	Behavior of the FlexGrid control was modified to trigger the SelChange event
	every time a row or column was added to the selection.
	
	In Visual Basic 5.0, the SelChange event fired only once when the selection was
	extended, regardless of the number of rows or columns in the selection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic 6.0. Form1 is created by
	  default.
	
	2. Select Components from the Project menu. Select the Microsoft FlexGrid
	  Control 6.0. Click OK to close the dialog, and add the control to the
	  toolbox.
	
	3. Place an instance of the FlexGrid control on Form1.
	
	4. Add the following code to Form1:
	
	        Private Sub Form_Load()
	           MSFlexGrid1.Cols = 10
	           MSFlexGrid1.Rows = 10
	        End Sub
	
	        Private Sub MSFlexGrid1_SelChange()
	           Debug.Print "SelChange"
	        End Sub
	
	5. Press the F5 key to run the project. Click in one of the FlexGrid cells. Hold
	  the left-mouse button down and extend the selection across several other rows
	  and columns.
	
	6. Look in the Immediate window: "SelChange" appears once for each column and
	  row added to the selection.NOTE: If this test is repeated in Visual Basic 5.0
	  with the Visual Basic 5.0 version of the MSFlexGrid control, the SelChange
	  event would occur only once at the end of the selection process and
	  regardless of the number of columns and rows added to the selection. The
	  Hierarchical FlexGrid Control 6.0 (MSHFlexGrid) behaves the same as described
	  above for the Visual Basic 5.0 version of the regular FlexGrid control.
	
	REFERENCES
	==========
	
	MSDN Library, Visual Basic 6.0 documentation
	
	Additional query words: msflexgrid
	
	======================================================================
	Keywords          : kbusage kbservicepack kbCtrl kbVBp kbVBp500 kbVBp600bug kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
