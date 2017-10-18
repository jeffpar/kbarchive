---
layout: page
title: "Q73737: DOSSWAP.EXE Problem Occurs When Swap Not Allowed"
permalink: kb/073/Q73737/
---

## Q73737: DOSSWAP.EXE Problem Occurs When Swap Not Allowed

	Article: Q73737
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a problem in MS-DOS version 5.0 Task Swapper that can cause mysterious
	failures after a task switch request is not allowed.
	
	A task switch request is prevented whenever you attempt to switch tasks by
	pressing ALT+TAB or ALT+ESC when task switching could cause a problem for the
	application. When the request is prevented, the machine beeps, and the task
	switch does not occur.
	
	If you find that erratic behavior occurs after you are not allowed to perform a
	task switch, you should obtain the above application note.
	
	MORE INFORMATION
	================
	
	A task switch request is disallowed under the following circumstances:
	
	- If you are running an application that is MS-DOS Shell Task Switcher aware
	  and you press ALT+TAB to switch, Task Swapper may disallow the call because
	  the application has notified MS-DOS Shell not to swap it. For example, Novell
	  NetWare never allows task switches while it is servicing any MS-DOS function
	  (INT 21) call over the network.
	
	- If you run any application that uses netBIOS asynchronous API (for example,
	  VTP or an SQL application in a session), Task Swapper automatically disallows
	  any switch request to avoid possible problems.
	
	In either of the above cases, the value in the CX register will be destroyed. The
	affect of the CX register being destroyed will vary, depending on what the
	application was storing there.
	
	Additional query words: appnote 5.00 dosshell dosswap kbfest
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
