---
layout: page
title: "Q230742: PRB: Text Missing when ActiveX Control Is Based on Rich Edit 2.0"
permalink: /kb/230/Q230742/
---

## Q230742: PRB: Text Missing when ActiveX Control Is Based on Rich Edit 2.0

{% raw %}

	Article: Q230742
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrlCreate kbMFC kbRichEdit kbVC600 kbVS600 kbDSupport kbGrpDSMFCATL
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Text does not appear when an ActiveX control is based on Rich Edit 2.0.
	
	CAUSE
	=====
	
	The RichEdit20 window proc does not do anything in WM_ERASEBKGND except return
	the value "1", indicating it has erased the background. The WM_PAINT message
	handler is supposed to take care of erasing the background. However, the
	WM_PAINT message handler does not do anything because the update rect is
	(0,0,0,0).
	
	RESOLUTION
	==========
	
	The solution is to invalidate the Rich Edit control's window, and then pass the
	WM_PAINT message to the windows procedure of the Rich Edit 2.0 control. For
	example:
	
	  void CMyRichEditOCX::OnDraw(CDC* pdc, const CRect& rcBounds, const CRect& rcInvalid)
	  {
	  	Invalidate(FALSE);
	  	// DC passed by WM_PAINT is ignored
	  	::CallWindowProc(*m_pfnSuper, m_hWnd, WM_PAINT, (WPARAM)0, (LPARAM)0);
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The MFC CRichEditCtrl class was designed to support the Rich Edit 1.0 control
	and does not support the Rich Edit 2.0 control.
	
	In order to use Rich Edit 2.0 in an MFC application, call LoadLibrary to load the
	Riched20.dll and access its functionality through the Win32 API.
	
	REFERENCES
	==========
	
	"ActiveX Controls: Subclassing a Windows Control" in the Visual C++ Programmer's
	Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrlCreate kbMFC kbRichEdit kbVC600 kbVS600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
