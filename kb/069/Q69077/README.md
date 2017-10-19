---
layout: page
title: "Q69077: IsDialog.exe - Simulates a Dialog Box"
permalink: /kb/069/Q69077/
---

## Q69077: IsDialog.exe - Simulates a Dialog Box

	Article: Q69077
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbDlg kbOSWin2000 kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbOSWin300
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a sample program in the Microsoft Download Center named ISDIALOG that
	demonstrates how to create a window, add controls, and use the IsDialogMessage
	function to make the window act like a dialog box. This technique can be used in
	cases where superclassing a dialog box is too costly or not possible.
	
	By using a conventional window and not using the Dialog Manager, the application
	is free to add or remove dialog functionality as necessary.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Isdialog.EXE
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: ISDIALOG.EXE
	
	======================================================================
	Keywords          : kbfile kbDlg kbOSWin2000 kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
