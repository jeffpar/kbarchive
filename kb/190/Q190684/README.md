---
layout: page
title: "Q190684: HOWTO: Insert a Splash Screen into a Dialog-Based Application"
permalink: kb/190/Q190684/
---

## Q190684: HOWTO: Insert a Splash Screen into a Dialog-Based Application

	Article: Q190684
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbwizard kbDlg kbMFC kbVC kbVC500 kbVC600 kbCompGallery kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Component Gallery, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual C++ Component Gallery allows one to insert a variety of standard
	components into applications. Using the gallery, one can easily insert a splash
	screen into MFC SDI and MDI applications. However, the Visual C++ Component
	Gallery does not allow insertion of a splash screen into a dialog- based
	application. In addition, the documentation for the splash screen component is
	contradictory and confusing concerning its use in dialog-based applications.
	This article shows the steps to add a splash screen to an MFC dialog-based
	application.
	
	MORE INFORMATION
	================
	
	When trying to insert a splash screen into a dialog-based application using the
	component gallery, you may get an error message that says a mainframe class can
	not be found. The splash screen component was written to work only in MFC SDI
	and MDI applications. However, the component code can be used in a dialog-based
	application by following a few steps:
	
	1. Build a default SDI application with AppWizard. (This step is necessary just
	  to get the component code inserted in step 2.)
	
	2. On the VC++ 5.0 Project menu, click "Add to Project," click "Components and
	  Controls...", then double-click "Developer Studio Components." Highlight the
	  "Splash screen" component, and click Insert.
	
	3. Build a dialog-based application with AppWizard.
	
	4. Take the two files (Splash.cpp, and Splash.h) produced in step 1, and add
	  them to the dialog-based application's project (step 2).
	
	5. Override the PreTranslateMessage() for the dialog class. One can do this by
	  opening up ClassWizard and choosing PreTranslateMessage() from the Messages
	  list box. Add the following two lines at the top of the function:
	
	        if (CSplashWnd::PreTranslateAppMessage(pMsg))
	             return TRUE;
	
	6. Add the following two lines to the dialog class's OnInitDialog():
	
	        CSplashWnd::EnableSplashScreen(TRUE);
	        CSplashWnd::ShowSplashScreen(this);
	
	7. Add the following line to the top of the dialog class' implementation file:
	
	        #include "splash.h"
	
	8. Create a bitmap resource for the splash screen with the ID of IDB_SPLASH.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q172336 PRB: Assertion Launching Program with Tip of Day & Splash Screen
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbwizard kbDlg kbMFC kbVC kbVC500 kbVC600 kbCompGallery kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbCompGallery
	Version           : winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
