---
layout: page
title: "Q190531: FIX: Calling delete or free() in ATL Causes Access Violation"
permalink: kb/190/Q190531/
---

## Q190531: FIX: Calling delete or free() in ATL Causes Access Violation

	Article: Q190531
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCRT kbVC600bug kbATL300bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSM
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
	
	When you call the delete operator or free() function in an ATL project, it might
	cause an access violation if you are running on a multi-processor computer.
	
	CAUSE
	=====
	
	ATL provides an implementation of free() in non-debug builds with _ATL_MIN_CRT
	defined. The delete operator is also overridden to call free(). On
	multi-processor computers, the pointer passed in to free() is used to calculate
	an offset to the heap's handle:
	
	  void __cdecl free(void* p)
	  {
	  #ifndef _ATL_NO_MP_HEAP
	     if (_Module.m_phHeaps == NULL)
	  #endif
	        HeapFree(_Module.m_hHeap, 0, p);
	  #ifndef _ATL_NO_MP_HEAP
	     else
	     {
	        HANDLE* pHeap = ((HANDLE*)p)-nOffsetBlock;
	        HeapFree(*pHeap, 0, pHeap);
	     }
	  #endif
	  }
	
	There is no code here that checks if "p" is NULL; therefore, so HeapFree() is
	called with an invalid handle.
	
	RESOLUTION
	==========
	
	The implementation of free() needs to be modified in Atlimpl.cpp. One option to
	resolve this problem is to just return if the pointer is NULL:
	
	     void __cdecl free(void* p)
	     {
	        if (p == NULL)  // Add this line.
	           return;      // Add this line.
	     #ifndef _ATL_NO_MP_HEAP
	        if (_Module.m_phHeaps == NULL)
	     #endif
	           HeapFree(_Module.m_hHeap, 0, p);
	     #ifndef _ATL_NO_MP_HEAP
	        else
	        {
	           HANDLE* pHeap = ((HANDLE*)p)-nOffsetBlock;
	           HeapFree(*pHeap, 0, pHeap);
	        }
	     #endif
	     }
	
	Another option to resolve this problem is to #define _ATL_NO_MP_HEAP. This
	prevents the problematic code from being included. However, this does turn off
	the optimization that ATL adds for multi-processor machines. You have only one
	heap regardless of the number of processors. Heap access may be less than
	optimal because access from multiple threads is serialized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This bug occurs only under all of the following conditions:
	
	- You are running on a multi-processor computer.
	
	- The pointer passed to delete or free() is NULL.
	
	- _ATL_MIN_CRT is defined (default).
	
	- You are building for release (_DEBUG is not defined).
	
	- _ATL_NO_MP_HEAP is not defined (default).
	
	Additional query words: unhandled exception new malloc memory
	
	======================================================================
	Keywords          : kbservicepack kbCRT kbVC600bug kbATL300bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
