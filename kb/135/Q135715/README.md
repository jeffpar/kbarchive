---
layout: page
title: "Q135715: BUG: SQLParamData Returns Incorrect Values Under Win32s"
permalink: /kb/135/Q135715/
---

## Q135715: BUG: SQLParamData Returns Incorrect Values Under Win32s

	Article: Q135715
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.10b
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.10b 
	-------------------------------------------------------------------------------
	
	BUG#: 3160 (ODBCSDK2 2.10b)
	
	SYMPTOMS
	========
	
	When you run a 32-bit ODBC application under Win32s, the SQLParamData function
	returns incorrect values for the prgbValue argument.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Win32s ODBC thunking
	components. We are researching this problem and will post new information here
	in the Microsoft KnowledgeBase as it becomes available.
	
	MORE INFORMATION
	================
	
	SQLParamData is an ODBC API call that is used in conjunction with SQLPutData to
	supply parameter data at statement execution time. This call is made to retrieve
	the application-defined value specified in the rgbValue argument of
	SQLBindParameter for the data-at-execution parameter to be processed.
	
	The following 32-bit Windows program demonstrates the problem. In this program,
	the rgbValue buffer of SQLBindParameter contains a number Ideally, when
	SQLParamData is called subsequently, the prgbValue buffer should return the same
	number. However, a number such as 3a175678 is returned.
	
	If you create the appropriate data source and run the following program under
	Windows NT, you will get two message boxes that each contain the same number
	(12345678). If you create the appropriate data source and run it under Win32s,
	you will get two message boxes that contain different numbers (12345678 and
	something like 3a175678). The first number is the rgbValue parameter in the call
	to SQLBindParameter(). The second number is the value returned through the
	prgbValue parameter in the call to SQLParamData().
	
	EXAMPLE PROGRAM:
	
	  /*
	    To run this program, create and Access ODBC data source named
	  "BLOBTEST1".
	
	    The data source should contain a table named "Table1" that contains 2
	    fields, a short field named "Field1" and a long binary field named
	  "Field2"
	  .
	  */ 
	
	  #include <windows.h>
	  #include <sql.h>
	  #include <sqlext.h>
	  #include <stdio.h>
	
	  HENV   henv;
	  HDBC   hdbc;
	  HSTMT   hstmt;
	
	  long      id = 0x12345678;
	  PTR      ret_id;
	  SDWORD   length;
	  RETCODE   retcode;
	  char      buffer[200];
	
	  int PASCAL WinMain(HINSTANCE hinst,HINSTANCE pinst,LPSTR szCmd,int nShow)
	  {
	    if (SQLAllocEnv(&henv) != SQL_SUCCESS)
	    {
	      MessageBox(NULL,"SQLAllocEnv() failed","Error",MB_ICONSTOP);
	      goto Out1;
	    }
	
	    if (SQLAllocConnect(henv,&hdbc) != SQL_SUCCESS)
	    {
	      MessageBox(NULL,"SQLAllocConnect() failed","Error",MB_ICONSTOP);
	      goto Out2;
	    }
	
	    if (SQLConnect(hdbc,"BLOBTEST1",SQL_NTS,"",SQL_NTS,"",SQL_NTS) !=
	  SQL_SUCCESS)
	    {
	      MessageBox(NULL,"SQLConnect() failed","Error",MB_ICONSTOP);
	      goto Out3;
	    }
	
	    if (SQLAllocStmt(hdbc,&hstmt) != SQL_SUCCESS)
	    {
	      MessageBox(NULL,"SQLAllocStmt() failed","Error",MB_ICONSTOP);
	      goto Out4;
	    }
	
	    if (SQLPrepare(hstmt,"INSERT INTO Table1 (Field1,Field2) values
	  (1,?)",SQL_NTS) != SQL_SUCCESS)
	    {
	      MessageBox(NULL,"SQLPrepare() failed","Error",MB_ICONSTOP);
	      goto Out5;
	    }
	
	    sprintf(buffer,"Calling SQLBindParameter, value = %x\n",id);
	    MessageBox(NULL,buffer,"Info",MB_OK);
	    if
	  (SQLBindParameter(hstmt,1,SQL_PARAM_INPUT,SQL_C_BINARY,SQL_LONGVARBINA
	  Y,0,0,(PTR)id,0,&length)
	     != SQL_SUCCESS)
	    {
	      MessageBox(NULL,"SQLBindParameter() failed","Error",MB_ICONSTOP);
	      goto Out5;
	    }
	
	    length = SQL_LEN_DATA_AT_EXEC(0);
	    retcode = SQLExecute(hstmt);
	    while (retcode == SQL_NEED_DATA)
	    {
	      retcode = SQLParamData(hstmt,&ret_id);
	      if (retcode == SQL_NEED_DATA)
	      {
	        sprintf(buffer,"Returned value = %x\n",(long)ret_id);
	        MessageBox(NULL,buffer,"Info",MB_OK);      //Expected
	  display: 12345678. But, something like 3a175678 is displayed.
	        SQLPutData(hstmt,"1234567890",10);      // just send
	  some data..
	      }
	    }
	
	  Out5:
	    SQLFreeStmt(hstmt,SQL_DROP);
	  Out4:
	    SQLDisconnect(hdbc);
	  Out3:
	    SQLFreeConnect(hdbc);
	  Out2:
	    SQLFreeEnv(henv);
	  Out1:
	    return 0;
	  }
	
	Additional query words: mfc desktop drivers sql server driver
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:2.10b
	Issue type        : kbbug
	
	=============================================================================
	
