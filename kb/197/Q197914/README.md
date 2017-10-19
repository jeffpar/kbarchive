---
layout: page
title: "Q197914: SAMPLE: RDOBLOBS.EXE RDO and BLOB/TEXT Data with SQL SP"
permalink: /kb/197/Q197914/
---

## Q197914: SAMPLE: RDOBLOBS.EXE RDO and BLOB/TEXT Data with SQL SP

	Article: Q197914
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbRDO kbSQL kbVBp500 kbVBp600 kbGrpDSVBDB kbSQLProg
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RDOblobs.exe is a sample file that demonstrates how to use Remote Data Objects
	(RDO) AppendChunk/GetChunk with stored procedures to Insert and/or Retrieve SQL
	Server 6.5 IMAGE and TEXT datatypes (BLOBS).
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  RDOblobs.exe
	  (http://download.microsoft.com/download/vb60ent/demo/1/WIN98/EN-US/Rdoblobs.exe)
	
	Release Date: DEC-29-1998
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	  FileName                    Size
	  ---------------------------------------------------------
	
	  RDOblobs.frm                10KB
	  uspGetBLOB.sql               1KB
	  uspInsertBLOB.sql            1KB
	  RDO_Blobs.exe               36KB
	  RDOblobs.vbp                 1KB
	  Readme.txt                   1KB
	
	You may use other techniques to store and retrieve binary large object (BLOB)
	data with RDO, as described in the articles located in the REFERENCES section of
	this article, although using stored procedures to Insert/Retrieve BLOBs may be
	more efficient. Please see the Microsoft Developer Network for a more
	comprehensive explanation.
	
	The following excerpt is taken from the Microsoft Developer Network article
	"Processing Queries and Results":
	
	  Sites can realize performance gains by coding most of their SQL statements
	  into stored procedures and having applications call the stored procedures
	  rather than issuing the SQL statements themselves. This offers the following
	  benefits:
	
	  * Higher performance
	  The SQL statements are parsed and compiled only when the procedures are
	  created, not when the procedures are executed by the applications.
	
	  * Reduced network overhead
	  Having an application execute a procedure instead of sending sometimes complex
	  queries across the network can reduce the traffic on the network. If an ODBC
	  application uses the ODBC { CALL MyProcedure} syntax to execute a stored
	  procedure, the ODBC driver makes additional optimizations that eliminate the
	  need to convert parameter data (for more information, see "ODBC Call vs.
	  Transact-SQL EXECUTE").
	
	  * Better consistency
	  The organization's business rules can be coded and debugged once in a stored
	  procedure, and they will then be consistently applied by all of the
	  applications. The site does not have to depend on all application programmers
	  coding their SQL statements correctly in all the applications.
	
	  * Better accuracy
	  Most sites will have their best SQL programmers developing stored procedures.
	  This means that the SQL statements in procedures tend to be more efficient
	  and have fewer errors than when the code is developed multiple times by
	  programmers of varying skill levels.
	
	The following code sample demonstrates creating the stored procedures for the
	BLOB Inserts and Selects then calling the InsertBLOB() function to pass the BLOB
	information as a Byte Array parameter to the uspInsertBLOB stored procedure.
	Note that normally you would create these stored procedures once (not
	dynamically) and use them again as needed. Please reference the ode in the
	RDOblobs.exe file for more detail.
	
	Sample Code
	-----------
	
	     Private Sub Command4_Click()
	
	     'Create uspInsertBLOB and uspGetBLOB stored procedures.
	     Dim strSQL As String
	
	     If Not (rdoCn Is Nothing) Then
	        With rdoCn
	           strSQL = "if exists (select * from sysobjects " & _
	                    "where id = object_id('dbo.uspGetBLOB') and sysstat & 0xf
	                     = 4) " & _
	                    "drop procedure dbo.uspGetBLOB"
	           .Execute strSQL
	           strSQL = "Create Procedure uspGetBLOB " & _
	                    "(@RowID  int=0, " & _
	                    "@BLOBname varchar(255)=" & "'') " & _
	                    "AS select RowID, BLOBname, BLOBtxt, BLOBimg " & _
	                    "FROM BLOBtable " & _
	                    "WHERE BLOBname = @BLOBname " & _
	                    "OR RowID = @RowID"
	           .Execute strSQL
	           strSQL = "if exists (select * from sysobjects " & _
	                    "where id = object_id('dbo.uspInsertBLOB') and sysstat &
	                     0xf = 4) " & _
	                    "drop procedure dbo.uspInsertBLOB"
	           .Execute strSQL
	           strSQL = "Create Procedure uspInsertBLOB " & _
	                    "(@BLOBname   varchar(255)=" & "'', " & _
	                    "@BLOBtxt    text=" & "'', " & _
	                    "@BLOBimg    image=" & "'') " & _
	                    "AS SET NOCOUNT ON " & _
	                    "INSERT BLOBtable(BLOBname, BLOBtxt, BLOBimg) " & _
	                    "VALUES (@BLOBname, @BLOBtxt, @BLOBimg) " & _
	                    "IF @@ROWCOUNT >0 " & _
	                    "return -1 " & _
	                    "Else " & _
	                    "return 0"
	           .Execute strSQL
	        End With
	        Label1.Caption = "Insert/Get BLOB Stored Procs Created..."
	     Else
	        Label1.Caption = "No Connection..."
	     End If
	
	     End Sub
	     '======================
	
	     Private Sub InsertBLOB()
	
	     On Error GoTo ErrHandler
	
	     MousePointer = vbHourglass
	
	     Dim bytData() As Byte
	     Dim strData As String
	     Dim lngBlockSize As Long
	     Dim intBlocks As Integer
	     Dim intBlocksLo As Integer
	     Dim lngFileLen1 As Long
	     Dim lngFileLen2 As Long
	     Dim intFileNum1 As Integer
	     Dim intFileNum2 As Integer
	     Dim strFileName1 As String
	     Dim strFileName2 As String
	     Dim intCnt As Integer
	     Dim rdoQy As New rdoQuery
	
	     lngBlockSize = 15000
	
	     'Open BLOB file.
	     intFileNum1 = FreeFile
	     strFileName1 = Text1.Text
	     Open strFileName1 For Binary Access Read As intFileNum1
	     lngFileLen1 = LOF(intFileNum1)
	
	     'Open TEXT file.
	     intFileNum2 = FreeFile
	     strFileName2 = Text2.Text
	     Open strFileName2 For Binary Access Read As intFileNum2
	     lngFileLen2 = LOF(intFileNum2)
	
	     If (lngFileLen1 = 0) Or (lngFileLen2 = 0) Then
	        Label1.Caption = "Empty or Missing Files..."
	        GoTo Shutdown
	     End If
	
	     With rdoQy
	        Set .ActiveConnection = rdoCn
	        .SQL = "{? = CALL uspInsertBLOB(?, ?, ?) }"
	     End With
	
	     rdoQy(0).Direction = rdParamReturnValue
	     rdoQy(1).Direction = rdParamInput
	     rdoQy(2).Direction = rdParamInput
	     rdoQy(3).Direction = rdParamInput
	     rdoQy(1) = strFileName1
	
	     intBlocks = lngFileLen1 \ lngBlockSize
	     intBlocksLo = lngFileLen1 Mod lngBlockSize
	
	     'AppendChunk IMAGE Column
	     ReDim bytData(intBlocksLo)
	     Get intFileNum1, , bytData()
	     rdoQy(3).AppendChunk bytData()
	
	     ReDim bytData(lngBlockSize)
	     For intCnt = 1 To intBlocks
	        Get intFileNum1, , bytData()
	        rdoQy(3).AppendChunk bytData()
	     Next intCnt
	
	     intBlocks = lngFileLen2 \ lngBlockSize
	     intBlocksLo = lngFileLen2 Mod lngBlockSize
	
	     'AppendChunk TEXT Column
	     strData = String(intBlocksLo, " ")
	     Get intFileNum2, , strData
	     rdoQy(2).AppendChunk strData
	     strData = String(lngBlockSize, " ")
	
	     For intCnt = 1 To intBlocks
	        Get intFileNum2, , strData
	        rdoQy(2).AppendChunk strData
	     Next intCnt
	
	     rdoQy.Execute
	     Debug.Print rdoQy(0).Value
	
	     GoTo Shutdown
	
	     ErrHandler:
	        MsgBox "Error : " & Err.Number & vbCrLf & Err.Description
	
	     Shutdown:
	        Close intFileNum1
	        Close intFileNum2
	        MousePointer = vbNormal
	        Label1.Caption = "BLOB Inserted..."
	
	     End Sub
	     '======================
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q153238 HOWTO: Use GetChunk and AppendChunk Methods of RDO Object
	
	  Q194975 HOWTO: Sample Functions Demonstrating GetChunk and AppendChunk
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbRDO kbSQL kbVBp500 kbVBp600 kbGrpDSVBDB kbSQLProg 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
