---
layout: page
title: "Q154105: PRB: C2664 Compiler Error in Afxtempl.h Using VC++ 4.2"
permalink: /kb/154/Q154105/
---

## Q154105: PRB: C2664 Compiler Error in Afxtempl.h Using VC++ 4.2

	Article: Q154105
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbMFC kbVC420 kbGrpDSMFCATL kbCollectionClass
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using MFC-templated type safe collection classes, such as
	CTypedPtrArray, CTypedPtrList, CTypedPtrMap classes or any classes derived from
	these classes in MFC4.2, and you have a forward declaration of the base classes
	that are stored as elements in these collection classes, you may get compiler
	errors similar to the ones listed below depending on which classes are used in
	the application:
	
	  
	
	  c:\msdev\mfc\include\afxtempl.h(1561) : error C2664:
	    'struct __POSITION *CObList::AddHead(class CObject *)' :
	    cannot convert parameter 1 from 'class X *' to 'class CObject *'
	    (new behavior; please see help)
	
	- or -
	
	  
	
	  c:\msdev\mfc\include\afxtempl.h(1587) : error C2664:
	  'SetAt' : cannot convert parameter 2 from 'class X *' to
	            'class CObject *' (new behavior; please see help)
	
	See the More Information section below for a reproducible case.
	
	CAUSE
	=====
	
	The MFC-templated type safe collection classes provided in MFC4.0 and MFC4.1 are
	not fully type safe. MFC4.2 added more wrapper functions to these classes to
	make them fully type safe. For example, in MFC4.2 the CTypedPtrList class now
	contains the following additional wrapper functions that were not in MFC4.0 or
	MFC4.1:
	
	       // Add a new element before head or after tail of the list
	       POSITION AddHead( TYPE newElement );
	       POSITION AddTail( TYPE newElement );
	
	       // Add another list of elements before head or after tail
	       void AddHead( CTypedPtrList<BASE_CLASS,TYPE> *pNewList );
	       void AddTail( CTypedPtrList<BASE_CLASS,TYPE> *pNewList );
	
	       // Modify an element at a given position
	       void SetAt( POSITION pos, TYPE newElement );
	
	The implementation of some of these newly-added functions makes calls to their
	base class' implementation. For example, CTypedPtrList::AddHead(TYPE newElement)
	calls BASE_CLASS::AddHead(newElement) where newElement is expected to be a
	pointer to CObject. (BASE_CLASS can be either CObList, CPtrList, or any classes
	derived from these two classes for a CTypedPtrList.)
	
	The BASE_CLASS must be derived from CObject or you will get the compiler error
	C2664.
	
	Because there is only a forward declaration of the base class, before
	instantiating the MFC templated type safe collection class, the compiler has no
	way to tell if the base class is derived from CObject directly or indirectly,
	hence the compiler error C2664.
	
	RESOLUTION
	==========
	
	Define the base class before instantiating the type safe collection classes.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem:
	
	Sample Code
	-----------
	
	     #include <afxtempl.h>
	
	     class X;
	     class Y
	     {
	       public:
	         CTypedPtrArray<CObArray, X*> m_TextArray;
	     };
	
	     class X : public CObject
	     {
	       ......
	     };
	
	You can also reproduce the problem by building step 2 of the Scribble tutorial
	from Visual C++ 4.1 using Visual C++ 4.2.
	
	For a full list of newly-added functions in classes CTypedPtrList, CTypedPtrArray
	and CTypePtrMap, please refer to the following Microsoft Knowledge Base
	article:
	
	  Q154482 FIX: Undocumented Functions in Type Safe Collection Classes
	
	Additional query words: 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbMFC kbVC420 kbGrpDSMFCATL kbCollectionClass 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2
	Issue type        : kbprb
	
	=============================================================================
	
