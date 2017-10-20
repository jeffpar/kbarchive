---
layout: page
title: "Q151893: DOC: CCriticalSection::Lock Doesn't Do a Timed Wait"
permalink: /kb/151/Q151893/
---

## Q151893: DOC: CCriticalSection::Lock Doesn't Do a Timed Wait

{% raw %}

	Article: Q151893
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbMFC kbThread kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CCriticalSection class contains a member function, Lock, that can be used by
	a thread to gain ownership of a Critical Section object. There are two versions
	of the Lock function, one taking no arguments and the other taking a DWORD
	argument. The documentation for the latter version of Lock states that the DWORD
	argument specifies the amount of time, in milliseconds, to wait for the critical
	section to become available.
	
	This information is not correct. The CCriticalSection class wraps the SDK
	CRITICAL_SECTION object. This object does not have the capability for timed
	waits. As a consequence, entering or leaving the Critical Section always results
	in blocked waits. Hence, when CCriticalSection::Lock is called, the argument
	passed is ignored and an infinite wait is executed.
	
	The Mutex object has the capability for timed waits. The functionality of this
	object is wrapped by the MFC class CMutex. An MFC application should use the
	CMutex class when timed waits are desired.
	
	MORE INFORMATION
	================
	
	CCriticalSection::Lock makes a call to ::EnterCriticalSection. This is a
	blocking call that does an infinite wait. For example, if another thread
	currently owns the Critical Section object, ::EnterCriticalSection blocks the
	execution of the calling thread indefinitely until the other thread releases its
	ownership. The classes, such as CEvent, CMutex, and CSemaphore, that wrap other
	synchronization objects, make a call to ::WaitForSingleObject from their Lock
	functions. ::WaitForSingleObject accepts an argument that identifies the
	time-out interval and executes a true timed wait. A Critical Section object
	cannot be used with ::WaitForSingleObject. Therefore, it is not possible to do a
	timed wait with Critical Section objects.
	
	This documentation error was corrected in Visual C++ 4.2 and later versions.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbMFC kbThread kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
