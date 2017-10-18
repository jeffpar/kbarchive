---
layout: page
title: "Q104641: INFO: Using C Run-Time Functions and CreateThread()"
permalink: kb/104/Q104641/
---

## Q104641: INFO: Using C Run-Time Functions and CreateThread()

	Article: Q104641
	Product(s): Microsoft C Compiler
	Version(s): 1.0 2.0 2.1 2.2 4.0 4.1 4.2 5.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All C Run-time functions except the signal() function work correctly when used
	in threads created by the CreateThread() function. However, depending on what
	CRT functions are called, there may be a small memory leak when threads are
	terminated. Calling strlen(), for example, does not trigger the allocation of
	the CRT thread data-block, and calling malloc(), fopen(), _open(), strtok(),
	ctime(), or localtime() causes allocation of a CRT per-thread data-block, which
	may cause a memory leak.
	
	MORE INFORMATION
	================
	
	The "Programming Techniques" manual supplied with Visual C++ 32-bit Edition
	states that using CreateThread() in a program that uses Libcmt.lib causes many
	CRT functions to fail. Actually, the only function that should not be used in a
	thread created with CreateThread() is the signal() function.
	
	There are two ways to create threads. One method involves using the CRT
	_beginthread() or _beginthreadex() (with Visual C++ 2.0 and later); the other
	method involves using the CreateThread() API. All CRT functions other than the
	signal() function work correctly in threads created with either _beginthread()
	or CreateThread(). However, there are some problems involved with using CRT
	functions in threads created with CreateThread().
	
	Threads that are created and terminated with the CreateThread() and ExitThread()
	Win32 API functions do not have memory that is allocated by the CRT for static
	data and static buffers cleaned up when the thread terminates. Some examples of
	this type of memory are static data for errno and _doserrno and the static
	buffers used by functions such as asctime(), ctime(), localtime(), gmtime(), and
	mktime(). Using CreateThread() in a program that uses the CRT (for example,
	links with LIBCMT.LIB) may cause a memory leak of about 70-80 bytes each time a
	thread is terminated.
	
	To guarantee that all static data and static buffers allocated by the CRT are
	cleaned up when the thread terminates, _beginthreadex() and _endthreadex()
	should be used when creating a thread. The _beginthreadex() function includes
	the same parameters and functionality as CreateThread().
	
	NOTE: It is not possible to terminate a thread with _endthreadex() when it was
	created with CreateThread().
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 1.0 2.0 2.1 2.2 4.0 4.1 4.2 5.0
	Issue type        : kbinfo
	
	=============================================================================
	
