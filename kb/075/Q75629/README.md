---
layout: page
title: "Q75629: HOWTO: Ending the Windows Session from an Application"
permalink: /kb/075/Q75629/
---

## Q75629: HOWTO: Ending the Windows Session from an Application

{% raw %}

	Article: Q75629
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbprogramming kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw kbUser
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ExitWindows() function permits an application to terminate Windows.
	ExitWindows() restarts Windows by using the EW_RESTARTWINDOWS flag, and exits
	Windows and reboots the system by using the EW_REBOOTSYSTEM flag. These
	constants are consistent for the Win16 Application Programming Interface (API),
	the Win32 API under Windows NT and Win32s.
	
	All applications are sent the WM_QUERYENDSESSION message notifying them that a
	request has been made to restart or terminate Windows. If all applications
	"agree" to terminate, Windows will then send the WM_ENDSESSION message to all
	applications before terminating.
	
	In addition, you can use the ExitWindowsExec() function to terminate Windows. It
	runs a specified MS-DOS-based application and then restarts Windows. It takes
	two parameters:
	
	- A null-terminated string that specifies the path and filename of the
	  executable MS-DOS file to run after terminating Windows.
	
	- A null-terminated string that specifies any parameters for the MS-DOS
	  executable file. This value can be NULL.
	
	The ExitWindowsExec() function is typically used by installation programs to
	replace Windows components (device drivers, system DLL's, and so on) that are
	active when Windows is running.
	
	MORE INFORMATION
	================
	
	In previous versions of Windows, an application sent the WM_ENDSESSION message
	to all windows to close the Windows session. Starting with version 3.0,
	ExitWindows() puts Windows into a special state so that Windows can perform
	housekeeping and unhook system interrupts to cleanly exit to MS-DOS. Because an
	application cannot simulate this Windows special state, the application must
	call the ExitWindows() function to close Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw kbUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
