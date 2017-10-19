---
layout: page
title: "Q154482: FIX: Undocumented Functions in Type Safe Collection Classes"
permalink: /kb/154/Q154482/
---

## Q154482: FIX: Undocumented Functions in Type Safe Collection Classes

	Article: Q154482
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbDocs kbVC420bug kbVC500fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MFC 4.2 in Visual C++ 4.2 added some additional wrapper functions for the
	template type safe collection classes, such as CTypedPtrList, CTypedPtrArray and
	CTypedPtrMap. The newly-added functions help to make these classes fully type
	safe to use. However, the added functions are not documented in the Visual C++
	Online Documentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was fixed in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Following is a full list of the functions added to the template type safe
	collection classes:
	
	CTypedPtrList
	-------------
	
	     template<class BASE_CLASS, class TYPE>
	     class CTypedPtrList : public BASE_CLASS
	
	           // Add a new element before head or after tail of the list
	           POSITION AddHead( TYPE newElement );
	           POSITION AddTail( TYPE newElement );
	
	           // Add another list of elements before head or after tail
	           void AddHead( CTypedPtrList<BASE_CLASS,TYPE> *pNewList );
	           void AddTail( CTypedPtrList<BASE_CLASS,TYPE> *pNewList );
	
	           // Modify an element at a given position
	           void SetAt( POSITION pos, TYPE newElement );
	
	CTypedPtrArray
	--------------
	
	     template<class BASE_CLASS, class TYPE>
	     class CTypedPtrArray : public BASE_CLASS
	
	           // Set the array element at the specified index
	           void SetAt( int nIndex, TYPE ptr );
	
	           // Potentially growing the array
	           void SetAtGrow( int nIndex, TYPE newElement );
	           int Add( TYPE newElement );
	           int Append( const CTypedPtrArray<BASE_CLASS, TYPE>& src );
	           void copy( const CTypedPtrArray<BASE_CLASS, TYPE>& src );
	
	           // Operations that move elements around
	           void InsertAt( int nIndex, TYPE newElement, int nCount=1 );
	           void InsertAt( int nStartIndex,
	                          CTypedPtrArray<BASE_CLASS, TYPE>* pNewArray );
	
	CTypedPtrMap
	------------
	
	     template<class BASE_CLASS, class KEY, class VALUE>
	     class CTypedPtrMap : public BASE_CLASS
	
	           // Add a new key (key,value) pair
	           void SetAt( KEY key, VALUE newValue );
	
	           // removing existing (key,?) pair
	           BOOL RemoveKey( KEY key );
	
	For detailed information about these functions, please refer to the corresponding
	documentation for the functions in BASE_CLASS (the template parameter for each
	of the above template classes). For instance, if you have
	CTypedPtrMap<CMap,MyKey,MyValue>, then refer to the documentation for CMap
	for the functions listed above under CTypedPtrMap.
	
	You can also look at \msdev\mfc\include\afxtempl.h header file for the
	implementation of these functions.
	
	Additional query words: kbVC420bug
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbDocs kbVC420bug kbVC500fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
