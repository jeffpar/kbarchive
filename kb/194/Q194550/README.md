---
layout: page
title: "Q194550: FIX: Freeing Memory Multiple Times May Cause an Access Violation"
permalink: /kb/194/Q194550/
---

## Q194550: FIX: Freeing Memory Multiple Times May Cause an Access Violation

	Article: Q194550
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbcode kbservicepack kbCRT kbVC600 kbVS600sp2 kbVS600sp2bug kbVS600sp2fix kbVS600SP1 kb
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Memory that is freed multiple times may cause an Application Error (AE).
	
	NOTE: This is true whether you use malloc and multiple free or new and multiple
	delete.
	
	CAUSE
	=====
	
	Heap control structures are modified after the first call to free() and no
	longer in a state where subsequent calls to free() will work.
	
	RESOLUTION
	==========
	
	Avoid calling multiple free or multiple delete on the same pointer. One way to
	prevent this is by assigning the pointer to null after calling free or delete.
	The delete and free functions return without doing anything if a null pointer is
	passed as the argument. This doesn't work in cases where free or delete is
	called on multiple pointers pointing to the same memory location.
	
	To help customers experiencing this problem in their third-party applications,
	Microsoft has released a new C-Run-time Library DLL, Msvcrt.dll, which
	implements two heap managers, the Visual C++ 5 compatible heap manager and the
	Visual C++ 6 compatible heap manager. It detects with which Visual C++ version
	your application is built and uses the appropriate heap manager for that
	application. If this version is 6.0 or greater, the Visual C++ 6 compatible heap
	manager is used and if it is earlier than version 6.0,the Visual C++ 5
	compatible heap is used.
	
	Visual Studio 6.0 users can get this new msvcrt.dll by installing the latest
	Microsoft Visual Studio Service Pack. Non-Visual Studio users should install the
	Microsoft Libraries Update.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Freeing memory multiple times produces undefined behavior.
	
	Release builds of the sample code below cause an application error when built
	with Visual C++ 6.0; the code does not cause an application error when built
	with Visual C++ 5.0.
	
	Debug builds with either Visual C++ 6.0 or Visual C++ 5.0 issue an ASSERT:
	
	     Debug Assertion Failed!
	
	It is important to note that the state of the Small Block Heap (SBH) is
	constantly in flux. Because of this, there are situations where it's possible
	that no assertion will be issued in the debug build, but an application error
	will occur in the release build.
	
	Release builds in Visual C++ 6.0 are more sensitive to freeing memory multiple
	times than in Visual C++ 5.0. If built with Visual C++ 5.0, the case below is
	one where the incorrect call to free is innocuous. If the call to free() were
	made more distant from the original, it is possible to cause an application
	error. There is a high probability that memory will be corrupted.
	
	Sample code
	-----------
	
	     // Compile options for Release builds /c
	     // Compile options for Debug builds /c /Zi
	     #include <malloc.h>
	     int main(int argc, char* argv[])
	     {
	        char *pChar1 = (char *)malloc(10*sizeof(char));
	        char *pChar2 = (char *)malloc(10*sizeof(char));
	        free(pChar1);
	        free(pChar1);
	        return 0;
	     }
	
	Additional query words: msvcrt.dll kbVS600sp2
	
	======================================================================
	Keywords          : kbcode kbservicepack kbCRT kbVC600 kbVS600sp2 kbVS600sp2bug kbVS600sp2fix kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
