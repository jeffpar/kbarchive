---
layout: page
title: "Q181837: PRB: Output Param Not Returned from Procedure Without Resultset"
permalink: /kb/181/Q181837/
---

## Q181837: PRB: Output Param Not Returned from Procedure Without Resultset

	Article: Q181837
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using stored procedures with the Microsoft Foundation Class Library's
	CRecordset class, no values are returned for output parameters unless the stored
	procedure returns a resultset.
	
	CAUSE
	=====
	
	CRecordset is not designed to handle output parameters from a stored procedure
	if no resultset is returned.
	
	RESOLUTION
	==========
	
	If the stored procedure doesn't return a resultset, derive from CDatabase and
	override the BindParameters function to provide your own binding. Then use
	CDatabase::ExecuteSQL directly without using CRecordset.
	
	NOTE: It is possible to use a CRecordset derived class to retrieve the results of
	a stored procedure that doesn't return a result set by overriding the
	CRecordset::Move() function and returning from the method without doing
	anything. This allows you to use the CRecordset and RFX functions for binding in
	and out parameters.
	
	Sample of BindParameters
	------------------------
	
	     void CExecDatabase::BindParameters(HSTMT hstmt)
	     {
	        // This sample shows how to return RETURN code and OUTPUT params.
	        RETCODE nRetCode;
	        m_lDbOutParam = 0;   // First, the RETURN parameter.
	        m_lBufLength = sizeof(m_lDbOutParam);
	        // This is binding the RETURN value.
	        nRetCode = ::SQLBindParameter(hstmt, 1, SQL_PARAM_OUTPUT,
	                                      SQL_C_SLONG, SQL_INTEGER,
	                                      11, 0, (void*)&m_lDbOutParam,
	                                      0, &m_lBufLength);
	
	        m_lDbOutParam2 = 1;  // Second, the OUTPUT parameter.
	        m_lBufLength2 = sizeof(m_lDbOutParam2);
	        // This is binding the OUTPUT value.
	        nRetCode = ::SQLBindParameter(hstmt, 2, SQL_PARAM_OUTPUT,
	                                      SQL_C_SLONG, SQL_INTEGER,
	                                      11, 0, (void*)&m_lDbOutParam2,
	                                      0, &m_lBufLength2);
	     }
	
	     // In your MFC code, call your stored procedure directly.
	     // CRecordset is not involved.
	     db.ExecuteSQL(_T("{?=CALL TestQuery(?)}"));
	
	However, if the stored procedure does return a resultset, use CRecordset's
	FlushResultSet function as follows:
	
	     while( rs.FlushResultSet())
	        {
	           while (!rs.IsEOF())
	           {
	              rs.MoveNext();
	           }
	        }
	     // Now retrieve your bound parameters, as you normally would.
	     m_strName = rs.m_noutparam;
	
	
	STATUS
	======
	
	This is by design.
	
	Additional query words: kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
