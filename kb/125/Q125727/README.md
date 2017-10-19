---
layout: page
title: "Q125727: FIX: Text Truncated When Using Dynaset and RFX_Text()"
permalink: /kb/125/Q125727/
---

## Q125727: FIX: Text Truncated When Using Dynaset and RFX_Text()

	Article: Q125727
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist kbfixlist
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When editing a record with a text field, the text gets truncated to the length
	of the previous value. For example, if a text field has the value "ABC" and an
	application attempts to change the value to "TEST," the result is "TES."
	
	This occurs when opening a CRecordset with CRecordset::dynaset as the first
	argument of CRecordset::Open() and using RFX_Text() to map the field to a
	CRecordset member variable.
	
	CAUSE
	=====
	
	The CFieldExchange::Default() function, located in \MSVC20\MFC\SRC\DBRFX.CPP,
	contains the following code:
	
	  case BindFieldForUpdate:
	     if (!m_prs->IsFieldFlagDirty(nField, m_nFieldType))
	     {
	       // If field is not dirty, set bound length to SQL_IGNORE
	       // for SQLSetPos updates
	       *plLength = SQL_IGNORE;
	     }
	     else if ((m_prs->m_nEditMode == CRecordset::addnew) &&
	             (!m_prs->IsFieldFlagNull(nField, m_nFieldType)))
	     {
	       // plLength always set to SQL_NULL_DATA in AddNew mode
	       *plLength = cbValue;
	     }
	     return;
	
	The second If statement shouldn't check for only CRecordset::addnew because this
	also applies to updates.
	
	RESOLUTION
	==========
	
	To work around this problem, perform these steps:
	
	1. In one of your header files, perhaps in your CRecordset's header file, create
	  the following function prototype:
	
	      void RFX_Text2(CFieldExchange* pFX, const char *szName,
	         CString& value, int nMaxLength=255, int nColumnType=SQL_VARCHAR);
	
	2. In your CRecordset's .CPP file or elsewhere, add the RFX_Text2() definition
	  shown below:
	
	     ****
	     void RFX_Text2(CFieldExchange* pFX, const char *szName,
	                    CString& value, int nMaxLength, int nColumnType)
	     {
	       ASSERT(AfxIsValidAddress(pFX, sizeof(CFieldExchange)));
	       ASSERT(AfxIsValidString(szName));
	       ASSERT(AfxIsValidAddress(&value, sizeof(CString)));
	
	       if (pFX->m_nOperation==CFieldExchange::BindFieldForUpdate)
	       {
	         UINT nField;
	         if (!pFX->IsFieldType(&nField))
	           return;
	
	      LONG* plLength = pFX->m_prs->GetFieldLength(pFX);
	
	      if (!pFX->m_prs->IsFieldFlagDirty(nField, pFX->m_nFieldType))
	      {
	        // If field is not dirty, set bound length to SQL_IGNORE
	        // for SQLSetPos updates
	        *plLength = SQL_IGNORE;
	      }
	      else if (!pFX->m_prs->IsFieldFlagNull(nField, pFX->m_nFieldType))
	      {
	        // plLength always set to SQL_NULL_DATA in AddNew mode
	        *plLength = value.GetLength();
	      }
	      return;
	       }
	
	       RFX_Text(pFX, szName,value, nMaxLength,nColumnType);
	     }
	
	     ****
	
	3. Modify the DoFieldExchange member function of your CRecordset class,
	  replacing calls to RFX_Text with calls to the RFX_Text2 function described
	  above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 2.1.
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
