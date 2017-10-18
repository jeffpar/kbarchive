---
layout: page
title: "Q193100: FIX: CString Serialization Causes Access Violation"
permalink: kb/193/Q193100/
---

## Q193100: FIX: CString Serialization Causes Access Violation

	Article: Q193100
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbVC600bug kbVS600SP1fix kbMFC600bug kbVC600SP1Fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When serializing in a UNICODE CString in an MBCS MFC application or vice versa,
	the CString from file is read in, converted to a CString of the build type, and
	the original CString is deleted. When deleting the original CString you may see
	an access violation or invalid page fault. The problem code is on line 270 in
	Arccore.cpp. The symptoms described here are evident only in release builds.
	
	CAUSE
	=====
	
	CString in the release build uses its own memory manager (the CFixedAlloc class)
	for strings of size less the 512 bytes. So for all CString (of less than 512
	bytes) allocations made by CFixedAlloc::Alloc() through CString::AllocBuffer()
	and the corresponding deallocations are made by CFixedAlloc::Free through
	CString::FreeData(). In the CString serialization function operator:
	
	>> (CArchive& ar, CString& string)
	
	instead of calling CString::FreeData() to free the data, the operator delete is
	called and this can cause the above mentioned problem.
	
	RESOLUTION
	==========
	
	Change line 270 in Arccore.cpp from the following:
	
	  delete[] (BYTE*)pOldData;
	
	to the following:
	
	  CString::FreeData(pOldData);
	
	Rebuild the MFC libraries and statically link to it. The following command builds
	the debug MFC library without CodeView information (Nafxcwd.lib):
	
	  NMAKE DEBUG=1 CODEVIEW=0
	
	Further information on building a static link library variant can be obtained
	from the Readme.txt file that ships with Visual C++, or in
	xxxx\MFC\SRC\README.TXT (where xxxx is the directory name for the Visual C++
	product; by default, C:\Program Files\Microsoft Visual Studio\VC98 for Visual
	C++ version 6.0). The make file exists in the same directory and is named
	MAKEFILE.
	
	NOTE: You may modify the source and rebuild a DLL version of the MFC library.
	However, you can redistribute a retail (/release) of your modified library only
	if you rename it to something other than MFCxx.dll. You may not redistribute the
	debug version of either the pre-built or custom built debug DLL. Please refer to
	"MFC Technical Note 33" for more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in the Visual Studio 6.0
	Service Pack 1.
	
	To obtain this service pack, please see:
	
	  http://msdn.microsoft.com/vstudio/sp/default.asp
	
	For more information on the Visual Studio 6.0 Service Pack 1, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q193009 INFO: Visual Studio 6.0 Service Pack 1 Readme
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The call stack when the access violation occurs should resemble the following:
	
	     HeapFree(...)
	     free(...)
	     operator delete(...)
	     operator>>(CArchive &, CString &)
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC600bug kbVS600SP1fix kbMFC600bug kbVC600SP1Fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
