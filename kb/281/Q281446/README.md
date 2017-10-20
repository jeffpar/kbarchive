---
layout: page
title: "Q281446: FIX: Access Violation with std::map::erase or std::set::erase"
permalink: /kb/281/Q281446/
---

## Q281446: FIX: Access Violation with std::map::erase or std::set::erase

{% raw %}

	Article: Q281446
	Product(s): Microsoft C Compiler
	Version(s): 6.0 SP4
	Operating System(s): 
	Keyword(s): kbCPPonly kbSTL kbVC600 kbVC600fix kbDSupport kbVS600sp5fix
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 6.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the std::map::erase and std::set::erase member functions at the
	same time from multiple threads, an access violation may be generated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in Microsoft Visual Studio 6.0 Service Pack 5 (SP5).
	
	To download service pack 5, see the Visual Studio Product Updates page on the
	following Microsoft Web site at:
	
	  http://support.microsoft.com/support/servicepacks/VS/6.0/default.asp?sd=msdn
	
	MORE INFORMATION
	================
	
	The bug was introduced in Visual Studio 6.0 Service Pack 4 (SP4) when the bug
	that is documented in Q248477 was corrected:
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q248477 FIX: Deadlock Using STL Map or Set in Multithreaded Application
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  // Test.cpp
	  // Compiler option needed: /MT or /MD
	  #include <windows.h>
	  #include <set>
	
	  typedef std::set<int> TestSet;
	
	  DWORD WINAPI Worker( LPVOID )
	  {
	  TestSet set;
	  int g_cIters =4;
	
	      for( int i=0; i < g_cIters; i++ )
	      {
	          int r = rand();
	          int j;
	
	          for( j=0; j < r; j++ )
	          {
	          set.insert( j );
	          }
	
	          for( j=0; j < r; j++ )
	          {
	              TestSet::iterator it = set.find( j );
	              set.erase( it );
	          }
	      } 
	
	      return 0;
	  }     
	        
	  void main()
	  {
	     
	      int cThreads = 10;
	
	      HANDLE  aThreads[10];
	
	      for( int i=0; i < cThreads; i++ )
	      {
	          aThreads[i] = CreateThread( NULL, 0, Worker, NULL, 0, NULL );
	      }
	
	      WaitForMultipleObjects( cThreads, aThreads, TRUE, INFINITE );
	  } 
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCPPonly kbSTL kbVC600 kbVC600fix kbDSupport kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :6.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
