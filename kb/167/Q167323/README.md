---
layout: page
title: "Q167323: BUG: Compiler Error C2955 Caused by Global STL Iterators"
permalink: /kb/167/Q167323/
---

## Q167323: BUG: Compiler Error C2955 Caused by Global STL Iterators

{% raw %}

	Article: Q167323
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbLangCPP kbVCkbbuglist
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you declare a global typedef of any STL iterator, the compiler error C2955
	occurs.
	
	RESOLUTION
	==========
	
	In the sample code below, replace:
	
	     typedef IntVector::iterator IT ;
	
	with the following code:
	
	     // Workaround for VC++ 4.2:
	     #if _MSC_VER == 1020
	     struct X
	     {
	         typedef IntVector::iterator it ;
	     };
	     typedef X::it IT ;
	     #else
	     typedef IntVector::iterator IT ;
	     #endif
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: /GX
	     */ 
	     #include <iostream>
	     #include <vector>
	     typedef vector<int, allocator <int> >   IntVector;
	     // C2955 error on the following line
	     typedef IntVector::iterator IT ;
	     void Show (IT i)
	     {
	         cout << *i << endl;
	     }
	     int main (int argc, char *argv[])
	     {
	         IntVector   v;
	         v.push_back(1);
	         v.push_back(2);
	         v.push_back(3);
	         for (IntVector::iterator i = v.begin(); i != v.end(); i++)
	         {
	             Show(i);
	         }
	         return 0 ;
	     }
	
	Additional query words: STL iterator
	
	======================================================================
	Keywords          : kbcode kbProgramming kbLangCPP kbVC kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : 4.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
