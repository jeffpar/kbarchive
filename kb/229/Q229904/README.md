---
layout: page
title: "Q229904: PRB: CAxWindow Members Can Cause a Memory Leak"
permalink: /kb/229/Q229904/
---

## Q229904: PRB: CAxWindow Members Can Cause a Memory Leak

{% raw %}

	Article: Q229904
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL kbCOMt kbCtrl kbVC600 kbATL300 kbGrpDSMFCATL
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CAxWindow CreateControl() and AttachControl() functions may leak memory if
	not used correctly.
	
	CAUSE
	=====
	
	The following two techniques of creating ActiveX controls on composite controls
	(or any window supporting ATL containment) can result in memory leaks.
	
	  //Intialize ATL control containment.
	  AtlAxWinInit();
	
	  //Create container window.
	  HWND hWndCont = m_ax.Create(m_hWnd, rect, 0, WS_CHILD | WS_VISIBLE);
	
	  //Create & activate ActiveX control
	  HRESULT hr = m_ax.CreateControl("MSCAL.Calendar");
	
	-OR-
	
	  //Intialize ATL control containment.
	  AtlAxWinInit();
	  //Create container window
	  HWND hWndCont = m_ax.Create(m_hWnd, rect, 0, WS_CHILD | WS_VISIBLE);
	
	  // Create ActiveX control.
	  CComPtr<IUnknown> spunk;
	  HRESULT hr = CLSIDFromProgID(OLESTR("MSCAL.Calendar"), &clsid);
	  hr = CoCreateInstance(clsid, NULL, CLSCTX_ALL, IID_IUnknown, (void**)&spunk);
	
	  // Activate ActiveX control.
	  HRESULT hr = m_ax.AttachControl(spunk);
	
	In both techniques, the calls to Create() results in the creation of a
	CAxHostWindow object. The call to CreateControl() or AttachControl() also
	creates another CAxHostWindow Object. Upon destruction, the CAxHostWindow object
	created by Create() is freed.
	
	RESOLUTION
	==========
	
	Use one of the techniques mentioned in article Q218442 to create ActiveX
	controls at run time.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q192560 HOWTO: Adding ATL Control Containment Support to Any Window
	
	  Q218442 HOWTO: Programmatically Add ActiveX Controls to Composite Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbATL kbCOMt kbCtrl kbVC600 kbATL300 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
