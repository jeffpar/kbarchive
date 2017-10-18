---
layout: page
title: "Q135913: FIX: Bad POINT Structure in MSG Returned by GetCurrentMessage"
permalink: kb/135/Q135913/
---

## Q135913: FIX: Bad POINT Structure in MSG Returned by GetCurrentMessage

	Article: Q135913
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC100bug kbVC150bug kbVC200bug kbVC200fix kbVC210bug kbVC220fix kbWnd
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MFC provides a function called GetCurrentMessage that returns a pointer to a MSG
	structure encapsulating the current message being processed. The MSG structure
	contains a member variable (pt), of type POINT that contains incorrect values.
	
	CAUSE
	=====
	
	The GetCurrentMessage function fills in the POINT structure with the following
	line of code:
	
	     *((DWORD*)&pThreadState->m_lastSentMsg.pt) = ::GetMessagePos();
	
	This code was correct in the 16-bit version of Visual C++ because a POINT
	structure was made up of two intergers (int) that were each 16-bits. Thus the
	size of a POINT was the same as a DWORD.
	
	However, in the 32-bit version of Windows and of the Visual C++ compiler, a POINT
	structure is made up of two LONGs, each 32-bits, so the total size of a POINT is
	now 64-bits and the above assignment is not valid.
	
	RESOLUTION
	==========
	
	To obtain the correct value for the point in the current MSG you can use MFC's
	overridden CPoint constructor which takes a DWORD as an argument. For example:
	
	     CPoint pt(::GetMessagePos());
	     // Now pt has the correct values
	
	Please note that because the GetCurrentMessage function returns a pointer to a
	'const' MSG structure, you can't change the pt member of the message structure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 2.2.
	
	Additional query words: 2.00 2.10 3.00 3.10
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC100bug kbVC150bug kbVC200bug kbVC200fix kbVC210bug kbVC220fix kbWndwMsg kbDSupport kbGrpDSMFCATL kbArchitecture kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
