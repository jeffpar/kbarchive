---
layout: page
title: "Q253886: PRB: Updating DateTime Data in Microsoft SQL Server 7.0"
permalink: /kb/253/Q253886/
---

## Q253886: PRB: Updating DateTime Data in Microsoft SQL Server 7.0

{% raw %}

	Article: Q253886
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp600 KbDBFDBC kbSQLServ700 kbGrpDSFox kbDSupport kbCodeSnippet kbS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the DateTime data type in Microsoft SQL Server 7.0 or Microsoft Data Engine
	is updated from remote views, an ODBC error may occur if the DateTime data type
	is first populated in SQL Server 7.0. The problem is the precision in which SQL
	Server 7.0 and Visual FoxPro store DateTime data. SQL Server 7.0 has a precision
	that includes milliseconds. The precision in Visual FoxPro does not include
	milliseconds. When the data is updated, the ODBC driver detects the milliseconds
	in SQL Server 7.0 and incorrectly interprets that the data has been updated.
	This creates an update conflict.
	
	WORKAROUND
	==========
	
	There are three different workarounds for this problem. Any one of them must be
	accomplished against the SQL Server database.
	
	1. Change the DateTime data type to a SmallDateTime data type.
	
	2. Create a stored procedure that returns the data stored in SQL Server in a
	  converted format with millisecond precision removed. For example:
	
	  (convert(datetime,convert(char,getdate())))
	
	3. If you are setting a default date in the column, use the following code to
	  remove the millisecond precision:
	
	  (convert(datetime,convert(char,getdate())))
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Cut and paste the following code in a FoxPro program:
	
	  #DEFINE vfCRLF   CHR(13) + CHR(10)<BR/>
	
	  cServer = "MyServer"    && *** ADD YOUR SERVER NAME HERE ****
	  <BR/>
	  hdl = SQLSTRINGCONNECT("DRIVER=SQL Server;SERVER=" + cServer + ;
	  	";UID=sa;PWD=;APP=Microsoft Open Database Connectivity;DATABASE=tempdb")
	  IF hdl > 0
	  	cStr = "drop table [dbo].[SQLSetTime] "
	  	= sqlexec(hdl, cStr)
	  	cStr = "CREATE TABLE [dbo].[SQLSetTime] ( " + ;
	  		"[field_1] [int] IDENTITY (1, 1) , " + ;
	  		"[field_2] [int] , " + ;
	  		"[date1] [datetime] , " + ;
	  		"[date2] [smalldatetime] , " + ;
	  		"[date3] [datetime] " + ;
	  		") "
	  	= sqlexec(hdl, cStr)
	  	cStr = "ALTER TABLE [dbo].[SQLSetTime] WITH NOCHECK ADD " + vfCRLF + ;
	  		"CONSTRAINT [DF_SQLSetTime_date1] DEFAULT (getdate()) FOR [date1], " + vfCRLF + ;
	  		"CONSTRAINT [DF_SQLSetTime_date2] DEFAULT (getdate()) FOR [date2], " + vfCRLF + ;
	  		"CONSTRAINT [DF_SQLSetTime_date3] DEFAULT (convert(datetime,convert(char,getdate()))) FOR [date3] "
	  	= sqlexec(hdl, cStr)
	  	cStr = "SET QUOTED_IDENTIFIER  OFF    SET ANSI_NULLS  ON  "
	  	= sqlexec(hdl, cStr)
	  	cStr = "SET QUOTED_IDENTIFIER  OFF    SET ANSI_NULLS  ON  "
	  	= sqlexec(hdl, cStr)
	  	FOR x = 1 TO 10
	  		cStr = "INSERT INTO SqlSetTime (field_2) VALUES (?x)"
	  		= sqlexec(hdl, cStr)
	  	ENDFOR
	  	= sqldisconnect(hdl)
	
	  ENDIF
	
	  DisplayStatus([Creating database...])
	  CLOSE DATA ALL
	  CREATE DATABASE 'DATA1.DBC'
	  DisplayStatus([Creating connection CONNECT1...])
	  MakeConn_CONNECT1()
	  DisplayStatus([Creating view RV_SQLSETTIME...])
	  MakeView_RV_SQLSETTIME()
	  DisplayStatus([Finished.])
	  USE rv_sqlsettime
	
	  REPLACE date1 WITH DATETIME() - 1000000
	  SKIP                         && This line will cause an update conflict error
	  REPLACE date2 WITH DATETIME() - 1000000
	  SKIP
	  REPLACE date3 WITH DATETIME() - 1000000
	  SKIP
	  BROWSE
	
	  FUNCTION MakeConn_CONNECT1
	  	***************** Connection Definitions CONNECT1 ***************
	  	CREATE CONNECTION CONNECT1 ;
	  		CONNSTRING "DRIVER=SQL Server;SERVER=" + cServer + ";UID=sa;PWD=;APP=Microsoft Open Database Connectivity;DATABASE=tempdb"
	  	****
	  	DBSETPROP('CONNECT1', 'Connection', 'Asynchronous', .F.)
	  	DBSETPROP('CONNECT1', 'Connection', 'BatchMode', .T.)
	  	DBSETPROP('CONNECT1', 'Connection', 'Comment', '')
	  	DBSETPROP('CONNECT1', 'Connection', 'DispLogin', 1)
	  	DBSETPROP('CONNECT1', 'Connection', 'ConnectTimeOut', 15)
	  	DBSETPROP('CONNECT1', 'Connection', 'DispWarnings', .F.)
	  	DBSETPROP('CONNECT1', 'Connection', 'IdleTimeOut', 0)
	  	DBSETPROP('CONNECT1', 'Connection', 'QueryTimeOut', 0)
	  	DBSETPROP('CONNECT1', 'Connection', 'Transactions', 1)
	  	DBSETPROP('CONNECT1', 'Connection', 'Database', '')
	  ENDFUNC
	  FUNCTION MakeView_RV_SQLSETTIME
	  	***************** View setup for RV_SQLSETTIME ***************
	  	CREATE SQL VIEW "RV_SQLSETTIME" ;
	  		REMOTE CONNECT "Connect1" ;
	  		AS SELECT Sqlsettime.field_1, Sqlsettime.date1, Sqlsettime.date2,  Sqlsettime.date3 FROM dbo.Sqlsettime Sqlsettime
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'UpdateType', 1)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'WhereType', 3)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'FetchMemo', .T.)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'SendUpdates', .T.)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'UseMemoSize', 255)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'FetchSize', 100)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'MaxRecords', -1)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'Tables', 'dbo.SQLSetTime')
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'Prepared', .F.)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'CompareMemo', .T.)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'FetchAsNeeded', .F.)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'FetchSize', 100)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'Comment', "")
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'BatchUpdateCount', 1)
	  	DBSETPROP('RV_SQLSETTIME', 'View', 'ShareConnection', .F.)
	  	*!* Field Level Properties for RV_SQLSETTIME
	  	* Props for the RV_SQLSETTIME.field_1 field.
	  	DBSETPROP('RV_SQLSETTIME.field_1', 'Field', 'KeyField', .T.)
	  	DBSETPROP('RV_SQLSETTIME.field_1', 'Field', 'Updatable', .T.)
	  	DBSETPROP('RV_SQLSETTIME.field_1', 'Field', 'UpdateName', 'dbo.SQLSetTime.field_1')
	  	DBSETPROP('RV_SQLSETTIME.field_1', 'Field', 'DataType', "I")
	  	* Props for the RV_SQLSETTIME.date1 field.
	  	DBSETPROP('RV_SQLSETTIME.date1', 'Field', 'KeyField', .F.)
	  	DBSETPROP('RV_SQLSETTIME.date1', 'Field', 'Updatable', .T.)
	  	DBSETPROP('RV_SQLSETTIME.date1', 'Field', 'UpdateName', 'dbo.SQLSetTime.date1')
	  	DBSETPROP('RV_SQLSETTIME.date1', 'Field', 'Caption', "DateTime")
	  	DBSETPROP('RV_SQLSETTIME.date1', 'Field', 'DataType', "T")
	  	* Props for the RV_SQLSETTIME.date2 field.
	  	DBSETPROP('RV_SQLSETTIME.date2', 'Field', 'KeyField', .F.)
	  	DBSETPROP('RV_SQLSETTIME.date2', 'Field', 'Updatable', .T.)
	  	DBSETPROP('RV_SQLSETTIME.date2', 'Field', 'UpdateName', 'dbo.SQLSetTime.date2')
	  	DBSETPROP('RV_SQLSETTIME.date2', 'Field', 'Caption', "SmallDateTime")
	  	DBSETPROP('RV_SQLSETTIME.date2', 'Field', 'DataType', "T")
	  	* Props for the RV_SQLSETTIME.date3 field.
	  	DBSETPROP('RV_SQLSETTIME.date3', 'Field', 'KeyField', .F.)
	  	DBSETPROP('RV_SQLSETTIME.date3', 'Field', 'Updatable', .T.)
	  	DBSETPROP('RV_SQLSETTIME.date3', 'Field', 'UpdateName', 'dbo.SQLSetTime.date3')
	  	DBSETPROP('RV_SQLSETTIME.date3', 'Field', 'Caption', "DateTime (converted)")
	  	DBSETPROP('RV_SQLSETTIME.date3', 'Field', 'DataType', "T")
	  ENDFUNC
	  FUNCTION DisplayStatus(lcMessage)
	  	WAIT WINDOW NOWAIT lcMessage
	  ENDFUNC
	
	2. Modify the second line of code to reflect your SQL Server name.
	
	3. Save and run the program.
	
	Expected Results:
	
	The preceding code creates a table in SQL Server and populates it with 10 records
	with default date values. It then creates a Visual FoxPro database with a
	connection to the SQL Server (you need to supply the name of the server). Then
	it modifies the date field and tries to move off the record. An Update Conflict
	occurs after the first occurrence because there is extra data in date1 (the
	milliseconds) on SQL Server. Visual FoxPro incorrectly interprets that the data
	has been altered on SQL Server and reports the error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp600 KbDBFDBC kbSQLServ700 kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
