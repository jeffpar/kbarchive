---
layout: page
title: "Q99803: MDIWinMN.exe Customizes MDI Window Menu"
permalink: /kb/099/Q99803/
---

## Q99803: MDIWinMN.exe Customizes MDI Window Menu

{% raw %}

	Article: Q99803
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbMDI kbGrpDSUser kbWndw
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MDIWinMN.exe is a sample that demonstrates how to customize the Window menu of a
	multiple document interface (MDI) frame window. MDIWinMN.exe shows you how to
	limit the number of listed MDI children in the Window menu to any number and how
	to bring up a customized dialog box when the More Windows menu item is selected.
	This sample also shows how to list all the MDI children in the Window menu
	without using a More Windows menu item.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	MDIWinMN.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	To compile MDIWinMN.exe, type NMAKE to build the sample. This sample limits the
	number of MDI child windows listed in the Window menu and brings up the
	customized dialog box when the More Windows menu item is selected. Type NMAKE
	MENU=NOLIMIT to build the sample that lists all the the MDI children in the
	Window menu without using a More Windows menu item.
	
	You need to make the following changes in the window procedure of the MDI frame
	window to customize the Window menu:
	
	1. Specify NULL as the Window menu handle when creating the MDI client, because
	  the application handles all the processing of the Window menu:
	
	        CLIENTCREATESTRUCT ccs;
	        ccs.hWindowMenu  = NULL;
	        ccs.idFirstChild = IDM_FIRSTCHILD;
	
	2. Update the Window menu using ChangeWindowMenu() when the frame window
	  receives WM_INITMENUPOPUP. ChangeWindowMenu() is implemented in the sample
	  code:
	
	       case WM_INITMENUPOPUP:
	            if ((HMENU)wParam == hMenuWindow)
	               ChangeWindowMenu(hMenuWindow);
	            break;
	
	3. Call ProcessWindowMenu() in the default processing of WM_COMMAND received by
	  the frame window. ProcessWindowMenu() is implemented in the sample code:
	
	       case WM_COMMAND:
	        {
	            switch (wParam)
	            {
	                :
	                :
	             default:
	                if (ProcessWindowMenu(wParam))
	                      return 0L;
	                else return DefFrameProc(hwnd, g_hwndMDIClient,
	                                        msg, wParam, lParam);
	             }
	        }
	
	ChangeWindowMenu() removes the old listing of MDI children from the Window menu.
	It then enumerates the MDI child windows and adds their names to the Window menu
	so the Window menu reflects the current state when shown.
	
	ProcessWindowMenu() processes WM_COMMAND messages that result from menu
	selections of MDI children in the Window menu. It also brings up a customized
	dialog box when the More Windows menu item is selected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbMDI kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
