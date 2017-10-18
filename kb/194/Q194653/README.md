---
layout: page
title: "Q194653: FIX: MSHFLexGrid Does Not Display More Than 2048 Rows"
permalink: kb/194/Q194653/
---

## Q194653: FIX: MSHFLexGrid Does Not Display More Than 2048 Rows

	Article: Q194653
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp600bug kbVS600sp3fix
	Last Modified: 30-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Hierarchical FlexGrid control always displays a maximum of 2048 rows
	regardless of the number of records in the data source.
	
	RESOLUTION
	==========
	
	Although the record-count of the mshflexgrid is correct, only the first 2048
	records are displayed. If you need to display more than 2048, you need to open
	the recordset and populate the grid using the GetString method of ADO and the
	Clip property of the MSHFlexGrid.
	
	The code below can be used in place of the code in the Command1_Click event in
	the MORE INFORMATION section to work around this behavior:
	
	     Dim cn As New ADODB.Connection
	     Dim rs As New ADODB.Recordset
	     Dim rsVar As Variant
	     Dim i As Integer
	     cn.Open "Testing"  '<-- Your DSN
	
	     rs.Open "select * from Cies", cn, adOpenStatic, adLockOptimistic
	     rs.MoveLast
	
	     rs.MoveFirst
	     ' Assuming that rs is your ADO recordset
	     MSHFlexGrid1.Rows = rs.RecordCount + 1
	
	     rsVar = rs.GetString(adClipString, rs.RecordCount)
	
	     MSHFlexGrid1.Cols = rs.Fields.Count
	
	     ' Set column names in the grid
	     For i = 0 To rs.Fields.Count - 1
	
	         MSHFlexGrid1.TextMatrix(0, i) = rs.Fields(i).Name
	
	     Next
	
	     MSHFlexGrid1.Row = 1
	     MSHFlexGrid1.Col = 0
	
	     ' Set range of cells in the grid
	     MSHFlexGrid1.RowSel = MSHFlexGrid1.Rows - 1
	     MSHFlexGrid1.ColSel = MSHFlexGrid1.Cols - 1
	     MSHFlexGrid1.Clip = rsVar
	
	     ' Reset the grid's selected range of cells
	     MSHFlexGrid1.RowSel = MSHFlexGrid1.Row
	     MSHFlexGrid1.ColSel = MSHFlexGrid1.Col
	
	     rs.Close
	     Set rs = Nothing
	     cn.Close
	     Set cn = Nothing
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This behavior of the MSHFlexGrid can be demonstrated against various back- ends
	including SQL Server, Access, etc.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Test Table
	----------
	
	1. Create a simple table with the following fields:
	
	    Name         Data Type (SQL Server)       Data Type(Access) 
	 ------------------------------------------------------------------
	
	    PartID          Integer                      Integer
	    PartName        VarChar (10)                 Text (10)
	
	2. Insert about 3000 - 10000 rows in your table. For simplicity, you can create
	  a loop and insert the same record in a counter of 3000 to 10000.
	
	3. Save your table as "Test."
	
	  NOTE: You can choose any other back-end to perform the test.
	
	Visual Basic Client
	-------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select "Components" on the Project menu, and choose the following components:
	
	   - Microsoft ADO Data Control 6.0 (OLE DB).
	   - Microsoft Hierarchical FlexGrid Control 6.0.
	
	3. Select References on the Project menu, and click "Microsoft ActiveX Data
	  Objects 2.0 Library."
	
	4. Place the following objects on the form:
	
	   Control             Name                  Caption
	  -------------------------------------------------------------------
	
	  CommandButton       Command1           Using ADO Recordset
	  CommandButton       Command2           Using ADODC
	  CommandButton       Command3           Free MSHFlexGrid
	  MSHFlexGrid         MSHFlexGrid1       Testing MSHFlexGrid Display
	  ADODC               Adodc1
	
	5. Bind ADODC via your DSN or via your native OLEDB provider (if it exists). In
	  the RecordSource property, write: Select * From Test.
	
	6. Place the following code in the General Declaration section of Form1:
	
	         Option Explicit
	
	         Private Sub Command1_Click()
	
	            Dim cn As New ADODB.Connection
	            Dim rs As New ADODB.Recordset
	
	            cn.Open "Testing"               '<-- Your DSN
	
	            rs.Open "select * from Test", cn, adOpenStatic, adLockOptimistic
	            rs.MoveLast
	
	            ' Check the number records in your ADO recordset
	            ' The RecordCount property of the ADO recordset reflects the
	            ' actual number of records
	
	            Debug.Print "ADO recordset record-count: " & vbTab & _
	                rs.RecordCount
	
	            Form1.Caption = "Loading grid... please wait..."
	
	            Set MSHFlexGrid1.Recordset = rs
	
	            ' Check the number of rows that the Hierarchical FlexGrid
	            ' contains The RecordCount property of the Hierarchical
	            ' FlexGrid also reflects the actual number of records
	
	            Debug.Print "MSHFlexGrid1 Recordset record-count: " & vbTab &  _
	               MSHFlexGrid1.Recordset.RecordCount
	
	            Form1.Caption = "MSHFlexGrid Display Sample"
	
	            ' Free resources
	            rs.Close
	            Set rs = Nothing
	            cn.Close
	            Set cn = Nothing
	
	         End Sub
	
	         Private Sub Command2_Click()
	
	            Form1.Caption = "Loading data... please wait..."
	
	            ' Set the Grid's source to be ADODC
	            Set MSHFlexGrid1.DataSource = Adodc1
	
	            ' Check the number of records in ADODC recordset
	            Debug.Print "ADO data control record-count: " & vbTab &  _
	               Adodc1.Recordset.RecordCount
	            Form1.Caption = "MSHFlexGrid Display Sample"
	         End Sub
	
	         Private Sub Command3_Click()
	            MSHFlexGrid1.Clear
	            Form1.Caption = "Grid is clear now..."
	         End Sub
	
	7. Press the F5 key to run the code, and note that only 2048 records are
	  displayed in the MSHFlexGrid.
	
	  NOTE: Connecting to the data source using the OLEDB Provider for ODBC or using
	  the native OLEDB Provider has no effect on the Hierarchical FlexGrid
	  behavior.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600bug kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
