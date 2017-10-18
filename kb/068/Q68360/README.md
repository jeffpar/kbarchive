---
layout: page
title: "Q68360: Control Panel Doesn't Respond to WM_WININICHANGE Messages"
permalink: kb/068/Q68360/
---

## Q68360: Control Panel Doesn't Respond to WM_WININICHANGE Messages

	Article: Q68360
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Control Panel application does not respond to WM_WININICHANGE messages under
	Windows. Microsoft considered including this functionality; however, it was
	decided that, because the Control Panel changes various items in the system
	configuration file (WIN.INI), responding to a WM_WININICHANGE message could
	cause a conflict. (For example, if another application changes the text color
	while the Control Panel has its color dialog displayed, what is the proper
	action for the Control Panel?)
	
	To work around this potential problem, the Control Panel reinitializes itself
	each time a new dialog box is displayed. However, this initialization does not
	involve querying the WIN.INI file with GetProfileString().
	
	MORE INFORMATION
	================
	
	Windows caches the WIN.INI file. Therefore, if a regular text editor (other than
	Notepad) is used to modify the file, the disk file is updated, however, the
	cache is not.
	
	When a WM_WININICHANGE message is broadcast to all top-level windows, each
	application can check the WIN.INI cache for relevant changes. However,
	applications will not look at the WIN.INI file on disk.
	
	One way to update the cache is to exit Windows and restart. Another way to update
	the cache is to call WriteProfileString(NULL,NULL,NULL), which forces a flush of
	the cache. A subsequent call to GetProfileString() will cause the WIN.INI file
	on disk to be read into the cache.
	
	However, the changes will not be reflected by the Control Panel unless the user
	exits and re-enters Windows. Reflecting changes to WIN.INI in the Control Panel
	without first exiting Windows is under consideration for inclusion in a future
	release of Windows.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
