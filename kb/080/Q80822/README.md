---
layout: page
title: "Q80822: NoSwitch.exe Prevents Windows from Switching Tasks"
permalink: /kb/080/Q80822/
---

## Q80822: NoSwitch.exe Prevents Windows from Switching Tasks

{% raw %}

	Article: Q80822
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbOSWin300
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NoSwitch.exe is a sample application that demonstrates how an application can
	disable the task switch. Certain types of applications, such as security
	applications and possibly some setup programs, require the ability to disable
	task switching under Windows. To disable task switching, the program must
	prevent the user from accessing the Task List, using mouse or keystroke
	combinations to switch to other applications, and so forth.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	NoSwitch.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOSWITCH demonstrates how an application can disable task switching. The
	application must take the following four steps to disable task switching:
	
	1. Subclass the desktop window to prevent the Task List from being displayed
	  when the user double-clicks the desktop window.
	
	2. Prevent the user from using key combinations to switch to another task by
	  trapping the following three wParam values for the WM_SYSCOMMAND message:
	  SC_NEXTWINDOW, SC_PREVWINDOW, and SC_TASKLIST.
	
	3. Prevent other applications from activating themselves by enumerating all
	  top-level windows, and disabling the windows that do not belong to this
	  application.
	
	4. Each time a WM_INITMEMUPOPUP message is received for the system menu, disable
	  the menu items that relate to switching tasks.
	
	Before exiting the application, reverse the effects of any actions taken to
	prevent switching tasks. Refer to the NOSWITCH sample for complete details.
	
	There is a simpler, more limited, method to disable task switching. If the
	application is run as a maximized window, then step 2 above is enough to prevent
	switching tasks. However, the application must prevent the window from being
	restored or minimized. The limitation to this method is that the application
	must run as a maximized window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
