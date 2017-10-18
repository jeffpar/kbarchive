---
layout: page
title: "Q35499: Expand.exe Expands the Size of a Dialog Box"
permalink: kb/035/Q35499/
---

## Q35499: Expand.exe Expands the Size of a Dialog Box

	Article: Q35499
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbDlg kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Expand.exe is a sample that demonstrates how to create a dialog box that expands
	to provide additional controls when the user clicks on a button control.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Expand.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The remainder of this article describes the algorithm demonstrated in the EXPAND
	file.
	
	To use an expanding dialog box in an application, perform the following two
	preparation steps:
	
	1. Design the entire dialog box and determine what controls will not be
	  initially visible.
	
	2. Disable these hidden controls in the dialog box template by including the
	  WS_DISABLED style bit. This prevents the TAB key or the appropriate mnemonic
	  key from giving the focus to one of the hidden controls.
	
	When the user clicks the "expand" button, perform the following five steps:
	
	1. Disable the expand button using EnableWindow(hWnd, FALSE).
	
	2. Enable the previously hidden controls using EnableWindow(hWnd, TRUE).
	
	3. Use SetFocus() to place the focus on the appropriate control.
	
	4. Use the following function to retrieve the current position and size of the
	  dialog:
	
	  GetWindowRect(hWndDlg, (LPRECT)&r);
	
	5. Use the following function to expand the dialog to its new size
	
	  MoveWindow(hWndDlg, r.left, r.top, r.right - r.left,
	  (r.bottom - r.top) + change, TRUE);
	
	  where "change" is the difference between the small size and the large size.
	
	Note that the MoveWindow() function can be used to expand a window in any
	direction.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbDlg kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
