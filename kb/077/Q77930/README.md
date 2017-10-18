---
layout: page
title: "Q77930: INFO: Modifying the System Menu of an MDI Child Window"
permalink: kb/077/Q77930/
---

## Q77930: INFO: Modifying the System Menu of an MDI Child Window

	Article: Q77930
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbMDI kbMenu kbSDKPlatform kbWndw
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The system menu of an Multiple Document Interface (MDI) child can be modified
	only after the WM_CREATE message for the MDI child is processed. If an
	application tries to modify the system menu of an MDI child during the
	processing of the child's WM_CREATE message, the system menu will not be
	changed.
	
	MORE INFORMATION
	================
	
	It is common to try to alter a window's system menu during the processing of its
	WM_CREATE message. This method has no effect on the system menu of an MDI child,
	however, because of the way a MDI child window is created:
	
	1. The MDI client window calls the CreateWindowEx() function to create the
	  window.
	
	2. Then, the MDI client window replaces the default system menu with the special
	  MDI child system menu.
	
	The WM_CREATE message is sent to the child window by CreateWindowEx(). Changes to
	the MDI child's system menu on WM_CREATE have no effect because the MDI client
	assigns a special MDI system menu to the child after CreateWindowEx() returns.
	
	To work around this design decision, the child window procedure can post a custom
	message to itself during the processing of its WM_CREATE message. This custom
	message is processed after the MDI client has finished creating the MDI child.
	The code for this workaround might resemble the following:
	
	     #define WM_ADDMENUITEM (WM_USER+1)
	
	     LONG FAR PASCAL MDIChildWndProc(HWND hWnd,
	
	                                     WORD wMsg,
	                                     WORD wParam,
	                                     LONG lParam)
	
	     {
	
	         switch (wMsg)
	            {
	         case WM_CREATE:
	            PostMessage(hWnd, WM_ADDMENUITEM, 0, 0L);
	            break;
	
	         case WM_ADDMENUITEM:
	            {
	            HMENU        hMenu;
	
	            hMenu = GetSystemMenu(hWnd, FALSE);
	            InsertMenu(hMenu, -1, MF_BYPOSITION, IDM_NEW,
	                  (LPSTR)"New Item\0");
	            DrawMenuBar(hWnd);
	            }
	            break;
	
	         default:
	            return DefMDIChildProc(hWnd, wMsg, wParam, lParam);
	            }
	
	         return 0;
	
	     }
	
	Additional query words: no32bit
	
	======================================================================
	Keywords          : kb16bitonly kbMDI kbMenu kbSDKPlatform kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
