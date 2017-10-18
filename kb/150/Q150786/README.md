---
layout: page
title: "Q150786: HOWTO: Use SQLBindParameter with 32-bit Visual Basic"
permalink: kb/150/Q150786/
---

## Q150786: HOWTO: Use SQLBindParameter with 32-bit Visual Basic

	Article: Q150786
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use the ODBC API SQLBindParameter function with
	the 32-bit edition of Visual Basic 4.0 and higher. It includes the use of a
	Visual Basic byte array, required with the UNICODE to ANSI string conversion
	implemented in Visual Basic, to pass string data back and forth.
	
	Programming directly to the ODBC API is an alternative to using RDO and DAO code
	to access the ODBC database, both of which depend on an OLE interface and the
	associated overhead. This direct method allows the programmer to have low-level
	control over the ODBC datasource. This article also introduces the Visual Basic
	programmer to a complex programming model that requires in-depth knowledge of
	the ODBC 2.0 specification.
	
	If you feel you can benefit from this direct approach, obtain a copy of the "ODBC
	2.0 Programmer's Reference and SDK Guide" that fully documents the ODBC API
	before you proceed.
	
	MORE INFORMATION
	================
	
	Sample Program
	--------------
	
	The following example uses the ODBC API SQLBindParameter function with the 32-bit
	edition of Visual Basic 4.0 and higher and changes the au_lname column of the
	authors table to a different value. You need to change the table and column name
	to match your ODBC datasource.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the file ODBC32.TXT to your project. From the File menu, select Add File,
	  or, from the Context menu, right-click Project, and select Add File. The file
	  ODBC32.TXT is found in the \VB\SAMPLES\REMAUTO\DB_ODBC directory of your
	  Visual Basic 4.0 Enterprise Edition CD-ROM, or it is included with the ODBC
	  SDK.
	
	3. Add a Command button to Form1. Command1 is created by default.
	
	4. Paste the following code into the General Declarations section of Form1:
	
	        Option Explicit
	        Dim hen As Long     ' environment handle.
	        Dim hdbc As Long     ' connect handle.
	        Dim hstmt As Long    ' statement handle.
	        Dim intRc As Integer ' return value.
	        Const ROWSETSIZE As Long = 1
	
	        Private Sub Form_Load()
	          ' load driver manager.
	          intRc = SQLAllocEnv(hen)            ' allocate environment handle.
	          intRc = SQLAllocConnect(ByVal hen, hdbc) ' allocate connection
	                                                   ' handle.
	
	          ' load driver.
	          Dim strDSN As String, strUID As String, strPWD As String
	          strDSN = "pubs"
	          strUID = "sa"
	          strPWD = ""
	          intRc = SQLConnect(hdbc, strDSN, Len(strDSN), strUID, _
	                   Len(strUID), strPWD, Len(strPWD))
	        End Sub
	
	        Private Sub Command1_Click()
	           intRc = SQLAllocStmt(hdbc, hstmt) ' allocate a statement handle.
	
	          intRc = SQLSetStmtOption(hstmt, SQL_CONCURRENCY, SQL_CONCUR_ROWVER)
	          intRc = SQLSetStmtOption(hstmt, SQL_CURSOR_TYPE, _
	            SQL_CURSOR_KEYSET_DRIVEN)
	          intRc = SQLSetStmtOption(hstmt, SQL_ROWSET_SIZE, ROWSETSIZE)
	          intRc = SQLSetCursorName(hstmt, "C1", SQL_NTS)
	
	          Dim strSQL As String
	          strSQL = "Select au_lname from authors"
	          intRc = SQLExecDirect(hstmt, strSQL, Len(strSQL))
	          Debug.Print intRc
	
	          Dim szField1_Value(256) As Byte
	          Dim cbField1_Value As Long
	          intRc = SQLBindCol(hstmt, 1, SQL_C_CHAR, szField1_Value(0), 256, _
	            cbField1_Value)
	
	          Dim irow As Long
	          Dim pcrow As Long
	          Dim rgfRowStatus(ROWSETSIZE) As Integer
	
	          intRc = SQLExtendedFetch(ByVal hstmt, SQL_FETCH_NEXT, 0, pcrow, _
	            rgfRowStatus(0))
	          Debug.Print BytesToString(szField1_Value())
	
	          irow = 1
	          intRc = SQLSetPos(hstmt, irow, SQL_POSITION, SQL_LOCK_NO_CHANGE)
	
	          Dim hstmtU As Long
	          intRc = SQLAllocStmt(hdbc, hstmtU) ' alloc statement handle for
	                                             ' update.
	
	          strSQL = "UPDATE AUTHORS SET AU_LNAME=? WHERE CURRENT OF C1"
	          intRc = SQLPrepare(hstmtU, strSQL, Len(strSQL))
	
	          Call StringToBytes("John Doe", 256, szField1_Value())
	          Debug.Print BytesToString(szField1_Value())
	
	          intRc = SQLBindParameter(hstmtU, 1, SQL_PARAM_INPUT, SQL_C_CHAR, _
	            SQL_CHAR, 256, 0, szField1_Value(0), 0, SQL_NTS)
	
	          intRc = SQLExecute(hstmtU)
	          intRc = SQLFreeStmt(hstmtU, SQL_DROP)
	        End Sub
	
	        Private Function BytesToString(byte_array() As Byte) As String
	          ' convert byte array to string.
	          Dim Data As String, StrLen As String
	          Data = StrConv(byte_array(), vbUnicode)
	          StrLen = InStr(Data, Chr(0)) - 1
	          BytesToString = Left(Data, StrLen)
	        End Function
	
	        Private Sub StringToBytes(Data As String, ByteLen As Integer, _
	          return_buffer() As Byte)
	          ' convert string to byte array.
	          Dim StrLen As Integer, Count As Integer
	          For Count = 0 To Len(Data) - 1
	            return_buffer(Count) = Asc(Mid(Data, Count + 1, 1))
	          Next Count
	          For Count = Len(Data) To ByteLen
	            return_buffer(Count) = 0
	          Next Count
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	          intRc = SQLDisconnect(ByVal hdbc)
	          intRc = SQLFreeEnv(ByVal hen)
	          intRc = SQLFreeStmt(hstmt, SQL_DROP)
	        End Sub
	
	NOTE: You need to change your DSN, UID, and PWD parameters in the Form_Load event
	before continuing.
	
	1. Press the F5 key to start the program.
	
	2. Click the Command1 button to execute the ODBC API code. If the code executes
	  successfully, the previous value and the current value of the au_lname column
	  printed to the debug window appear.
	
	When working with the ODBC API, you cannot use the String data type because the
	32-bit edition of Visual Basic 4.0 stores all strings as UNICODE strings.
	ODBC32.DLL is an ANSI DLL file, so all communication involves one-byte character
	strings. Visual Basic can only accomplish this behavior with the new byte data
	type. If you bind a UNICODE string variable, Visual Basic allocates a temporary
	buffer to hold an ANSI version of the string, and passes that address to the
	SQLBindParameter function. The address is then on the stack and is invalid as
	soon as the stack frame is adjusted.
	
	REFERENCES
	==========
	
	For more information, please see: "ODBC 2.0 Programmer's Reference and SDK
	Guide," published by Microsoft Press.
	
	(Hitchhiker's Guide to Visual Basic and SQL Server, Microsoft Press.
	ISBN: 1-55615-906-4.).
	
	Additional query words: kbVBp kbdse kbDSupport kbVBp400 kbODBC
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
