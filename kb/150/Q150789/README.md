---
layout: page
title: "Q150789: FIX: DFX_Bool Calls Default() with AFX_RFX_LONGBINARY"
permalink: /kb/150/Q150789/
---

## Q150789: FIX: DFX_Bool Calls Default() with AFX_RFX_LONGBINARY

{% raw %}

	Article: Q150789
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1; :
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Memory adjacent to the BOOL variable gets overwritten when working with a BOOL
	CDaoRecordset field data member.
	
	CAUSE
	=====
	
	The DFX_Bool function delegates the Fixup case to CDaoFieldExchange::Default and
	incorrectly passes AFX_RFX_LONGBINARY as the field data type.
	
	RESOLUTION
	==========
	
	To resolve this problem, copy the DFX_Bool function to the project and give it a
	different name. For example, rename it DFX_Bool2. In the call to
	CDaoFieldExchange::Default, change the field data type from AFX_RFX_LONGBINARY
	to AFX_RFX_BOOL by using the following code:
	
	Change this code
	
	     case CDaoFieldExchange::Fixup:
	        // Convert BOOL value from AFX_DAO_TRUE/FALSE to TRUE/FALSE
	        value = (value != AFX_DAO_FALSE);
	
	        pFX->Default(lpszName, (void*)&value,
	           AFX_RFX_LONGBINARY, dwBindOptions);
	        return;
	
	to this code:
	
	     case CDaoFieldExchange::Fixup:
	        // Convert BOOL value from AFX_DAO_TRUE/FALSE to TRUE/FALSE
	        value = (value != AFX_DAO_FALSE);
	
	        pFX->Default(lpszName, (void*)&value,
	           AFX_RFX_BOOL, dwBindOptions);       // <<-- Change to AFX_RFX_BOOL
	        return;
	
	Then, change the class of the CDaoRecordset-derived DoFieldExchange function to
	call this new function in place of calling DFX_Bool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32-bit Edition
	version 4.2.
	
	MORE INFORMATION
	================
	
	The code for the Fixup case in CDaoFieldExchange::Default is:
	
	     case Fixup:
	        if (m_prs->GetFieldLength(m_nField-1) == DAO_NULL)
	        {
	           // Set the value to PSEUDO NULL and mark the status NULL
	           SetNullValue(pv, dwColumnType);
	           m_prs->SetNullFieldStatus(m_nField-1);
	        }
	        return;
	
	The dwColumn type is the variable that is incorrectly set to AFX_RFX_LONGBINARY
	in DFX_Bool. Note that SetNullValue is called with the value passed in the
	second parameter. The code for SetNullValue (showing relevant cases) is:
	
	     void CDaoFieldExchange::SetNullValue(void* pv, DWORD dwDataType)
	     {
	        switch (dwDataType)
	        {
	           .
	           .
	           .
	
	        case AFX_RFX_LONGBINARY:
	           ((CLongBinary*)pv)->m_dwDataLength = 0;
	           break;
	
	        case AFX_RFX_BOOL:
	           *(BOOL*)pv = AFX_RFX_BOOL_PSEUDO_NULL;
	           break;
	
	          .
	          .
	          .
	      }
	  }
	
	Note that the AFX_RFX_BOOL case (the one that should be called) sets the BOOL
	variable to the constant AFX_RFX_BOOL_PSEUDO_NULL. The AFX_RFX_LONGBINARY case
	(incorrectly called in the MFC source) sets the m_dwDataLength member of a
	CLongBinary object (at an offset in the object beyond the size of a BOOL) to
	zero. Whatever is adjacent to the BOOL variable has 4 bytes of its memory
	overwritten. The symptoms of this memory overwrite depend on what that variable
	was used for. There can also be no symptoms.
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 vcfixlist420 MfcDAO
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbVC410
	Version           : winnt:4.0,4.1; :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
