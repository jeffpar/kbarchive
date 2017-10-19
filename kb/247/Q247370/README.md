---
layout: page
title: "Q247370: HOWTO: Pass Parameters to a SQL Server Stored Procedure"
permalink: /kb/247/Q247370/
---

## Q247370: HOWTO: Pass Parameters to a SQL Server Stored Procedure

	Article: Q247370
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDatabase kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two ways to pass parameters to a stored procedure using SQLExec. One
	way, which works across all versions of Visual FoxPro, is to build the SQL
	command as a string variable. The advantage of this method is that you can check
	the string and see exactly which SQL command you are passing to the back end.
	
	The other way is to pass the Foxpro variables preceded with question marks, as in
	a parameterized view. In Visual FoxPro version 5.0 and 6.0, this allows you to
	obtain values from the stored procedure that are being returned as output
	parameters.
	
	MORE INFORMATION
	================
	
	1. Create two stored procedures in SQL Server (see Books Online for the exact
	  steps). Mysp_ObjectList merely takes the SysObjects table and returns the
	  value you pass it once for every record in the table. In mysp_GetVersion, we
	  elaborate a bit on the normal procedure for finding the version of the
	  server. SELECT @@VERSION normally returns the SQL Server version as a record
	  in a cursor. Here, we assign that result to an output parameter of the stored
	  procedure.
	
	  CREATE PROCEDURE mysp_GetVersion @tcVersion Char(200) Output AS 
	  SELECT @tcVersion = @@VERSION
	
	  CREATE PROCEDURE mysp_ObjectList @tcParm1 CHAR(10) AS
	  SELECT @tcParm1, name FROM sysobjects
	
	2. Create a DSN called SPParmTest in the ODBC Administrator which links to the
	  database where you created the above procedures.
	
	3. Run the following code in Visual FoxPro:
	
	  *!* Error-checking is omitted for the purposes of this sample:
	  *!* you should always check the return values from SQL Passthrough calls.
	  lnConn = SQLCONNECT("SPParmTest")
	  lcParm1 = "ReturnThis"
	  lcParm2 = "Then This"
	
	  *!* This is the first way, involving building a string 
	  *!* containing the parameters.
	  lcCommand = "exec mysp_ObjectList '" + lcParm1 + "'"
	  =SQLEXEC(lnConn, lcCommand)
	  BROWSE
	  USE
	
	  *!* This is the second way, passing the FoxPro variables directly to 
	  *!* the SQL command. This will work in 3.0.
	  lcCommand = "exec mysp_ObjectList ?lcParm2"
	  =SQLEXEC(lnConn, lcCommand)
	  BROWSE
	  USE
	
	  *!* To get a value back from a stored procedure, initialize the
	  *!* output variable first. This won't work under 3.0.
	  lcVersion = SPACE(200)
	  lcCommand = "exec mysp_GetVersion ?@lcVersion"  && Note the pass by reference.
	  =SQLEXEC(lnConn, lcCommand)
	  ?lcVersion 
	
	  =SQLDISCONNECT(lnConn)  && clean up.
	
	REFERENCES
	==========
	
	For additional information on calling Stored Procedures, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q156034 HOWTO: Retrieve Information from SQL Server on Rows Affected
	
	  Q177056 PRB: Return Parameter Variable Name for SQL Server Causes Error
	
	  Q114787 HOWTO: Execute a Stored Procedure on SQL Server
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Garrett
	Fitzgerald, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : KbClientServer kbDatabase kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
