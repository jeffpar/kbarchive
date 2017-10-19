---
layout: page
title: "Q163370: PRB: #File Error# During Dump of Heap Objects"
permalink: /kb/163/Q163370/
---

## Q163370: PRB: #File Error# During Dump of Heap Objects

	Article: Q163370
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2 5.0
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call _CrtMemDumpAllObjectsSince() to dump the objects on the CRT heap,
	you may see #File Error# in the place of a file name. Following is an example of
	a dump where both a file name and the #File Error# occurs.
	
	  
	
	  Dumping objects ->
	  d1.cpp(11) : {27} normal block at 0x007609A0, 222 bytes long.
	   Data: <                > CD CD CD CD CD CD CD CD CD CD CD CD CD CD CD
	  #File Error#(9) : {26} normal block at 0x00760900, 111 bytes long.
	   Data: <                > CD CD CD CD CD CD CD CD CD CD CD CD CD CD CD
	  Object dump complete.
	
	CAUSE
	=====
	
	The CRT adds a header to the beginning of every memory block that is allocated.
	If you have defined the symbol _CRTDBG_MAP_ALLOC before including crtdbg.h, this
	memory block header contains a pointer to the name of the file where the CRT
	function that allocated the memory block was called from. #File Error# is
	emitted instead of the file name when the executing process does not have read
	access to the memory reference by this pointer.
	
	There are two probable causes for not having read access to the memory reference
	by this pointer:
	
	1. Heap corruption. Overwriting the block of memory preceding the block giving
	  the #File Error# may have caused corruption in the block header. Usually,
	  there are other errors as well, such as "Damage after Normal Block."
	
	2. The memory block was allocated in a DLL that was unloaded prior to the
	  _CrtMemDumpAllObjectsSince() call.
	
	STATUS
	======
	
	This behavior is by design.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type in the following code:
	
	     // d2.cpp
	     // Create d2.dll by compiling with: CL /LDd /MDd d2.cpp /link /debug
	     #include <malloc.h>
	     #define _CRTDBG_MAP_ALLOC
	     #include <crtdbg.h>
	     extern "C"
	     _declspec(dllexport)
	     void* a (int cnt) {
	         return malloc(cnt);
	     }
	
	     // d1.cpp
	     // Create d1.exe by compiling with: CL /MDd d1.cpp /link d2.lib /debug
	     #include <windows.h>
	     #include <malloc.h>
	     #define _CRTDBG_MAP_ALLOC
	     #include <crtdbg.h>
	     void main () {
	         HINSTANCE h = LoadLibrary("d2.dll");
	         void* (*f)(int) = (void* (*)(int))GetProcAddress(h,"a");
	         f(111);
	         malloc(222);
	         FreeLibrary(h);
	         _CrtMemDumpAllObjectsSince(0);
	     }
	
	2. Create the DLL(d2.dll) and the application(d1.exe).
	
	3. Start Developer Studio with the following command:
	
	  " MSDEV d1.EXE " (without the quotation marks)
	
	  Make sure the output window is visible in the Developer Studio.
	
	4. On the Build menu, select Debug and then Go.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : 4.0 4.1 4.2 5.0
	Issue type        : kbprb
	
	=============================================================================
	
