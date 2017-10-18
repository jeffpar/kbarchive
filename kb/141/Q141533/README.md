---
layout: page
title: "Q141533: FIX: CSyncObject::Lock Always Returns TRUE for Finite Waits"
permalink: kb/141/Q141533/
---

## Q141533: FIX: CSyncObject::Lock Always Returns TRUE for Finite Waits

	Article: Q141533
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbMFC kbThread kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Foundation Classes (MFC), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CSyncObject::Lock function always returns TRUE for finite values of timeout
	intervals. This happens even if the synchronization object is in a non-signaled
	state.
	
	CAUSE
	=====
	
	CSyncObject::Lock is supposed to return FALSE only when the synchronization
	object is in a non-signaled state. The current implementation of this function
	makes a call to ::WaitForSingleObject and returns FALSE only when
	::WaitForSingleObject returns WAIT_FAILED. This is incorrect.
	
	::WaitForSingleObject returns WAIT_FAILED only when the call itself fails. When
	it succeeds, it can return a variety of values, with only WAIT_OBJECT_0
	indicating that the synchronization object is in a signaled state.
	
	CSyncObject::Lock is a virtual function that is overridden only in the case of
	CCriticalSection. Hence the problem arises if you work with a CEvent, CMutex, or
	a CSemaphore object. The problem also comes up if you work with the CSingleLock
	class and call CSingleLock::Lock. This is because CSingleLock::Lock calls
	CSyncObject::Lock through its synchronization object.
	
	In the case of finite timeout intervals, if the object is non-signaled,
	::WaitForSingleObject returns WAIT_TIMEOUT. The CSyncObject::Lock should return
	FALSE but its current implementation returns TRUE. The return value from the
	Lock function is also TRUE when ::WaitForSingleObject returns WAIT_ABANDONED
	indicating that the thread that owned this synchronization object (a CMutex)
	terminated before releasing it.
	
	RESOLUTION
	==========
	
	The easiest way to fix the problem is to derive a new class from the
	synchronization object class that is being used (CEvent, CMutex, or CSemaphore).
	The only function that needs to be overridden is the CSyncObject::Lock function.
	Because this function is virtual, if you work with an object of your derived
	class, your derived class' implementation of Lock will be called. The Lock
	function in the new class (assuming it is called CMyEvent) should be implemented
	as:
	
	  BOOL CMyEvent::Lock(DWORD dwTimeout)
	  {
	    if (::WaitForSingleObject(m_hObject, dwTimeout) == WAIT_OBJECT_0)
	      return TRUE;
	    else
	      return FALSE;
	  }
	
	Please see the "Sample Code" section of this article for an illustration showing
	how to work around the problem. The sample code gives the definition of a class
	derived from the CEvent class and its implementation.
	
	In the case of CMutex and CSemaphore, you need to proceed in the same manner. You
	need to derive new classes and override the Lock function in an identical
	fashion.
	
	The correct CSyncObject::Lock :
	
	  BOOL CSyncObject::Lock(DWORD dwTimeout)
	  {
	    if (::WaitForSingleObject(m_hObject, dwTimeout) ==  WAIT_OBJECT_0)
	      return TRUE;
	    else
	      return FALSE;
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	REFERENCES
	==========
	
	Sample Code
	-----------
	
	  /* Compile options needed: Default Options
	  */ 
	
	  // The Myevent.h File
	
	  #ifndef _MY_EVENT_
	  #define _MY_EVENT_
	
	  class CMyEvent : public CEvent
	  {
	        DECLARE_DYNAMIC(CMyEvent)
	
	  // Constructor
	  public:
	        CMyEvent(BOOL bInitiallyOwn = FALSE, BOOL bManualReset = FALSE,
	                 LPCTSTR lpszName = NULL,
	                 LPSECURITY_ATTRIBUTES lpsaAttribute = NULL) :
	                 CEvent(bInitiallyOwn, bManualReset, lpszName,
	                        lpsaAttribute)
	                 { }
	
	  // Operations
	  public:
	        BOOL virtual Lock (DWORD dwTimeout = INFINITE);
	  };
	
	  #endif
	
	  // The Myevent.cpp File
	
	  #include "stdafx.h"
	  #include <afxmt.h>
	  #include "myevent.h"
	
	  IMPLEMENT_DYNAMIC (CMyEvent, CEvent)
	
	  BOOL CMyEvent::Lock(DWORD dwTimeout)
	  {
	    if (::WaitForSingleObject(m_hObject, dwTimeout) ==  WAIT_OBJECT_0)
	      return TRUE;
	    else
	      return FALSE;
	  }
	
	Additional query words: kbVC400bug CSyncObject 4.00 Lock WAIT_TIMEOUT Windows 95 4.10
	
	======================================================================
	Keywords          : kbMFC kbThread kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper _IKkbbogus kbMFC
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
