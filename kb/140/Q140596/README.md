---
layout: page
title: "Q140596: INFO: MFC 4.0 No Longer Pre-Registers Window Classes"
permalink: /kb/140/Q140596/
---

## Q140596: INFO: MFC 4.0 No Longer Pre-Registers Window Classes

	Article: Q140596
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC kbVC400 kbWndwClass kbGrpDSMFCATL kbArchitecture kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In previous versions of MFC (prior to MFC 4.0), the framework pre- registered
	some Window classes. Existence of these classes allowed applications to use them
	to create their own windows. These classes were AfxWnd, AfxFrameOrView,
	AfxMDIFrame, and AfxControlBar. The MFC classes shipped with MFC 4.0 no longer
	register them, so they are no longer available to be used in an application.
	
	MORE INFORMATION
	================
	
	In any Windows-based application, every window is created based on a registered
	window class. The window class identifies several characteristics of the windows
	based on it, including the icon, cursor, background color, and the window
	procedure.
	
	In versions prior to and including Visual C++ 2.2, to facilitate creating windows
	in an MFC application, the framework pre-registered some classes. It would then
	use these classes to create the essential windows in a typical MFC application.
	These included the main window, view, and the control bars.
	
	Pre-registration of certain window classes gave rise to several problems like
	multiple versions of MFC running in the same process space. As a consequence,
	MFC 4.0 does not register them and their usage is illegal unless an application
	itself registers window classes with these names. If an MFC 4.0 application goes
	ahead and uses any of these classes, the subsequent call to ::CreateWindow fails
	and GetLastError returns the message "Cannot find Window class."
	
	To use Window classes that are similar to the ones mentioned here or to port MFC
	applications that use these classes to MFC 4.0, an application must register
	these classes. Note that even though MFC does not pre- register these classes
	any more, it takes care of registering new window classes when it needs them. So
	applications that do not use these classes in any custom code do not need to
	make any changes.
	
	For example, one typical use of these pre-registered window classes was in
	applications that registered their own window class for the main window to help
	detect multiple instances of the same application. These applications usually
	called ::GetClassInfo first to retrieve the information from the pre-registered
	MFC window class before registering a new class under a different name. Now, in
	MFC 4.0, ::GetClassInfo will fail to fill out necessary members of the WNDCLASS
	structure, and any subsequent attempts to create a window using that window
	class will fail.
	
	Technical Note #1, "Window Class Registration." gives the attributes of these
	window classes. You can use these attributes to register the necessary window
	classes. The following sample code demonstrates how to register a new window
	class based on the characteristics of the AfxFrameOrView class:
	
	Sample Code
	-----------
	
	  BOOL CYourWinApp::InitInstance()
	  {
	      // Add the following code to your override of InitInstance.
	      // Make sure that this code run before you create any
	      // windows that use this new window class
	
	      WNDCLASS wndclass;
	
	      wndclass.style = CS_DBLCLKS | CS_HREDRAW | CS_VREDRAW;
	      wndclass.lpfnWndProc = ::DefWindowProc;
	      wndclass.cbClsExtra = 0;
	      wndclass.cbWndExtra = 0;
	      wndclass.hInstance = AfxGetInstanceHandle();
	      wndclass.hIcon = LoadIcon(IDR_MAINFRAME);
	                       // or load a different icon
	      wndclass.hCursor = LoadCursor( IDC_ARROW );
	      wndclass.hbrBackground = (HBRUSH) (COLOR_WINDOW + 1);
	      wndclass.lpszMenuName = NULL;
	      wndclass.lpszClassName = "MyAfxFrameOrView";
	
	      if( !AfxRegisterClass( &wndclass ))
	        {
	          TRACE("Window class MyAfxFrameOrView could not be
	                 registered.\n");
	          return FALSE;
	        }
	
	  }
	
	Now the MyAfxFrameOrView window class can be used anywhere a need for the
	AfxFrameOrView class exists.
	
	REFERENCES
	==========
	
	MFC Technical Note #1. For information on attributes of other window classes,
	see Technical Note #1. It does not mention the lpfnWndProc member of the
	WNDCLASS structure. You should always make it ::DefWindowProc.
	
	Additional query words: AfxWnd AfxFrameOrView AfxMDIFrame AfxControlBar kbusage
	
	======================================================================
	Keywords          : kbcode kbMFC kbVC400 kbWndwClass kbGrpDSMFCATL kbArchitecture kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
