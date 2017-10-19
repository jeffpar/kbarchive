---
layout: page
title: "Q140229: PRB: C2027 When Using MFC Templated Collection Classes"
permalink: /kb/140/Q140229/
---

## Q140229: PRB: C2027 When Using MFC Templated Collection Classes

	Article: Q140229
	Product(s): Microsoft C Compiler
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kberrmsg kbprb
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use MFC templated collection classes such as CArray, CList, and CMap to
	store elements of type HTREEITEM or HIMAGELIST, the compiler generates the
	following compiler error:
	
	  afxtempl.h(73) : error C2027: use of undefined type '_TREEITEM'
	
	  - or -
	
	  afxtempl.h(73) : error C2027: use of undefined type '_TREEITEM'
	
	CAUSE
	=====
	
	HTREEITEM is type-defined (typedef) as struct _TREEITEM, and HIMAGELIST is
	type-defined (typedef) as struct _IMAGELIST in header file Commctrl.h located in
	the \Msdev\Include directory. Structures _TREEITEM and IMAGELIST are not defined
	in any header files or source files.
	
	However, the template collection class helper function DestructElements in Visual
	C++ version 4.0 calls the destructor of the stored elements. In this case, the
	destructor of structure _TREEITEM or _IMAGELIST. Hence, the compiler error.
	
	RESOLUTION
	==========
	
	Define a dummy structure for _TREEITEM or _IMAGELIST in global scope. For
	example, the following code should compile cleanly:
	
	  // Other includes.
	
	  #include <afxtempl.h>
	
	  struct _TREEITEM {};
	  struct _IMAGELIST {};
	
	  void TestFunction()
	  {
	    // will now not generate the compiler error
	    CArray< HTREEITEM, HTREEITEM >  MyArray1;
	    CArray< HIMAGELIST, HIMAGELIST > MyArray2;
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kberrmsg kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	
