---
layout: page
title: "Q196384: HOWTO: Perform Bulk Inserts Using SQLSetPos"
permalink: /kb/196/Q196384/
---

## Q196384: HOWTO: Perform Bulk Inserts Using SQLSetPos

	Article: Q196384
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,2.6,2.7,3.0
	Operating System(s): 
	Keyword(s): kbcode kbDatabase kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbmdac270
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	- Microsoft Data Access Components versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains sample code that demonstrates how to perform bulk inserts
	using the SQLSetPos ODBC API call. The sample code illustrates a specific
	instance where bulk inserts are performed on the "Jobs" table in the SQL Server
	"Pubs" database.
	
	MORE INFORMATION
	================
	
	The bulk insertion process is broken down into the following six steps:
	
	1. Connection: Create environment and connection handles.
	
	2. Initialization: Create a statement and set its attributes. Notable attributes
	  set are as follows:
	
	   - Currency
	   - Cursor-type
	   - Rowset size
	   - Row array size
	   - Row operation pointer
	
	3. Build and execute: Build the SQL statement and execute it.
	
	4. Fetch the results and insert: Fetch the data and perform SQLSetPos to insert
	  the data in bulk.
	
	5. Commit the transaction.
	
	6. Disconnect: Disconnect and free all handles.
	
	The sample code illustrates how to insert 'ROW_SIZE' number of rows in a SQL
	Server table. The code uses an ODBC datasource named "LocalServer" that points
	to the SQL Server "pubs" database that contains the "jobs" table.
	
	Note: The rows identified in the rowProceed array with the SQL_ROW_PROCEED flag
	set will be affected for update and delete operations only.
	
	     // START SAMPLE CODE
	     // This code inserts 'ROW_SIZE' rows in a SQL server table named jobs.
	     // 
	     //  Field structure for jobs table:
	     //  ------------------------------------------------------------
	     //    Field Name    SQL Type       SQL C Type        App Type
	     //  ------------------------------------------------------------
	     //    *jobID        SQL_SMALLINT   SQL_C_SSHORT      SQLSMALLINT
	     //    jobDesc       SQL_VARCHAR    SQL_C_VARCHAR     SQLVARCHAR
	     //    minLvl        SQL_TINYINT    SQL_C_UTINYINT    BYTE
	     //    maxLvl        SQL_TINYINT    SQL_C_UTINYINT    BYTE
	     //    * JobID is an identity field with identity seed = 1 AND must be a primary key.
	     //    If JobID is not a primary key, you cannot open a keyset cursor, and SQLSetPos fails.
	
	     // File Includes.
	     #include <windows.h>
	     #include <odbcinst.h>
	     #include <sqlext.h>
	     #include <stdio.h>
	
	     // The MACRO definitions.
	     #define RETURNX(x) ErrorMsg(x, rc)
	     #define ROW_SIZE 10
	     #define MAX_JOBID_SIZE 2
	     #define MAX_JOBDESC_SIZE 100
	     #define MAX_MINLVL_SIZE 1
	     #define MAX_MAXLVL_SIZE 1
	
	     // Function declarations.
	     void ErrorMsg(HSTMT hstmt,RETCODE retcode);
	
	     void main(void)
	     {
	        SQLHSTMT hStmt;   // Statement handle.
	        SQLHDBC hDbc;     // Connection Handle.
	        SQLHENV hEnv;     // Environment Handle.
	        SQLSMALLINT jobId[ROW_SIZE]; // Job ID Field Buffer
	        BYTE minLvl[ROW_SIZE], maxLvl[ROW_SIZE]; // minLvl, maxLvl Buffer
	        SQLVARCHAR jobDesc[ROW_SIZE][MAX_JOBDESC_SIZE]; // jobDesc Buffer
	        SQLINTEGER IDvalue[ROW_SIZE]; // jobID Length Array
	        SQLINTEGER Descvalue[ROW_SIZE]; // jobDesc Length Array
	        SQLINTEGER minvalue[ROW_SIZE]; //minLvl Length Array
	        SQLINTEGER maxvalue[ROW_SIZE]; // maxLvl Length Array
	        SQLUSMALLINT rowProceed[ROW_SIZE]; // SQL_ATTR_ROW_OPERATION_PTR
	                                              array
	        SQLRETURN rc; // Return code
	        SQLINTEGER value, i;
	
	        // 1.Connection
	        // Allocate Environment Handle.
	        rc = SQLAllocHandle(SQL_HANDLE_ENV, SQL_NULL_HANDLE,&hEnv);
	        // Set Environment Attributes.
	        value = SQL_OV_ODBC3; // Set the ODBC version
	        rc = SQLSetEnvAttr(hEnv,SQL_ATTR_ODBC_VERSION,
	             (SQLPOINTER) value,SQL_IS_INTEGER);
	        // Allocate Connection Handle.
	        rc = SQLAllocHandle(SQL_HANDLE_DBC,hEnv,&hDbc);
	        // Perform Connection.
	        rc = SQLConnect(hDbc,(SQLCHAR*)"LocalServer", SQL_NTS,(SQLCHAR*)"sa",
	             SQL_NTS,(SQLCHAR*)"",SQL_NTS);
	        // Set Connection Attributes.
	        value = SQL_MODE_READ_WRITE;
	        rc = SQLSetConnectAttr(hDbc,SQL_ATTR_ACCESS_MODE,
	             (SQLPOINTER)value,SQL_IS_INTEGER);
	
	        // 2.Initialization
	        // Allocate Statement Handle.
	        rc = SQLAllocHandle(SQL_HANDLE_STMT, hDbc, &hStmt);
	        RETURNX(hStmt);
	        // Set the statement attributes.
	        rc = SQLSetStmtAttr(hStmt,SQL_ATTR_APP_ROW_DESC,
	             SQL_NULL_HANDLE,SQL_IS_POINTER);
	        RETURNX(hStmt);
	        // Set the Concurrency.
	        rc = SQLSetStmtOption(hStmt, SQL_CONCURRENCY, SQL_CONCUR_LOCK);
	        RETURNX(hStmt);
	        // Set the cursor type.
	        rc = SQLSetStmtOption(hStmt,SQL_ATTR_CURSOR_TYPE,
	             SQL_CURSOR_KEYSET_DRIVEN);
	        RETURNX(hStmt);
	        // Bookmarks are optional.
	        rc = SQLSetStmtOption(hStmt,SQL_ATTR_USE_BOOKMARKS,SQL_UB_FIXED);
	        RETURNX(hStmt);
	        // Set the Rowset size.
	        rc = SQLSetStmtOption(hStmt,SQL_ROWSET_SIZE,ROW_SIZE);
	        RETURNX(hStmt);
	        // Set the Row Array size.
	        rc = SQLSetStmtOption(hStmt,SQL_ATTR_ROW_ARRAY_SIZE,ROW_SIZE);
	        RETURNX(hStmt);
	        rc = SQLSetStmtAttr(hStmt,SQL_ATTR_ROW_OPERATION_PTR,rowProceed,
	             SQL_IS_POINTER);
	        RETURNX(hStmt);
	
	        // 3. Build and Execute
	        // Performing the query.
	        rc = SQLExecDirect(hStmt,(SQLCHAR*)"SELECT * FROM jobs",SQL_NTS);
	        RETURNX(hStmt);
	
	        // 4. Fetch the results
	        // Binding the buffers and length arrays to the columns.
	        // 1. statement handle,
	        // 2. Column number,
	        // 3. type,
	        // 4. ptr to buffer,
	        // 5. max_size_of_one_element
	        // 6. returns the # retrieved
	        rc = SQLBindCol(hStmt,1,SQL_C_SSHORT,jobId,MAX_JOBID_SIZE,IDvalue);
	        RETURNX(hStmt);
	        rc = SQLBindCol(hStmt,2,SQL_C_CHAR,jobDesc,
	                        MAX_JOBDESC_SIZE,Descvalue);
	        RETURNX(hStmt);
	        rc = SQLBindCol(hStmt,3,SQL_C_TINYINT,minLvl,
	                        MAX_MINLVL_SIZE,minvalue);
	        RETURNX(hStmt);
	        rc = SQLBindCol(hStmt,4,SQL_C_TINYINT,maxLvl,
	                        MAX_MAXLVL_SIZE,maxvalue);
	        RETURNX(hStmt);
	        if (SQLFetch(hStmt)!= SQL_NO_DATA)
	        // Set Position API.
	        {
	           // Set the appropriate data values for the 10 rows.
	           for(i=0 ;i<ROW_SIZE;i++)
	           {
	              // Note: JobID is an identity field so skip it.
	              strcpy( (char*)jobDesc[i], "SQLSetPos Test" );
	              Descvalue[i] = strlen((char*)jobDesc[i]);
	              minLvl[i] = (BYTE) i + 15;
	              minvalue[i] = (SQLINTEGER) 1;
	              maxLvl[i] = (BYTE) i+30;
	              maxvalue[i] = (SQLINTEGER) 1;
	              rowProceed[i] = SQL_ROW_PROCEED;
	           }
	           rc = SQLSetPos(hStmt,0,SQL_ADD,SQL_LOCK_NO_CHANGE);
	           RETURNX(hStmt);
	        }
	
	        // 5. Commit Transaction (not needed if SQL_ATTR_AUTOCOMMIT is ON)
	        rc = SQLEndTran(SQL_HANDLE_DBC,hDbc,SQL_COMMIT);
	        RETURNX(hStmt);
	
	        // 6. Disconnect
	        // Free Statement Handle.
	        rc = SQLFreeHandle(SQL_HANDLE_STMT, hStmt);
	        RETURNX(hStmt);
	        // Disconnect.
	        rc = SQLDisconnect(hDbc);
	        RETURNX(hStmt);
	        // Free Database Connection Handle.
	        rc = SQLFreeHandle(SQL_HANDLE_DBC,hDbc);
	        RETURNX(hStmt);
	        // Free Environment Handle.
	        rc = SQLFreeHandle(SQL_HANDLE_ENV,hEnv);
	        RETURNX(hStmt);
	     }
	
	     // The Error function.
	     void ErrorMsg( HSTMT hstmt, RETCODE retcode )
	     {
	        RETCODE rc;
	        UCHAR szSqlState[6];
	        SDWORD sdwNativeError;
	        UCHAR szErrorMsg[SQL_MAX_MESSAGE_LENGTH];
	        char   errMsg[4096];
	        SWORD cbErrorMsg;
	
	        if (retcode != SQL_SUCCESS)
	        {
	           rc = SQLError(SQL_NULL_HENV,SQL_NULL_HDBC,hstmt,
	                szSqlState,&sdwNativeError,szErrorMsg,
	                sizeof(szErrorMsg),&cbErrorMsg);
	           if (rc == SQL_INVALID_HANDLE) return;
	           while (rc == SQL_SUCCESS || rc == SQL_SUCCESS_WITH_INFO)
	           {
	              sprintf(errMsg,"Error Message:%s\n\n",(LPCSTR)szErrorMsg);
	              MessageBox(NULL,errMsg,"Error",MB_OK);
	              rc = SQLError(NULL,NULL,hstmt,szSqlState,&sdwNativeError,
	                   szErrorMsg,sizeof(szErrorMsg),NULL);
	           }
	        }
	     }
	     // END SAMPLE CODE.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDatabase kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbmdac270 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbMDAC260 kbODBC300 kbMDAC270
	Version           : :2.5,2.6,2.7,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
