---
layout: page
title: "Q164813: FIX: Web Browser Control Hangs in CFormView"
permalink: kb/164/Q164813/
---

## Q164813: FIX: Web Browser Control Hangs in CFormView

	Article: Q164813
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbole kbInternet kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVS97sp1fix kbGrpDS
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, The Microsoft Web Browser Control may appear to
	hang when used in a CFormView derived class. The control will actually be caught
	in an infinitely cascading loop of focus messages.
	
	CAUSE
	=====
	
	Microsoft Foundation Classes (MFC) has to handle focus for child items in the
	modeless dialog in a CFormView.
	
	When focus leaves the dialog, MFC remembers where the focus was. When focus
	returns, MFC tries to set it back to the place where it used to be. It's
	possible for a situation to exist where the window that MFC wants to set the
	focus back to no longer exists.
	
	RESOLUTION
	==========
	
	To avoid this problem, it is necessary to handle the WM_SETFOCUS message. This
	handler can be added with the Class Wizard. To do this, it is necessary to
	change the Class Wizard Message Filter. This can be done by choosing the Class
	Info tab of the Class Wizard and selecting Window as the message filter for the
	class under Advanced Options. Once this is done, you will be able to select
	WM_SETFOCUS in the Message Maps tab for the CFormView derived class.
	
	The WM_SETFOCUS message handler should look similar to the following:
	
	     void CMyFormView::OnSetFocus(CWnd* pOldWnd)
	     {
	        if (!::IsWindow(m_hWndFocus) || !::IsChild(m_hWnd, m_hWndFocus))
	        {
	           // invalid or unknown focus window... let windows handle it
	           m_hWndFocus = NULL;
	           Default();
	           return;
	        }
	        // otherwise, set focus to the last known focus window
	        ::SetFocus(m_hWndFocus);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The following illustrates a situation in which this problem might occur:
	
	1. Navigate to a URL that has a child window or causes a child window to appear.
	
	2. Put focus on the child window.
	
	3. Navigate to a different URL.
	
	4. Immediately set focus to a different application.
	
	  At step 4, MFC will save the child window handle that previously had focus.
	  Step 3 will eventually cause the window to be destroyed, though. So, when
	  you:
	
	5. Set focus back to the application.
	
	MFC will try to set focus to the now-deceased child window and fail, resulting in
	an infinitely cascading loop of focus messages.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbInternet kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVS97sp1fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
