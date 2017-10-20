---
layout: page
title: "Q128720: INF: Use of SQLPutData() in Visual Basic"
permalink: /kb/128/Q128720/
---

## Q128720: INF: Use of SQLPutData() in Visual Basic

{% raw %}

	Article: Q128720
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0,2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 2.0, 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When sending long data values for binary large objects (BLOBs), you should use
	SQLPutData() and send the data in chunks. This is primarily due to the
	limitation(s) imposed by the ODBC drivers in sending BLOBs.
	
	For more information on calling SQLPutData(), refer to the "Microsoft ODBC 2.0
	Programmer's Reference and SDK Guide."
	
	MORE INFORMATION
	================
	
	The following is a small code sample written in Visual Basic that illustrates
	the calling of the ODBC API SQLPutData() to add data to a column.
	
	  ' Items found in (general) (declarations) in module
	  '
	  ' Declarations required to call ODBC API from VB 4.0 and 3.0:
	  '
	  ' If the application is 16-bit, include the following
	  ' function declaration
	  #If Win16 Then
	  Declare Function GetFocus Lib "User" () As Integer
	  Declare Function GetParent Lib "User" (ByVal hWnd%) As
	  Integer
	
	  Declare Function SQLAllocConnect Lib "odbc.dll" (ByVal
	  henv&, phdbc&) As Integer
	  Declare Function SQLAllocEnv Lib "odbc.dll" (phenv&) As
	  Integer
	  Declare Function SQLAllocStmt Lib "odbc.dll" (ByVal hdbc&,
	  phstmt&) As Integer
	  Declare Function SQLDisconnect Lib "odbc.dll" (ByVal hdbc&)
	  As Integer
	  Declare Function SQLError Lib "odbc.dll" (ByVal henv&, ByVal
	  hdbc&, ByVal hstmt&, ByVal szSqlState$, pfNativeError&,
	  ByVal szErrorMsg$, ByVal cbErrorMsgMax%, pcbErrorMsg%) As
	  Integer
	  Declare Function SQLExecDirect Lib "odbc.dll" (ByVal hstmt&,
	  ByVal szSqlStr$, ByVal cbSqlStr&) As Integer
	  Declare Function SQLFreeConnect Lib "odbc.dll" (ByVal hdbc&)
	  As Integer
	  Declare Function SQLFreeEnv Lib "odbc.dll" (ByVal henv&) As
	  Integer
	  Declare Function SQLFreeStmt Lib "odbc.dll" (ByVal hstmt&,
	  ByVal fOption%) As Integer
	  Declare Function SQLBindParameter Lib "odbc.dll" (ByVal
	  hstmt&, ByVal ipar%, ByVal fParamType%, ByVal fCType%, ByVal
	  fSqlType%, ByVal cbColDef&, ByVal ibScale%, rgbValue As Any,
	  ByVal cbValueMax&, pcbValue As Long) As Integer
	  Declare Function SQLDriverConnect Lib "odbc.dll" (ByVal
	  hdbc&, ByVal hWnd%, ByVal szCSIn$, ByVal cbCSIn%, ByVal
	  szCSOut$, ByVal cbCSMax%, cbCSOut%, ByVal fDrvrComp%) As
	  Integer
	  Declare Function SQLParamData Lib "odbc.dll" (ByVal hstmt&,
	  prgbValue As Any) As Integer
	  Declare Function SQLPutData Lib "odbc.dll" (ByVal hstmt&,
	  ByVal rgbValue$, ByVal cbValue&) As Integer
	
	  ' If the application is 32-bit, include the following
	  ' function declaration
	  #Else
	  Declare Function GetFocus Lib "User32" () As Integer
	  Declare Function GetParent Lib "User32" (ByVal hWnd%) As
	  Integer
	
	  Declare Function SQLAllocConnect Lib "odbc32.dll" (ByVal
	  henv&, phdbc&) As Integer
	  Declare Function SQLAllocEnv Lib "odbc32.dll" (phenv&) As
	  Integer
	  Declare Function SQLAllocStmt Lib "odbc32.dll" (ByVal hdbc&,
	  phstmt&) As Integer
	  Declare Function SQLDisconnect Lib "odbc32.dll" (ByVal
	  hdbc&) As Integer
	  Declare Function SQLError Lib "odbc32.dll" (ByVal henv&,
	  ByVal hdbc&, ByVal hstmt&, ByVal szSqlState$,
	  pfNativeError&, ByVal szErrorMsg$, ByVal cbErrorMsgMax%,
	  pcbErrorMsg%) As Integer
	  Declare Function SQLExecDirect Lib "odbc32.dll" (ByVal
	  hstmt&, ByVal szSqlStr$, ByVal cbSqlStr&) As Integer
	  Declare Function SQLFreeConnect Lib "odbc32.dll" (ByVal
	  hdbc&) As Integer
	  Declare Function SQLFreeEnv Lib "odbc32.dll" (ByVal henv&)
	  As Integer
	  Declare Function SQLFreeStmt Lib "odbc32.dll" (ByVal hstmt&,
	  ByVal fOption%) As Integer
	  Declare Function SQLBindParameter Lib "odbc32.dll" (ByVal
	  hstmt&, ByVal ipar%, ByVal fParamType%, ByVal fCType%, ByVal
	  fSqlType%, ByVal cbColDef&, ByVal ibScale%, rgbValue As Any,
	  ByVal cbValueMax&, pcbValue As Long) As Integer
	  Declare Function SQLDriverConnect Lib "odbc32.dll" (ByVal
	  hdbc&, ByVal hWnd%, ByVal szCSIn$, ByVal cbCSIn%, ByVal
	  szCSOut$, ByVal cbCSMax%, cbCSOut%, ByVal fDrvrComp%) As
	  Integer
	  Declare Function SQLParamData Lib "odbc32.dll" (ByVal
	  hstmt&, prgbValue As Any) As Integer
	  Declare Function SQLPutData Lib "odbc32.dll" (ByVal hstmt&,
	  ByVal rgbValue$, ByVal cbValue&) As Integer
	  #End If
	
	  ' Because this is in module, the variables must be global
	  Global Const SQL_ERROR = -1
	  Global Const SQL_CHAR = 1
	  Global Const SQL_C_CHAR = 1
	  Global Const SQL_NEED_DATA = 99
	  Global Const SQL_DRIVER_PROMPT = 2
	  Global Const SQL_LEN_DATA_AT_EXEC_OFFSET = -100
	
	  Sub Command3D1_Click ()
	  '
	  ' This sample VB code illustrates the use of the ODBC API
	  ' call  SQLPutData()
	  '
	  ' It has been kept as simple as possible with a minimal
	  ' amount of code and declarations.
	
	      Dim henv As Long
	      Dim hdbc2 As Long
	      Dim hstmt2 As Long
	      Dim nstatus%
	      Dim ptoken As Integer
	
	      nstatus = SQLAllocEnv(henv)
	
	      nstatus = SQLAllocConnect(henv, hdbc2)
	      If (nstatus = SQL_ERROR) Then
	          MsgBox "Couldn't allocate memory for connection"
	      End If
	
	  ' The parameters passed to SQLDriverConnect() after the
	  ' second one are not really used for anything. The call
	  ' expects the variables as output variables so we pass them
	  ' to the call to avoid problems.
	  '
	      nstatus = SQLDriverConnect(hdbc2, GetParent(GetFocus()),
	  S$, Len(S$), Server, Len(Server), cbOut%, SQL_DRIVER_PROMPT)
	      If (nstatus = SQL_ERROR) Then
	          MsgBox "Couldn't connect"
	      End If
	
	  ' In this sample, I am connecting to a SQL Server database
	  ' and this table is defined:
	  ' CREATE TABLE model01 (col1 char(30),col2 char(30))
	  ' INSERT INTO model01 VALUES('Kate Moss', 'Kate Moss')
	
	      sSQLString = "update model01 set col2 = ? where col1 =
	  'Kate Moss'"
	
	      leng = Len(sSQLString)
	
	      nstatus = SQLAllocStmt(hdbc2, hstmt2)
	      If (nstatus = SQL_ERROR) Then
	          MsgBox "Couldn't allocate memory for statement"
	      End If
	
	  '
	  ' In this particular call to SQLBindParmeter, we are binding
	  ' a VB string variable to a column on the SQL Server
	  ' database server that we know to be a char(30). The '1' in
	  ' the third parameter of this call indicates that this
	  ' parameter is of type SQL_PARAM_INPUT. Please refer to the
	  ' definition of fParamType in the description of
	  ' SQLBIndParameter() in the ODBC SDK Programmer's Reference
	  ' for more information. The sixth parameter, cbColDef , is
	  ' indicating that we will be inserting 22 characters into
	  ' this column via the parameter marker. 22 will be the most
	  ' that we can insert into this column now, because of how we
	  ' have defined cbColDef. The 7th parameter (ibScale) is 0
	  ' because we know from Appendix D of the ODBC 2.0
	  ' Programmer's Reference that this is the case for char
	  ' datatypes. If you've read this far into the comment and
	  ' still don't have the Prog. Ref., please call 1-800-MSP-
	  ' RESS or visit your local computer book store to order it.
	  ' ISBN number = 1-55615-658-8. The 8th parameter is a 1
	  ' instead of a pointer to a memory area because we know that
	  ' we are going to be using SQLParamData()/SQLPutData() to
	  ' load the parameter. The 1 is just meant as a placeholder
	  ' in this case. For the same reason, the 9th parameter is 0.
	  ' The 10th parameter needs to be the result of the
	  ' computation (-100 - (number of bytes being passed)). In
	  ' this case cbColDef is 22, which is why the 10th parameter,
	  ' pcbValue, is -122. The -100 in the computation represents
	  ' the #define in SQLEXT.H called
	  ' SQL_LEN_DATA_AT_EXEC_OFFSET. The bind is done this way so
	  ' that later on, when the sql statement is executed, the
	  ' ODBC driver manager knows more information will need to be
	  ' prompted for via the parameter marker.
	  '
	
	      nstatus = SQLBindParameter(hstmt2, 1, 1, SQL_C_CHAR,
	      SQL_CHAR, 22, 0, 1, 0, -122)
	      If (nstatus = SQL_ERROR) Then
	          MsgBox "error on Bind"
	      End If
	
	  ' You should pay particular attention to the declaration of any string
	  ' variable that will need to be passed to ODBC.DLL. This includes rgbValue
	  ' in both SQLBindParameter() and SQLGetData(). The declaration should be
	  ' "rgbValue as Any" to work. This is the most flexible way to declare a
	  ' function variable for a Windows DLL function that will be passed from a
	  ' VB program in a Windows DLL because it allows for both string and numeric
	  ' values to be passed. When a string value is passed from a VB program to
	  ' the Windows DLL and the DLL call expects a 'char *', the VB program
	  ' should declare the variable being passed as a VB String variable, and
	  ' then pass it with the ByVal indicator. This is what is shown in the
	  ' example here. If the VB variable to be passed had been a numeric value,
	  ' the variable that would be passed could be declared as long or
	  ' integer, and during the call to the DLL, the variable would go into the
	  ' call without the ByVal modifier.
	  '
	  ' This occurs because in all cases, the C function expects a pointer to a
	  ' memory location. From the VB perspective, a String variable refers to a
	  ' pointer to another pointer to a memory location containing a string. This
	  ' is why ByVal used in front of the variable during the function call gives
	  ' a pointer to a memory location containing a string. On the other hand, a
	  ' numeric variable in VB refers to a pointer to a memory location
	  ' containing a numeric value. That is why the ByVal modifier is not
	  ' necessary for the function call when a numeric Visual Basic variable
	  ' is being passed in.
	  '
	  ' For an example and additional information, please see the following
	  ' article in the Microsoft Knowledge Base:
	  '
	  '   ARTICLE-ID: Q135840
	  '   TITLE     : INF: Use of SQLBindParameter with VB and an ODBC driver
	
	      nstatus = SQLExecDirect(hstmt2, sSQLString, leng)
	      If (nstatus = SQL_ERROR) Then
	          MsgBox "Error on execdirect"
	      End If
	
	      Dim lenhy As Integer
	      lenhy = 0
	
	  '
	  ' The use of SQLParamData() is simplified here to account
	  ' for use of only one parameter marked in the SQL
	  ' statement being executed. If there had been more than one
	  ' parameter marker, we would have needed to call
	  ' SQLParamData() more. In general, if there
	  ' are n parameter markers (?) contained in the SQL statement
	  ' being processed, then SQLParamData() must be called n + 1
	  ' times to successfully move through the parameters.
	  '
	       nstatus = SQLParamData(hstmt2, ptoken)
	       If (nstatus = SQL_NEED_DATA) Then
	          ' An assumption is made here that we know that the
	          ' length of the data that we are inserting in this
	          ' particular parameter marker is 22.
	          While (lenhy < 22)
	            buffer = "Some String"
	            '
	            ' It is quite inefficient in this particular case
	            ' to initialize the buffer in this part of the
	            'code. In most regular situations though, the
	            ' value of the buffer inserted into the column
	            ' with SQLPutData() will change
	            ' before each call to SQLPutData(), so I left the
	            'code this way.
	            nstatus = SQLPutData(hstmt2, buffer, Len(buffer))
	            If (nstatus = SQL_ERROR) Then
	              MsgBox "Error calling putdata"
	            End If
	            lenhy = lenhy + Len(buffer)
	          Wend
	       End If
	  '
	  ' As mentioned before, the last call to SQLParamData()
	  ' is required to properly finish processing parameters.
	
	      nstatus = SQLParamData(hstmt2, ptoken)
	
	      nstatus = SQLDisconnect(hdbc2)
	      nstatus = SQLFreeConnect(hdbc2)
	      nstatus = SQLFreeEnv(henv)
	
	      MsgBox "Finished"
	
	  End Sub
	
	Additional query words: 2.10 odbc vb
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300 kbODBC200 kbODBC210
	Version           : WINDOWS:2.0,2.1,3.0
	
	=============================================================================
	

{% endraw %}
