---
layout: page
title: "Q253211: PRB: Large Recordsets Cause Problems When Scrolling Grids"
permalink: /kb/253/Q253211/
---

## Q253211: PRB: Large Recordsets Cause Problems When Scrolling Grids

	Article: Q253211
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDataBinding kbVBp600 kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using very large recordsets with the Microsoft DataGrid Control 6.0 or the
	Microsoft Hierarchical FlexGrid Control 6.0 can cause problems when scrolling
	the grid. When the user drags the thumbtrack to the bottom of the vertical
	scrollbar, the thumbtrack might jump back to the top. This happens whenever the
	top row of the grid would have been greater than 65,535.
	
	RESOLUTION
	==========
	
	Limit the recordset to fewer than 65,536 records. While the grid can display
	more rows, you cannot use the thumbtrack to scroll past this number.
	
	This bug does not show up in the OLEDB version of the APEX True DBGrid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE in Microsoft Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, select References, and add Microsoft ActiveX Data
	  Objects 2.x Library.
	
	3. On the Project menu, select Components, and add the following:
	
	  Microsoft DataGrid Control 6.0 (OLEDB)
	  Microsoft Hierarchical FlexGrid Control 6.0 SP3 (OLEDB)
	
	4. Place two Command buttons, a DataGrid, and a MSHFlexGrid on Form1.
	
	5. Place the following code into Form1:
	
	  Option Explicit
	
	  Dim rs As ADODB.Recordset
	
	  Private Sub Command1_Click()
	     Set rs = New ADODB.Recordset
	     With rs
	        .Fields.Append "Record Number", adBigInt
	        
	        .Open
	        
	        Dim x As Long
	        For x = 1 To 65535
	           .AddNew
	           ![Record Number] = x
	           .Update
	        Next x
	     End With
	     
	     Set DataGrid1.DataSource = rs
	     Set MSHFlexGrid1.DataSource = rs
	     Command2.Enabled = True
	  End Sub
	
	  Private Sub Command2_Click()
	     Dim x As Long
	     With rs
	        For x = 1 To 5
	           .AddNew
	           ![Record Number] = .RecordCount
	           .Update
	        Next x
	     End With
	     
	     Set MSHFlexGrid1.DataSource = rs
	  End Sub
	
	  Private Sub Form_Load()
	     Command1.Caption = "Add 64K"
	     Command2.Caption = "Add 5"
	     Command2.Enabled = False
	  End Sub
	
	6. Run the code and click Add 64K. Drag the thumbtrack to the bottom of the
	  vertical scrollbar on each grid, and note that the grids scroll properly.
	
	7. Click the Add 5 Command button until you have enough records to scroll past
	  record number 65,537. Drag the thumbtrack to the bottom of the vertical
	  scrollbar on each grid, and note that the thumbtrack jumps to the top of the
	  recordset when released at the bottom.
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Robert Pajaro, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	NOTE: In Visual Basic 6.0 versions prior to SP3, the Hierarchical Flex Grid was
	limited to 2048 rows. See the following Knowledge Base article for more
	information:
	
	  Q194653 FIX: MSHFLexGrid Does Not Display More Than 2048 Rows
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDataBinding kbVBp600 kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :2.0,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
