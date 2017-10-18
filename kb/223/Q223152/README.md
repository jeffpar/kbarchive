---
layout: page
title: "Q223152: PRB: Error 0x80004005 Using Comctl32-Based MFC ActiveX Control"
permalink: kb/223/Q223152/
---

## Q223152: PRB: Error 0x80004005 Using Comctl32-Based MFC ActiveX Control

	Article: Q223152
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCmnCtrls kbCOMt kbCtrl kbMFC kbVBp500 kbVBp600 kbVC500 kbVC600 kbDSupport k
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC ActiveX control that subclasses any of the window classes implemented by
	Comctl32.dll causes the following error to be thrown from a Visual Basic 6.0
	.exe.
	
	  "System Error &H80004005 (-2147467259). Unspecified error"
	
	The debug version of the ActiveX control causes an ASSERT in file Ctlcore.cpp, at
	the end of COleControl::CreateControlWindow, on or near line 662.
	
	This problem occurs only when you build an .exe from Visual Basic 6.0 and run it
	from outside the Visual Basic development environment.
	
	CAUSE
	=====
	
	Microsoft Visual Basic executables do not initialize the common control library
	(Comctl32.dll) by default, resulting in the CreateEx call failing in
	COleControl::CreateControlWindow. Calling GetLastError() gives 0x0000057F -
	Cannot find window class, which indicates the common control library needs to be
	explicitly initialized.
	
	RESOLUTION
	==========
	
	Inside the InitInstance of your ActiveX control, make a call to:
	
	  InitCommonControls(void)
	
	or
	
	  InitCommonControlsEx(LPINITCOMMONCONTROLSEX lpInitCtrls)
	
	This ensures that Comctl32.dll is loaded and initialized, regardless of the
	container the control is running in.
	
	Instead of calling InitCommonControls from the control's code, you can also call
	it directly from the Visual Basic client application:
	
	- Make a General declaration for the corresponding Form; for example:
	
	  Private Declare Sub InitCommonControls Lib "comctl32.dll" ()
	
	- Add a call to:
	
	  InitCommonControls
	
	in the Form_Load method.
	In some situations, this might be too late to initialize the common controls
	library. Therefore, it is recommended to add this call in the InitInstance of
	the control.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Visual C++, MFC ActiveX control wizard, create a default ActiveX
	  control.
	
	2. In the Control Settings section of the AppWizard (Step 2 of the Visual C++
	  6.0 AppWizard), in the window class to subclass, choose one of the following:
	  msctls_hotkey32, msctls_progress32, msctls_statusbar32, msctls_trackbar32,
	  msctls_updown32, SysAnimate32, SysHeader32, SysListView32, SysTabControl32,
	  or SysTreeView32.
	
	3. Build the control.
	
	4. Open Microsoft Visual Basic 6.0 and create a new Standard Exe project.
	
	5. From the Project menu, click Components, and select the control that you just
	  created using Microsoft Visual C++.
	
	6. Select this control and draw that in the Form window.
	
	7. From the File menu, click Make Project.exe, and build the exe.
	
	8. Go to Windows Explorer and run this executable.
	
	Additional query words: comctl32.dll MFC VB
	
	======================================================================
	Keywords          : kbActiveX kbCmnCtrls kbCOMt kbCtrl kbMFC kbVBp500 kbVBp600 kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
