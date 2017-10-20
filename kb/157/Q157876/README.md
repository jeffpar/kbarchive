---
layout: page
title: "Q157876: FIX: SetFieldNull() Asserts in DBCORE.CPP Line 4055 or 4062"
permalink: /kb/157/Q157876/
---

## Q157876: FIX: SetFieldNull() Asserts in DBCORE.CPP Line 4055 or 4062

{% raw %}

	Article: Q157876
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbVC420bug kbVC500fix kbDSupport kbNoUpdate
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling SetFieldNull() for a date or, in UNICODE builds, a text field causes an
	assert in DBCORE.CPP at line 4055 or line 4062:
	
	     void CRecordset::SetNullParamStatus(DWORD nParam)
	     {
	       ASSERT(nParam < m_nParams);                         // <= Line 4055
	
	       m_pbParamFlags[nParam] |= AFX_SQL_FIELD_FLAG_NULL;
	     }
	
	     void CRecordset::ClearNullParamStatus(DWORD nParam)
	     {
	       ASSERT(nParam < m_nParams);                         // <= Line 4062
	
	       m_pbParamFlags[nParam] &= ~AFX_SQL_FIELD_FLAG_NULL;
	     }
	
	CAUSE
	=====
	
	During Update(), both the RFX_Date() and RFX_Text() functions incorrectly add
	the date or unicode text field to the parameter map:
	
	     case CFieldExchange::NameValue:
	       ...
	       // Fall through
	
	     case CFieldExchange::Value:
	       ...
	       // Add the member address to the param map
	       pFX->m_prs->m_mapParamIndex.SetAt(&value, (void*)nField);
	
	A subsequent call to SetFieldNull() will try to determine whether the field is a
	parameter by checking the index returned by GetBoundParamIndex(). An index >=
	0 implies that the field is a parameter:
	
	     void CRecordset::SetFieldNull(void* pv, BOOL bNull)
	     {
	       ...
	      int nIndex = GetBoundParamIndex(pv);
	       if (nIndex >= 0)
	       {
	        if (bNull)
	           SetNullParamStatus(nIndex);
	         else
	           ClearNullParamStatus(nIndex);
	         return;
	       }
	       ... // Handle the case where the field is not a parameter
	     }
	
	Because the RFX function incorrectly added the field to the parameter map, an
	index >= 0 is returned by GetBoundParamIndex(). Because of this,
	SetFieldNull() incorrectly calls the function to set or clear the Null parameter
	status rather than the Null field status. If the index returned by
	GetBoundParamIndex() is less the member variable CRecordset::m_nParams, then the
	assert will occur:
	
	     ASSERT(nParam < m_nParams);
	
	RESOLUTION
	==========
	
	Create your own RFX_Date() or RFX_Text() function and comment out the line that
	adds the field to the parameter map. See the MORE INFORMATION section below for
	more for the steps to accomplish this.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The following steps detail one method of making the needed changes in RFX_Date
	or RFX_Text:
	
	1. Copy the implementation of RFX_Date() or RFX_Text() (MSDEV\MFC\SRX\DBRFX.CPP)
	  into a new .cpp file, and rename the function to something such as
	  RFX_Date2() or RFX_Text2(). Create a header file for the .cpp file and
	  include that in your recordset .cpp file. Be sure to type:
	
	     #include"stdafx.h"
	
	  at the top of your new .cpp file, and include the .cpp file in your project.
	
	2. Change all RFX_Date() calls in your recordset's DoFieldExchange() to calls to
	  RFX_Date2(), or change all RFX_Text() to RFX_Text2().
	
	3. In your new RFX_Date2() or RFX_Text2() implementation, comment out the
	  following line, which appears under the CFieldExchange::Value case:
	
	     //      pFX->m_prs->m_mapParamIndex.SetAt(&value, (void*)nField);
	
	Additional query words: crash gpf
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbVC420bug kbVC500fix kbDSupport kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
