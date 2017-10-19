---
layout: page
title: "Q160017: FIX: Access Violation Using deque class"
permalink: /kb/160/Q160017/
---

## Q160017: FIX: Access Violation Using deque class

	Article: Q160017
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your deque class allocates more than one page of memory, you may encounter
	access violation. Please refer to the sample code in the MORE INFORMATION
	section of this article for details.
	
	CAUSE
	=====
	
	There is a bug in the Standard C++ library header file "deque". The bug is in
	the _Buyback() member function of the deque template class.
	
	RESOLUTION
	==========
	
	At this time, there is no workaround.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed:None
	     */ 
	
	     //test.cpp
	     #include <deque>
	
	     #if _MSC_VER > 1020 // later than version 4.2
	         using namespace std;
	     #endif
	
	     typedef deque<int, allocator<int> > DEQUEINT;
	
	     void main()
	     {
	
	          DEQUEINT  dint;
	
	         for(int i=0;i<=5000;i++){
	             dint.push_back(10);
	         }
	
	     }
	
	Additional query words: kbVC420bug kbDSupport gpf access violation crash
	
	======================================================================
	Keywords          : kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
