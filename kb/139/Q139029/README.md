---
layout: page
title: "Q139029: DOC: Stlguide.rtf Different from Vector.h Header File"
permalink: /kb/139/Q139029/
---

## Q139029: DOC: Stlguide.rtf Different from Vector.h Header File

	Article: Q139029
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbdocerr kbVC400 kbVC410
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Standard Template Library (STL) documentation, Stlguide.rtf, documents the
	vector class incorrectly.
	
	The Standard Template Library is manufactured by Hewlett-Packard Company, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	MORE INFORMATION
	================
	
	Use the actual declaration from the Vector.h header file for documentation:
	
	     template <class T>
	     class vector {
	     public:
	     ...
	     };
	
	REFERENCES
	==========
	
	Vector.h from the Stl directory of the Visual C++ 4.x compact disc.
	Stlguide.rtf from the Stl directory of the Visual C++ 4.x compact disc.
	
	Additional query words: 10.00 10.10
	
	======================================================================
	Keywords          : kb3rdparty kbdocerr kbVC400 kbVC410 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410
	Version           : :4.0,4.1
	
	=============================================================================
	
