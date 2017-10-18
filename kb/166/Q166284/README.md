---
layout: page
title: "Q166284: HOWTO: Use ODBC API SQLTables Function with Visual Basic and RDO"
permalink: kb/166/Q166284/
---

## Q166284: HOWTO: Use ODBC API SQLTables Function with Visual Basic and RDO

	Article: Q166284
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the rdoTables collection is generally the best way to retrieve the tables
	from an rdoConnection because the collection is built-in and requires very
	little code.
	
	If you want to take advantage of anything that the rdoTables collection does not
	provide, you can use the ODBC API SQLTables function. For example, SQLTables is
	a little faster at returning the table names; this can be especially apparent
	with an Oracle database. Also, the SQLTables function can return the table owner
	with each table. This article demonstrates each method in code so you can chose
	which is best for your situation.
	
	MORE INFORMATION
	================
	
	The following example uses the rdoTables collection and the SQLTables ODBC API
	function to fill two list boxes with the table names and print the performance
	numbers.
	
	For this example, SQL Server and the Pubs database are used, but you can change
	the DSN, UID, and PWD to match any ODBC database.
	
	
	1. Start a new project in Visual Basic and choose "Standard EXE." Form1 is
	  created by default.
	
	2. Add one CommandButton, Command1, and two list boxes, List1 and List2, to
	  Form1.
	
	3. Paste the following code into the General Declarations section of Form1:
	
	        Dim cn As New rdoConnection
	
	           Private Sub Form_Load()
	             'establish rdoConnection to use hDbc for SQLTables
	
	             'SQL Server example
	             'cn.Connect = _
	             '  "Driver={SQL Server}; Server=MyServer; " & _
	             '  "Database=Pubs; " & _
	             '  "Uid=sa; Pwd="
	
	             'Oracle example
	             cn.Connect = _
	               "Driver={Microsoft ODBC Driver for Oracle}; " & _
	               "connectstring=dsenterprise.world; " & _
	               "Uid=demo; Pwd=demo"
	             cn.EstablishConnection
	           End Sub
	
	           Private Sub Command1_Click()
	             Dim sngT As Single, intN As Integer
	
	             'Get tables using ODBC API
	             List1.Clear
	             intN = 0
	             sngT = Timer
	             aTables = GetODBCTables(hDbc:=cn.hDbc, Owner:=True, _
	               TableType:="'TABLE', 'VIEW'")
	             Dim i As Integer
	             For i = 0 To UBound(aTables) - 1
	               List1.AddItem aTables(i)
	               intN = intN + 1
	             Next i
	             Debug.Print intN, "odbc tables: ", Timer - sngT
	
	             DoEvents
	
	             'Get tables using rdoTables collection
	             List2.Clear
	             intN = 0
	             sngT = Timer
	             intN = cn.rdoTables.Count
	             For i = 0 To intN - 1
	               List2.AddItem cn.rdoTables(i).Name
	             Next i
	             Debug.Print intN, "rdo tables: ", Timer - sngT
	           End Sub
	
	           Public Function GetODBCTables(ByVal hDbc As Long, _
	             Optional Owner = True, _
	             Optional TableType = "'TABLE', 'VIEW', 'SYSTEM TABLE'") _
	             As Variant
	
	             On Error GoTo ehGetDSNTables
	             Dim intHstmt As Long, intRc As Integer
	             Dim strErrMsg As String * SQL_MAX_MESSAGE_LENGTH
	             Dim strSqlState As String * 5
	             Dim arrTables() As Variant, intCounter As Integer
	             Dim strTable As String
	             Dim strName As String * 255, strOwner As String * 255
	             Dim lngLenRead As Long
	
	             intRc = SQLAllocStmt(ByVal hDbc, intHstmt)
	             intRc = SQLTables(ByVal intHstmt, ByVal 0&, SQL_NTS, _
	               ByVal 0&, SQL_NTS, ByVal 0&, SQL_NTS, _
	               ByVal CStr(TableType), Len(TableType))
	             If intRc <> SQL_SUCCESS Then
	               GoTo ehGetDSNTables
	             End If
	
	             strOwner = String(255, 0)       'Init string to hold data.
	             strName = String(255, 0)        'Init string to hold data.
	
	             intRc = SQLFetch(intHstmt)
	             If intRc <> SQL_SUCCESS Then
	               GoTo ehGetDSNTables
	             End If
	
	             intCounter = 0
	             ReDim Preserve arrTables(intCounter)
	             While intRc <> SQL_NO_DATA_FOUND
	               intRc = SQLGetData(ByVal intHstmt, 2, SQL_C_CHAR, _
	                 ByVal strOwner, 254, lngLenRead)
	               intRc = SQLGetData(ByVal intHstmt, 3, SQL_C_CHAR, _
	                 ByVal strName, 254, lngLenRead)
	               strTable = IIf(Owner, Mid(strOwner, 1, _
	                 InStr(strOwner, Chr(0)) - 1) & ".", "")
	               strTable = strTable & Mid(strName, 1, _
	                 InStr(strName, Chr(0)) - 1)
	               ReDim Preserve arrTables(intCounter)
	               arrTables(intCounter) = strTable
	               intCounter = intCounter + 1
	
	               strOwner = String(255, 0)    'Init string to hold data.
	               strName = String(255, 0)     'Init string to hold data.
	               intRc = SQLFetch(intHstmt)
	             Wend
	             intRc = SQLFreeStmt(ByVal intHstmt, SQL_CLOSE)
	
	             GetODBCTables = arrTables
	             Exit Function
	           ehGetDSNTables:
	             intRc = SQLError(ByVal henv, ByVal hDbc, _
	               ByVal intHstmt, strSqlState, 0, strErrMsg, _
	               SQL_MAX_MESSAGE_LENGTH, 0)
	             Debug.Print "(" & strSqlState & ")" & strErrMsg
	           End Function
	
	4. From the Project menu, select Add Module, and then click on Module1. Then
	  paste the following code into the General Declarations section of Module1:
	
	        'As an alternative you could include the entire ODBC32.TXT* file
	        Global Const SQL_NTS As Long = -3
	        Global Const SQL_MAX_MESSAGE_LENGTH As Long = 512
	
	        Global Const SQL_NO_DATA_FOUND As Long = 100
	        Global Const SQL_SUCCESS As Long = 0
	
	        Global Const SQL_CHAR As Long = 1
	        Global Const SQL_C_CHAR As Long = SQL_CHAR
	        Global Const SQL_CLOSE As Long = 0
	
	        Declare Function SQLAllocStmt Lib "odbc32.dll" (ByVal hDbc&, _
	          phstmt&) As Integer
	        Declare Function SQLTables Lib "odbc32.dll" (ByVal hstmt&, _
	          szTblQualifier As Any, ByVal cbTblQualifier%, szTblOwner As Any, _
	          ByVal cbTblOwner%, szTblName As Any, ByVal cbTblName%, _
	          szTblType As Any, ByVal cbTblType%) As Integer
	        Declare Function SQLFetch Lib "odbc32.dll" (ByVal hstmt&) As Integer
	        Declare Function SQLGetData Lib "odbc32.dll" (ByVal hstmt&, _
	          ByVal icol%, ByVal fCType%, ByVal rgbValue As String, _
	          ByVal cbValueMax&, pcbValue&) As Integer
	        Declare Function SQLFreeStmt Lib "odbc32.dll" _
	          (ByVal hstmt&, ByVal fOption%) As Integer
	        Declare Function SQLError Lib "odbc32.dll" _
	          (ByVal henv&, ByVal hDbc&,_
	        ByVal hstmt&, ByVal szSqlState$, pfNativeError&, _
	          ByVal szErrorMsg$,_
	          ByVal cbErrorMsgMax%, pcbErrorMsg%) As Integer
	
	  *For more information about the ODBC32.TXT file, see the following article in
	  the Microsoft Knowledge Base:
	
	  Q173050 FILE: ODBCTXT.EXE: ODBC API Declare Statements Text File
	
	5. Change the DSN, UID, and PWD in Form1 to match the ODBC database you are
	  using.
	
	6. Start the program or press the F5 key.
	
	7. Click the Command1 button to execute the code, fill each list box, and
	  display the table count and performance numbers in the debug window.
	
	REFERENCES
	==========
	
	In Visual Basic Books Online see:
	
	 Guide to Building Client Server Applications in Visual Basic (Enterprise)
	   Part 3: Data Access Options
	     Using the ODBC API
	       ODBC API Overview
	         Retrieving Information about ODBC Data Sources
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Jon Fowler, Microsoft Corporation
	
	
	Additional query words: kbRDO kbODBC kbAPI kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
