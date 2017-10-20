---
layout: page
title: "Q84129: DbMenu.exe Demonstrates How to Add Menus to Dialog Box"
permalink: /kb/084/Q84129/
---

## Q84129: DbMenu.exe Demonstrates How to Add Menus to Dialog Box

{% raw %}

	Article: Q84129
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDlg kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DbMenu.exe is a sample in the Microsoft Download Center that demonstrates how to
	add menus to a dialog box. Placing a menu on a dialog box is not part of the
	Common User Access (CUA) standard, however, Windows does support it.
	
	This article discusses some requirements that must be observed to use a menu on a
	dialog box.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DbMenu.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To properly use a menu on a dialog box, an application must use certain dialog
	box styles and avoid others. For the user to traverse a dialog box menu using
	the LEFT and RIGHT ARROW keys, the dialog box must have both the WS_CAPTION and
	WS_SYSMENU styles. The WS_SYSMENU style adds a system menu to the dialog box. To
	enable the user to close the dialog box by choosing Close from the system menu,
	process the WM_COMMAND message in the dialog box procedure. If wParam is set to
	IDCANCEL, the user has closed the dialog box in this manner.
	
	The dialog box must not use the DS_MODALFRAME style because the menu is not
	painted properly when this style is specified. If desired, use the WS_BORDER
	style to place a thin black border around the dialog box. Do not use the
	WS_CHILD style in any dialog box. Include the WS_VISIBLE style to ensure that
	the dialog box is drawn on the screen.
	
	Accelerator keys can be used only on modeless dialog boxes created by one of the
	CreateDialog* functions. An application processes accelerator keys by calling
	the TranslateAccelerator() function in its main message loop. Modal dialog boxes
	have a "private" message loop and the application cannot insert the necessary
	call to TranslateAccelerator().
	
	An application can simulate a modal dialog box with a modeless dialog box by
	calling EnableWindow() to disable the application's main window once the dialog
	box is displayed. The application must call EnableWindow() to enable the main
	window before destroying the modeless dialog box.
	
	Do not use the following key combinations as accelerators: CTRL+H, CTRL+I, and
	CTRL+M. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q67293 Some CTRL Accelerator Keys Conflict with Edit Controls
	
	The following code demonstrates the additional function calls needed in the main
	message loop for an application to process accelerator keys on a modeless dialog
	box:
	
	Sample Code
	-----------
	
	    // Accelerators for the main window and dialog are in the same
	     // accelerator table
	     hAccel = LoadAccelerators(ghInstance, "ACCELTABLE");
	
	     while (GetMessage(&msg, NULL, NULL, NULL))
	     {
	        // Determine the destination for this message
	        hWndAccel = GetActiveWindow();
	
	        if (!(hWndAccel
	              && TranslateAccelerator(hWndAccel, hAccel, (LPMSG)&msg)))
	        {
	           // Note: If the dialog does not exist, ghModelessDlg is 0
	           if (!(ghModelessDlg && IsDialogMessage(ghModelessDlg, &msg)))
	           {
	              TranslateMessage(&msg);
	              DispatchMessage(&msg);
	           }
	        }
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDlg kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
