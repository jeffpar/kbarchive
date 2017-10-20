---
layout: page
title: "Q42458: PRB: FatalExit 0x0001 Possible If WM_CTLCOLOR Used Improperly"
permalink: /kb/042/Q42458/
---

## Q42458: PRB: FatalExit 0x0001 Possible If WM_CTLCOLOR Used Improperly

{% raw %}

	Article: Q42458
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbDlg kbSDKPlatform kbGrpDSUser
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	An application can change the colors of a dialog box by creating a brush of the
	desired color and processing the WM_CTLCOLOR message to return a handle to the
	brush. If the brush is not a stock object, the application should create the
	brush before the dialog box is displayed and store its handle in a global or
	static variable. Do not use the following code in a dialog box procedure:
	
	     case WM_CTLCOLOR:  // Create green edit fields
	        if (HIWORD(lParam) == CTLCOLOR_EDIT)
	           return CreateSolidBrush(RGB(0, 255, 0));
	        break;
	
	Windows sends a WM_CTLCOLOR message to the dialog box procedure each time any
	changes are made to the dialog box (such as when the user presses a button or
	moves the focus to a new control). In the code above, each time the application
	processes a WM_CTLCOLOR message for an edit control, the application creates a
	new brush which is stored in the GDI data segment. If the GDI data segment fills
	completely, Windows generates a FatalExit 0x0001 (insufficient memory for
	allocation) error for each subsequent allocation.
	
	MORE INFORMATION
	================
	
	To avoid this error, modify the application to call the CreateSolidBrush
	function once, either outside the application's message loop or during the
	processing of the WM_CREATE message. Store the returned brush handle in a global
	or static variable. An advantage of this method is that the brush can be used in
	any part of the application without consuming any additional system resources.
	
	The following code provides a skeleton for the WinMain procedure and for the
	dialog procedure to implement this method:
	
	     // WinMain
	     HBRUSH  hBrushGreen; // Global variable
	
	     WinMain (...)
	     {
	        // Register window class and create window
	
	        hBrushGreen = CreateSolidBrush(RGB(0, 255, 0));
	
	        while (GetMessage(...))
	          {
	          TranslateMessage(...);
	          DispatchMessage(...);
	          }
	
	        DeleteObject(hBrushGreen);
	        return msg.wparam;
	     }
	
	     // Dialog box procedure
	        case WM_CTLCOLOR: // Green edit fields
	           if (HIWORD(lParam) == CTLCOLOR_EDIT)
	              return hBrushGreen;
	           break;
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbDlg kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
