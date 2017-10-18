---
layout: page
title: "Q74795: HOWTO: Use PeekMessage() Loops in a Dialog Box"
permalink: kb/074/Q74795/
---

## Q74795: HOWTO: Use PeekMessage() Loops in a Dialog Box

	Article: Q74795
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbcode kbDlg kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbFAQ kbOSWin300 kbwin16sdkfaq
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a modal dialog box is created, Windows uses its own message loop, which is
	stored in USER. If the application takes responsibility for processing messages
	[using a PeekMessage() loop], then IsDialogMessage() must be used to pass
	appropriate messages to the dialog box.
	
	The following code fragment demonstrates the correct technique:
	
	   bFlag = TRUE;
	
	    while ((bFlag) || (PeekMessage(&message, hDlg, 0, 0, PM_REMOVE)))
	      {
	      if (!IsDialogMessage(hDlg, &message))
	        {
	        TranslateMessage(&message);
	        DispatchMessage(&message);
	        }
	      }
	
	If technique is not used, accelerator keys in the dialog box will not function
	properly.
	
	For additional information on the proper use of PeekMessage() loops, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q67293 Some CTRL Accelerator Keys Conflict with Edit Controls
	
	  Q108936 Using a Dialog Box as the Main Window of an Application
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDlg kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbFAQ kbOSWin300 kbwin16sdkfaq 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
