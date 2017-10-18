---
layout: page
title: "Q140669: FIX: CSingleLock: Bogus Assert in CSingleLock::CSingleLock"
permalink: kb/140/Q140669/
---

## Q140669: FIX: CSingleLock: Bogus Assert in CSingleLock::CSingleLock

	Article: Q140669
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbMFC kbThread kbVC400bug kbVC410fix kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Passing the address of a CCriticalSection object to the constructor of a
	CSingleLock object causes an assertion in the mtex.cpp file at line 97. This
	line is in the constructor for CSingleLock.
	
	CAUSE
	=====
	
	A Critical Section object cannot be passed to ::WaitForSingleObject. This is
	because Critical Section objects do not have a corresponding kernel object.
	Because CSingleLock::Lock calls CSyncObject::Lock, which calls
	::WaitForSingleObject, the ASSERT tries to catch the case when a Critical
	Section object is incorrectly passed to ::WaitForSingleObject.
	
	However, CSyncObject::Lock is virtual and CCriticalSection::Lock is overridden to
	make the right call, ::EnterCriticalSection. As a consequence,
	::WaitForSingleObject is never called with a Critical Section object. Hence the
	ASSERT statement is bogus.
	
	RESOLUTION
	==========
	
	The assert can be safely ignored. ASSERT statements are only evaluated in debug
	builds, so this is not a problem with release builds. To get rid of the assert,
	remove the assert from the MFC source and rebuild the debug version of the MFC
	library. For details on rebuilding the MFC libraries, please see the Readme.txt
	file located in the <msdev>\Mfc\Src directory.
	
	The CCriticalSection class does not necessarily have to work with CSingleLock, so
	you can avoid this assertion by avoiding the CSingleLock class entirely. This
	would involve making a call to CCriticalSection::Lock directly. See the Help
	file for CCriticalSection for more information on this approach.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	Because the call to CMultiLock::Lock always calls ::WaitForMultipleObjects or
	::MsgWaitForMultipleObjects, you must make sure that none of the synchronization
	objects passed to CMultiLock constructor are of type CCriticalSection. This
	means that a similar assertion in the constructor for CMultiLock in the mtex.cpp
	file at line 163 is valid.
	
	REFERENCES
	==========
	
	CCriticalSection in the Help file.
	
	Additional query words: kbVC400bug 4.00 4.10 assertion mtex.cpp 97 assert Windows 95
	
	======================================================================
	Keywords          : kbMFC kbThread kbVC400bug kbVC410fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
