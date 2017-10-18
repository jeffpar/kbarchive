---
layout: page
title: "Q119064: HOWTO: Retrieving a List of All ODBC Data Sources"
permalink: kb/119/Q119064/
---

## Q119064: HOWTO: Retrieving a List of All ODBC Data Sources

	Article: Q119064
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1,2.2,2.5,2.6,2.7,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbDatabase kbMFC kbODBC kbVC kbVC200 kbVC210 kbVC220 kbVC400 kbVC5
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1, 4.2, 5.0, 6.0 
	- Microsoft Data Access Components versions 1.5, 2.0, 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Open Database Connectivity (ODBC) API contains a function called
	SQLDataSources() which can be used to retrieve information about data sources
	which are available to an application. Below is a sample function which fills a
	CStringList with the names of all available ODBC data sources.
	
	Sample Code
	-----------
	
	     #include <afxcoll.h>    //Needed for CStringList MFC class.
	     #include "odbcinst.h"
	     #include "sql.h"
	     #include "sqlext.h"
	
	     // NOTE: in 16-bit Visual C++ link with odbcinst.lib
	     //       in 32-bit Visual C++ 2.x link with odbccp32.lib
	     //       in 32-bit Visual C++ 4.x no need to change link options
	
	     #define MAX_DSN_LENGTH 30
	     #define MAX_DSN_DESC_LENGTH 300
	
	     BOOL GetODBCDataSourceNames(CStringList * pList)
	     {
	         HENV hEnv;
	         char szDSN[MAX_DSN_LENGTH];
	         SWORD cbDSN;
	         UCHAR szDescription[MAX_DSN_DESC_LENGTH];
	         SWORD cbDescription;
	         RETCODE retcode;
	
	         ASSERT(pList->IsEmpty());
	         if (SQLAllocEnv(&hEnv)!=SQL_SUCCESS)
	             return FALSE;
	
	         while (retcode=SQLDataSources(hEnv, SQL_FETCH_NEXT,
	                      (UCHAR FAR *) &szDSN, MAX_DSN_LENGTH, &cbDSN,
	                      (UCHAR FAR *) &szDescription,MAX_DSN_DESC_LENGTH,
	                       &cbDescription) != SQL_NO_DATA_FOUND
	                      &&retcode!=SQL_ERROR)
	
	            {
	                 pList->AddTail(szDSN);
	            }
	
	         SQLFreeEnv(hEnv);
	         if (retcode==SQL_ERROR)
	           return FALSE;
	
	         return TRUE;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbProgramming kbDatabase kbMFC kbODBC kbVC kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC200 kbMDAC150 kbMDAC210 kbMDAC250 kbMDAC260 kbmdac270 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,1.52,2.0,2.1,2.2,2.5,2.6,2.7,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
