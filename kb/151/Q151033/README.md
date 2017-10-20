---
layout: page
title: "Q151033: FIX: Using CMultiLock Class Can Cause a Memory Leak"
permalink: /kb/151/Q151033/
---

## Q151033: FIX: Using CMultiLock Class Can Cause a Memory Leak

{% raw %}

	Article: Q151033
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbMFC kbThread kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the CMultiLock class is used to synchronize on more than eight
	synchronization objects, a memory leak occurs when using CEvent, CSemaphore, or
	CMutex as the synchronization objects. The size of the leak equals the number of
	synchronization objects used multiplied by the memory needed for a BOOL
	variable.
	
	CAUSE
	=====
	
	The CMultiLock class uses two arrays to keep a track of the handles of the
	synchronization objects and their signaled status. As an optimization, local
	arrays (class data members) are used if the CMultiLock class is used to
	synchronize on eight or fewer synchronization objects. If more than eight
	objects are used, memory is allocated at run time by making a call to new. The
	CMultiLock destructor frees the memory associated with the handles array but not
	the memory associated with the signaled status array.
	
	RESOLUTION
	==========
	
	Working around the memory leak is difficult, because it is not possible to
	derive a class from CMultiLock and delete the array in destructor. This behavior
	occurs because CMultiLock's destructor, called after the derived class's
	destructor, uses this array to unlock the objects.
	
	One approach is to work with multiple CMultiLock objects with less than nine
	synchronization objects each. This involves performing sequential waits on these
	CMultiLock objects. However, this is not the same as working with a single
	CMultiLock object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.2.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following code reproduces the problem:
	
	     void SyncFun()
	     {
	     //....
	           CEvent ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8, ev9;
	           CSyncObject* syncObjects[]=
	                { &ev1, &ev2, &ev3, &ev4, &ev5, &ev6, &ev7, &ev8, &ev9 };
	           CMultiLock mlock( syncObjects, 9 );
	           mlock.Lock(1000);
	     //....
	     }
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 CSemaphore CmutexCEvent vcfixlist420 MfcThreadIss
	
	======================================================================
	Keywords          : kbMFC kbThread kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
