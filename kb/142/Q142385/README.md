---
layout: page
title: "Q142385: FIX: Using CString::operator+= May Cause an Access Violation"
permalink: /kb/142/Q142385/
---

## Q142385: FIX: Using CString::operator+= May Cause an Access Violation

{% raw %}

	Article: Q142385
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation may result after using CString::operator+= where the string
	on the right hand side of the operator is an empty string. If the debug CRT
	libraries are installed, an Assertion Failure in Dbgheap.c line 1017 will occur.
	The "Sample Code" section in this article gives an example that demonstrates
	this problem.
	
	CAUSE
	=====
	
	The CString implementation has been optimized in Visual C++ 4.0 to use reference
	counting in order to minimize duplication in allocation of memory. When
	operator+= is used to append an empty string, the code in
	CString::ConcatInPlace() incorrectly decrements the reference count. If more
	than one CString is pointing at this data, the call to delete in the CString
	destructor causes an access violation.
	
	RESOLUTION
	==========
	
	To work around this problem, avoid using the += operator with an empty string of
	the form:
	
	     str1 += _T("");
	
	Check for empty CStrings prior to appending:
	
	     if (!str2.IsEmpty())
	        str1 += str2;
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: default
	  */ 
	
	  {
	    CString str1, str2;
	
	    str1  = _T("allocspace");  // length of RHS > 0, allocate memory
	                           // str1 += str2 will otherwise do a fast copy
	                           // if both CStrings are uninitialized
	
	    str1  = _T("");        // make str1 NULL
	                           // operator= will put '\0' at m_pchData[0]
	
	    str2  = str1;          // str1 and str2 share the same m_pchData.
	                           // m_pchData now has ref count of 2
	
	    str1 += _T("");        // m_pchData has ref count of 1 but both str1
	                           // and str2 use this data.
	  }
	
	Additional query words: kbVC400bug 4.00 4.10
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
