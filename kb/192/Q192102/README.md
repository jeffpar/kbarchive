---
layout: page
title: "Q192102: FIX: Resource/Memory Leaks When Using MFC in a Static Library"
permalink: kb/192/Q192102/
---

## Q192102: FIX: Resource/Memory Leaks When Using MFC in a Static Library

	Article: Q192102
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbcode kbMFC kbVC420bug kbVC500bug kbVC600fix kbGrpDSMFCATL
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an application that is built using MFC in a static library under
	NuMega's BoundsChecker or other utility designed to find resource and memory
	leaks, the following five leaks occur:
	
	  E:\MSDEV\MFC\SRC\afxtls.cpp(180): Memory leak; 256 bytes allocated by
	  GlobalAlloc in afxtls.cpp at line 180, HANDLE: 0x02850004
	
	  E:\MSDEV\MFC\SRC\afxtls.cpp(122): Resource leak: Allocated by TlsAlloc
	  in afxtls.cpp at line 122, HANDLE: 0x0000000A
	
	  E:\MSDEV\MFC\SRC\afxtls.cpp(126): Resource leak: Allocated by
	  InitializeCriticalSection in afxtls.cpp at line 126, HANDLE: 0x005045D4
	
	  E:\MSDEV\MFC\SRC\afxcrit.cpp(54): Resource leak: Allocated by
	  InitializeCriticalSection in afxcrit.cpp at line 52, HANDLE: 0x005047E0
	
	  E:\MSDEV\MFC\SRC\afxcrit.cpp(105): Resource leak: Allocated by
	  InitializeCriticalSection in afxcrit.cpp at line 103, HANDLE: 0x00504778
	
	This problem does not occur for MFC DLLs that use MFC in a static library or MFC
	EXEs/DLLs that use the MFC shared DLL.
	
	CAUSE
	=====
	
	MFC is allocating these objects to implement Thread Local Storage (TLS) data for
	it's primary thread and to synchronize access to MFC global data and resources.
	MFC does not free these objects when the application exits.
	
	RESOLUTION
	==========
	
	Because these objects are allocated only once per process and should be freed by
	the operating system when the process terminates, you can safely ignore them.
	
	You can also free these objects by calling AfxTermLocalData(), AfxCriticalTerm(),
	and AfxTlsRelease() in the termination code. The sample code below shows this
	method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual C++ 6.0 and later
	versions.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates how to work around this problem. You
	should place the code in a separate source file and then add it to the project.
	
	Sample Code
	-----------
	
	     #include "stdafx.h"
	     #ifndef _AFXDLL
	
	     void AFXAPI AfxCriticalTerm();
	
	     class _AFX_TERM_EXE_STATE
	     {
	     public:
	        _AFX_TERM_EXE_STATE();
	        ~_AFX_TERM_EXE_STATE();
	     };
	
	     _AFX_TERM_EXE_STATE::_AFX_TERM_EXE_STATE()
	     {
	        // Add a reference to Thread Local Storage data.
	        AfxTlsAddRef();
	     }
	
	     _AFX_TERM_EXE_STATE::~_AFX_TERM_EXE_STATE()
	     {
	        // Terminate local data and critical sections.
	        AfxTermLocalData(NULL, TRUE);
	        AfxCriticalTerm();
	
	        // Release the reference to Thread Local Storage data.
	        AfxTlsRelease();
	     }
	
	     // Force initialization early.
	     #pragma warning(disable: 4074)
	     #pragma warning(disable: 4073)
	     #pragma init_seg(lib)
	
	     _AFX_TERM_EXE_STATE _afxTermExeState;
	     #endif // !_AFXDLL
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Kelly Marie
	Ward, Microsoft Corporation.
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Kelly Marie Ward, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbcode kbMFC kbVC420bug kbVC500bug kbVC600fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
