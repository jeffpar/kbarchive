---
layout: page
title: "Q223073: FIX: MSHFlexGrid Dashes/Dots Invalid for GridLinesHeader/In"
permalink: /kb/223/Q223073/
---

## Q223073: FIX: MSHFlexGrid Dashes/Dots Invalid for GridLinesHeader/In

	Article: Q223073
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Hierarchical FlexGrid control it is possible to specify a
	specific type of line style (dots, dashes, etc.) that the control will use as a
	border between cells. These line style attributes can be set using the
	GridLinesHeader and GridLinesIndent properties of the control.
	
	In versions of Visual Basic prior to Visual Studio Service Pack 3, when setting
	these two properties to either flexGridDashes(4) or flexGridDots(5) you may not
	see the appropriate line styles drawn in the MSHFlexGrid control. Instead the
	lines will be drawn as normal lines without using the correct style attribute.
	
	RESOLUTION
	==========
	
	This problem with the Microsoft Hierarchical FlexGrid has been fixed. See the
	STATUS section below for more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The code below reproduces this problem. This code uses the Northwind database
	(nwind.mdb) that ships with Visual Basic 6.0. You may need to change the
	connection string to point to your copy of the Northwind database.
	
	1. Create a new Visual Basic 6.0 Standard EXE project and add a reference to the
	  Microsoft ActiveX Data Objects library.
	
	2. From the Project menu, choose Components and add a reference to the Microsoft
	  Hierarchical FlexGrid Control 6.0.
	
	3. Add an Hierarchical FlexGrid and a CommandButton to the default form.
	
	4. Paste the following code into the form:
	
	  Const CONNECTSTR = "Provider=MSDataShape;Data Provider=Microsoft.Jet.OLEDB.3.51;" & _
	                      "Persist Security Info=False;Data Source=" & _
	                      "c:\Nwind.mdb"
	
	  Private Sub Command1_Click()
	         
	         MSHFlexGrid1.BandDisplay = flexBandDisplayVertical
	         MSHFlexGrid1.BandIndent(1) = 2
	         MSHFlexGrid1.ColHeader(1) = flexColHeaderOn
	      
	         MSHFlexGrid1.GridColorHeader(1) = QBColor(13)  '13 = light magenta (magenta = 5)
	         MSHFlexGrid1.GridColorIndent(1) = QBColor(14)  '14 = light yellow (yellow = 6)
	
	         MSHFlexGrid1.GridLinesHeader(1) = flexGridDashes
	         MSHFlexGrid1.GridLinesIndent(1) = flexGridDashes
	         
	  End Sub
	
	  Private Sub Form_Load()
	         
	         Dim cn As New ADODB.Connection
	         Dim rs As New ADODB.Recordset
	      
	         cn.Open CONNECTSTR
	         rs.Open "SHAPE {SELECT OrderID,CustomerID,ShipName FROM Orders} AS Command1 " & _
	                  "APPEND ({SELECT * FROM [Order Details]} AS Command2 " & _
	                  "RELATE 'OrderID' TO 'OrderID')", cn
	      
	         Set MSHFlexGrid1.DataSource = rs
	
	  End Sub
	
	5. Run the code and note the bordering lines between the cells.
	
	If you are running Visual Basic with Visual Studio Service Pack 3 or later, this
	displays correctly (as dashes instead of solid lines).
	
	REFERENCES
	==========
	
	MSDN Library
	
	Additional query words: SHFlexGrid display lines
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
