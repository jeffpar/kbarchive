---
layout: page
title: "Q192347: PRB: Focus/Activation Problems with MFC Control on VB Forms"
permalink: /kb/192/Q192347/
---

## Q192347: PRB: Focus/Activation Problems with MFC Control on VB Forms

	Article: Q192347
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbActiveX kbMFC kbVBp500 kbVBp600 kbVC500 kbVC600 kbGrpDSVB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have an ActiveX control created in Visual C++ using the Microsoft Foundation
	Classes (MFC). When two of these controls reside on different Visual Basic MDI
	child forms, and you attempt to switch from one form to another by clicking on
	the controls, focus shifts to the control, but the expected Activate/Deactivate
	form events do not occur. Code in the events does not run, and the Active Title
	Bar does not switch as expected. Under Windows 2000, the Activate/Deativate form
	events do fire as expected, but the Active Title Bar still does not switch as
	expected.
	
	CAUSE
	=====
	
	Windows MDI child activation is based on the MDI client window getting the
	WM_PARENTNOTIFY message. A control created in MFC has a window style of
	WS_EX_NOPARENTNOTIFY by default. This suppresses the parent notification
	message, causing the problem described above.
	
	RESOLUTION
	==========
	
	To resolve this problem, change the window style of the control. There are two
	ways to accomplish this. Resolution #1 requires alteration of the control's
	source code. It is the recommended solution, but does require source code
	access. Resolution #2 presents a way to resolve this situation in the Visual
	Basic client application. Resolution #2 has one requirement: The control must
	expose an hWnd property.
	
	NOTE: The hWnd property is a stock property of an MFC control, but by default it
	is private to the control.
	
	If you do not have access to the control's source code, and the hWnd property has
	not been exposed, then neither of these solutions works.
	
	Resolution #1
	-------------
	
	Change the window style of the control in PreCreateWindow. This example uses a
	hypothetical control named CPushCtrl, derived from the button class.
	
	Sample Code
	-----------
	
	     BOOL CPushCtrl::PreCreateWindow(CREATESTRUCT& cs)
	     {
	       cs.lpszClass = _T("BUTTON");
	       cs.style |= BS_PUSHBUTTON | BS_OWNERDRAW;
	
	        // The next statement allows the Visual Basic Child forms to get
	        // focus correctly.
	       if (cs.dwExStyle & WS_EX_NOPARENTNOTIFY)
	          cs.dwExStyle -= WS_EX_NOPARENTNOTIFY;
	
	       return COleControl::PreCreateWindow(cs);
	     }
	
	Resolution #2
	-------------
	
	If it is not possible to change the code for the control, you can use the Win32
	API from the Visual Basic client to change this value.
	
	1. Add the following code to a BAS module, and add the module to any project
	  that uses the ActiveX control:
	
	        Declare Function SetWindowLong Lib "user32" Alias "SetWindowLongA" _
	         (ByVal hwnd As Long, ByVal nIndex As Long, _
	           ByVal dwNewLong As Long) As Long
	        Declare Function GetWindowLong Lib "user32" Alias "GetWindowLongA" _
	         (ByVal hwnd As Long, ByVal nIndex As Long) As Long
	
	        Public Sub fixWindowStyle(handle As Long)
	           Dim ret As Long
	           Dim b As Boolean
	           ret = GetWindowLong(handle, -20)
	           ret = ret - 4
	           b = SetWindowLong(handle, -20, ret)
	        End Sub
	
	2. Add the following code to the Load Event for any form hosting the ActiveX
	  control. (The control name is Push1 in this example):
	
	        fixWindowStyle (Push1.hwnd)
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbActiveX kbMFC kbVBp500 kbVBp600 kbVC500 kbVC600 kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0,6.0; winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
