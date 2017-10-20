---
layout: page
title: "Q251023: BUG: CComVariant::operator=(BSTR) Does Not Copy Embedded NULL"
permalink: /kb/251/Q251023/
---

## Q251023: BUG: CComVariant::operator=(BSTR) Does Not Copy Embedded NULL

{% raw %}

	Article: Q251023
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0,2.1,3.0
	Operating System(s): 
	Keyword(s): kbATL kbATL200bug kbATL210 kbCOMt kbVC500bug kbVC600bug kbATL300bug kbGrpDSMFCATL
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you assign BSTR to a CComVariant instance using
	CComVariant::operator=(BSTR), any characters after an embedded NULL character in
	BSTR are not copied.
	
	CAUSE
	=====
	
	This is due to the implementation of CComVariant::operator=(BSTR) not accounting
	for NULL characters inside BSTR being copied.
	
	RESOLUTION
	==========
	
	Instead of using CComVariant::operator=(BSTR) to copy BSTR inside of
	CComVariant, use the CComVariant::Copy() function and place BSTR inside of
	VARIANT. The following code snippet could be used to replace
	CComVariant::operator=(BSTR) if you need to make sure embedded NULL characters
	and characters after embedded NULL characters are copied.
	
	  void Function(BSTR bstrValue)
	  {
	    VARIANT v;
	    v.vt = VT_BSTR;
	    v.bstrVal = bstrValue;
	
	    CComVariant a;
	    a.Copy(&v); //Use this instead of the next line.
	    //a = bstrValue; //This would not copy embedded NULLs or chars after NULL.
	
	    //Use variant now to do whatever you need.
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: CComVariant =
	
	======================================================================
	Keywords          : kbATL kbATL200bug kbATL210 kbCOMt kbVC500bug kbVC600bug kbATL300bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL200 kbATL300 kbATL210
	Version           : WINDOWS:2.0,2.1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
