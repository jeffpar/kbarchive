---
layout: page
title: "Q74999: BtnBar.exe Demonstrates a Button Bar"
permalink: /kb/074/Q74999/
---

## Q74999: BtnBar.exe Demonstrates a Button Bar

	Article: Q74999
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbSDKPlatform kbGrpDSUser
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The file BtnBar.exe in the Microsoft Software Library demonstrates one method of
	adding a button bar to an application, such as the toolbar, which is found in
	Microsoft Excel.
	
	MORE INFORMATION
	================
	
	For the button bar to correctly interact with the Multiple Document Interface
	(MDI) functions of Windows, the client window must be resized to avoid painting
	problems. The code in the BTNBAR file is designed to be merged into the MULTIPAD
	sample application that is provided with the Windows SDK.
	
	The remainder of this article provides some information on the design of this
	button bar implementation.
	
	Each button on the button bar is defined in an array of TOOL structures, which is
	defined as follows:
	
	     typedef struct tagTOOL
	
	      {
	      HICON     hIcon;             // 2
	      WORD      CommandID;         // 2
	      BOOL      bEnabled;          // 2
	      WORD      x, y, dx, dy;      // 8
	      }                            // --
	
	    TOOL;                          // 14 bytes total
	
	To conserve system resources, the determination that a given button has been
	pressed is done by performing hit testing, instead of creating separate buttons.
	Hit testing is demonstrated in Charles Petzold's "Checkers" program, presented
	in the "Microsoft Systems Journal."
	
	This implementation of the button bar uses icons to label the buttons. The
	DrawTool() function draws a plain button with a gray face and dark edges, to
	simulate a three-dimensional object. Then, the icon specified in the structure
	is drawn over the button. This icon must use the "screen" color for its
	background color. This places the icon image on the button with minimal coding
	effort.
	
	When the user clicks on a button, the button bar code sends a WM_COMMAND message
	to the main window (ghWnd). The wParam parameter of this message is set to the
	CommandID value.
	
	REFERENCES
	==========
	
	The following files are available for download from the Microsoft Download
	Center:
	
	BtnBar.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
