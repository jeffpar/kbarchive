---
layout: page
title: "Q120513: PRB: Output Parameters Not Received From Stored Procedure"
permalink: /kb/120/Q120513/
---

## Q120513: PRB: Output Parameters Not Received From Stored Procedure

	Article: Q120513
	Product(s): Microsoft C Compiler
	Version(s): 1.50 1.51 1.52
	Operating System(s): 
	Keyword(s): kbcode kbDatabase kbMFC kbODBC kbVC kbprb
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using stored procedures with the Microsoft Foundation Class Library
	CRecordset class, no values are returned from the stored procedures for output
	parameters.
	
	CAUSE
	=====
	
	The record field exchange (RFX) functions handles the fifth parameter of
	SQLSetParam (cbColDef) incorrectly.
	
	RESOLUTION
	==========
	
	If you are using the ODBC SQL Server driver, you can write a custom record field
	exchange (RFX) function to handle the CFieldExchange::BindParam operation
	differently. Call your custom RFX function rather than the existing MFC RFX
	functions. The sample code below demonstrates two cases; one for RFX_Long() and
	and one for RFX_Text().
	
	MORE INFORMATION
	================
	
	ODBC needs to know whether a parameter is an output parameter for a parameter
	marker. ODBC 1.0 didn't make it clear how this was to be done. In ODBC 2.0 a new
	function, SQLBindParameter(), can tell a 2.0 driver what type of parameter it
	has (input or output). A feature was added to the ODBC 1.0 SQL Server driver to
	allow this to occur.
	
	To specify whether a parameter to a stored procedure is an output parameter, add
	to or pass the value of 65536 to the cbColDef parameter of the SQLSetParam ODBC
	API. The parameter's SQL data type determines if the value is added or passed.
	
	Listed in Appendix D of the ODBC Programmer's Reference manual is a table of
	precisions for the cbColDef parameter. If the table says that the cbColDef
	argument is ignored, pass the value of 65536 for cbColDef. If the value is not
	ignored, add the value to cbColDef.
	
	The sample code below demonstrates both cases. The only way this code differs
	from the MFC implementations, RFX_Long and RFX_Text, is that these pass the
	correct value for the fifth parameter in the call to SQLSetParam. Call these
	functions from your CRecordset's DoFieldExchange where you would normally call
	RFX_Text and RFX_Long when using parameters in your recordset.
	
	Sample Code
	-----------
	
	  #define SQL_OUTPUT_PARAM_VALUE 65536
	
	  void AFXAPI RFX_LongOut(CFieldExchange* pFX, const char *szName, long&
	  value)
	
	  {
	      if( pFX->m_nOperation == CFieldExchange::BindParam )
	      {
	          // deal with the special case ourselves
	          RETCODE nRetCode;
	          ASSERT(AfxIsValidAddress(pFX, sizeof(CFieldExchange)));
	          ASSERT(AfxIsValidString(szName));
	          UINT nField;
	          if (!pFX->IsFieldType(&nField))
	              return;
	
	          LONG* plLength = pFX->m_prs->GetFieldLength(pFX);
	
	          if (pFX->m_prs->IsFieldFlagNull(nField, CFieldExchange::param))
	              *plLength = SQL_NULL_DATA;
	          else
	              *plLength = sizeof(value);
	          // For params, CType is same as SQL type
	          AFX_SQL_SYNC(::SQLSetParam(pFX->m_hstmt,
	             (unsigned short int)nField,
	
	             (short int)SQL_C_LONG, (short int)SQL_C_LONG,
	             (unsigned long )SQL_OUTPUT_PARAM_VALUE, 0, &value, plLength))
	  ;
	          if (nRetCode != SQL_SUCCESS)
	              pFX->m_prs->ThrowDBException(nRetCode, pFX->m_hstmt);
	      }
	      else
	      {
	          // let MFC handle all other operations
	          RFX_Long( pFX, szName, value );
	      }
	  }
	
	  void AFXAPI RFX_TextOut( CFieldExchange* pFX, const char *szName,
	                           CString& value, int nMaxLength /*= 255*/,
	                           int nColumnType /*= SQL_VARCHAR*/ )
	  {
	      // handle this ourselves
	      if( pFX->m_nOperation == CFieldExchange::BindParam )
	      {
	          ASSERT(AfxIsValidAddress(pFX, sizeof(CFieldExchange)));
	          ASSERT(AfxIsValidString(szName));
	          ASSERT(AfxIsValidAddress(&value, sizeof(CString)));
	
	          RETCODE nRetCode;
	          UINT nField;
	          if (!pFX->IsFieldType(&nField))
	              return;
	
	          LONG* plLength = pFX->m_prs->GetFieldLength(pFX);
	
	          *plLength = SQL_NTS;
	          // Preallocate to nMaxLength
	          value.GetBufferSetLength(nMaxLength);
	          AFX_SQL_SYNC(::SQLSetParam(pFX->m_hstmt,
	            (unsigned short int)nField,
	
	           (short int)SQL_C_CHAR, (short int)nColumnType,
	           (unsigned long)SQL_OUTPUT_PARAM_VALUE + value.GetLength(),
	              0, value.GetBuffer(0), plLength));
	          value.ReleaseBuffer();
	          if (nRetCode != SQL_SUCCESS)
	              pFX->m_prs->ThrowDBException(nRetCode, pFX->m_hstmt);
	
	      }
	      else
	      {
	          // let MFC handle all other operations
	          RFX_Text( pFX, szName, value, nMaxLength, nColumnType );
	      }
	  }
	
	NOTE: The ODBC 2.0 Programmer's Reference recommends using the SQLBindParameter()
	function rather than SQLSetParam(). The only reason SQLSetParam() is used here
	is because it is documented in the on-line documentation for Microsoft Visual
	C++ version 1.5.
	
	
	Additional query words: 1.50 1.51 1.52 2.00 2.10 2.50 2.51 2.52
	
	======================================================================
	Keywords          : kbcode kbDatabase kbMFC kbODBC kbVC kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.50 1.51 1.52
	Issue type        : kbprb
	
	=============================================================================
	
