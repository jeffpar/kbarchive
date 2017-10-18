---
layout: page
title: "Q85203: SAMPLE: StatBar.exe Demonstrates Window Status Bar"
permalink: kb/085/Q85203/
---

## Q85203: SAMPLE: StatBar.exe Demonstrates Window Status Bar

	Article: Q85203
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbOSWin300
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	StatBar.exe is a sample in the Microsoft Download Center that demonstrates how
	to create a status bar for an application. An application can implement a status
	bar at the bottom of its main window to provide information to the user. For
	example, Microsoft Word for Windows and Microsoft Excel for Windows provide
	status bars. The status bar in these applications presents the state of the CAPS
	LOCK key, insert mode, extended selection mode, and so forth.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  StatBar.exe
	  (http://download.microsoft.com/download/platformsdk/sample67/3.1/W31/EN-US/StatBar.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The STATBAR application creates the status bar when its main window receives a
	WM_CREATE message. Each time the main window receives a WM_KEYUP message, the
	application determines whether the released key is a "toggle key," such as the
	CAPS LOCK, NUM LOCK, or INS key. If so, the application draws the status bar to
	reflect the current state of the toggle key that changed state. When the status
	bar receives a WM_PAINT message, the status bar repaints its entire client area.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
