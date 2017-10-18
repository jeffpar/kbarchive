---
layout: page
title: "Q126134: FIX: Date/Time Fields Fail to Update When Using a Dynaset"
permalink: kb/126/Q126134/
---

## Q126134: FIX: Date/Time Fields Fail to Update When Using a Dynaset

	Article: Q126134
	Product(s): Microsoft C Compiler
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to update a date/time field using a CTime object will fail. The
	CRecordset::RFX_Date() doesn't work correctly, and the date/time field in the
	database table isn't changed. This problem occurs only when passing
	CRecordset::dynaset as the first parameter to the CRecordset::Open() member
	function.
	
	CAUSE
	=====
	
	The RFX_Date() function that takes a CTime object as a parameter fails to
	transfer the CTime data to its TIMESTAMP_STRUCT proxy before performing an
	update.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. In one of the header files, such as the CRecordset's header file, create the
	  following function prototype:
	
	     void RFX_Date2( CFieldExchange* pFX, const char* szName, CTime& value );
	
	2. In the CRecordset's .CPP file or elsewhere, add this RFX_Date2() definition:
	
	     void RFX_Date2(CFieldExchange* pFX, const char *szName,
	        CTime& value)
	     {
	      ASSERT(AfxIsValidAddress(pFX, sizeof(CFieldExchange)));
	
	      if (pFX->m_nOperation==CFieldExchange::BindFieldForUpdate)
	      {
	              if(pFX->m_nFieldType == CFieldExchange::param)
	                  return;
	
	              //pFX-m_nFields hasn't been incremented yet so no need to
	              // subtract 1 for indexing m_pvFieldProxy
	              if (pFX->m_prs->m_pvFieldProxy[pFX->m_nFields] != NULL)
	              {
	                  // Fill buffer (expected by SQLSetPos) with new field data
	                  TIMESTAMP_STRUCT* pts;
	                  pts = (TIMESTAMP_STRUCT*)
	                     pFX->m_prs->m_pvFieldProxy[pFX->m_nFields];
	                  pts->year = (SWORD)value.GetYear();
	                  pts->month = (UWORD)value.GetMonth();
	                  pts->day = (UWORD)value.GetDay();
	                  pts->hour = (UWORD)value.GetHour();
	                  pts->minute = (UWORD)value.GetMinute();
	                  pts->second = (UWORD)value.GetSecond();
	                  pts->fraction = 0;
	              }
	         }
	         RFX_Date(pFX, szName, value);
	     }
	
	3. Modify the DoFieldExchange member function of the CRecordset class, replacing
	  calls to RFX_Date with calls to the RFX_Date2 function described above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++
	version 2.1.
	
	MORE INFORMATION
	================
	
	MFC Technote #43 contains more information about record field exchange (RFX)
	functions and CFieldExchange operations.
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : 2.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
