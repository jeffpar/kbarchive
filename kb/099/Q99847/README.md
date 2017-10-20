---
layout: page
title: "Q99847: HOWTO: Change Window Attributes in an MFC Application"
permalink: /kb/099/Q99847/
---

## Q99847: HOWTO: Change Window Attributes in an MFC Application

{% raw %}

	Article: Q99847
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbMDI kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbWndwClass kbGr
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	To change the default window attributes used by a framework application created
	in AppWizard, override the window's PreCreateWindow() virtual member function.
	PreCreateWindow() allows an application to access the creation process normally
	processed internally by the CDocTemplate class. The framework calls
	PreCreateWindow() just prior to creating the window. By modifying the
	CREATESTRUCT structure parameter to PreCreateWindow(), your application can
	change the attributes used to create the window.
	
	MORE INFORMATION
	================
	
	The CTRLBARS sample application, provided with the Microsoft Foundation Class
	Library, demonstrates this technique to change window attributes. Note that
	depending on what your application changes in PreCreateWindow(), it may be
	necessary to call the base class implementation.
	
	In a single document interface (SDI) application, the default window style in the
	framework is a combination of the WS_OVERLAPPEDWINDOW and FWS_ADDTOTITLE styles.
	FWS_ADDTOTITLE is a framework-specific style that instructs the framework to add
	the document title to the window's caption. To change the window attributes in
	an SDI application, override the PreCreateWindow() function in your class
	derived form CFrameWnd. For example:
	
	     BOOL CMainFrame::PreCreateWindow(CREATESTRUCT& cs)
	     {
	        // Create a window without min/max buttons or sizable border
	        cs.style = WS_OVERLAPPED | WS_SYSMENU | WS_BORDER;
	
	        // Size the window to 1/3 screen size and center it
	        cs.cy = ::GetSystemMetrics(SM_CYSCREEN) / 3;
	        cs.cx = ::GetSystemMetrics(SM_CXSCREEN) / 3;
	        cs.y = ((cs.cy * 3) - cs.cy) / 2;
	        cs.x = ((cs.cx * 3) - cs.cx) / 2;
	
	        return CFrameWnd::PreCreateWindow(cs);
	     }
	
	A little more work is required to change the window style of a child window in a
	multiple document interface (MDI) application. By default, an MDI application
	generated in AppWizard uses the default CMDIChildWnd class defined in the
	Microsoft Foundation Class Library. To change the window style of an MDI child
	window, your application must derive a new class from CMDIChildWnd and replace
	all references to CMDIChildWnd in your project with references to the new class.
	Most likely, the only reference to CMDIChildWnd in the application is located in
	your application's InitInstance() member function.
	
	The default window style used in an MDI application is a combination of the
	WS_CHILD, WS_OVERLAPPEDWINDOW, and FWS_ADDTOTITLE styles. To change the window
	attributes of an MDI application's child windows, override the PreCreateWindow()
	function in your class derived from CMDIChildWnd. For example:
	
	     BOOL CMyChildWnd::PreCreateWindow(CREATESTRUCT& cs)
	     {
	        // Create a child window without the maximize button
	        cs.style &= ~WS_MAXIMIZEBOX;
	        return CMDIChildWnd::PreCreateWindow(cs);
	     }
	
	For more information about the PreCreateWindow() function, please refer to the
	Microsoft Visual C++ "Class Library Reference, Volume 1," or to the Visual C++
	online help files and Visual C++ 4.0 Books Online.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMDI kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbWndwClass kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
