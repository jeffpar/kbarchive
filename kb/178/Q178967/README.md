---
layout: page
title: "Q178967: FIX: CRecordset Does Not Set HSTMT Attributes for Updates"
permalink: kb/178/Q178967/
---

## Q178967: FIX: CRecordset Does Not Set HSTMT Attributes for Updates

	Article: Q178967
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When updating using the cursor library or when using a cursor that causes MFC to
	use SQL statements to update, CRecordset errors can occur when using strings
	containing ODBC escape sequences. For example, the string [ASCII
	147]{d2fcfefb-6126-11d1-84c1-0020afd6c52f}[ASCII 148] may cause a data
	conversion error because [ASCII 147]{d[ASCII 148] is the ODBC escape sequence
	for a date. The error occurs whether the SQLSetStmtOption() attribute SQL_NOSCAN
	is set to SQL_NOSCAN_ON or SQL_NOSCAN_OFF.
	
	CAUSE
	=====
	
	In the CRecordset::PrepareUpdateHstmt() function, CRecordset allocates a handle
	to use to update m_hstmtUpdate. However, CRecordset does not apply the HSTMT
	attributes on its default HSTMT, m_hstmt, to m_hstmtUpdate. Therefore any
	statement attributes set by the user will not be seen in an update.
	
	For example, given the code:
	
	     void CSampleSet::OnSetOptions(HSTMT hstmt)
	     {
	        CRecordset::OnSetOptions(hstmt);
	
	        SQLSetStmtOption(hstmt, SQL_NOSCAN, SQL_NOSCAN_ON);
	     }
	
	updates may fail for fields that contain ODBC escape because m_hstmtUpdate will
	have the SQL_NOSCAN option turned off. For example you might get a data
	conversion error from the ODBC driver.
	
	RESOLUTION
	==========
	
	It is possible to work around this bug by taking the following steps:
	
	For dynamically linking the MFC library:
	
	1. Copy the implementations of CRecordset::UpdateInsertDelete() and
	  CRecordset::PrepareUpdateHstmt() to your CRecordset derived class.
	
	2. If you haven't already implemented the virtual CRecordset::Update() function,
	  copy the MFC implementation of that method.
	
	3. In the copied CRecordset::PrepareUpdateHstmt(), change the block of code that
	  reads
	
	        if (m_hstmtUpdate == SQL_NULL_HSTMT)
	        {
	           AFX_SQL_SYNC(::SQLAllocStmt(m_pDatabase->m_hdbc, &m_hstmtUpdate));
	           if (!Check(nRetCode))
	           {
	              TRACE0("Error: failure to allocate update statement.\n");
	              AfxThrowDBException(nRetCode, m_pDatabase, m_hstmtUpdate);
	           }
	        }
	
	  to the following:
	
	        if (m_hstmtUpdate == SQL_NULL_HSTMT)
	        {
	           AFX_SQL_SYNC(::SQLAllocStmt(m_pDatabase->m_hdbc, &m_hstmtUpdate));
	           if (!Check(nRetCode))
	           {
	              TRACE0("Error: failure to allocate update statement.\n");
	              AfxThrowDBException(nRetCode, m_pDatabase, m_hstmtUpdate);
	           }
	
	           OnSetOptions(m_hstmtUpdate);
	        }
	
	This will ensure that the options set in the virtual function OnSetOptions() are
	applied to the member m_hstmtUpdate.
	
	For statically linking the MFC library, you can either follow the steps above or
	you can modify your version of MFC sources directly by following step 3 above in
	the CRecordset class and rebuilding.
	
	It is highly recommended that developers do not directly modify the MFC source.
	For more information on rebuilding the MFC static library, see the README.TXT
	file in the MFC\SRC directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	REFERENCES
	==========
	
	For more information on ODBC escape sequences, see Chapter 8 and Appendix C,
	ODBC Programmers Reference.
	
	Additional query words: scalar functions kbVC500bug kbVC600bug kbmfc kbdatabase kbodbc
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC600bug kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
