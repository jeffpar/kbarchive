---
layout: page
title: "Q180438: Problems If Screen Saver Password Is More Than 14 Characters"
permalink: kb/180/Q180438/
---

## Q180438: Problems If Screen Saver Password Is More Than 14 Characters

	Article: Q180438
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you specify a screen saver password that contains more than 14 characters,
	one of the following symptoms may occur:
	
	- If the password contains 15 to 19 characters, the Windows Screen Saver dialog
	  box does not appear when you try to stop the screen saver. As a result, you
	  can stop the screen saver without typing the screen saver password.
	
	- If the password contains more than 19 characters, your computer stops
	  responding (hangs), or you receive the following error message when you try
	  to set the screen saver password:
	
	  MPREXE caused an invalid page fault in module
	  MPRSERV.DLL at <address>.
	
	CAUSE
	=====
	
	This problem can occur if the screen saver password is copied into an improperly
	sized internal buffer. If this occurs, internal status code values and values
	that are currently stored in memory may be damaged, leading to the symptoms
	described earlier.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This problem only affects the initial processing of a new screen saver password.
	Passwords up to 14 characters in length function properly.
	
	Additional query words: screensaver
	
	======================================================================
	Keywords          : kbenv kberrmsg osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
