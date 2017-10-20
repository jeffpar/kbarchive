---
layout: page
title: "Q71669: HOWTO: Preventing an MDI Child Window from Changing Size"
permalink: /kb/071/Q71669/
---

## Q71669: HOWTO: Preventing an MDI Child Window from Changing Size

{% raw %}

	Article: Q71669
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbMDI kbSDKPlatform kbWndw
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an application using the Windows Multiple Document Interface (MDI), MDI child
	windows are always created with a maximize button, a minimize button, and a
	thick "sizing" border. Currently, it is not possible to modify this default
	behavior.
	
	However, it is possible to prevent an MDI child from being maximized, minimized,
	or sized. This can be done by performing two steps:
	
	1. Disable the Maximize, Minimize, and Size options on the child window's system
	  menu.
	
	2. Trap the appropriate WM_SYSCOMMAND messages in the MDI child window's window
	  procedure.
	
	This article contains a sample MDI child window procedure that illustrates this
	technique.
	
	MORE INFORMATION
	================
	
	The following sample MDI child window procedure can be used to implement an MDI
	child that can not be maximized, minimized or sized:
	
	     LONG FAR PASCAL SampleMDIChildWndProc(hWnd, msg, wParam, lParam)
	
	     HWND    hWnd;
	     WORD    msg;
	     WORD    wParam;
	     LONG    lParam;
	
	     // This sample MDI child window procedure can be used to prevent the
	     // MDI child from being maximized, minimized, or sized.
	     // 
	     // Note that the child will still have a maximize button, a minimize
	     // button, and a thick "sizing" border. Currently, there is no way to
	     // prevent Windows from creating MDI children with these default
	     // styles.
	     // 
	     // We can, however, disable the maximizing, minimizing, and sizing
	     // functionality by:
	     // 
	     // 1. Disabling system menu options
	     // 2. Trapping WM_SYSCOMMAND messages
	
	     {
	
	      HMENU    hSystemMenu;    // the MDI child's system menu
	
	      switch (msg)
	          {
	      case WM_INITMENU:
	          // Disable and gray the Maximize, Minimize, and Size items
	          // on the MDI child's system menu
	          hSystemMenu = GetSystemMenu(hWnd, FALSE);
	          EnableMenuItem(hSystemMenu, SC_MAXIMIZE, MF_GRAYED |
	               MF_BYCOMMAND);
	          EnableMenuItem(hSystemMenu, SC_MINIMIZE, MF_GRAYED |
	               MF_BYCOMMAND);
	          EnableMenuItem(hSystemMenu, SC_SIZE, MF_GRAYED |
	               MF_BYCOMMAND);
	          break;
	
	      case WM_SYSCOMMAND:
	          // "Eat" these system commands to disable maximizing,
	          // minimizing, and sizing functionality.
	          // Note that wParam must be combined with 0xFFF0, using
	          // the C bitwise AND (&) operator, when processing
	          // the WM_SYSCOMMAND message.
	          switch (wParam & 0xFFF0)
	              {
	          case SC_MAXIMIZE:
	          case SC_MINIMIZE:
	          case SC_SIZE:
	               return 1L;
	
	          default:
	               break;
	              }
	          break;
	
	      default:
	          break;
	          }
	
	      return DefMDIChildProc(hWnd, msg, wParam, lParam);
	
	  }
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbMDI kbSDKPlatform kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
