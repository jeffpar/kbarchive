---
layout: page
title: "Q102327: INFO: Const Versus Non-Const CObList Objects"
permalink: /kb/102/Q102327/
---

## Q102327: INFO: Const Versus Non-Const CObList Objects

{% raw %}

	Article: Q102327
	Product(s): Microsoft C Compiler
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbCollectionClass
	Last Modified: 07-MAY-2001
	
	7.00   | 1.00 1.50 1.51 1.52 | 1.00 2.00 2.10 4.00
	MS-DOS | WINDOWS             | WINDOWS NT
	kbprg
	
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++, version 7.0 
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you write an application with the CObList class provided by the Microsoft
	Foundation Class (MFC) libraries, you may note that many of the member functions
	have both const and non-const forms. For example, the CObList class has two
	GetNext() member functions, as follows:
	
	  CObject * & GetNext(POSITION & rPosition);
	  CObject *   GetNext(POSITION & rPosition) const;
	
	The first form of the GetNext() member function is for non-const CObList objects
	and implements the left-side of the assignment operator. The second form of the
	GetNext() member function is used when the CObList object is const (generally,
	this means that you are using a pointer to a const CObList to prevent any
	modification to the contents of the CObList).
	
	Note that the first member function returns a reference to a CObject pointer. The
	item returned is the actual CObject pointer in the list, not its value. Through
	this reference, you can modify the CObject pointer and use the return value of
	the member function to modify the list. The second member function does not
	provide access to modify the CObList.
	
	MORE INFORMATION
	================
	
	The code sample below demonstrates using the GetNext() member function that
	returns a reference to a CObject pointer. Note the comment in the code. If you
	remove the comment from the indicated line, an error results.
	
	Sample Code
	-----------
	
	  // Sample program to create a CObList, fill it, display the "set"
	  // member of each CObject pointed to by the CObList, reassign the
	  // elements of the CObList, and display the "set" member of each
	  // CObject pointed to by the CObList a second time.
	
	  /*
	
	* Compiler options needed: Visual C++ 4.0 - /MT[d] or /MD[d] * Others - None
	
	   */ 
	
	  #define _DOS
	  #include <iostream.h>
	  #include <afx.h>
	  #include <afxcoll.h>
	
	class CMyObject: public CObject { public:
	
	  CMyObject(int i):set(i) { }
	  int set;
	
	} MyObject(2); // Create a CObject to place in the CObList.
	
	                  // assign set = 2
	
	  void main(void)
	
	{
	
	  CObList * pMyList = new CObList;
	  const CObList * pMyListAlso = pMyList;
	
	     // load list
	     for (int nCount = 0; nCount < 10; nCount++)
	        pMyList->AddHead(new CMyObject(1));   // Fill up list with
	                     // CMyObject objects that have set equal to 1
	
	  for (POSITION p = pMyList->GetHeadPosition(); p != NULL; )
	
	  cout << ((CMyObject*)pMyList->GetNext(p))->set;
	
	  for (p = pMyList->GetHeadPosition(); p != NULL; )
	
	  (pMyList->GetNext(p)) = &MyObject;
	
	  // If you remove the comments from the following lines, the compiler
	  // generates the following error:
	  // 
	  //    error C2106: '=' : left operand must be lvalue
	  // 
	  // The error occurs because pMyListAlso is a pointer to a const
	  // CObList object and the GetNext() member function that returns a
	  // CObject pointer is called.
	  // 
	  // for (p = pMyList->GetHeadPosition(); p != NULL; )
	  //    (pMyListAlso->GetNext(p)) = &MyObject;
	
	  for (p = pMyList->GetHeadPosition(); p != NULL; )
	
	  cout << ((CMyObject*)pMyList->GetNext(p))->set;
	
	}
	
	Additional query words: 7.00 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 kbinf 4.00
	
	======================================================================
	Keywords          : kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbCollectionClass 
	Technology        : kbAudDeveloper kbMFC
	Version           : :7.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
