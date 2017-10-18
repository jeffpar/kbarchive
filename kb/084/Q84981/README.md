---
layout: page
title: "Q84981: Code Demonstrates Keeping an Icon Fixed in Place"
permalink: kb/084/Q84981/
---

## Q84981: Code Demonstrates Keeping an Icon Fixed in Place

	Article: Q84981
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some applications are designed to place an icon at a fixed location on the
	screen where the icon must remain. One application of this type is the FIXDICON
	sample in the Microsoft Download Center. When the user minimizes the
	application, it draws an icon on the screen. If the user drags the icon with the
	mouse, the icon "snaps back" to its specified position. If the user chooses the
	Arrange Icons button in the Task Manager's Task List, the icon appears
	momentarily at a new position assigned by Windows. Then it returns to the
	position assigned by the application.
	
	In the FIXDICON sample, the window procedure for the main window processes the
	WM_MOVE message. If the window is represented as an icon, the application calls
	the SetWindowPos function to position the icon at its specified position.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Fixdicon.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: softlib FIXDICON.EXE kbfile
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
