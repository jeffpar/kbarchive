---
layout: page
title: "Q170979: FIX: Pragma Pack(pop) Missing from afxdocob.h Header File"
permalink: /kb/170/Q170979/
---

## Q170979: FIX: Pragma Pack(pop) Missing from afxdocob.h Header File

{% raw %}

	Article: Q170979
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbATL kbDLL kbMFC kbVC420bug kbVC500fix kbDSupport kbGrpDSMFCATL kbN
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a class imported from an MFC extension DLL in an MFC application with
	full server support for ActiveX documents, various problems may occur
	including:
	
	- Access violation
	
	- Assert in dbgheap.c line 1011
	
	- Incorrect values in data members
	
	CAUSE
	=====
	
	The header file, afxdocob.h, which is only included for full server of ActiveX
	documents, is missing the following near the end of the file:
	
	     #ifdef _AFX_PACKING
	     #pragma pack(pop)
	     #endif
	
	RESOLUTION
	==========
	
	Add the above compiler directives after including afxdocob.h, or modify
	afxdocob.h.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual C++
	5.0.
	
	MORE INFORMATION
	================
	
	The default data member packing for structures and classes is 8 bytes. MFC
	headers change this to 4 bytes to save memory. Because afxdocob.h is missing the
	#pragma pack(pop), all user class declarations compiled after including this
	file will be packed with 4-byte alignment. When sharing this class between an
	application and an extension DLL, the structure will be packed differently since
	the extension DLL doesn't include afxdocob.h. Subsequent use of this class may
	result in invalid data or an access violation, especially when new and delete
	are called.
	
	The problem is more likely to occur when the class contains double or __int64
	data members.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation
	
	
	Additional query words: AFXDLL
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbATL kbDLL kbMFC kbVC420bug kbVC500fix kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
