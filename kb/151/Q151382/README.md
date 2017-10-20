---
layout: page
title: "Q151382: FIX: LoadBarState() Causes Assert In Bardock.cpp, Line 682"
permalink: /kb/151/Q151382/
---

## Q151382: FIX: LoadBarState() Causes Assert In Bardock.cpp, Line 682

{% raw %}

	Article: Q151382
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1; :
	Operating System(s): 
	Keyword(s): kbMFC kbToolbar KbUIDesign kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An assert can occur in bardock.cpp, line 682 when CFrameWnd::LoadBarState() is
	called. This behavior occurs if SaveBarState() was previously called and more
	than one CToolBar was docked at the bottom of the window.
	
	CAUSE
	=====
	
	The assert occurs because CFrameWnd::EnableDocking() was called prior to
	creation of the CToolBars.
	
	RESOLUTION
	==========
	
	The assertion is unnecessary and can be ignored. To avoid the assertion, make
	sure that CFrameWnd::EnableDocking() is called after all calls to
	CToolBar::Create().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.2.
	
	MORE INFORMATION
	================
	
	In Visual C++ 4.0, the assertion occurs in bardock.cpp, line 657.
	
	MFC maintains a CPtrArray of CControlBars. The validity of the CPtrArray is
	checked when LoadBarState() is called. There are cases where the CPtrArray is
	not initialized at this juncture but is initialized correctly later on.
	Therefore, the assert is unnecessary.
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 vcfixlist420 MfcUI
	
	======================================================================
	Keywords          : kbMFC kbToolbar KbUIDesign kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbVC410
	Version           : winnt:4.0,4.1; :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
