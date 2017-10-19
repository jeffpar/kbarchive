---
layout: page
title: "Q177341: HOWTO: Remove the Sizing Grip from a Status Bar"
permalink: /kb/177/Q177341/
---

## Q177341: HOWTO: Remove the Sizing Grip from a Status Bar

	Article: Q177341
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbMFC KbUIDesign kbVC kbVC500 kbVC600 kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A status bar control has diagonal lines in the lower right corner, called the
	sizing grip, that can be used to resize the window. Occasionally, you will
	remove this grip to prevent the user from resizing the window.
	
	For instance, you have removed the WS_THICKFRAME style to prevent the mainframe
	window from resizing. If the user moves the sizing grip and resizes the status
	bar, painting problems can occur.
	
	MORE INFORMATION
	================
	
	You can remove the sizing grip by deriving a class from CStatusBar and
	overriding PreCreateWindow() to change the styles that are used. Inside of
	PreCreateWindow(), you must also remove the SBARS_SIZEGRIP style. For example:
	
	     BOOL CMyStatusbar::PreCreateWindow(CREATESTRUCT& cs)
	     {
	        // TODO: Modify the Window class or styles here by modifying
	        // the CREATESTRUCT cs.
	
	        cs.style &= ~SBARS_SIZEGRIP;
	
	        return CStatusBar::PreCreateWindow(cs);
	     }
	
	You can then replace your custom CStatusBar derived class with the default.
	
	For example, if this is the status bar in the main frame window, include the
	header file for your CStatusBar derived class in your Mainfrm.h file. Also, in
	your Mainfrm.h file, change the declaration of the status bar created in your
	Mainfrm.cpp file to use that class.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99161 HOWTO: Derive From Classes not Listed in ClassWizard
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbMFC KbUIDesign kbVC kbVC500 kbVC600 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
