---
layout: page
title: "Q188721: BUG: AV Using ios-Derived Type in Multithreaded Apps"
permalink: /kb/188/Q188721/
---

## Q188721: BUG: AV Using ios-Derived Type in Multithreaded Apps

	Article: Q188721
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create and destroy ios-derived classes in multiple threads, an access
	violation can occur.
	
	This only occurs when you use the old iostream library rather than the Standard
	C++ Library introduced in Visual C++ 5.0. You can access the old iostream
	library by including iostream header files with a .h extension, such as
	iostream.h or strstrea.h. The new header files do not have an extension, such as
	iostream or strstream.
	
	CAUSE
	=====
	
	A static member ios::fLockcInit is used to hold reference counts for a critical
	section used in the multi-threaded C Run-Time Library to provide synchronization
	for the ios class. Ios::fLockcInit is modified without synchronization during
	construction and destruction of ios thereby allowing a race condition. The
	critical section reference counted by ios::fLockcInit may be destroyed more than
	once or used after it is destroyed.
	
	RESOLUTION
	==========
	
	For Visual C++ 5.0, use the Standard C++ Library instead of the old iostream
	library.
	
	For earlier versions of Visual C++, either do not use ios-derived classes or
	provide synchronization in the CRT and rebuild it. If you rebuild the CRT, you
	may not redistribute a DLL named the same as the DLLs Microsoft ships; you must
	give the DLL a different name. Microsoft does not support modified CRTs.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	ios-derived classes include: iostream, istream, ostream, fstream, ifstream,
	ofstream, strstream, istrstream.
	
	Additional query words: kbCRT kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbDSupport kbdss
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : WINNT:4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
