---
layout: page
title: "Q168210: HOWTO: Get Return Parameters from a Stored Procedure with DAO"
permalink: /kb/168/Q168210/
---

## Q168210: HOWTO: Get Return Parameters from a Stored Procedure with DAO

{% raw %}

	Article: Q168210
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although RDO has the capability to execute stored procedures that return
	parameters, DAO does not. It is possible to run these stored procedures with a
	little bit of creative SQL.
	
	NOTE: The SQL code used is SQL Server's Transact SQL. Other servers may require
	slightly different syntax but the concept is the same.
	
	MORE INFORMATION
	================
	
	RDO gives the programmer direct access to input and output parameters through
	the rdoParameters collection of the PreparedStatement object. DAO has no
	equivalent functionality, but SQL does. The following Visual Basic code connects
	to a SQL Server, creates a stored procedure that has a return parameter, one
	input parameter, one input/output parameter and one output parameter, runs the
	stored procedure, and retrieves the output parameter values:
	
	1. Start a new Project. Form1 is created by default.
	
	2. Under the Tools - References menu, select the proper DAO reference.
	
	3. Add a Command Button to the form.
	
	4. In the Command1_Click() event, add the following code:
	
	      Private Sub Command1_Click()
	
	         Dim db As Database
	         Dim rs As Recordset
	         Dim strConnect As String
	         Dim strSQL As String
	         Dim strResult As String
	
	         'Set connect string.
	         strConnect = "ODBC;DSN=DSN_SP_TEST;"
	
	         'Open the database
	         Set db = DBEngine.Workspaces(0).OpenDatabase("", False, False, _
	                                                      strConnect)
	
	         'Check to see if sp exists and delete it if it does.
	         strSQL = "if exists "
	         strSQL = strSQL & "(SELECT * from sysobjects "
	         strSQL = strSQL & "WHERE id = object_id('dbo.sp_ReturnParams') "
	         strSQL = strSQL & "AND sysstat & 0xf = 4) "
	         strSQL = strSQL & "DROP PROCEDURE dbo.sp_ReturnParams"
	         MsgBox strSQL
	         db.Execute strSQL, dbSQLPassThrough
	
	         'Create the stored procedure. It really does not do much.
	         'It simply sets the variables and returns
	         strSQL = "/****** Object:  Stored Procedure dbo.sp_ReturnParams */"
	         strSQL = strSQL & vbCrLf & "CREATE PROCEDURE dbo.sp_ReturnParams"
	         strSQL = strSQL & vbCrLf & "/* Declare Parameters */"
	         strSQL = strSQL & vbCrLf & "  @intInput       int = Null,  "
	         strSQL = strSQL & vbCrLf & "  @strInputOutput varchar(20) = " _
	                                                             & "Null OUTPUT,"
	         strSQL = strSQL & vbCrLf & "  @strOutput      varchar(20) = " _
	                                                             & "Null OUTPUT"
	         strSQL = strSQL & vbCrLf & "AS"
	         strSQL = strSQL & vbCrLf & "BEGIN"
	         strSQL = strSQL & vbCrLf & "  SET NOCOUNT ON /* stops messages */"
	         strSQL = strSQL & vbCrLf & "  DECLARE @intReturn int " _
	                                                     & "/* Declare return */"
	         strSQL = strSQL & vbCrLf & "  SELECT @intReturn = 43 " _
	                                                     & "/* Set the return */"
	         strSQL = strSQL & vbCrLf & "  SELECT @strInputOutput = " _
	                                                     & "'Param InOut Test'"
	         strSQL = strSQL & vbCrLf & "  SELECT @strOutput = 'Param Out Test'"
	         strSQL = strSQL & vbCrLf & "  RETURN @intReturn"
	         strSQL = strSQL & vbCrLf & "END"
	         MsgBox strSQL
	         db.Execute strSQL, dbSQLPassThrough
	
	         'Get ready to call procedure.
	         'Declare the variables in SQL and then set them
	         'in SQL code. Then retrieve the values as a recordset.
	         strSQL = "SET NOCOUNT ON /* stops unwanted messages */"
	         strSQL = strSQL & vbCrLf & "/* Declare the variables */"
	         strSQL = strSQL & vbCrLf & "DECLARE @intIn       int"
	         strSQL = strSQL & vbCrLf & "DECLARE @strInOut     varchar(20)"
	         strSQL = strSQL & vbCrLf & "DECLARE @strOut      varchar(20)"
	         strSQL = strSQL & vbCrLf & "DECLARE @intRet      int"
	         strSQL = strSQL & vbCrLf & "/* Populate In Parameters */"
	         strSQL = strSQL & vbCrLf & "SELECT @intIn = 5"
	         strSQL = strSQL & vbCrLf & "SELECT @strInOut = 'In/Out In'"
	         strSQL = strSQL & vbCrLf & "/* Execute the procedure */"
	         strSQL = strSQL & vbCrLf & "EXECUTE @intRet = sp_ReturnParams "
	         strSQL = strSQL & "@intIn, @strInOut OUTPUT, @strOut OUTPUT"
	         strSQL = strSQL & vbCrLf & "/* Select back the records */"
	         strSQL = strSQL & vbCrLf & "SELECT @intRet AS param1, @intIn "
	         strSQL = strSQL & "AS param2, @strInOut AS param3, @strOut AS _
	                                                          param4"
	         Set rs = db.OpenRecordset(strSQL, dbOpenSnapshot, dbSQLPassThrough)
	
	         'Display the data in the parameters in a messagebox
	         strResult = "intReturn = " & rs.Fields("param1")
	         strResult = strResult & vbCrLf & "intInPut = " & rs.Fields("param2")
	         strResult = strResult & vbCrLf & "strInPutOutput = " & _
	                                                          rs.Fields("param3")
	         strResult = strResult & vbCrLf & "strOutput = " & _
	                                                          rs.Fields("param4")
	         MsgBox strResult
	      End Sub
	
	5. In the ODBC Administrator applet, create a DSN named DSN_SP_TEST that
	  connects to an SQL Server that you have the necessary rights to.
	
	6. Run the project. The code should connect to the server, create a stored
	  procedure named dbo.sp_ReturnParams, execute it passing in some values, and
	  display a message box with the return parameters.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Jon Fowler, Microsoft Corporation.
	
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbVBp400 KBdao
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
