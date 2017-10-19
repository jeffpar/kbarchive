---
layout: page
title: "Q293901: BUG: Wrong Number of Rows Inserted w/ MS ODBC Driver &amp; Stored Pr"
permalink: /kb/293/Q293901/
---

## Q293901: BUG: Wrong Number of Rows Inserted w/ MS ODBC Driver &amp; Stored Pr

	Article: Q293901
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,2.5,2.6,2000.80.194,3.7
	Operating System(s): 
	Keyword(s): kbDriver kbSQLServ kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbGrpDSODBC kbmdac270
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, versions 2000.80.194, 3.7 
	- Microsoft Data Access Components versions 2.0, 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Microsoft ODBC Driver for SQL Server to execute a stored
	procedure that inserts multiple rows into a SQL Server table, an inconsistent
	number of records may be inserted.
	
	This problem can occur when all of the following conditions are met:
	
	- You are using the Microsoft ODBC Driver to connect to SQL Server.
	
	- The stored procedure that inserts records into the table does not specify SET
	  NOCOUNT ON.
	
	- You do not call SQLMoreResults to extract all tokens from SQL Server.
	
	- You use SQLSetEnvAttr to programmatically set ODBC versions to SQL_OV_ODBC3
	  instead of SQL_OV_ODBC2.
	
	- SQL_ATTR_AUTOCOMMIT is set ON.
	
	CAUSE
	=====
	
	When you do not specify SET NOCOUNT ON in your stored procedure, SQL Server
	returns a token for every INSERT statement, and if you do not extract all the
	returned tokens by using SQLMoreResults, you will get inconsistent results.
	
	RESOLUTION
	==========
	
	You can work around this problem in the following ways:
	
	- Specify SET NOCOUNT ON in the stored procedure.
	
	- Call SQLMoreResults until you get SQL_NO_DATA to extract all tokens from SQL
	  Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table "test" by using the following code:
	
	  if exists (select * from sysobjects where id = object_id(N'[dbo].[test]') and OBJECTPROPERTY(id, N'IsUserTable') = 1)
	  drop table [dbo].[test]
	  GO
	
	  CREATE TABLE [dbo].[test] (
	  	[theId] [int] NOT NULL ,
	  	[name] [char] (50) NULL 
	  ) ON [PRIMARY]
	  GO
	
	2. Create a stored procedure "TestSp" by using the following SQL code:
	
	  CREATE PROCEDURE TestSP AS
	  --SET NOCOUNT ON 
	  BEGIN
	  DECLARE @Number INT
	
	  Select @Number = 1
	  WHILE (@Number <= 800)
	  BEGIN
	
	  	-- Create new row in table test here.
	
	  	INSERT INTO test(  theId,name)VALUES
	  	(@Number,'Testing')<BR/>
	
	  	-- Increment Sequence number.
	  	SELECT @Number=@Number + 1
	  END
	  END
	
	3. Create a Win32 console application and add the following code:
	
	  #include <windows.h>
	  #include <sql.h>
	  #include <sqlext.h>
	
	  void main(void)
	  {
	  	HENV henv;
	  	HDBC hdbc;
	  	HSTMT hstmt;
	  	SQLRETURN retcode;
	
	  	retcode = SQLAllocHandle(SQL_HANDLE_ENV,SQL_NULL_HANDLE,&henv);   
	
	          // We need to set the ODBC version to SQL_OV_ODBC3.
	  	retcode = SQLSetEnvAttr(henv,SQL_ATTR_ODBC_VERSION,(void *)SQL_OV_ODBC3,SQL_C_SLONG) ;
	
	  	retcode = SQLAllocHandle(SQL_HANDLE_DBC,henv, &hdbc);   
	
	          //Make sure that autocommit is set to ON.
	  	retcode = SQLSetConnectAttr(hdbc,SQL_ATTR_AUTOCOMMIT,(void *)SQL_AUTOCOMMIT_ON,0);
	      
	          //Change the DSN, user ID, and password accordingly.	
	  	retcode = SQLConnect(hdbc, (SQLCHAR*)"DSN NAME",SQL_NTS, (SQLCHAR*) "USER ID",SQL_NTS ,(SQLCHAR*)"PASSWORD",SQL_NTS);
	  	
	  	retcode = SQLAllocHandle(SQL_HANDLE_STMT,hdbc, &hstmt);
	
	  	retcode = SQLPrepare(hstmt,(unsigned char *)"{call TestSP}",SQL_NTS);
	
	  	retcode = SQLExecute(hstmt);
	          
	          //Uncomment the following SQLMoreResults call to collect all returned tokens.
	  	//while (retcode != SQL_NO_DATA)
	  	//retcode = SQLMoreResults(hstmt);
	  	
	  	retcode = SQLFreeHandle(SQL_HANDLE_STMT, hstmt);	
	  	retcode = SQLDisconnect(hdbc);	
	  	retcode = SQLFreeHandle(SQL_HANDLE_DBC, hdbc);
	  	retcode = SQLFreeHandle(SQL_HANDLE_ENV, henv);
	  }
	
	4. In the code, change the data source name (DSN), user ID, and password.
	
	5. Compile the project and run it.
	
	6. Check the number of records that were inserted in table test.
	
	7. Uncomment the while loop in your code, and then recompile and run the code.
	  Note that the records entered in the table are accurate.
	
	8. Comment the while loop or uncomment SET NOCOUNT ON in the stored procedure
	  and then run the code. Note that the records entered are correct.
	
	Additional query words: ODBC SQLSRV
	
	======================================================================
	Keywords          : kbDriver kbSQLServ kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbGrpDSODBC kbmdac270 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC200 kbMDAC210 kbMDAC250 kbMDAC260 kbODBCSQLServ200080194 kbODBCSQLServ370 kbMDAC270
	Version           : :2.0,2.1,2.5,2.6,2000.80.194,3.7
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
