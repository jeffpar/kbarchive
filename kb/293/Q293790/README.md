---
layout: page
title: "Q293790: FIX: SQLDescribeParam Causes Syntax Error or Access Violation"
permalink: kb/293/Q293790/
---

## Q293790: FIX: SQLDescribeParam Causes Syntax Error or Access Violation

	Article: Q293790
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2000.80.194,3.7
	Operating System(s): 
	Keyword(s): kbMDAC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport
	Last Modified: 26-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, versions 2000.80.194, 3.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling SQLDescribeParam for a parameterized query where a "?" parameter
	marker appears after a nested subquery, the following errors may occur:
	
	  DIAG [07009] [Microsoft][ODBC SQL Server Driver]Invalid Descriptor Index(0)
	  DIAG [42000] [Microsoft][ODBC SQL Server Driver]Syntax error or access
	  violation (0)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Data Access Components (MDAC) 2.7.
	
	
	MORE INFORMATION
	================
	
	Calling SQLDescribeParam to obtain information for parameter markers inside a
	subquery is unsupported. However, if you have a parameter marker after a
	subquery and you call SQLDescribeParam for that parameter, you will receive the
	above errors.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Win32 console application and add the following code to it:
	
	  #include <windows.h>
	        #include <stdio.h>
	        #include <sql.h>
	        #include <sqlext.h>
	
	        void main()
	        {
	        HENV              henv;
	        HDBC              hdbc;
	        HSTMT             hstmt;
	        SQLRETURN         sr;
	
	        SQLCHAR*          theDiagState = new SQLCHAR[50];
	        SQLINTEGER        theNativeState;
	        SQLCHAR*          theMessageText  = new SQLCHAR[255];
	        SQLSMALLINT       iOutputNo,DataType,DecimalDigits, Nullable;
	        SQLUINTEGER       ParamSize;
	
	        SQLAllocHandle( SQL_HANDLE_ENV, SQL_NULL_HANDLE, & henv );
	
	        sr = SQLSetEnvAttr( henv, SQL_ATTR_ODBC_VERSION, ( void * ) SQL_OV_ODBC3, 0 ); 
	
	        sr = SQLAllocHandle( SQL_HANDLE_DBC, henv, & hdbc );
	
	      
	        //Note that the DSN name is Pubs here. Change the DSN name,  
	        //user ID, and password here.
	        sr = SQLConnect( hdbc, ( unsigned char * ) "Pubs", SQL_NTS, 
	     		       ( unsigned char * ) "sa", SQL_NTS, 
	     		       ( unsigned char * ) "", SQL_NTS );
	
	        sr = SQLAllocHandle( SQL_HANDLE_STMT, hdbc, & hstmt );
	     
	        //COMMENT THIS LINE AFTER YOU GET THE ERROR.
	        sr = SQLPrepare(hstmt,( unsigned char * ) "select A.fname  from employee A where (A.job_id IN (select B.Job_id from jobs B)) AND job_lvl=?", SQL_NTS );<BR/>
	      
	       //UNCOMMENT THE FOLLOWING LINE TO SEE THE CODE WITHOUT ERROR.
	       //This query is equivalent to the one above, but it has the parameter      //marker before the subquery.
	       //sr = SQLPrepare(hstmt,( unsigned char * ) "select A.fname  from employee A where job_lvl=? AND (A.job_id IN (select B.Job_id from jobs B)) ", SQL_NTS );
	
	        sr = SQLDescribeParam(hstmt,1, &DataType, &ParamSize, &DecimalDigits, &Nullable);
	
	  	
	        if (sr != SQL_SUCCESS)
	        {
	             //With this bug, you will get an error message. Check this message in theMessageText.
	
	            SQLGetDiagRec(SQL_HANDLE_STMT, hstmt,1,theDiagState, &theNativeState, theMessageText, 100, &iOutputNo);
	       
	  	 printf( "Error :%s\n", theMessageText);
	        }
	  	  
	        if (sr == SQL_SUCCESS)
	        {
	  	   printf( "SQLDescribeparam was successful\n");
	        }
	
	        //Free allocated memory and disconnect.
	        SQLFreeStmt( hstmt, SQL_CLOSE );
	        SQLFreeStmt( hstmt, SQL_DROP );
	        SQLDisconnect( hdbc ); 
	        SQLFreeHandle( SQL_HANDLE_DBC, hdbc ); 
	        SQLFreeHandle( SQL_HANDLE_ENV, henv );
	        delete theMessageText; 
	        delete theDiagState;
	
	        }
	
	2. Change the data source name (DSN), user ID, and password.
	
	3. Run the code and you will see the error message.
	
	4. Comment the SQLPrepare call, uncomment the call to SQLPrepare that has the
	  parameter marker before the subquery, and then run the code.
	
	Additional query words: API kbODBC
	
	======================================================================
	Keywords          : kbMDAC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ200080194 kbODBCSQLServ370
	Version           : :2000.80.194,3.7
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
