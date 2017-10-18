---
layout: page
title: "Q157142: PRB:CFormView/Dialogs Sized Larger Under Win32s/WinNT 3.50"
permalink: kb/157/Q157142/
---

## Q157142: PRB:CFormView/Dialogs Sized Larger Under Win32s/WinNT 3.50

	Article: Q157142
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbOSWinNT310 kbOSWinNT350 kbOSWinNT351 KbUIDesign kbVC210 kbVC220 kbVC4
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CFormViews and Dialogs will appear larger when running under Win32s or versions
	of Windows NT earlier than 3.51. This can cause problems if the dialog template
	was sized so it would fit on a screen in 640x480 resolution or if special sizing
	was done.
	
	CAUSE
	=====
	
	Win32s and versions of Windows NT before 3.51 used bold fonts for dialogs.
	Because dialog templates are designed in dialog units, and dialog units are
	based on the average font size, this will cause the dialogs to be resized.
	
	RESOLUTION
	==========
	
	The easiest workaround is to create two dialog templates: one sized for Windows
	95 and Windows NT 3.51 or later, and one sized for Win32s and Windows NT version
	3.5 or earlier. All of the controls on the two dialog templates should have the
	same ID so they can be used interchangeably with the same CFormView or CDialog
	class.
	
	The sample code below demonstrates this workaround with a default Visual C++ 4.x
	AppWizard-created CFormView derived class.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The font is automatically changed to bold inside the Windows dialog manager
	under Win32s and Windows NT version 3.5 and it is not possible to change this
	behavior. Furthermore, it is not possible to specify a bold version of a font or
	to use the same font on all platforms because the font is specified only by its
	typeface name in the dialog template.
	
	It is easy to change the font inside the dialog or CFormView after it is
	displayed by calling CWnd::SetFont(). However, this will not resize the dialog
	because it is sized based on the font specified in the dialog template.
	
	While it's possible to resize the dialog in the OnInitDialog(), all of the
	controls will also need to be resized. This can be tedious and slow if there are
	a lot of controls in the dialog template.
	
	The following steps show the changes necessary to use multiple dialog templates
	in a Visual C++ 4.x AppWizard-created project.
	
	Sample Code
	-----------
	
	1. Add a static member variable in the CFormView or Dialog to hold the template
	  that is used:
	
	     ////////////////////////////////////////// 
	     // CFormViewView.h
	
	     class CFormViewView : public CFormView
	     {
	
	         /// .... Standard code omitted
	
	     public:
	         //{ {AFX_DATA(CFormtestView)
	         enum{ IDD = IDD_FORMVIEW_REGULAR };
	             // NOTE: the ClassWizard will add data members here
	         //} }AFX_DATA
	         static int m_nIDD; //The ID for the dialog template that is used
	
	     // Attributes
	     public:
	
	         /// .... Standard code omitted
	
	     };
	
	2. Initialize the static member variable, and change the constructor of the
	  CFormView derived class to use it:
	
	     //////////////////////////////////////////////////////////////////////// 
	     // 
	     // CFormViewView.CPP
	
	     //construction/destruction
	
	     //Set the default dialog template to IDD_FORMVIEW_REGULAR
	     int CFormViewView::m_nIDD = IDD_FORMVIEW_REGULAR;
	
	     CFormViewView::CFormViewView()
	         : CFormView(m_nIDD) //Use the static member variable for the
	                             // template
	     {
	
	         /// .... Standard code omitted
	
	     }
	
	3. Before any CFormViews/Dialogs are created, check the version, and use the
	  appropriate template:
	
	     //////////////////////////////////////////////////////////////////////// 
	     /// 
	     // CFormViewApp.CPP
	
	     BOOL CFormViewApp::InitInstance()
	     {
	         /// .... Standard code omitted
	
	        //Check version
	        OSVERSIONINFO osvi;
	        memset(&osvi, 0, sizeof(OSVERSIONINFO));
	        osvi.dwOSVersionInfoSize = sizeof (OSVERSIONINFO);
	        GetVersionEx (&osvi);
	
	        //Set alternative template based on platform
	        if ((osvi.dwPlatformId == VER_PLATFORM_WIN32s) ||
	            ((osvi.dwPlatformId == VER_PLATFORM_WIN32_NT) &&
	             (osvi.dwMajorVersion == 3) && (osvi.dwMinorVersion < 51)))
	           CFormtestView::m_nIDD = IDD_FORMVIEW_BOLD;
	
	         // Dispatch commands specified on the command line
	         if (!ProcessShellCommand(cmdInfo))
	             return FALSE;
	
	         return TRUE;
	     }
	     }
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10 W32s kbdsd
	
	======================================================================
	Keywords          : kbDocView kbMFC kbOSWinNT310 kbOSWinNT350 kbOSWinNT351 KbUIDesign kbVC210 kbVC220 kbVC400 kbVC410 kbOSWin32s kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
