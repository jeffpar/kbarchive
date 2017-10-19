---
layout: page
title: "Q258042: PRB: Error Occurs When Binary Output Parameters Are Used"
permalink: /kb/258/Q258042/
---

## Q258042: PRB: Error Occurs When Binary Output Parameters Are Used

	Article: Q258042
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp600 KbDBFDBC kbSQLServ700 kbGrpDSFox kbDSupport kbCodeSnippet kbS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	From Visual FoxPro, call a stored procedure that resides in a Microsoft SQL
	Server database. (This stored procedure has an output parameter of data type
	binary.) The following error occurs:
	
	  [Microsoft][ODBC SQL Server Driver][SQL Server]Operand type clash: binary is
	  incompatible with float
	
	NOTE: This particular error occurs when a numeric output parameter is passed from
	Visual FoxPro. Other errors similar to this one occur if parameters of any other
	Visual FoxPro data type are passed to the SQL Server stored procedure.
	
	CAUSE
	=====
	
	The SQL Server ODBC driver forces the value that was passed as a numeric output
	parameter to have a float data type before the stored procedure is actually
	called, as shown by a SQL Server Profiler trace:
	
	declare @P2 float
	set @P2=0.
	exec fox_getnewid 'Table2', @P2 output
	select @P2
	
	WORKAROUND
	==========
	
	Work around this limitation by passing a stored procedure to the SQL Server to
	handle the binary data type incompatibility. Use the following example as a
	basis for the workaround:
	
	1. In a SQL Server database, create a table called "RSys_Last_Id" (without the
	  quotation marks) and a stored procedure called "rsp_getnewid" (without the
	  quotation marks). These can be created by running the following code in a
	  script in the Query Analyzer:
	
	  create table  RSys_Last_Id
	  	(
	  	Last_Id_Value binary(8),
	  	Table_Name varchar(30)
	  	)
	  go
	  insert into RSys_Last_Id
	  	(
	  	Last_Id_Value,
	  	Table_Name
	  	)
	  values
	  	(
	  	0,
	  	'table2'
	  	)
	  go
	  CREATE PROCEDURE rsp_getnewid @tableName varchar(30), @lastIdValue binary(8)
	  OUTPUT
	  AS
	  BEGIN TRANSACTION
	  UPDATE RSys_Last_Id SET Last_Id_Value = CONVERT(binary(4),
	  LEFT(Last_Id_Value, 4)) +
	  CONVERT(binary(4), (CONVERT(binary(4), RIGHT(Last_Id_Value, 4)) + 1))
	  WHERE Table_Name = @tableName
	  SELECT @lastIdValue = Last_Id_Value FROM RSys_Last_Id WHERE Table_Name =
	  @tableName
	  COMMIT TRANSACTION
	  RETURN
	
	2. Place the following code into a Visual FoxPro program:
	
	  set step on
	  local xRet		&& The output parameter that corresponds to the binary 
	  				&& output parameter in the SQL Server 7.0 stored 
	  				&& procedure.
	  xRet = '0'		&& Note that the value of this string MUST be an integer in order for the conversion to work properly.
	
	  nH = sqlconnect( 'MyDSN','sa','')
	
	  #define CRLF chr(13)+ chr(10)
	  *
	  * Utilize SQL Pass-Through technology to create a SQL Server 7.0 stored 
	  * procedure on-the-fly (fox_getnewid) for handling the binary data type 
	  * incompatibility. 
	  *
	  local lcStoredProc
	  lcStoredProc = ;
	  	[create procedure fox_getnewid @tableName varchar(30), @newIdValue char(8) OUTPUT ] + CRLF + ;
	  	[as ] + CRLF + ;
	  	[	begin ] + CRLF + ;
	  	[		declare @xBinConv binary(8) ] + CRLF + ;
	  	[		select @xBinConv = convert(binary(8),convert(int,@newIdValue)) ] + CRLF + ;
	  	[		exec rsp_getnewid @tablename, @lastIDValue = @xBinConv OUTPUT] + CRLF + ;
	  	[		select @newIdValue = convert(char(8), convert(int, @xBinConv)) ] + CRLF + ;
	  	[	end]
	
	  =sqlexec( nH, lcStoredProc)
	
	  =sqlexec( nH, "{Call fox_getnewid ('Table2',?@xRet )}")
	  *
	  * fox_getnewid converts a string back and forth as follows: 
	  * 1. Character string sent from Visual FoxPro program to fox_getnewid.
	  * 2. fox_getnewid converts character string to int and then to binary(8), 
	  *    and then passes it to the original SQL Server stored procedure
	  *    (rsp_getnewid).
	  * 3. Binary return value passed back to fox_getnewid.
	  * 4. fox_getnewid converts the binary string to int and then to char(8) and
	  *    returns it to the Visual FoxPro program.
	  *
	
	  =sqlexec( nH, "drop procedure fox_getnewid")
	
	  = sqldisconnect( nH)
	
	3. Change the data source name, password, and so forth, to what you normally use
	  to connect to your SQL Server.
	
	4. Save the Visual FoxPro program and execute it. Step through the code and
	  observe the value of the output parameter, xRet.
	
	5. Execute the program again. Step through the code and observe the value of the
	  output parameter, xRet. Note that the binary value (represented as a numeric
	  in Visual FoxPro) has incremented.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. If you haven't already done so, do step 1 of the "Workaround" section.
	
	2. Place the following code into a Visual FoxPro program, change the data source
	  name, password, and so forth, to what you normally use to connect to your SQL
	  Server, and execute it:
	
	  nH = SQLConnect( "MyDSN","sa","")
	  =sqlsetprop(nH,'DispWarnings',.T.)
	  xRet = 0
	  ?sqlexe( nH, "{Call rsp_getnewid ('MyTable', ?@xRet)}")
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp600 KbDBFDBC kbSQLServ700 kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
