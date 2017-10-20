---
layout: page
title: "Q153282: FIX: ClassWizard Overrides CDaoRecordset::Open Incorrectly"
permalink: /kb/153/Q153282/
---

## Q153282: FIX: ClassWizard Overrides CDaoRecordset::Open Incorrectly

{% raw %}

	Article: Q153282
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbVC kbVC420fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you override the CDaoRecordset::Open() function using ClassWizard, the new
	function will never be called.
	
	CAUSE
	=====
	
	The Wizard places an UINT type for the first parameter rather than an int. The
	code should read:
	
	  virtual void Open(int ...)
	
	rather than:
	
	  virtual void Open(UINT...)
	
	RESOLUTION
	==========
	
	Change the type of the first parameter in your Open() function from UINT to
	
	int in the .h and .cpp files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 4.2.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following sample code shows the correct function prototype for a
	CDaoRecordset-derived class named CMySet:
	
	     // CMySet.H:
	     virtual void Open(int nOpenType = AFX_DAO_USE_DEFAULT_TYPE,
	             LPCTSTR lpszSql = NULL, int nOptions = 0);
	     // CMySet.CPP:
	     void CMySet::Open(int nOpenType, LPCTSTR lpszSql, int nOptions)
	     {
	         // TODO: Add your specialized code here and/or call the base class
	         CDaoRecordset::Open(nOpenType, lpszSql, nOptions);
	     }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC kbVC420fix 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : 4.00 4.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
