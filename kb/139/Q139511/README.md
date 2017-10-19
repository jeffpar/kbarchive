---
layout: page
title: "Q139511: FIX: Text Data Truncated When Using optimizeBulkAdd"
permalink: /kb/139/Q139511/
---

## Q139511: FIX: Text Data Truncated When Using optimizeBulkAdd

	Article: Q139511
	Product(s): Microsoft C Compiler
	Version(s): 1.52a 1.52b
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.52a, 1.52b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the optimizeBulkAdd flag with a CRecordset object, text
	fields may be truncated. For example, if the first insertion in the table
	inserts a text value in field1 that is four characters long and a second
	insertion inserts a text value in field1 that is five characters, the text in
	the second insertion will be truncated to four characters, the length of the
	text from the first insertion.
	
	
	CAUSE
	=====
	
	MFC is incorrectly binding the length of the parameters it uses in the INSERT
	INTO statement it constructs for adding a record.
	
	RESOLUTION
	==========
	
	Use either of these two workarounds:
	
	- As the first record you add, insert a dummy record that contains strings with
	  the maximum length you want for the text fields in the recordset. Every
	  record after this first insertion will always have text values with lengths
	  that are less than or equal to the length of the text fields in the dummy
	  record. When you have finished inserting records, delete the dummy record.
	
	-or-
	
	- Replace the RFX_Text() function calls in your CRecordset's DoFieldExchange()
	  with the following RFX_Text2() function, which performs the correct binding
	  for the parameters used in the INSERT INTO statement used internally by MFC
	  to add a record. In your recordset's header file add:
	
	     void RFX_Text2(CFieldExchange* pFX, const char* szName,
	                    CString& value, int nMaxLength=255,
	                    int nColumnType=SQL_VARCHAR);
	
	     In your recordset's .cpp file add:
	
	     void RFX_Text2(CFieldExchange* pFX, const char* szName,
	       CString& value, int nMaxLength /*=255*/ , int nColumnType
	                                               /* =SQL_VARCHAR */)
	     {
	       if (pFX->m_nOperation != CFieldExchange::NameValue &&
	           pFX->m_nOperation != CFieldExchange::Value &&
	           pFX->m_nOperation != CFieldExchange::BindParam)
	       {
	          RFX_Text(pFX, szName, value, nMaxLength, nColumnType);
	          return;
	       }
	
	       ASSERT(AfxIsValidAddress(pFX, sizeof(CFieldExchange)));
	       ASSERT(AfxIsValidString(szName));
	       ASSERT(AfxIsValidAddress&value, sizeof(CString)));
	
	       RETCODE nRetCode;
	       UINT nField;
	       if (!pFX->IsFieldType(&nField))
	          return;
	
	       LONG* plLength = pFX->m_prs->GetFieldLength(pFX);
	       switch (pFX->m_nOperation)
	       {
	         case CFieldExchange::NameValue:
	          if (pFX->m_prs->IsFieldFlagDirty(nField,pFX->m_nFieldType))
	           {
	             *pFX->m_pstr += pFX->m_prs->m_pDatabase->QuoteName(szName);
	             *pFX->m_pstr += "=";
	           }
	             // Fall through
	
	         case CFieldExchange::Value:
	           if (pFX->m_prs->IsFieldFlagDirty(nField, pFX->m_nFieldType))
	           {
	
	              // If user marked column NULL, reflect this in length
	            if (pFX->m_prs->IsFieldFlagNull(nField, pFX->m_nFieldType))
	               *plLength = SQL_NULL_DATA;
	            else
	               *plLength = SQL_NTS;
	
	              // If optimizing for bulk add, just set length.
	          if (!(pFX->m_prs->m_dwOptions & CRecordset::optimizeBulkAdd))
	              {
	                *pFX->m_pstr += "?";
	                *pFX->m_pstr += pFX->m_lpszSeparator;
	                pFX->m_nParamFields++;
	
	                AFX_SQL_SYNC(::SQLSetParam(pFX->m_hstmt,
	                  (unsigned short int)pFX->m_nParamFields,
	                  SQL_C_CHAR,
	                  (short int)nColumnType,
	                  nMaxLength,
	                  0,
	                  value.GetBuffer(0),
	                  plLength));
	                value.ReleaseBuffer();
	
	                if (nRetCode != SQL_SUCCESS)
	                  pFX->m_prs->ThrowDBException(nRetCode, pFX->m_hstmt);
	               }
	             }
	             return;
	
	           case CFieldExchange::BindParam:
	             *plLength = SQL_NTS;
	             // Preallocate to nMaxLength
	             value.GetBufferSetLength(nMaxLength);
	             AFX_SQL_SYNC(::SQLSetParam(pFX->m_hstmt,
	              (unsigned short int)nField,
	              (short int)SQL_C_CHAR,
	              (short int)nColumnType,
	              nMaxLength,
	              0,
	              value.GetBuffer(0),
	              plLength));
	              value.ReleaseBuffer();
	
	              if (nRetCode != SQL_SUCCESS)
	                pFX->m_prs->ThrowDBException(nRetCode, pFX->m_hstmt);
	              return;
	       }
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. The code has been corrected in Visual C++ version 2.2
	and later.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  CMyRecordSet rs;
	  rs.Open(CRecordset::snapshot, NULL, CRecordset::optimizeBulkAdd);
	  rs.AddNew();
	  rs.m_field1="1234";
	  rs.Update();
	  rs.AddNew();
	  rs.m_field1="12345";
	  rs.Update();
	  rs.Close();
	
	The table will look like this:
	
	  field1
	  ------
	  1234
	  1234
	
	instead of this:
	
	  field1
	  ------
	  1234
	  12345
	
	REFERENCES
	==========
	
	See the following references for more information about the problem and
	workaround:
	
	- SQLSetParam() documentation in the ODBC 1.0 Programmer's Reference or
	  SQLBindParameter() in the ODBC 2.0 Programmer's Reference.
	
	- For more information about bulk add optimizations in MFC, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q126131 How to Speed Up Apps that Use Microsoft Access 2.0 ODBC Driver
	
	Following is the information from the Msetup.hlp file on the Visual C++ compact
	disc that talks about the optimizeBulkAdd feature:
	
	  The MFC CRecordset class has a new optimization (in both 16- and 32-bit
	  versions) that improves efficiency when you're adding new records in bulk to
	  a table. A new option for the dwOptions parameter to the CRecordset::Open
	  member function, optimizeBulkAdd, improves performance when you're adding
	  multiple records consecutively without calling Requery or Close. Only those
	  fields that are "dirty" prior to the first Update call are marked as "dirty"
	  for subsequent AddNew/Update calls. If you are using the database classes to
	  take advantage of the ::SQLSetPos API function for adding, editing, and
	  deleting records, this optimization is unnecessary. If the ODBC Cursor
	  Library is loaded or the ODBC driver doesn't support adding, editing, and
	  deleting via ::SQLSetPos, this optimization should improve bulk add
	  performance. To turn on this optimization, set the dwOptions parameter in the
	  Open call for your recordset to:
	
	         appendOnly | optimizeBulkAdd
	
	Additional query words: 1.5 1.50 1.52
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.52a 1.52b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
