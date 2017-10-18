---
layout: page
title: "Q65880: MDIStat.exe Places a Status Bar in an MDI Frame Window"
permalink: kb/065/Q65880/
---

## Q65880: MDIStat.exe Places a Status Bar in an MDI Frame Window

	Article: Q65880
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbMDI kbGrpDSUser kbOSWin310 kbWndw kbOSWin300
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MDIStat.exe is a sample that demonstrates how to implement a status bar within
	an MDI application.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  MDIStat.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Many applications that employ the Windows multiple document interface (MDI)
	provide information to the user through the use of a status bar at the bottom of
	the application. Microsoft Excel and Microsoft Word for Windows are two examples
	of applications that provide this context-sensitive assistance.
	
	To create a status bar at the bottom of an MDI frame window, do the following:
	
	1. Create an appropriately sized child of the frame window to display the status
	  information.
	
	2. Size the MDI client window so that it does not obscure the status window.
	
	When the frame window changes size, it is necessary to size the MDI client and
	status windows so that the status bar will remain visible.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbMDI kbGrpDSUser kbOSWin310 kbWndw kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
