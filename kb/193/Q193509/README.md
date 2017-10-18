---
layout: page
title: "Q193509: FIX: Exception When Calling strftime() Function"
permalink: kb/193/Q193509/
---

## Q193509: FIX: Exception When Calling strftime() Function

	Article: Q193509
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC600 kbVC600bug kbVS600sp2 kbVS600sp2bug kbVS600sp2fix kbVS600SP1fix
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Multithreaded applications may experience exceptions or incorrect results when
	calling the C run-time library (CRT) strftime() function. This behavior is
	particularly prevalent on multiprocessor machines.
	
	CAUSE
	=====
	
	The strftime() function is dependent on an internal pointer for locale- related
	information that is necessary for formatting time and date strings. This pointer
	is used, and can be modified, by other components of the CRT, but is not
	protected for exclusive use within the strftime() function. This allows other
	threads to modify the pointer while strftime() is using it.
	
	RESOLUTION
	==========
	
	The internal pointer is modified when calling the setlocale() CRT function. To
	prevent the pointer from being inadvertently modified while being used, use one
	of the following two workarounds:
	
	- Call setlocale once before other threads are created.
	
	- Synchronize access to functions that use locale information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug has been fixed in the Visual Studio 6.0 Service Pack 1. To obtain this
	service pack, please see:
	
	  http://msdn.microsoft.com/vstudio/sp/default.asp
	
	For more information on the Visual Studio 6.0 Service Pack 1, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q193009 INFO: Visual Studio 6.0 Service Pack 1 Readme
	
	  Q194022 INFO: Visual Studio 6.0 Service Pack 1 What, Where, Why
	
	  Q194295 HOWTO: Tell that Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The following sample program reproduces an exception. For multiprocessor
	systems, the problem occurs almost immediately:
	
	     // Compile /MT or /MD
	
	     #include <process.h>
	     #include <time.h>
	     #include <locale.h>
	
	     void work( void* pArg ) // This uses the locale info pointer.
	     {
	          char        str256[256];
	          time_t      t;
	          struct tm*  ptm;
	
	      t = time(0);
	      ptm = localtime( &t );
	      for (;;) strftime( str256, 256, "%a%b%c%d%x%y", ptm );
	
	     }
	
	     void main()
	     {
	       _beginthread( work, 0, 0 );
	
	       for(;;) // This changes the locale info pointer.
	          {
	          setlocale(LC_ALL,"english");
	          setlocale(LC_ALL,"german");
	          setlocale(LC_ALL,"french");
	          setlocale(LC_ALL,"spannis");
	          setlocale(LC_ALL,"russian");
	          }
	      }
	
	======================================================================
	Keywords          : kbCRT kbVC600 kbVC600bug kbVS600sp2 kbVS600sp2bug kbVS600sp2fix kbVS600SP1fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
