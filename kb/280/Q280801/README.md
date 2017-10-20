---
layout: page
title: "Q280801: INFO: Avoid WS_CLIPCHILDREN and ActiveX Control Painting Problem"
permalink: /kb/280/Q280801/
---

## Q280801: INFO: Avoid WS_CLIPCHILDREN and ActiveX Control Painting Problem

{% raw %}

	Article: Q280801
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbATL kbMFC kbDSupport
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0 
	- The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An in-place container must use the WS_CLIPCHILDREN window style for the window
	that it uses as the parent for an ActiveX Control in order to avoid repainting
	problems.
	
	MORE INFORMATION
	================
	
	The WS_CLIPCHILDREN style excludes the area occupied by child windows when you
	draw within the parent window:
	
	  http://msdn.microsoft.com/library/psdk/winui/windows_2v90.htm
	
	To avoid repainting over an in-place object's output, the style must be applied
	to the parent window of the object.
	
	For Microsoft Foundation Classes (MFC) OLE (and Active) Document Containers, the
	framework implicitly sets this style during in-place activation. However, the
	style must be explicitly added for other situations in which in-place activation
	is involved. From the point of view of MFC and Active Template Library (ATL)
	containers, this is typically when hosting ActiveX controls.
	
	Approaches for MFC Containers
	-----------------------------
	
	- For MFC CWnd (including CView and CDialog) derived classes that host ActiveX
	  controls, the style can be added by adding an override for the virtual
	  PreCreateWindow() function and modifying cs.style. For instance, here's how
	  PreCreateWindow would look in a CView-derived class:
	
	  BOOL CMyView::PreCreateWindow(CREATESTRUCT& cs)
	  {
	  	// Add the WS_CLIPCHILDREN style to avoid repaint problems:
	  	cs.style |= WS_CLIPCHILDREN;
	
	  	return CView::PreCreateWindow(cs);
	  }
	
	- Another way of adding the WS_CLIPCHILDREN style to a CDialog-derived class is
	  through the Dialog editor, Styles tab, by selecting Clip children.
	
	Approaches for ATL Containers
	-----------------------------
	
	- For ATL-based container windows derived from CWindowImpl, the WS_CLIPCHILDREN
	  style can be specified through Window Traits. For CWindowImpl-derived
	  classes, the default traits are specified in the CControlWinTraits class,
	  which does include the WS_CLIPCHILDREN style by default. For more information
	  on ATL windowing classes and window traits, see the following Microsoft Web
	  page:
	
	  ATL 3.0 Window Classes: An Introduction (SubTopic: Using Window Traits to
	  Specify Styles)
	  http://msdn.microsoft.com/library/techart/atlwindow.htm#atlwindow_topic13
	
	- For ATL-based dialog boxes, the base class CAxDialogImpl does not derive from
	  CWindowImpl, and hence does not have these traits. Custom CWinTraits cannot
	  be specified for CAxDialogImpl either. The WS_CLIPCHILDREN style can be added
	  through the Dialog editor, Styles tab, by selecting Clip children.
	
	Approaches Common to MFC and ATL
	--------------------------------
	
	- If the windows are being created explicitly through either CWnd::Create (for
	  MFC) or CWindow::Create (for ATL), the WS_CLIPCHILDREN style can be specified
	  through the dwStyle parameter.
	
	- A way of dynamically modifying the style, once the window has been created
	  and has a valid HWND, is through CWnd::ModifyStyle for MFC windows, or
	  CWindow::ModifyStyle for ATL windows.
	
	REFERENCES
	==========
	
	CWnd::PreCreateWindow
	http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/_mfc_cwnd.3a3a.precreatewindow.htm
	
	CWnd::Create
	http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/_mfc_cwnd.3a3a.create.htm
	
	CWindow::Create
	http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/vcrefcwindowcreate.htm
	
	CWnd::ModifyStyle
	http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/_mfc_cwnd.3a3a.modifystyle.htm
	
	CWindow::ModifyStyle
	http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/_atl_cwindow.3a3a.modifystyle.htm
	
	For a specific example of incorrect repainting, see the following Microsoft
	Knowledge Base article:
	
	  Q220021 BUG: CHtmlView Does Not Repaint Correctly in AppWizard MDI APP
	
	CHtmlView acts as a container window for the Microsoft WebBrowser Control:
	
	  http://msdn.microsoft.com/workshop/browser/webbrowser/WebBrowser.asp
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by S. Ganesh,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbMFC kbDSupport 
	Technology        : kbAudDeveloper kbMFC kbATLsearch kbATL300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
