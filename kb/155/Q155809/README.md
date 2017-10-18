---
layout: page
title: "Q155809: HOWTO: Use the SYS(3053) Function Handle with ODBC"
permalink: kb/155/Q155809/
---

## Q155809: HOWTO: Use the SYS(3053) Function Handle with ODBC

	Article: Q155809
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 5.0 introduces a new SYS() function, SYS(3053), which returns the
	ODBC hEnv (environment handle) that Visual FoxPro uses for connectivity
	operations. One of the uses of the SYS() function is to get a list of available
	datasources that users can connect to.
	
	MORE INFORMATION
	================
	
	NOTE: Visual FoxPro uses the ODBC environment handle returned by SYS(3053) for
	all of its connectivity operations. Use this handle for information retrieval,
	not for changing options associated with it. In particular, you should not call
	functions such as SQLFreeEnv(), which would release the handle while FoxPro was
	using it and cause instability in the Visual FoxPro environment.
	
	The SYS(3053) return value is called an hEnv, which is a handle used by ODBC to
	describe an environment in which connectivity operations take place. One feature
	not available natively in FoxPro is the ability to generate a list of
	datasources on users' machines.
	
	ODBC has an API function called SQLDataSources that you can use to provide this
	functionality. SQLDataSources requires an hEnv--which you can get from the
	SYS(3053) function--to be passed to it. The sample below uses the Visual FoxPro
	DECLARE (DLL) function to register the SQLDataSources API, and then passes the
	value returned from SYS(3053) to that API in order to retrieve the list of
	datasources and descriptions.
	
	    #DEFINE SQL_FETCH_NEXT 1
	     #DEFINE SQL_FETCH_FIRST 2
	     #DEFINE SQL_SUCCESS 0
	     #DEFINE MAX_STRING 128
	
	     DECLARE INTEGER SQLDataSources IN ODBC32.DLL ;
	        INTEGER henv, SHORT fdirection, ;
	        STRING @szDSN, INTEGER cbDSNMax, ;
	        INTEGER @pcbDSN, STRING @szDescription, ;
	        INTEGER cbDescriptionMax, INTEGER @pcbDescriptionn
	
	     hEnv = VAL(SYS(3053))      && The hEnv (converted to a number)
	     cbDsnMax = MAX_STRING      && How long can the DSN Name be?
	     pcbDSN = 0                 && How many were actually returned
	     cbDescriptMax = MAX_STRING && How long can the description be?
	     pcbDescript = 0            && How long the description actually was
	
	     fDirection = SQL_FETCH_FIRST     && The first time start at the top
	     retVal = SQL_SUCCESS             && Start with no errors
	     DO WHILE (retVal = SQL_SUCCESS)
	        szDsn = SPACE(MAX_STRING+1)   && Make sure there is enough space
	        szDescript = SPACE(MAX_STRING+1)
	
	        retval = SQLDataSources(hEnv, fDirection, ;
	                       @szDSN, cbDSNMax, @pcbDSN, ;
	                       @szDescript, cbDescriptMax, @pcbDescript)
	        ? LEFT(szDSN, pcbDSN)
	        ? LEFT(szDescript, pcbDescript)
	
	        * We only want to do the SQL_FETCH_FIRST the first time
	        fDirection = SQL_FETCH_NEXT
	     ENDDO
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
