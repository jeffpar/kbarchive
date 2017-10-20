---
layout: page
title: "Q155304: HOWTO: Trap an Invalid ODBC Logon Using the ODBC API"
permalink: /kb/155/Q155304/
---

## Q155304: HOWTO: Trap an Invalid ODBC Logon Using the ODBC API

{% raw %}

	Article: Q155304
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 4.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 4.0, 5.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use Open Database Connectivity (ODBC) API calls
	to test the validity of a Data Source Name, User ID, and Password.
	
	MORE INFORMATION
	================
	
	When a user tries opening an ODBC Data Source with an incorrect Data Source
	Name, User ID, or Password, ODBC prompts the user for the correct information.
	It is not possible to trap for this error using Visual Basic Error Handling
	methods.
	
	The following steps demonstrate how to test the logon parameters:
	
	1. Start a new Visual Basic project. Form1 is created by default.
	
	2. Add a command button (Command1) to Form1.
	
	3. Add three text boxes (Text1, Text2, and Text3) to Form1.
	
	4. Add a check box (Check1) to Form1.
	
	5. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        #If Win32 Then
	
	          Private Declare Function SQLAllocEnv Lib "odbc32.dll" _
	             (phenv As Long) As Integer
	          Private Declare Function SQLAllocConnect Lib "odbc32.dll" _
	             (ByVal henv As Long, phdbc As Long) As Integer
	          Private Declare Function SQLConnect Lib "odbc32.dll" ( _
	             ByVal hdbc As Long, ByVal szDSN As String, _
	             ByVal cbDSN As Integer, ByVal szUID As String, _
	             ByVal cbUID As Integer, ByVal szAuthStr As String, _
	             ByVal cbAuthStr As Integer) As Integer
	          Private Declare Function SQLFreeEnv Lib "odbc32.dll" _
	             (ByVal henv As Long) As Integer
	          Private Declare Function SQLFreeConnect Lib "odbc32.dll" _
	             (ByVal hdbc As Long) As Integer
	          Private Declare Function SQLError Lib "odbc32.dll" ( _
	             ByVal henv As Long, ByVal hdbc As Long, ByVal hstmt As Long, _
	             ByVal szSqlState As String, pfNativeError As Long, _
	             ByVal szErrorMsg As String, ByVal cbErrorMsgMax As Integer, _
	             pcbErrorMsg As Integer) As Integer
	        #ElseIf Win16 Then
	          Private Declare Function SQLAllocEnv Lib "odbc.dll" _
	             (phenv As Long) As Integer
	          Private Declare Function SQLAllocConnect Lib "odbc.dll" _
	             (ByVal henv As Long, phdbc As Long) As Integer
	          Private Declare Function SQLConnect Lib "odbc.dll" ( _
	             ByVal hdbc As Long, ByVal szDSN As String, _
	             ByVal cbDSN As Integer, ByVal szUID As String, _
	             ByVal cbUID As Integer, ByVal szAuthStr As String, _
	             ByVal cbAuthStr As Integer) As Integer
	          Private Declare Function SQLFreeEnv Lib "odbc.dll" _
	             (ByVal henv As Long) As Integer
	          Private Declare Function SQLFreeConnect Lib "odbc.dll" _
	             (ByVal hdbc As Long) As Integer
	          Private Declare Function SQLError Lib "odbc.dll" ( _
	             ByVal henv As Long, ByVal hdbc As Long, _
	             ByVal hstmt As Long, ByVal szSqlState As String, _
	             pfNativeError As Long, ByVal szErrorMsg As String, _
	             ByVal cbErrorMsgMax As Integer, pcbErrorMsg As Integer) _
	             As Integer
	        #End If
	
	        Private Const SQL_SUCCESS As Long = 0
	        Private Const SQL_SUCCESS_WITH_INFO As Long = 1
	
	        Private Function IsValidODBCLogin(ByVal sDSN As String, _
	           ByVal sUID As String, ByVal sPWD As String) As Boolean
	        Dim henv As Long    'Environment Handle
	        Dim hdbc As Long    'Connection Handle
	        Dim iResult As Integer
	
	          'Obtain Environment Handle
	          iResult = SQLAllocEnv(henv)
	          If iResult <> SQL_SUCCESS Then
	            IsValidODBCLogin = False
	            Exit Function
	          End If
	
	          'Obtain Connection Handle
	          iResult = SQLAllocConnect(henv, hdbc)
	          If iResult <> SQL_SUCCESS Then
	            IsValidODBCLogin = False
	            iResult = SQLFreeEnv(henv)
	            Exit Function
	          End If
	
	          'Test Connect Parameters
	          iResult = SQLConnect(hdbc, sDSN, Len(sDSN), sUID, Len(sUID), _
	                    sPWD, Len(sPWD))
	          If iResult <> SQL_SUCCESS Then
	            If iResult = SQL_SUCCESS_WITH_INFO Then
	              'The Connection has been successful, but SQLState Information
	              'has been returned
	              'Obtain all the SQLState Information
	              If Check1.Value Then ShowSQLErrorInfo hdbc, vbInformation
	              IsValidODBCLogin = True
	            Else
	              'Obtain all the Error Information
	              If Check1.Value Then ShowSQLErrorInfo hdbc, vbExclamation
	              IsValidODBCLogin = False
	            End If
	          Else
	            IsValidODBCLogin = True
	          End If
	
	          'Free Connection Handle and Environment Handle
	          iResult = SQLFreeConnect(hdbc)
	          iResult = SQLFreeEnv(henv)
	
	        End Function
	
	        Private Sub Form_Load()
	
	          Text1.Text = "DSN"
	          Text2.Text = "User ID"
	          Text3.Text = ""
	          Text3.PasswordChar = "*"
	          Command1.Caption = "Test Connect"
	          Check1.Caption = "Return Errors and Warnings"
	
	        End Sub
	
	        Private Sub Command1_Click()
	        Dim sServer As String, sLogin As String, sPassword As String
	
	          sServer = Text1.Text
	          sLogin = Text2.Text
	          sPassword = Text3.Text
	
	          If IsValidODBCLogin(sServer, sLogin, sPassword) = True Then
	            MsgBox "Connection Successful", vbInformation, "ODBC Logon"
	          Else
	            MsgBox "Connection Failed", vbExclamation, "ODBC Logon"
	          End If
	
	        End Sub
	
	        Private Sub ShowSQLErrorInfo(hdbc As Long, iMSGIcon As Integer)
	        Dim iResult As Integer
	        Dim hstmt As Long
	        Dim sBuffer1 As String * 16, sBuffer2 As String * 255
	        Dim lNative As Long, iOutlen As Integer
	
	          sBuffer1 = String$(16, 0)
	          sBuffer2 = String$(256, 0)
	
	          Do 'Cycle though all the Errors
	            iResult = SQLError(0, hdbc, hstmt, sBuffer1, lNative, sBuffer2, _
	                      256, iOutlen)
	            If iResult = SQL_SUCCESS Then
	              If iOutlen = 0 Then
	                MsgBox "Error -- No error information available", _
	                iMSGIcon, "ODBC Logon"
	              Else
	                MsgBox Left$(sBuffer2, iOutlen), iMSGIcon, "ODBC Logon"
	              End If
	            End If
	          Loop Until iResult <> SQL_SUCCESS
	
	        End Sub
	
	6. Press F5 to run the project. Enter a valid Data Source Name, User ID, and
	  Password in the appropriate text boxes and click on the Test Connect button.
	  A dialog box appears showing whether the connection is Successful or has
	  Failed. Select the check box "Return Errors and Warnings," and click on the
	  Test Connection button. Any errors and warnings are returned.
	
	REFERENCES
	==========
	
	Open Database Connectivity (ODBC) SDK, version 2.10, "Programmer's Reference,"
	on the Microsoft Developer Network (MSDN) CD.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q150786 How to Use SQLBindParameter with 32-bit Visual Basic 4.0
	
	"Hitchhiker's Guide to Visual Basic and SQL Server," William R. Vaughn,
	Microsoft Press, April 1996, ISBN: 1-55615-906-4.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbInterop kbODBC kbAPI
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
