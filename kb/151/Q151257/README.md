---
layout: page
title: "Q151257: How to Modify a Report Preview Window Property"
permalink: /kb/151/Q151257/
---

## Q151257: How to Modify a Report Preview Window Property

	Article: Q151257
	Product(s): Microsoft FoxPro
	Version(s): windows:3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): kbvfp600
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some windows attributes related to a Report Preview
	Window. The tasks described in this article are available as commands in
	Microsoft FoxPro version 2.6 for Windows as well as versions 3.0 and 3.0b. This
	article describes how to disable the Minimize and Maximize properties of the
	Report Preview window using API routines.
	
	MORE INFORMATION
	================
	
	It is possible to control whether a Report Preview Window property can be
	changed. The minimize/maximize attributes can be controlled by using some API
	calls. In this article, the customized API routine was written using Microsoft
	Visual C++ 4.0 to change the attribute of Visual FoxPro Preview Window
	properties. As a default, the Visual FoxPro Report Preview Window can be
	minimized or maximized by pressing the upper right-hand corner of the preview
	window. Since the Report Preview Window is a system-generated window, you need
	to call API routines to handle the Preview Window property.
	
	The following sample program illustrates the contents of the .DLL file written in
	Microsoft Visual C++ 4.0. It shows a way to change the attribute of Visual
	FoxPro Report Preview Window successfully through the Win32 SDK.
	
	NOTE: This sample program illustrates many Microsoft Visual C++ commands. The use
	of these commands is beyond the scope of Microsoft FoxPro Product Support. Users
	with substantial experience using API routines should be able to write the
	following sample .DLL file. For this sample .DLL file to work, you need a .DEF
	file to export the disable function.
	
	Sample Program (DLL)
	--------------------
	
	     #include <windows.h>
	
	     #define IDS_MEMVIEWCLASS        11005
	
	     BOOL APIENTRY DllMain(HANDLE hInst, DWORD ul_reason_being_called, LPVOID
	     lpReserved)
	     {
	         return 1;
	             UNREFERENCED_PARAMETER(hInst);
	             UNREFERENCED_PARAMETER(ul_reason_being_called);
	             UNREFERENCED_PARAMETER(lpReserved);
	     }
	
	     void APIENTRY disable(char *title, char *header)
	     {
	           HWND  hWnd,    // a handle for parent window
	              hChild;     // a handle for child window
	
	        // attempt to find the parent window of report preview window
	          hWnd = FindWindow(NULL, title);
	
	          char title1[75];
	
	          // attempt to look for first child window
	          hChild = GetWindow(hWnd,GW_CHILD);
	          while (hChild != 0) {
	             hWnd = hChild;
	           // look for first sibling of child window
	           hChild = GetWindow(hWnd,GW_HWNDNEXT);
	           while (hChild != 0) {
	              hWnd = hChild;
	              GetWindowText(hWnd,title1,75);
	              if (strcmp(title1,header) == 0) {
	                 DWORD L;
	           // disable minimize and maximize button of preview window
	                 L = GetWindowLong(hChild, GWL_STYLE);
	                 L = L & ~(WS_MINIMIZEBOX);
	                 L = L & ~(WS_MAXIMIZEBOX);
	                 SetWindowLong(hChild,GWL_STYLE,L);
	                 // redraw the preview window
	                 SetWindowPos(hChild,NULL,0,0,0,0,
	     SWP_DRAWFRAME|SWP_NOZORDER|SWP_NOMOVE|SWP_NOSIZE);
	                 return;
	              }
	              hChild = GetWindow(hWnd,GW_HWNDNEXT);
	           }
	           hChild = GetWindow(hWnd,GW_CHILD);
	          }
	        return;
	     }
	
	Sample Program (FoxPro)
	-----------------------
	
	     REPORT FORM student PREVIEW NOWAIT
	     DECLARE integer disable IN disable.DLL  string, string
	     FoxHWND = disable("Microsoft Visual FoxPro",;
	        "Report Designer - student.frx - Page 1")
	
	Sample Program (Notes)
	----------------------
	
	- To create a .DLL file in Visual C++, please refer to a Help file in Microsoft
	  Visual C++ 4.0.
	
	- Make a note that the Disable.dll should be in the same directory as your
	  project, or should be in the path of the Windows Win32 directory.
	
	  The API function needs two parameters. The first parameter is the main project
	  window that is usually a Visual FoxPro window. The caption must be identical.
	  The second parameter is the caption of preview window where you want to
	  disable the minimize/maximize buttons. If, for any reason, the program does
	  not work properly, you need to check the captions of those two windows prior
	  to running the program.
	
	Additional query words: VFoxWin akz
	
	======================================================================
	Keywords          : kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : windows:3.0,3.0b,6.0
	
	=============================================================================
	
