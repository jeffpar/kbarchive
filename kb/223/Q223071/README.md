---
layout: page
title: "Q223071: FIX: MSHFlexgrid Clip Property Can't Get Data in Selected C"
permalink: /kb/223/Q223071/
---

## Q223071: FIX: MSHFlexgrid Clip Property Can't Get Data in Selected C

	Article: Q223071
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB
	Last Modified: 19-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the version of Hierarchical FlexGrid that ships with Visual Basic 6.0, the
	Clip property on the MSHFlexGrid control did not return the contents of the
	selected cells.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard Exe project. Form1 is created by default.
	
	2. Add the Hierarchical FlexGrid to the Visual Basic toolbox.
	
	3. Place a Hierarchical FlexGrid and a CommandButton on the form.
	
	4. Add the following code to the form:
	
	  Private Sub Command1_Click()
	      MsgBox "Clip = " & MSHFlexGrid1.Clip
	  End Sub
	
	  Private Sub Form_Load()
	      With MSHFlexGrid1
	          .Rows = 4
	          .Cols = 4
	          .Row = 0
	          .Col = 0
	          .RowSel = 3
	          .ColSel = 3
	          .Clip = vbTab & 1 & vbTab & 2 & vbTab & 3 & vbCr & _
	                  1 & vbTab & 1 & vbTab & 2 & vbTab & 3 & vbCr & _
	                  2 & vbTab & 2 & vbTab & 4 & vbTab & 6 & vbCr & _
	                  3 & vbTab & 3 & vbTab & 6 & vbTab & 9
	          .Row = 1
	          .Col = 1
	          .RowSel = 1
	          .ColSel = 1
	      End With
	      Command1.Caption = "Clip"
	  End Sub
	
	5. Run the project.
	
	6. Select some of the cells in the Hierarchical FlexGrid.
	
	7. Click the Command button marked "Clip."
	
	  If you're using the original version of the Hierarchical FlexGrid that shipped
	  with Visual Basic 6.0 (MSHFLXGD.OCX version 6.00.3005) you will not see the
	  contents of the selected cells in the dialog box. The Clip property will
	  return an empty string.
	
	With the version of the Hierarchical FlexGrid that ships with Visual Studio 6.0
	Service Pack 3, the Clip property will return the contents of the selected cells
	and you will see that data in the dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
