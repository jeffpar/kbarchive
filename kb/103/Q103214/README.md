---
layout: page
title: "Q103214: Updating the Screen Without Flicker"
permalink: kb/103/Q103214/
---

## Q103214: Updating the Screen Without Flicker

	Article: Q103214
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbSDKWin16
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a technique for drawing to a window Device Context (DC)
	in such a way that the screen does not flicker. The technique is very simple and
	easy to implement.
	
	Many applications written for the Microsoft Windows operating system maintain
	status information such as the current time in a small control window that
	flickers very annoyingly each time it's updated. All standard Windows controls
	flicker if updated at frequent intervals. The solution to this problem is to
	implement a simple control and use an off-screen device context (DC) to
	construct the image, which is then copied in total to the client area of the
	control window. The net result is a control that can be updated without causing
	any flicker.
	
	FLICKER has window procedures for two controls--one of these flickers; the other
	one doesn't. The application creates an instance of each of these controls and
	updates the window text ten times every second to show how one flickers and the
	other doesn't. Both controls support the system text color, window background
	color, and the WM_SETTEXT and WM_SETFONT messages.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Flicker.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: kbfile softlib FLICKER.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
