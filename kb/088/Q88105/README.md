---
layout: page
title: "Q88105: INFO: Explanation of Two-Phase Construction in MFC"
permalink: kb/088/Q88105/
---

## Q88105: INFO: Explanation of Two-Phase Construction in MFC

	Article: Q88105
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbBitmap kbMFC kbVC kbVC200 kbVC400 kbVC600 kbVS600 kbGrpDSMFCATL
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	Many of the classes defined in the Microsoft Foundation Classes (MFC) libraries
	require the programmer to perform two steps to create an object. The CBitmap,
	CDC, CDialog, and CWnd classes are examples of this class type. This article
	discusses the advantages of this design decision.
	
	MORE INFORMATION
	================
	
	This two-step process is known as two-phase construction. In the first phase, a
	C++ constructor creates an object in a sound state, a state that can be
	destroyed by a destructor function. The second phase, usually performed by the
	Create() member function, calls into Windows and allocates resources. [For
	CBitmap objects, the LoadBitmap() member function performs the second phase.]
	
	This design has two main benefits. First, C++ constructors cannot return a value
	to indicate failure. Operator new throws an exception when no memory is
	available to construct an object. (An ad hoc mechanism, like an fOK Boolean
	variable, is one mechanism to indicate an error in construction.)
	
	Second, if constructors are "cheap" (that is, the constructor requires little
	processor time and does not allocate many resources), an object can be
	efficiently embedded into another object without a great increase in the cost of
	construction.
	
	For example, consider the process of embedding a CBitmap object into an object
	derived from CWnd. If the CWnd-derived object used one-phase construction, its
	construction would depend on successful construction of the CBitmap object. The
	programmer would not have any flexibility to deal with any errors as they
	arose.
	
	However, in the two-phase method, the application can initialize the bitmap any
	number of different ways while checking for failure. In addition, two- phase
	embedded objects reduce problems allocating and de-allocating objects, tracking
	object ownership, and deleting Windows objects appropriately.
	
	Additional query words: kbvc100 kbvc150 kbvc151 kbvc152 kbvc200 kbvc210 kbvc400 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbnokeyword kbBitmap kbMFC kbVC kbVC200 kbVC400 kbVC600 kbVS600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
