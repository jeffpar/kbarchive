---
layout: page
title: "Q216858: HOWTO: Quick Sorting Using MFC CArray-Derived Classes"
permalink: kb/216/Q216858/
---

## Q216858: HOWTO: Quick Sorting Using MFC CArray-Derived Classes

	Article: Q216858
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC500 kbVC600 kbDSupport
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that
	is provided by the Microsoft .NET Framework and the unmanaged native Microsoft
	Windows code model. The information in this article applies to unmanaged Visual
	C++ code only.
	
	This article shows you how to quick-sort an MFC CArray-derived class. The code
	below depends only on the MFC and Visual C++ run-time library.
	
	MORE INFORMATION
	================
	
	The Visual C++ run-time library (MSVCRT) implements the quick-sort function,
	qsort, as follows:
	
	  void qsort( void *base, size_t num, size_t width, int (__cdecl *compare )(const void *elem1, const void *elem2 ) );
	
	The following example shows you how to use this function to sort an MFC CArray
	class. Although the following example uses a CString array, you can easily
	customize for other MFC CArray-derived classes, such as CByteArray, CDWordArray,
	CObArray, CPtrArray, CUintArray, and CWordArray.
	
	Steps to Implement Sorting
	--------------------------
	
	1. Derive your array data class from one of the CArray-derived classes. In our
	  example, we use CStringArray as the base class for our class. The following
	  is the declaration in the header file:
	
	  class CSortableStringArray : public CStringArray
	  {
	  public:
	  protected:
	  };
	
	2. To the public section of your class add the following function:
	
	  void Sort(STRINGCOMPAREFN pfnCompare = Compare);
	
	3. To the protected section of your class add the following static function:
	
	  static int __cdecl Compare(const CString * pstr1, const CString * pstr2);
	
	4. Now add the following two type defs above the declaration of your class.
	  These typedefs later help us in passing pointers of the two functions that we
	  declared in steps 2 and 3 to the Visual C++ run-time's qsort function:
	
	  typedef int (__cdecl *GENERICCOMPAREFN)(const void * elem1, const void * elem2);
	  typedef int (__cdecl *STRINGCOMPAREFN)(const CString * elem1, const CString * elem2);
	
	5. In your .cpp file, implement the two functions that you declared earlier:
	
	  // 
	  // SortableStringArray.cpp
	  // 
	
	  int CSortableStringArray::Compare(const CString * pstr1, const CString * pstr2)
	  {
	  	ASSERT(pstr1);
	  	ASSERT(pstr2);
	  	return pstr1->Compare(*pstr2);
	  }
	
	  void CSortableStringArray::Sort(STRINGCOMPAREFN pfnCompare /*= CSortedStringArray::Compare */)
	  {
	  	CString * prgstr = GetData();
	  	qsort(prgstr,GetSize(),sizeof(CString),(GENERICCOMPAREFN)pfnCompare);
	  }
	
	That is it. Now let's look at the contents of the entire file:
	
	  // 
	  // SortableStringArray.h
	  // 
	
	  typedef int (__cdecl *GENERICCOMPAREFN)(const void * elem1, const void * elem2);
	  typedef int (__cdecl *STRINGCOMPAREFN)(const CString * elem1, const CString * elem2);
	
	  class CSortableStringArray : public CStringArray
	  {
	  public:
	  	void Sort(STRINGCOMPAREFN pfnCompare = Compare);
	
	  protected:
	  	static int __cdecl Compare(const CString * pstr1, const CString * pstr2);
	  };
	
	  // 
	  // SortableStringArray.cpp
	  // 
	
	  #include "SortableStringArray.h"
	
	  int CSortableStringArray::Compare(const CString * pstr1, const CString * pstr2)
	  {
	  	ASSERT(pstr1);
	  	ASSERT(pstr2);
	  	return pstr1->Compare(*pstr2);
	  }
	
	  void CSortableStringArray::Sort(STRINGCOMPAREFN pfnCompare /*= CSortedStringArray::Compare */)
	  {
	  	CString * prgstr = GetData();
	  	qsort(prgstr,GetSize(),sizeof(CString),(GENERICCOMPAREFN)pfnCompare);
	  }
	
	To use the array in your code, just declare it and call the Sort() function. The
	following example uses this array:
	
	  	srand( (unsigned)time( NULL ) ); // Generate seed for rand().
	  	CSortableStringArray arr;
	  	CString str;
	  	for (int i=0; i< 1000;i++)
	  	{
	  		str.Format("%6d", rand());// Get a random number string.		
	  		arr.Add(str);
	  		TRACE("%s\n", (LPCTSTR)str);
	  	}
	  	long ltim=GetTickCount();
	  	arr.Sort();
	  	for (i=0; i< 1000;i++)
	  	{
	  		TRACE("%s\n", (LPCTSTR)arr[i]);
	  	}
	
	  	TRACE("Time took= %li\n", GetTickCount()-ltim);
	
	
	NOTE: To implement a CArray type other than CString, just derive your class from
	the other array types and modify the Sort() and the Compare() functions
	accordingly.
	
	NOTE: Quick Sort is a more efficient mechanism of sorting than the bubble sort
	used in the Microsoft Knowledge Base article, "How to Sort a CStringArray in
	MFC" (Q120961)
	
	REFERENCES
	==========
	
	For additional information about the bubble sort method, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120961 How to Sort a CStringArray in MFC
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
