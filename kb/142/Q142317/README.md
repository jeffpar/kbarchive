---
layout: page
title: "Q142317: HOWTO: How to Create a Minimized/Maximized MDI Child Window"
permalink: /kb/142/Q142317/
---

## Q142317: HOWTO: How to Create a Minimized/Maximized MDI Child Window

{% raw %}

	Article: Q142317
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To create an initially minimized or maximized document in an MDI application,
	derive a class from CMDIChildWnd and override ActivateFrame(). In the
	ActivateFrame() member function, call the ActivateFrame() function in the base
	class, and pass SW_SHOWMINIMIZED or SW_SHOWMAXIMIZED as the parameter.
	
	MORE INFORMATION
	================
	
	If you're using a version of Visual C++ earlier than 4.0, it is necessary to
	derive a class from CMDIChildWnd and substitute the new class name in the
	CMultiDocTemplate used in your CWinApp-derived InitInstance() function. To do
	so, use ClassWizard to add a class called CChildFrame derived from CMDIChildWnd.
	Include the header file in your application's .cpp file. Then change the line
	indicated below in your InitInstance() function:
	
	      CMultiDocTemplate* pDocTemplate;
	      pDocTemplate = new CMultiDocTemplate(
	          IDR_MDIAPPTYPE,
	          RUNTIME_CLASS(CMDIAppDoc),
	          RUNTIME_CLASS(CChildFrame), // change CMDIChildWnd to CChildFrame
	          RUNTIME_CLASS(CMDIAppView));
	      AddDocTemplate(pDocTemplate);
	
	In Visual C++ 4.0, deriving a class from CMDIChildWnd is not required because one
	is already provided for you.
	
	In the CChildFrame class, override the ActivateFrame() member function as
	follows:
	
	  void CChildFrame::ActivateFrame(int nCmdShow)
	  {
	      if (nCmdShow == -1)
	          nCmdShow = SW_SHOWMAXIMIZED;
	
	      CMDIChildWnd::ActivateFrame(nCmdShow);
	  }
	
	Additional query words: kbinf 1.00 2.00 2.10 2.20 4.00 1.50 PreCreateWindow CREATESTRUCT CChildFrame Maximized WS_MAXIMIZE Cs.style
	
	======================================================================
	Keywords          : kbDocView kbMFC KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
