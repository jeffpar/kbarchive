---
layout: page
title: "Q151865: PRB: Brush Permanent Handle Map Doesn't Work on Windows 95"
permalink: /kb/151/Q151865/
---

## Q151865: PRB: Brush Permanent Handle Map Doesn't Work on Windows 95

	Article: Q151865
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,1.52b,2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbBrush kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbOSWin95 kbGrpDSMFCAT
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 1.52b 
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Unexpected behavior might occur if an application relies on MFC's permanent
	brush handle map.
	
	In MFC 2.0 (included with Visual C++, version 1.0), symptoms can include:
	
	  Assertion Failure, winhand.cpp - Line 129
	
	In MFC 2.5 (included with Visual C++, version 1.5), symptoms can include:
	
	  Assertion Failure, winhand.cpp - Line 169
	
	CAUSE
	=====
	
	Windows 95 has been optimized to prevent individual applications from burdening
	the system resources. One of the optimizations is in the area of brush handles.
	Windows 95 will not always return a unique handle when a new brush object is
	created. Because MFC's permanent handle map mechanism relies on a one-to-one
	mapping from HANDLE-> C++ Object, this optimization will prevent MFC's
	permanent brush handle map mechanism from working properly. See the More
	Information section below for further details.
	
	RESOLUTION
	==========
	
	Do not rely on the brush permanent handle map when running on Windows 95. You
	can still use the return value of any MFC function which might return a
	temporary, but you should not rely on the function returning a specific object
	that you expected to be in the permanent handle map.
	
	For example, the code shown below could be re-written as:
	
	      CBrush *pBrush1 = new CBrush (RGB(255,0,0));
	     CBrush *pBrush2 = new CBrush (RGB(255,0,0));
	
	     CBrush *pOld = pDC->SelectObject(pBrush1);
	     // Do some stuff in here
	
	     // Don't rely on the return value from SelectObject being pBrush1
	     pDC->SelectObject(pOld);
	
	     // Instead, maintain the pointer to the object yourself
	     delete pBrush1;
	
	The following functions might return an unexpected object:
	
	  SelectObject
	  FromHandle
	  FromHandlePermanent
	  GetCurrentBrush
	  GetHalftoneBrush
	  SelectStockObject
	
	In MFC versions 2.0 and 2.50, the assertion failures can be ignored although the
	behavior mentioned above could still cause problems. If you cannot ignore the
	assertion failures if, for instance, they occur far too often, then you can
	remove the assertions from the MFC source code and rebuild the DEBUG version of
	the MFC libraries. For details on how to accomplish this behavior, see the
	README.TXT file in the <MSVC>\MFC\SRC directory.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	On Windows NT or Windows 3.x, if a successful call is made to create a brush
	object, then a unique handle will be returned. This isn't necessarily true on
	Windows 95. Consider the following code:
	
	     HANDLE hBrush = ::CreateSolidBrush(RGB(255,0,0));
	     HANDLE hBrush2 = ::CreateSolidBrush(RGB(255,0,0));
	
	     // In this case, hBrush and hBrush2 will have different values on
	     // Windows NT or Windows 3.x, so the following assert will succeed
	
	     ASSERT(hBrush!=hBrush2);
	
	On Windows 95, the above assert will fail. Windows 95 is optimized to detect when
	an application is creating a duplicate brush handle so it doesn't need to create
	a brand new brush, just maintain internal information about the brush and return
	the same handle.
	
	This presents a problem for MFC's permanent handle map mechanism. The handle map
	maintains an entry that maps each GDI handle to the unique Visual C++ object
	(derived from CGdiObject) that encapsulates that handle. This is a one-to-one
	mapping. If a new Visual C++ object is created that encapsulates the same handle
	as the previous object, then the previous object's entry in the permanent handle
	map will be replaced. This in itself is not a problem, but if you rely on the
	handle map to return the original Visual C++ object, then your code could run
	into serious problems. For example:
	
	      CBrush *pBrush1 = new CBrush (RGB(255,0,0));
	     CBrush *pBrush2 = new CBrush (RGB(255,0,0));
	
	     CBrush *pOld = pDC->SelectObject(pBrush1);
	     // Do some stuff in here
	     delete pDC->SelectObject(pOld);
	     ASSERT_VALID(pBrush2);
	     // On Windows NT or Windows 3.x, the above call to "delete"
	     // will delete pBrush1. On Windows 95, the above call to "delete"
	     // will delete pBrush2 and the ASSERT_VALID will fail.
	
	Additional query words: 1.00 1.50 1.51 1.52 2.00 2.10 2.20 4.00 4.10
	
	======================================================================
	Keywords          : kbBrush kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbOSWin95 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC220 kbVC410 kbVC151 kbVC200 kbVC210 kbVC152 kbVC152a
	Version           : :1.0,1.5,1.51,1.52,1.52b,2.0,2.1,2.2,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
