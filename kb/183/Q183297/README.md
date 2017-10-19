---
layout: page
title: "Q183297: HOWTO: Retrieving Multiple Resultsets with Varying Columns"
permalink: /kb/183/Q183297/
---

## Q183297: HOWTO: Retrieving Multiple Resultsets with Varying Columns

	Article: Q183297
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0,5.0sp1,5.0sp2,5.0sp3
	Operating System(s): 
	Keyword(s): kbcode kbDatabase kbMFC kbODBC kbVC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Microsoft Foundation Class (MFC) Open Database Connectivity (ODBC)
	database classes, you can call a stored procedure that can return multiple
	resultsets with a varying number of columns. However, some additional work is
	required.
	
	To retrieve multiple resultsets with a varying number of columns and types, you
	should use the CRecordset class directly with the GetFieldValue() method.
	Derived CRecordset classes using RFX functions are not designed to bind to
	multiple resultsets with a differing number of columns and types, although it
	may be possible to place conditionals in the DoFieldExchange() function to call
	different RFX functions for different results.
	
	Why is the additional work required? Consider a stored procedure returning two
	resultsets; one with one column and the other with two columns. If a Visual C++
	MFC ODBC application executes this stored procedure and captures the results,
	the second resultset returns only one column; in other words, it returns only as
	many columns as the first resultset returned.
	
	This occurs because the field cache information created by the MFC database
	classes is not refreshed inside FlushResultSet(). Therefore, the resultset is
	retrieved with the existing cache information, which was built in
	AllocAndCacheInfo() in CRecordset::Open(). To properly retrieve the second
	resultset, call CRecordset::AllocAndCacheFieldInfo() after FlushResultSet() and
	before MoveNext().
	
	Because CRecordset::AllocAndCacheFieldInfo() is a protected member function,
	create a new function that does the same thing as AllocAndCacheFieldInfo() from
	the Dbcore.cpp MFC sources.
	
	MORE INFORMATION
	================
	
	Copy CRecordset::AllocAndCacheFieldInfo() from Dbcore.cpp and include that
	function in the application. Modify the function as shown below to destroy the
	field information and do other cleanup. The following is example code in which
	MyFunction() is calling AllocAndCacheFieldInfo(). The modified
	AllocAndCacheFieldInfo() function below is based on the Visual C++ 5.0
	Enterprise Edition:
	
	     void MyFunction()
	     {
	        // First resultset has only one column;
	        // the second resultset has two columns.
	
	        CString strTemp;
	        CDatabase dbase;
	        BOOL bRet = dbase.Open("SQLServer", FALSE,FALSE,"ODBC;",FALSE);
	        CRecordset recSet(&dbase);
	        bRet = recSet.Open(CRecordset::forwardOnly,
	                           "{call sp_myProc}",CRecordset::readOnly);
	
	        //Check the number of columns in the first resultset.
	        short nCols = recSet.GetODBCFieldCount();
	
	        recSet.GetFieldValue((short)0,strTemp);
	        AfxMessageBox(strTemp);
	
	        recSet.FlushResultSet();
	
	        //Rebuild the cache info to retrieve new column info.
	        AllocAndCacheFieldInfo(recSet);
	
	        recSet.MoveNext();
	
	        //Check the number of columns in the second resultset.
	        nCols = recSet.GetODBCFieldCount();
	
	        recSet.GetFieldValue((short)0,strTemp);
	        AfxMessageBox(strTemp);
	
	        recSet.MoveNext();
	        recSet.GetFieldValue(1,strTemp);
	        AfxMessageBox(strTemp);
	     }
	
	     void CCurLib2View::AllocAndCacheFieldInfo(CRecordset &pSet)
	     {
	        pSet.m_nResultCols = -1;
	        ASSERT(pSet.GetODBCFieldCount() < 0);
	
	        if(pSet.m_rgODBCFieldInfos != NULL)
	           delete [] pSet.m_rgODBCFieldInfos;
	
	        RETCODE nRetCode;
	        SWORD nActualLen;
	
	        // Cache the number of result columns.
	        AFX_ODBC_CALL(::SQLNumResultCols(pSet.m_hstmt, &pSet.m_nResultCols));
	        if (!pSet.Check(nRetCode))
	        {
	           TRACE0("Error: Can't get field info.\n");
	           AfxThrowDBException(nRetCode, pSet.m_pDatabase,pSet.m_hstmt);
	        }
	
	        // If there are no fields, quit now.
	        if (pSet.m_nResultCols == 0)
	           return;
	
	        // Allocate buffer and get the ODBC meta data.
	        pSet.m_rgODBCFieldInfos = new CODBCFieldInfo[pSet.m_nResultCols];
	        LPSTR lpszFieldName;
	
	     #ifdef _UNICODE
	        // Need proxy to temporarily store non-UNICODE name.
	        lpszFieldName = new char[MAX_FNAME_LEN + 1];
	     #endif
	
	        // Get the field info for each field.
	        for (WORD n = 1; n <= pSet.GetODBCFieldCount(); n++)
	        {
	     #ifndef _UNICODE
	       // Reset the buffer to point to next element.
	       lpszFieldName =
	       pSet.m_rgODBCFieldInfos[n - 1].m_strName.GetBuffer(MAX_FNAME_LEN + 1);
	     #endif
	
	           AFX_ODBC_CALL(::SQLDescribeCol(pSet.m_hstmt, n,
	              (UCHAR*)lpszFieldName, MAX_FNAME_LEN, &nActualLen,
	              &pSet.m_rgODBCFieldInfos[n - 1].m_nSQLType,
	              &pSet.m_rgODBCFieldInfos[n - 1].m_nPrecision,
	              &pSet.m_rgODBCFieldInfos[n - 1].m_nScale,
	              &pSet.m_rgODBCFieldInfos[n - 1].m_nNullability));
	
	     #ifndef _UNICODE
	          pSet.m_rgODBCFieldInfos[n - 1].m_strName.ReleaseBuffer(nActualLen);
	     #else
	           // Copy the proxy data to correct element.
	           pSet.m_rgODBCFieldInfos[n - 1].m_strName = lpszFieldName;
	     #endif
	
	        }
	
	     #ifdef _UNICODE
	        delete[] lpszFieldName;
	     #endif
	     }
	
	Additional query words: recordset
	
	======================================================================
	Keywords          : kbcode kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0,5.0sp1,5.0sp2,5.0sp3
	Issue type        : kbhowto
	
	=============================================================================
	
