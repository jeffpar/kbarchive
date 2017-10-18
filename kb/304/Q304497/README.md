---
layout: page
title: "Q304497: BUG: _wsetlocale Is Not Threadsafe"
permalink: kb/304/Q304497/
---

## Q304497: BUG: _wsetlocale Is Not Threadsafe

	Article: Q304497
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A heap corruption can occur if _wsetlocale is called simultaneously from
	multiple threads.
	
	CAUSE
	=====
	
	_wsetlocale does not synchronize access to a local static variable, outwlocale.
	
	RESOLUTION
	==========
	
	To work around this, you must synchronize calls to _wsetlocale.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The C Runtime locale mechanism in Microsoft Visual C++ is distinct from the
	locale mechanism in Microsoft Windows. Though Windows supports per-thread
	locales, C Runtime supports only a single global locale for any program.
	
	If multiple threads call _wsetlocale, then no thread's locale can be trusted. For
	example, if one thread calls _wsetlocale for French and tries to use that locale
	for _wcslwr, and another thread calls _wsetlocale for English before the first
	thread executes the _wcslwr function call, then the first thread uses the
	English locale instead of the French locale.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	  #define _UNICODE
	  #include <stdio.h>
	  #include <locale.h>
	  #include <process.h>
	
	  void __cdecl test(void *i) {
	  	_wsetlocale(LC_ALL, L"English");
	  	_wsetlocale(LC_ALL, L"French");
	  	_wsetlocale(LC_ALL, L"German");
	  	_wsetlocale(LC_ALL, L"English");
	  	printf("%d exit\n",i);
	  }
	
	  void wmain () {
	  	for (int i=0; i<30; ++i) _beginthread(test,0,(void*)i);
	  	getchar();
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
