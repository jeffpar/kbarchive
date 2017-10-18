---
layout: page
title: "Q84980: SAMPLE: XpandDlg.exe Demonstrates Changing Dialog Box Size"
permalink: kb/084/Q84980/
---

## Q84980: SAMPLE: XpandDlg.exe Demonstrates Changing Dialog Box Size

	Article: Q84980
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
	
	The Color dialog box provided by the COMMDLG dynamic-link library (DLL) expands
	to show additional controls when the user chooses the Define Custom Colors
	button. The XpandDlg.exe sample application in the Microsoft Download Center
	demonstrates how an application can implement similar behavior.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  XpandDlg.exe
	  (http://download.microsoft.com/download/platformsdk/sample/5/W31/EN-US/XpandDlg.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The XpandDlg.exe sample implements changing the size of the dialog box through
	the following three steps:
	
	1. Create the dialog box at its large size.
	
	2. Call the MoveWindow() function to size the window to the smaller size when
	  the dialog box procedure receives a WM_INITDIALOG message.
	
	3. To show the remainder of the dialog box on the screen, call MoveWindow()
	  again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDlg kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
