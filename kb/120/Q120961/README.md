---
layout: page
title: "Q120961: HOWTO: How to Sort a CStringArray in MFC"
permalink: /kb/120/Q120961/
---

## Q120961: HOWTO: How to Sort a CStringArray in MFC

	Article: Q120961
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the sample code in this article to sort a CStringArray object. The
	main() function constructs a CStringArray object, adds elements to it, prints
	out the elements, calls the sort() member function to sort it, and then prints
	the sorted elements. The sort() function uses the Bubble Sort algorithm to sort
	the array and calls the CompareAndSwap() function to compare each string and
	swap them if necessary.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	
	  /*
	   * Compile options needed: /MT
	   */ 
	
	  #include <afx.h>
	  #include <iostream.h>
	  #include <afxcoll.h>
	
	  class CSortStringArray : public CStringArray {
	  public:
	     void Sort();
	  private:
	     BOOL CompareAndSwap(int pos);
	  };
	  void CSortStringArray::Sort()
	  {
	     BOOL bNotDone = TRUE;
	
	     while (bNotDone)
	     {
	        bNotDone = FALSE;
	        for(int pos = 0;pos < GetUpperBound();pos++)
	           bNotDone |= CompareAndSwap(pos);
	     }
	  }
	  BOOL CSortStringArray::CompareAndSwap(int pos)
	  {
	     CString temp;
	     int posFirst = pos;
	     int posNext = pos + 1;
	
	     if (GetAt(posFirst).CompareNoCase(GetAt(posNext)) > 0)
	     {
	        temp = GetAt(posFirst);
	        SetAt(posFirst, GetAt(posNext));
	        SetAt(posNext, temp);
	        return TRUE;
	
	     }
	     return FALSE;
	  }
	  void main()
	  {
	     CSortStringArray sortArray;
	
	     sortArray.Add(CString("Zebra"));
	     sortArray.Add(CString("Bat"));
	     sortArray.Add(CString("Apple"));
	     sortArray.Add(CString("Mango"));
	
	     for (int i = 0; i <= sortArray.GetUpperBound(); i++)
	        cout << sortArray[i] << endl;
	
	     sortArray.Sort();
	     cout << endl;
	
	     for (int j = 0; j <= sortArray.GetUpperBound(); j++)
	        cout << sortArray[j] << endl;
	  }
	
	
	Additional query words: kbinf 7.00 1.00 1.50 2.00 2.10 2.50 3.00 4.00 kbNoUpdate
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
