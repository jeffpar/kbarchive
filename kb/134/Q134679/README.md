---
layout: page
title: "Q134679: FIX: Loss of Decimal Digits with MFC Database Classes"
permalink: kb/134/Q134679/
---

## Q134679: FIX: Loss of Decimal Digits with MFC Database Classes

	Article: Q134679
	Product(s): Microsoft C Compiler
	Version(s): 1.5 1.51 1.52 1.52a 1.52b 2.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add or update a record that includes a numeric or decimal field (ODBC
	SQL data types SQL_DECIMAL and SQL_NUMERIC), all the digits to the right of the
	decimal point are lost.
	
	CAUSE
	=====
	
	By default, ClassWizard or AppWizard map the SQL_DECIMAL and SQL_NUMERIC SQL
	data types to the C data type SQL_C_CHAR. The MFC RFX_Text() routine that is
	used for this data type (and also for normal character types) always specifies 0
	for the ibScale parameter when calling the ODBC API function SQLSetParam() (as
	of Visual C++ 4.0, SQLBindParameter is the ODBC API that is called). The ibScale
	parameter is used to specify the number of digits to the right of the decimal
	point.
	
	NOTE: As of Visual C++ version 4.2, a sixth parameter (nScale) has been added to
	RFX_Text. This parameter is used to specify the scale for tranfers of data that
	are explicitly marked as parameters by the programmer. For outputColumn field
	types (that is, non-parameters), RFX_Text still specifies a scale of 0 so
	truncation may occur.
	
	WORKAROUND
	==========
	
	Write a custom RFX function that specifies the correct scale value and use it in
	place of RFX_Text() for those fields that have the problem. See the "Building
	and Using a New RFX Function" section in this article for details. One possible
	implementation based on the MFC 2.52 RFX_Text() implementation is shown in the
	sample code section at the end of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Building and Using a New RFX Function to Work Around Problem
	------------------------------------------------------------
	
	The first step is to create a new RFX function. This function should delegate to
	RFX_Text() for everything but the CFieldExchange::NameValue case, the
	CFieldExchange::Value case (for fields that are bound to database columns), and
	the CFieldExchange::BindParam case (for parameter fields -- not required for
	Visual C++ version 4.2 or later) of the CFieldExchange object's m_nOperation
	member variable. You will also need to add an extra parameter to the RFX
	function and pass the scale value there. Note that this parameter already exists
	in Visual C++ version 4.2 or later.
	
	NOTE: To be ODBC 2.0 compliant, you can replace calls to SQLSetParam with calls
	to SQLBindParameter. Visual C++ 4.x uses SQLBindParameter.
	
	The RFX_ function should be structured like this:
	
	     void AFXAPI RFX_MyText(CFieldExchange* pFX, const char* szName,
	                            CString& value, int nMaxLength,
	                            int nColumnType, int nScale)
	     {
	        if (pFX->m_nOperation != CFieldExchange::NameValue &&
	            pFX->m_nOperation != CFieldExchange::Value &&
	            pFX->m_nOperation != CFieldExchange::BindParam)
	        {
	           RFX_Text(pFX, szName, value, nMaxLength, nColumnType);
	           return;
	        }
	
	        // initialize and check things
	
	        switch (pFX->m_nOperation)
	        {
	           case NameValue:
	              // handle NameValue case
	
	           case Value:
	              // handle Value case
	
	           // not required for Visual C++ 4.2 or greater
	           case BindParam:
	              // handle BindParam case
	        }
	     }
	
	The NameValue case is brought along because it falls into the Value case. In the
	Value case, you need to change the call to SQLSetParam to specify the scale.
	Here is the relevant section of the Value case from the MFC 2.52 RFX_Text()
	function (slightly reformatted):
	
	     AFX_SQL_SYNC(::SQLSetParam(m_hstmt,
	                  (unsigned short int)m_nParamFields,
	                  (short int)nCType,
	                  // Get actual SQL type -
	                  //  may differ from CType (e.g. DECIMAL)
	                  (short int)GetColumnType(nField),
	                  (unsigned long int)cbPrecision,
	                  0,
	                  pv,
	                  plLength));
	
	NOTE: The sixth parameter is 0. This is what you need to change. Change it to
	what is passed in the nScale parameter added to the RFX function. You will also
	be using the value passed in the nColumnType parameter to specify the SQL data
	type (4th parameter of SQLSetParam()):
	
	     AFX_SQL_SYNC(::SQLSetParam(pFX->m_hstmt,
	                  (unsigned short int)pFX->m_nParamFields,
	                  SQL_C_CHAR,
	                  (short int)nColumnType,
	                  (unsigned long int)value.GetLength(),
	                  (short int)nScale,
	                  value.GetBuffer(0),
	                  plLength));
	     value.ReleaseBuffer();
	
	NOTE: Because the SQLSetParam() call is now in the context of an RFX function,
	you must use the CFieldExchange pointer (pFX) to access the CFieldExchange
	members m_hstmt and m_nParamFields. If you borrow the rest of the NameValue and
	Value case code from the CFieldExchange::Default() function (which you should),
	you need to be aware of this throughout the code.
	
	For the BindParam case, you can just copy the implementation of this case from
	RFX_Text() and change the sixth parameter of the SQLSetParam() call from 0 to
	the value passed in through the nScale parameter of your custom RFX_ function
	(not required for Visual C++ version 4.2 or later).
	
	To use the new RFX function, change the call to RFX_Text for the fields in
	question in your recordset's DoFieldExchange() function to calls to the new RFX
	function you just wrote. Be aware that you will now be specifying six parameters
	in your RFX function call. This call should be placed outside of Class Wizard's
	AFX_FIELD_MAP comment block.
	
	Sample Code to Implement Workaround
	-----------------------------------
	
	     /* Compile options needed: None
	     */ 
	
	     // implementation based on VC++ 1.52 code
	
	     // prototype
	     void AFXAPI RFX_MyText(CFieldExchange* pFX, const char* szName,
	        CString& value, int nMaxLength, int nColumnType, int nScale);
	
	     // implementation
	     void AFXAPI RFX_MyText(CFieldExchange* pFX, const char* szName,
	        CString& value, int nMaxLength, int nColumnType, int nScale)
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
	        ASSERT(AfxIsValidAddress(&value, sizeof(CString)));
	
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
	                    *plLength = value.GetLength();
	
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
	                     (unsigned long int)value.GetLength(),
	                     (short int)nScale,
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
	               (unsigned long int)value.GetLength(),
	               nScale,
	               value.GetBuffer(0),
	               plLength));
	              value.ReleaseBuffer();
	
	              if (nRetCode != SQL_SUCCESS)
	                 pFX->m_prs->ThrowDBException(nRetCode, pFX->m_hstmt);
	              return;
	        }
	     }
	
	REFERENCES
	==========
	
	ODBC 2.0 Programmer's Reference, Appendix D - Data Types
	
	Additional query words: kbvc150bug kbvc151bug kbvc152bug kbvc200bug kbvc210bug kbvc220bug kbvc400bug kbvc410bug kbvc420bug kbvc500bug kbvc600fix kbmfc kbdatabase kbODBC Oracle RFX_Text
	
	======================================================================
	Keywords          : kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.5 1.51 1.52 1.52a 1.52b 2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
