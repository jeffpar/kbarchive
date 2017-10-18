---
layout: page
title: "Q189382: PRB: CWnd::m_nMsgDragList Not Exported by the MFC DLL"
permalink: kb/189/Q189382/
---

## Q189382: PRB: CWnd::m_nMsgDragList Not Exported by the MFC DLL

	Article: Q189382
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbDLL kbMFC kbVC500 kbGrpDSMFCATL kbArchitecture
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the protected CWnd member m_nMsgDragList in an application or DLL
	that is linked to the MFC shared DLL, a LNK2001 unresolved external error
	occurs.
	
	This error does not occur when you link to the static MFC library.
	
	CAUSE
	=====
	
	CWnd::m_nMsgDragList is not exported from the MFC DLL.
	
	RESOLUTION
	==========
	
	To workaround this problem, call RegisterWindowMessage with the
	DRAGLISTMSGSTRING message and use the value returned instead of
	CWnd::m_nMsgDragList. For example:
	
	     UINT nMsgDragList = ::RegisterWindowMessage(DRAGLISTMSGSTRING);
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	CWnd::m_nMsgDragList is an undocumented member of the CWnd class and is subject
	to change. The most common use of CWnd::m_nMsgDragList occurs when you override
	OnChildNotify in a CWnd derived class.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Isaac L. Varon, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbDLL kbMFC kbVC500 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
