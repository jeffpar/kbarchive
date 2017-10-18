---
layout: page
title: "Q151869: PRB: Incorrect Usage of CSingleLock May Lock Up Mutex Object"
permalink: kb/151/Q151869/
---

## Q151869: PRB: Incorrect Usage of CSingleLock May Lock Up Mutex Object

	Article: Q151869
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.1
	Operating System(s): 
	Keyword(s): kbMFC kbThread kbVC410 kbGrpDSMFCATL
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CSingleLock class can be used with a CMutex object. An attempt to free the
	Mutex object by making a call to the documented function
	CSingleLock::Unlock(LONG, LPLONG) locks up the Mutex. The Mutex is not released
	even when the CSingleLock object is destroyed.
	
	Instead, the call to CSingleLock::Unlock(void) successfully frees the Mutex.
	
	CAUSE
	=====
	
	There is a Boolean variable kept in the class CSingleLock - m_bAcquired. This
	variable keeps track of the state of the synchronization object. In the case of
	Mutexes, a value of TRUE (.T.) means that the Mutex object is owned by a thread.
	The variable is set to FALSE (.F.) when the Mutex is freed.
	
	There are two versions of CSingleLock::Unlock and two versions for
	CSyncObject::Unlock. One version takes no arguments, while the other one takes
	two: LONG and LPLONG. CSingleLock::Unlock makes a call to CSyncObject::Unlock
	only if the m_bAcquired member of CSingleLock is set to TRUE.
	
	Of the two versions of CSingleLock::Unlock, the latter version, with two
	arguments, should be used only with CSingleLock associated with CSemaphore
	objects. When used on a CSingleLock object associated with a CMutex, it just
	returns TRUE. This value is interpreted by CSingleLock::Unlock as though the
	object got freed and it sets its m_bAcquired member to FALSE. This causes the
	Mutex to lock up, because any future calls to CSingleLock::Unlock see
	m_bAcquired to be FALSE and the call to CSyncObject::Unlock is not made. When
	CSingleLock's destructor gets called, it calls Unlock. However, the same
	sequence of events prevents the Mutex from being freed.
	
	RESOLUTION
	==========
	
	The first version of CSingleLock::Unlock, the one that takes no arguments,
	should be used. This calls CSyncObject::Unlock(void). This is a virtual function
	that calls CMutex::Unlock, that, in turn, calls ::ReleaseMutex to free the Mutex
	object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following code demonstrates the problem:
	
	     //.......
	          CSingleLock* sLock = new CSingleLock (&GlobalMutex);
	          sLock->Lock();
	          //...
	          sLock->Unlock(1);
	          //...
	          delete sLock;
	     //.......
	
	  This code should be changed to:
	
	     //......
	          CSingleLock* sLock = new CSingleLock (&GlobalMutex);
	          sLock->Lock();
	          //....
	          sLock->Unlock();
	          //...
	          delete sLock;
	     //.......
	
	Additional query words: 4.10
	
	======================================================================
	Keywords          : kbMFC kbThread kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.1
	Issue type        : kbprb
	
	=============================================================================
	
