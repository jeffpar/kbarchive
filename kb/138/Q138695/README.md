---
layout: page
title: "Q138695: DOC: ConstructElements &amp; DestructElements"
permalink: /kb/138/Q138695/
---

## Q138695: DOC: ConstructElements &amp; DestructElements

	Article: Q138695
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocerr kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation (included with the products listed above) for
	ConstructElements and DestructElements contains errors.
	
	ConstructElements and DestructElements are two of the seven templated global
	helper functions used by MFC's templated collection classes such as CArray,
	CList, and CMap. ConstructElements is used to construct the elements stored in
	the collection classes and DestructElements is used to destruct the elements
	stored in the collection classes.
	
	In Visual C++ 2.x, the MFC default implementation of ConstructElements does a
	bit-wise zero initialization to all the new elements, and the default
	implementation of DestructElements does nothing.
	
	In Visual C++ 4.0 through 6.0, the MFC default implementation of
	ConstructElements not only does a bit-wise zero initialization to all the new
	elements but also calls the stored objects' constructors in a loop. This is
	different from the implementation in Visual C++ 2.x, but the documentation was
	not changed. See the "More Information" section in this article for the function
	implementation.
	
	In addition, the MFC default implementation of DestructElements in Visual C++ 4.0
	through 6.0, destructs the stored objects by calling their destructors. This is
	new in Visual C++ 4.x. See the "More Information" section in this article for
	the function implementation.
	
	MORE INFORMATION
	================
	
	ConstructElements and DestructElements are the templated global helper functions
	used by MFC's templated collection classes to help constructing and destroying
	elements stored in the collection classes. As part of your implementation of
	classes based on these templated collection classes, you must override these
	functions as necessary with versions tailored to the type of data stored in your
	collection classes. Following are the MFC default implementations for
	ConstructElements and DestructElements in Visual C++ 4.0 through 6.0:
	
	     template<class TYPE>
	     inline void AFXAPI ConstructElements(TYPE* pElements, int nCount)
	     {
	       ASSERT(nCount == 0 ||
	              AfxIsValidAddress(pElements, nCount * sizeof(TYPE)));
	
	       // First do bit-wise zero initialization.
	       memset((void*)pElements, 0, nCount * sizeof(TYPE));
	
	       // Then call the constructor(s).
	       for (; nCount--; pElements++)
	           ::new((void*)pElements) TYPE;
	     }
	
	     template<class TYPE>
	     inline void AFXAPI DestructElements(TYPE* pElements, int nCount)
	     {
	        ASSERT(nCount == 0 ||
	               AfxIsValidAddress(pElements, nCount * sizeof(TYPE)));
	
	        // Call the destructor(s).
	        for (; nCount--; pElements++)
	            pElements->~TYPE();
	     }
	
	NOTE: In C++, when resolving a reference to a templated function, it examines all
	nontemplate instances of the function (the specialized functions) first. Then it
	examines all template instances of the function. Therefore, if you specialize
	the above functions in your applications when you use Visual C++ 2.0, your
	program still should be compatible with Visual C++ 4.x without any changes.
	
	Additional query words: template MFC4.0
	
	======================================================================
	Keywords          : kbdocerr kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	
