---
layout: page
title: "Q197448: FIX: CRecordset &quot;String Cannot Be Converted to Number&quot; Error"
permalink: /kb/197/Q197448/
---

## Q197448: FIX: CRecordset &quot;String Cannot Be Converted to Number&quot; Error

	Article: Q197448
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0,3.5,3.51,3.6,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbservicepack kbDatabase kbDriver kbMFC kbVC500 kbODBC300 kbODBC350 kbO
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Open Database Connectivity, versions 3.0, 3.5, 3.51, 3.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article explains the consequences of altering the address assigned to a
	CRecordset member variable. This problem can occur when the CRecordset class
	uses numeric or decimal fields. If the internal buffer changes, the following
	error message can occur during a call to CRecordset::Update():
	
	  String cannot be converted to number
	
	CAUSE
	=====
	
	Each field in a database that is bound to a CRecordset member variable has a
	corresponding binding address stored in CRecordset::m_pvBindAddress. This
	binding address is the location in memory where data for each field is placed
	when ODBC retrieves a record. Once bound, the address of this column must remain
	valid as long as the ODBC binding remains in effect. If this address changes,
	the CRecordset class can display the following debug TRACE message when
	retrieving a record:
	
	  Error: field address (column x) has changed
	
	If the field in question is a high precision numeric or decimal field, the
	following error may occur while performing a CRecordset::Update():
	
	  String cannot be converted to number
	
	RESOLUTION
	==========
	
	The MFC CRecordset Class Wizard binds high precision numeric and decimal fields
	to CString member variables. The MFC CRecordset class keeps a pointer to the
	CString internal buffer in CRecordset::m_pvBindAddress. If you modify a CString
	member variable, the CString class may re-allocate it's string buffer (for
	example, if you increase the size of the CString). If this change occurs, the
	address stored in CRecordset::m_pvBindAddress becomes invalid.
	
	For example, the CString class can reallocate its internal memory if you make the
	following call to CString::Format(...):
	
	  CString strNumber;
	  strNumber.Format( "%6.3f", 123456.123 );
	
	To ensure your CString buffer is large enough, pass a larger value than the
	default of 255 to the fourth parameter of RFX_Text (nMaxLength). For example,
	the following code demonstrates the before and after of an RFX_Text call:
	
	     // BEFORE
	     void CMyRecordsSet::DoFieldExchange(CFieldExchange* pFX)
	     {
	        //{ {AFX_FIELD_MAP(CTestRecords)
	        pFX->SetFieldType(CFieldExchange::outputColumn);
	        RFX_Text(pFX, _T("[UNITS]"), m_UNITS);
	        //} }AFX_FIELD_MAP
	     }
	
	     // AFTER
	     void CMyRecordsSet::DoFieldExchange(CFieldExchange* pFX)
	     {
	        //{ {AFX_FIELD_MAP(CTestRecords)
	        pFX->SetFieldType(CFieldExchange::outputColumn);
	        RFX_Text(pFX, _T("[UNITS]"), m_UNITS, 1024);
	        //} }AFX_FIELD_MAP
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Internally, the CRecordset class checks CRecordset::m_pvBindAddress against the
	class member field buffer to ensure it has not changed. If this comparison
	fails, you get the "String cannot be converted to number" error.
	
	The comparison is made in dbrfx.cpp on line 1049:
	
	  if (pvBind != pInfo->m_pvBindAddress)
	  {
	
	     TRACE1("Error: CString buffer (column %u) address has changed!\n",
	        nField);
	     ASSERT(FALSE);
	
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbservicepack kbDatabase kbDriver kbMFC kbVC500 kbODBC300 kbODBC350 kbODBC351 kbODBC360 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbODBCSearch kbVC500 kbVC600 kbODBC360 kbODBC350 kbODBC351 kbODBC300 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:3.0,3.5,3.51,3.6,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
