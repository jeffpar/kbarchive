---
layout: page
title: "Q168123: FIX: CWindow::GetTopLevelWindow() Returns NULL"
permalink: /kb/168/Q168123/
---

## Q168123: FIX: CWindow::GetTopLevelWindow() Returns NULL

{% raw %}

	Article: Q168123
	Product(s): Microsoft C Compiler
	Version(s): 2.1,3.0
	Operating System(s): 
	Keyword(s): kbATL210bug kbATLWC kbInprocSvr kbServer kbVC500bug kbVC600fix kbATL300fix kbGrpDSMFCAT
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A call to CWindow::GetTopLevelWindow() always returns NULL.
	
	CAUSE
	=====
	
	This is due to a bug in the function.
	
	RESOLUTION
	==========
	
	Change the function in AtlWin.cpp from:
	
	     HWND CWindow::GetTopLevelWindow() const
	     {
	        ...
	        while(hWndTmp != NULL)
	        {
	           hWndTmp = (::GetWindowLong(hWndParent, GWL_STYLE) & WS_CHILD) ?
	              ::GetParent(hWndParent) :
	              ::GetWindow(hWndParent, GW_OWNER);
	
	           hWndParent = hWndTmp;
	        }
	
	        return hWndParent;
	     }
	
	to the following:
	
	     HWND CWindow::GetTopLevelWindow() const
	     {
	        ...
	        while(hWndTmp != NULL)
	        {
	           // Modification
	           hWndParent = hWndTmp;
	
	           hWndTmp = (::GetWindowLong(hWndParent, GWL_STYLE) & WS_CHILD) ?
	              ::GetParent(hWndParent) :
	              ::GetWindow(hWndParent, GW_OWNER);
	
	        }
	
	        return hWndParent;
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Sridhar
	Madhugiri, Microsoft Corporation
	
	
	Additional query words: GetTopLevelWindow NULL kbatl210bug kbctrl kbvc600fix kbserver kbinternet
	
	======================================================================
	Keywords          : kbATL210bug kbATLWC kbInprocSvr kbServer kbVC500bug kbVC600fix kbATL300fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL300 kbATL210
	Version           : :2.1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
