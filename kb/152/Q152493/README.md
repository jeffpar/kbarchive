---
layout: page
title: "Q152493: FIX: ISAPI Extension Wizard Generates Bad OnAuthentication"
permalink: /kb/152/Q152493/
---

## Q152493: FIX: ISAPI Extension Wizard Generates Bad OnAuthentication

{% raw %}

	Article: Q152493
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.1
	Operating System(s): 
	Keyword(s): kbISAPI kbMFC kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Generating an ISAPI Filter using the MFC ISAPI Extension Wizard and selecting
	the option "Client Authentication Requests," will generate an ISAPI Filter DLL
	with an OnAuthentication() member function that will never be called.
	
	CAUSE
	=====
	
	When generating an ISAPI Filter using the MFC ISAPI Extension Wizard, if the
	"Client Authentication Requests" checkbox is selected on the second page of the
	Wizard, the function generated, OnAuthentication(), will have an improper type
	as one of its parameters. Therefore, it will not override the virtual function
	in the base class.
	
	RESOLUTION
	==========
	
	Modify the definition and implementation of the OnAuthentication function so the
	second parameter is of type PHTTP_FILTER_AUTHENT rather than type
	PHTTP_FILTER_PREPROC_HEADERS.
	
	The definition of the OnAuthentication function will look like the following in
	the .H file:
	
	     DWORD OnAuthentication(CHttpFilterContext* pCtxt,
	         PHTTP_FILTER_PREPROC_HEADERS pHeaderInfo);
	
	and like the following in the .CPP file:
	
	     DWORD CMyFilter::OnAuthentication(CHttpFilterContext* pCtxt,
	         PHTTP_FILTER_PREPROC_HEADERS pHeaderInfo)
	
	The second parameter should not be PHTTP_FILTER_PREPROC_HEADERS, but should read
	PHTTP_FILTER_AUTHENT. For example:
	
	     DWORD OnAuthentication(CHttpFilterContext* pCtxt,
	         PHTTP_FILTER_AUTHENT pHeaderInfo);
	
	in the .H file, and:
	
	     DWORD CMyFilter::OnAuthentication(CHttpFilterContext* pCtxt,
	         PHTTP_FILTER_AUTHENT pHeaderInfo)
	
	in the .CPP file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was fixed in Visual C++ 32-bit Edition
	version 4.2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbISAPI kbMFC kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
