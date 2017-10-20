---
layout: page
title: "Q202128: FIX: ATL EXE Server on CComAutoThreadModule Hang on Registration"
permalink: /kb/202/Q202128/
---

## Q202128: FIX: ATL EXE Server on CComAutoThreadModule Hang on Registration

{% raw %}

	Article: Q202128
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbLocalSvr kbThread kbVC600bug kbATL300bug kbGrpDSMFCATLkbbuglist
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ATL EXE server based on CComAutoThreadModule<> can hang when being
	registered or unregistered.
	
	CAUSE
	=====
	
	CComAutoThreadModule<>::Init() called in WinMain() creates a thread pool
	(by default 4 threads). The destructor of global CComAutoThreadModule makes
	certain these threads terminate before the process terminates. This happens by
	posting a WM_QUIT message to each of the threads in the thread pool and calling
	WaitForSingleObject() on the thread handle. The threads are scheduled such that
	the threads in the pool may not have called GetMessage() and so the message
	queue is not created. This causes the PostThreadMessage() to fail. Hence, the
	threads in the pool do not terminate and WaitForSingleObject() waits infinitely
	for the threads to terminate.
	
	RESOLUTION
	==========
	
	In the Altcom.h file, inside the vc98\atl\include directory of destructor in the
	CComAutoThreadModule function replace the following code:
	
	     ::PostThreadMessage(m_pApartments[i].m_dwThreadID, WM_QUIT, 0, 0);
	
	with this code:
	
	     while (::PostThreadMessage(m_pApartments[i].m_dwThreadID, WM_QUIT,
	        0, 0) == 0) ::Sleep(100);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	1. Use Appwizard to create an ATL EXE.
	
	2. Insert any type of ATL object in the project.
	
	3. In Stdafx.h, replace CComModule with
	  CComAutoThreadModule<CComSimpleThreadAllocator>.
	
	4. Build the project.
	
	  NOTE: There is a chance that the server may hang at this point since the
	  custom build step registers the server.
	
	5. In the Project Settings menu under the Debug tab type "/RegServer" in the
	  Program Arguments dialog box.
	
	6. Run the server in the debugger.
	
	  NOTE: If it does not hang the first time, repeat this step. Since this is
	  timing related, the problem may not reproduce on certain machines.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbLocalSvr kbThread kbVC600bug kbATL300bug kbGrpDSMFCATL kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
