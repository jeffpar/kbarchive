---
layout: page
title: "Q83234: MDIRest.exe Saves and Restores Window Size &amp; Position"
permalink: /kb/083/Q83234/
---

## Q83234: MDIRest.exe Saves and Restores Window Size &amp; Position

{% raw %}

	Article: Q83234
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbMDI kbOSWin2000 kbGrpDSUser kbWndw
	Last Modified: 09-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MDIRest.exe is a sample that demonstrates how to use GetWindowPlacement() to
	save the state of all windows in a multiple document interface (MDI) application
	when the application shuts down. When the user runs the application a second
	time, SetWindowPlacement() uses the stored information to restore the state of
	the windows.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  MDIRest.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Many applications available today allow the user to store the size and position
	of the application's main window in an initialization file. The next time the
	user runs the application, the stored size and position information is used to
	create the main window. The Windows File Manager and Program Manager are
	examples of applications that save and restore size and position information.
	
	Under Windows 3.0, many operations are required to retrieve the normal size and
	position for a window if it is maximized or minimized. Under Windows 3.1, the
	GetWindowPlacement() function has been provided to perform this task.
	GetWindowPlacement() provides the size and position of a restored window at all
	times, even when the window is minimized or maximized. The SetWindowPlacement()
	function allows an application to change its restored size and position at all
	times.
	
	The GetWindowPlacement() function stores the following information regarding a
	specified window into a WINDOWPLACEMENT structure:
	
	- Its current state (maximized, minimized or normal).
	
	- Its maximized position.
	
	- Its minimized position.
	
	- The rectangle that the window occupies in its normal position.
	
	The SetWindowPlacement() function restores a specified window to the state
	described by a WINDOWPLACEMENT structure.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbMDI kbOSWin2000 kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
