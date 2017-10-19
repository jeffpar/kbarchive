---
layout: page
title: "Q218829: FIX: CComEnumImpl&lt;&gt;::Skip() Doesn't Handle Overflow Correctly"
permalink: /kb/218/Q218829/
---

## Q218829: FIX: CComEnumImpl&lt;&gt;::Skip() Doesn't Handle Overflow Correctly

	Article: Q218829
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVC600bug kbATL300bug kbVS600sp2bug kbVS600sp3fix kbVS600SP1bug kbGrpDSM
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an argument passed into CComEnumImpl<>::Skip() is a negative number,
	then the pointer to the current enumeration may not be set correctly.
	
	CAUSE
	=====
	
	Following is the implementation of CComEnumImpl<>::Skip():
	
	  template <class Base, const IID* piid, class T, class Copy>
	  STDMETHODIMP CComEnumImpl<Base, piid, T, Copy>::Skip(ULONG celt)
	  {
	  	m_iter += celt;
	  	if (m_iter <= m_end)
	  		return S_OK;
	  	m_iter = m_end;
	  	return S_FALSE;
	  }
	
	M_iter points to the current enumeration. If celt is a negative number, Skip() is
	supposed to set m_iter back "celt" items. If "m_iter + celt" results in a value
	that is less than m_begin, then this case is not handled and m_iter is set to an
	invalid pointer.
	
	RESOLUTION
	==========
	
	This bug has been fixed in Visual Studio 6.0 Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVC600bug kbATL300bug kbVS600sp2bug kbVS600sp3fix kbVS600SP1bug kbGrpDSMFCATL kbCollectionClass 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
