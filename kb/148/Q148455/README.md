---
layout: page
title: "Q148455: BUG: CSharedFile::Detach() Does Not Call GlobalUnlock()"
permalink: kb/148/Q148455/
---

## Q148455: BUG: CSharedFile::Detach() Does Not Call GlobalUnlock()

	Article: Q148455
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bu
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under the Checked build of Windows NT or a diagnostic utility you receive an
	error similar to this one:
	
	  BASE: GlobalFree called with a locked object.
	
	The Checked build of Windows NT causes a Hard-Coded breakpoint to occur, which
	generates a message similar to this one:
	
	  User Breakpoint called from code at: 0x77f2706f
	
	CAUSE
	=====
	
	The CSharedFile class maintains a global memory block. As soon as an HGLOBAL is
	allocated by a CSharedFile object (or specified in a call to SetHandle), it
	calls GlobalLock to lock this memory block.
	
	If the CSharedFile object is destroyed, then a call to GlobalUnlock() and
	GlobalFree() will correctly unlock and free the global memory block. However, if
	a call to Detach() is made to retrieve the HGLOBAL, then the handle returned is
	still locked. There is no call to GlobalUnlock() made to match the call to
	GlobalLock().
	
	The memory block referenced by the HGLOBAL cannot be moved because it has a
	positive reference count. Also, if an attempt is made to free the HGLOBAL by way
	of a call to GlobalFree(), the symptoms given in this article will occur.
	
	RESOLUTION
	==========
	
	After calling CSharedFile::Detach(), you can unlock the global memory block by
	making a call yourself to GlobalUnlock(). Because this workaround is dependent
	on the implementation of CSharedFile(), you should be sure to use conditional
	compilation for this block of code as demonstrated here:
	
	     CSharedFile file;
	
	     // Do stuff to fill in the CSharedFile
	
	     HGLOBAL hGlob = file.Detach();
	     #if _MFC_VER <= 0x0600
	        ::GlobalUnlock(hGlob);
	     #endif
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
