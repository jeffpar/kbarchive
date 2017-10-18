---
layout: page
title: "Q94925: DOC: SetTimer() Unclearly Documented in Programmer's Ref"
permalink: kb/094/Q94925/
---

## Q94925: DOC: SetTimer() Unclearly Documented in Programmer's Ref

	Article: Q94925
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbSDKPlatform kbGrpDSUser kbWndwMsg
	Last Modified: 12-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The explanation of the SetTimer() function in the Windows 3.1 Software
	Development Kit (SDK) "Programmer's Reference, Volume 2: Functions" is unclear
	about the use of the idTimer parameter and the function's return value. For
	example,
	
	- It should be more clearly explained that the idTimer parameter is used only
	  if the value of hwnd is not NULL. If the hwnd parameter is NULL, SetTimer's
	  return value is used for the timer ID.
	
	- The return value of SetTimer should be more clearly explained. That is, if
	  the call to SetTimer successfully installs a timer, it returns a nonzero
	  value; if the call fails to install a timer, it returns zero.
	
	MORE INFORMATION
	================
	
	Below are excerpts from the Windows 3.1 SDK "Programmer's Reference, Volume 2:
	Functions," followed by paragraphs that provide more details.
	
	Page 874 states the following:
	
	  idTimer
	
	     Specifies a nonzero timer identifier. If the hwnd parameter is NULL,
	     this parameter is ignored.
	
	This could be replaced with the following:
	
	  idTimer
	
	     This value is used to specify a nonzero timer identifier if the hwnd
	     parameter is not NULL. If hwnd is NULL, this parameter is ignored and
	     cannot be used as a timer identifier.
	
	The "Return Value" section on page 875 states the following:
	
	The return value is the identifier of the new timer if hwnd is NULL and the
	function is successful. An application passes this value to the KillTimer
	function to kill the timer. The return value is nonzero if hwnd is a valid
	window handle and the function is successful. Otherwise, the return value is
	zero. Another way to explain the SetTimer() return value is as follows:
	
	SetTimer returns a nonzero value if the timer was installed. If a timer could not
	be installed, SetTimer returns zero.
	
	If the hwnd parameter is NULL and SetTimer returns a nonzero value, the return
	value specifies the timer ID to be used in a call to KillTimer.
	
	If the hwnd parameter is not NULL and SetTimer returns a nonzero value, the
	idTimer parameter specifies the timer ID to be used in a call to KillTimer. In
	this case, the return value only signifies that SetTimer succeeded.
	
	Charles Petzold's "Programming Windows" (Microsoft Press) contains an entire
	chapter on using timers in Windows applications.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbSDKPlatform kbGrpDSUser kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
