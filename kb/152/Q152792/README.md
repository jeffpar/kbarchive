---
layout: page
title: "Q152792: FIX: Multiple ActiveX Control Containers Under Win32s Problems"
permalink: /kb/152/Q152792/
---

## Q152792: FIX: Multiple ActiveX Control Containers Under Win32s Problems

{% raw %}

	Article: Q152792
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbVC400bug kbVC410bug kbVC410fix kbGrpD
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to use MFC versions 4.0 and 4.1 to create ActiveX control
	containers that will run under Win32s version 1.3. However if, after the
	container has been started under Win32s, another MFC ActiveX control container
	is started or a second instance of the same application is started, the second
	ActiveX control container can't display ActiveX controls if the first
	application has already displayed one of its ActiveX controls.
	
	If the first application doesn't create its ActiveX controls first, then the
	second application can create ActiveX controls, but then the first application
	can't create ActiveX controls at all. Also, if you are running a debug build of
	the application, you will see an assertion in Appinit.cpp at line 110 when the
	second application starts up.
	
	CAUSE
	=====
	
	This is caused by improper initialization of the MFC and C-Run-Time DLLs under
	Win32s.
	
	RESOLUTION
	==========
	
	The assertion in Appinit.cpp at line 110 can be safely ignored. Note that
	assertions are only included in debug builds of MFC applications. There
	currently is no work around to the problem of a second MFC app being able to use
	MFC control container support under Win32s.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the Visual C++ 4.1b patch.
	
	For information of the availablity of the patch, see the following Microsoft
	Knowlegdebase article:
	
	  Q154428 PATCH: Visual C++ Version 4.1b
	
	Additional query words: kbVC400bug 4.00 4.10 kbole vcfixlist410 MfcOLE VCx86
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbVC400bug kbVC410bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
