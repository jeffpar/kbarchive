---
layout: page
title: "Q132078: How to Use _beginthreadex() and _endthreadex()"
permalink: /kb/132/Q132078/
---

## Q132078: How to Use _beginthreadex() and _endthreadex()

{% raw %}

	Article: Q132078
	Product(s): Microsoft C Compiler
	Version(s): WinNT:2.0,2.1,2.2,4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbCRT kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to use the thread handle returned by
	_beginthreadex() with the synchronization API WaitForSingleObject() in
	multithreaded applications.
	
	When developing a multithreaded Win32-based application with Visual C++, you need
	to use the CRT thread functions to create any threads that call CRT functions.
	To create and terminate threads, use either _beginthread() and _endthread() or
	_beginthreadex() and _endthreadex(). If you use the Win32 APIs CreateThread()
	and EndThread() instead, some of the CRT functions used in the thread will not
	work. You need to use the CRT functions to both create and end the threads or
	you lose the memory that the CRT allocates for the thread.
	
	MORE INFORMATION
	================
	
	The _beginthreadex() function gives you more control over how the thread is
	created than _beginthread() does. The _endthreadex() function is also more
	flexible. For example, with _beginthreadex(), you can use security information,
	set the initial state of the thread (running or suspended), and get the thread
	identifier of the newly created thread. You are also able to use the thread
	handle returned by _beginthreadex() with the synchronization APIs, which you
	cannot do with _beginthread().
	
	It is safer to use _beginthreadex() than _beginthread(). If the thread spawned by
	_beginthread() exits quickly, the handle returned to the caller of
	_beginthread() may be invalid, or worse yet, point to another thread. However,
	the handle returned by _beginthreadex() has to be closed by the caller of
	_beginthreadex(), so it's guaranteed to be a valid handle if _beginthreadex()
	did not return an error.
	
	NOTE: The _beginthreadex() and _endthreadex() functions are not available in
	Visual C++, 32-bit Edition, version 1.0.
	
	The following sample code demonstrates how you can use the thread handle returned
	by _beginthreadex() with the synchronization API WaitForSingleObject(). The main
	thread waits for the second thread to terminate before it continues. When the
	second thread calls _endthreadex(), it causes its thread object to go to the
	signaled state. This allows the primary thread to continue running. This cannot
	be done with _beginthread() and _endthread(), because _endthread() calls the
	Win32 API CloseHandle(), destroying the thread object before it can be set to
	the signaled state.
	
	Sample Code
	-----------
	
	  /* Compile options needed: Default options for a multithreaded console
	     application. You need to compile the code as a .CPP file.
	  */ 
	
	  #include <windows.h>
	  #include <stdio.h>
	  #include <process.h>
	
	  unsigned Counter;
	
	  unsigned __stdcall SecondThreadFunc( void* pArguments )
	  {
	      printf( "In second thread...\n" );
	
	      while ( Counter < 1000000 )
	          Counter++;
	
	      _endthreadex( 0 );
	      return 0;
	  }
	
	  void main()
	  {
	      HANDLE hThread;
	      unsigned threadID;
	
	      printf( "Creating second thread...\n" );
	
	      // Create the second thread.
	
	      hThread = (HANDLE)_beginthreadex( NULL, 0, &SecondThreadFunc, NULL, 0,
	          &threadID );
	
	      // Wait until second thread has terminated. If you comment out the line
	      // below, Counter will not be correct because the thread has not
	      // terminated, and Counter most likely has not been incremented to
	      // 1000000 yet.
	
	      WaitForSingleObject( hThread, INFINITE );
	
	      printf( "Counter should be 1000000; it is-> %d\n", Counter );
	
	      // Destroy the thread object.
	
	      CloseHandle( hThread );
	  }
	
	REFERENCES
	==========
	
	For more information on these functions and multithreading, please see the
	following sources:
	
	- Visual C++ Run-Time Library Reference, Part 2, Run-Time Reference; the
	  descriptions of _beginthread/_beginthreadex and _endthread/_endthreadex.
	
	- Win32 Programmer's Reference, Volume 2: Chapter 43, "Processes and Threads,"
	  and Chapter 44, "Synchronization."
	
	
	======================================================================
	Keywords          : kbcode kbProgramming kbCRT kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : WinNT:2.0,2.1,2.2,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
