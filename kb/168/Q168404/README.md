---
layout: page
title: "Q168404: PRB: C2664 Instantiating STL List with Sequence &#91;first, last)"
permalink: /kb/168/Q168404/
---

## Q168404: PRB: C2664 Instantiating STL List with Sequence &#91;first, last)

	Article: Q168404
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500bug kbVC600fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Instantiating an STL list container with a sequence [first, last), where first
	and last are iterators, causes the compiler error C2664:
	
	  'function': cannot convert parameter number from 'type1' to 'type2'
	
	CAUSE
	=====
	
	Using the list(const_iterator first, const_iterator last, const A& a1= A())
	constructor causes the compiler error C2664. The constructor for list takes a
	list<T>::const_iterator instead of a generic iterator for the first two
	parameters.
	
	RESOLUTION
	==========
	
	Workaround 1
	------------
	
	Use the default constructor. Insert elements in the list using the push_back
	member function.
	
	Workaround 2
	------------
	
	Use the list(size_type, const T& v = T(), const A& a1 = A()) constructor.
	Insert elements in the list using the copy algorithm.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	The following sample demonstrates the problem:
	
	     //test1.cpp
	     //Compiler options needed: /GX
	
	     #include <list>
	
	     int main()
	     {
	        int INTARRAY[4] = {1, 2, 3, 4} ;
	        std::list<int> INTLIST(INTARRAY, INTARRAY + 4) ; //C2664 here
	     }
	
	The exact error message for the above sample is:
	
	  
	
	  test1.cpp(9) : error C2664: 'std::list<int,class
	  std::allocator<int>>::list<int,class std::allocator<int>>(unsigned
	  int,const int &,const class std::allocator<int> &)' : cannot convert
	  parameter 1 from 'int [4]' to 'unsigned int'
	
	The following sample demonstrates Workaround 1:
	
	     //test2.cpp
	     //Compiler options needed: /GX
	
	     #include <list>
	
	     int main()
	     {
	        int INTARRAY[4] = {1, 2, 3, 4} ;
	        std::list<int> INTLIST ;
	        for(int i = 0; i < 4; i++)
	            INTLIST.push_back(INTARRAY[i]) ;
	        return 0 ;
	     }
	
	The following sample demonstrates Workaround 2:
	
	     //test3.cpp
	     //Compiler options needed: /GX
	
	     #include <list>
	     #include <algorithm>
	
	     int main()
	     {
	        int INTARRAY[4] = {1, 2, 3, 4} ;
	        std::list<int> INTLIST(4) ;
	        std::copy(INTARRAY, INTARRAY + 4, INTLIST.begin()) ;
	        return 0 ;
	     }
	
	Additional query words: list copy push_back
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
