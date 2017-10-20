---
layout: page
title: "Q87976: HOWTO: Creating a Foundation Classes Dialog Box with Custom Icon"
permalink: /kb/087/Q87976/
---

## Q87976: HOWTO: Creating a Foundation Classes Dialog Box with Custom Icon

{% raw %}

	Article: Q87976
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1
	Operating System(s): 
	Keyword(s): kbDlg kbIcon kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC210 kbGrpDSMFCATL
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Using the Microsoft Foundation Classes supplied with Microsoft C/C++ versions
	7.0 and Microsoft Visual C++, you can create a main application window based on
	a dialog box. However if a dialog is used as the application's main window, and
	the dialog is created with a minimize button and then minimized, the default
	application icon will be displayed. This article briefly describes two
	approaches that can be taken to change the default icon to a custom
	(application-defined) icon.
	
	Starting with Visual C++ 4.0, AppWizard supports creation of dialog based
	applications that have custom icons. The method described in this article works
	with Visual C++ 4.0, but it is preferred to use the AppWizard generated code.
	
	The CFormView class is a useful alternative to the "dialog as main window
	technique" when using Microsoft Foundation Classes, and provides additional
	features. For more information on CFormView, see the documentation supplied with
	Microsoft Visual C++, the VIEWEX and CHKBOOK samples, and query on the following
	words in the Microsoft Knowledge Base:
	
	  CFormView
	
	A discussion of CFormView based applications is beyond the scope of this article.
	
	MORE INFORMATION
	================
	
	One technique for using a dialog as the main window is documented in the "Class
	Libraries User's Guide" which shipped with Microsoft C/C++ version 7.0 on page
	334, and in both versions via the TRACER sample application. Neither of these
	techniques illustrates how to change the default icon to a custom icon.
	
	The first technique below, illustrated with code fragments, shows the
	modifications required to allow the TRACER sample to display a custom icon when
	minimized. This is the simplest approach to the problem.
	
	The second technique is illustrated using a sample from the Software/Data
	Library. While more complex, it illustrates how to use the Windows
	::RegisterClass() API to register a class with an application defined icon.
	
	Add OnPaint to CPromptDlg of the TRACER sample
	----------------------------------------------
	
	This technique will work for versions 1.0 and 2.0 of the Microsoft Foundation
	Classes.
	
	1. Add the following public declarations to the CPromptDlg class definition in
	  tracer.cpp:
	
	    afx_msg void OnPaint();
	    afx_msg BOOL OnEraseBkgnd(CDC* pDC);
	    afx_msg HCURSOR OnQueryDragIcon();
	
	2. Add the following macros to the CPromptDlg message map in tracer.cpp:
	
	    ON_WM_PAINT()
	    ON_WM_ERASEBKGND()
	    ON_WM_QUERYDRAGICON()
	
	3. Add the following function definitions in tracer.cpp:
	
	    void CPromptDlg::OnPaint()
	    {
	       CPaintDC dc(this); // device context for painting
	       if (IsIconic())
	       {
	          // Erase the icon background when placed over other app window
	          DefWindowProc(WM_ICONERASEBKGND, (WORD)dc.m_hDC, 0L);
	
	          // Center the icon
	          CRect rc;
	          GetClientRect(&rc);
	          rc.left = (rc.right  - ::GetSystemMetrics(SM_CXICON)) >> 1;
	          rc.top  = (rc.bottom - ::GetSystemMetrics(SM_CYICON)) >> 1;
	
	          // Draw the icon
	          HICON hIcon = AfxGetApp()->LoadIcon(AFX_IDI_STD_FRAME);
	          dc.DrawIcon(rc.left, rc.top, hIcon);
	       }
	       // Do not call CDialog::OnPaint() for painting messages
	    }
	
	    BOOL CPromptDlg::OnEraseBkgnd(CDC* pDC)
	    {
	       if (IsIconic())
	          return TRUE;
	       else
	          return CDialog::OnEraseBkgnd(pDC);
	    }
	
	    HCURSOR CPromptDlg::OnQueryDragIcon()
	    {
	       return AfxGetApp()->LoadIcon(AFX_IDI_STD_FRAME);
	    }
	
	  In this example, AFX_IDI_STD_FRAME is the ID of an icon contained in the
	  application's resource file, and the dialog template contains the
	  WS_MINIMIZEBOX style.
	
	The PRIVDLG sample program from the Software/Data Library
	---------------------------------------------------------
	
	An example can be found in the Software/Data Library by searching on the word
	PRIVDLG, the Q number of this article, or S13583. PRIVDLG was archived using the
	PKware file-compression utility.
	
	If you are creating a standard frame window, the only step required for your
	application to use a custom icon is to define an icon resource in your .RC file
	with the constant AFX_IDI_STD_FRAME. When the Microsoft Foundation Classes
	libraries register the window class for your frame window, they will use this
	icon as the window icon.
	
	Alternatively, if your application uses a dialog box as its main window, the
	procedure for using a custom icon is a bit more involved. The main reason you
	can't simply use AFX_IDI_STD_FRAME for MFC 1.0 or IDR_MAINFRAME for MFC 2.0 and
	MFC 2.5 is that all Windows dialog boxes use a pre-registered window class, and
	the icon used for this class cannot be changed easily.
	
	The solution is to register a private window class to be used for your dialog
	box. Because the name of this window class must be specified in the dialog
	template, the Microsoft Foundation Classes function AfxRegisterWndClass will not
	work, because it creates a new class name dynamically at run time.
	
	The restrictions on registering your own private dialog class in Microsoft
	Foundation Classes are the same as in standard C Windows programming. For more
	information, query on the following words in the Microsoft Knowledge Base:
	
	  private and dialog and class
	
	To register a private dialog class with a custom icon, do the following three
	steps:
	
	1. Register a new private dialog class using the ::RegisterClass() function with
	  a unique class name. Fill in your own icon for the hIcon field of the
	  WNDCLASS structure, and add your custom icon to the .RC file. This class
	  should only be registered once for your application. Be sure to follow the
	  standard Windows rules for registering a private dialog class (see the
	  Knowledge Base reference above).
	
	2. Add the CLASS "classname" directive to your dialog box resource file, using
	  the unique class name you registered in step 1. Make sure your dialog
	  contains the WS_MINIMIZEBOX style bit if you want to allow the dialog to be
	  minimized.
	
	3. Create a dialog using the template from step 2.
	
	Additional query words: kbinf 7.00 1.00 1.50 2.00 2.50 2.51 2.52
	
	======================================================================
	Keywords          : kbDlg kbIcon kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC210 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
