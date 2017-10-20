---
layout: page
title: "Q217772: PRB: CAsyncMonikerFile::Open() Fails in Visual C++ 5.0 MFC Apps"
permalink: /kb/217/Q217772/
---

## Q217772: PRB: CAsyncMonikerFile::Open() Fails in Visual C++ 5.0 MFC Apps

{% raw %}

	Article: Q217772
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbIE400 kbInternet kbMFC kbVC500 kbVC600bug kbIE302 kbBug kbGrpDSMFCATL kbNoUpdate kbIS
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Windows Internet Services (WinInet) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing a Visual C++ 6.0 application that uses MFC, the Mfc42.dll that
	was shipped with Visual C++ 6.0 may be installed. This may cause problems for
	existing applications that were developed using MFC from Visual C++ 5.0 and that
	used the CAsyncMonikerFile class. In particular, a call to
	CAsyncMonikerFile::Open() will return an the following error:
	
	  An unknown error occurred while accessing an unknown file
	
	This error occurs on machines that have Internet Explorer 3.02 or earlier
	installed.
	
	CAUSE
	=====
	
	This problem occurs because of a bug in Visual C++ 6.0's implementation of the
	CAsyncMonikerFile MFC class.
	
	RESOLUTION
	==========
	
	Use the following steps to work around this problem:
	
	1. Install Internet Explorer 4.0 or higher.
	
	2. Place the Mfc42.dll from the Visual C++ 5.0 version in the same directory as
	  the EXE or DLL. This may not be an option if you depend Mfc42.dll being in
	  the system directory. For example, an OCX that downloads over the Internet
	  would use the version of MFC in the windows system directory.
	
	3. Link to MFC statically for any application developed with Visual C++ 5.0 and
	  using CAsyncMonikerFile.
	
	  NOTE: This method does not work for an OCX developed with Visual C++ 5.0
	  because you cannot link statically to MFC when developing an OCX in Visual
	  C++ 5.0.
	
	Additional query words: Backward compatible bug MFC42.DLL port
	
	======================================================================
	Keywords          : kbIE400 kbInternet kbMFC kbVC500 kbVC600bug kbIE302 kbBug kbGrpDSMFCATL kbNoUpdate kbISS 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
