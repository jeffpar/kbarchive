---
layout: page
title: "Q251402: PRB: Windows Hook Stops Responding in a 16-Bit Application"
permalink: kb/251/Q251402/
---

## Q251402: PRB: Windows Hook Stops Responding in a 16-Bit Application

	Article: Q251402
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:4.0,95
	Operating System(s): 
	Keyword(s): kbHook kbGrpDSUser kbOSWin95 kbOSWin98 kbDSupport
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 4.0, on platform(s):
	   - Microsoft Windows 98 
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A global Windows hook, for example a mouse hook, stops responding (crashes) when
	triggered by a 16-bit application.
	
	CAUSE
	=====
	
	The problem occurs when the hook dynamic-link library (DLL) is built by using
	the Visual C++ 6.0 Service Pack 2 (SP2) development environment. The problem
	also occurs when the hook project is using the multithreaded DLL C run-time
	library (/MD) option.
	
	The Libcmt.lib file that is replaced by SP2 has a bug that can cause this type of
	behavior. The versions of Libcmt.lib from SP1 and SP3 do not exhibit this
	behavior.
	
	RESOLUTION
	==========
	
	To prevent this problem, do not use Libcmt.lib from Visual C++ version 6.0 SP2.
	Either install Visual C++ 6.0 SP1 or Visual C++ 6.0 SP3, or use Libcmt.lib from
	a Visual C++ 6.0 SP1 or SP3 installation and rebuild the DLL.
	
	If you are using the /MD or multithreaded DLL C run-time library option, you must
	switch to the static multithreaded option (/MT).
	
	STATUS
	======
	
	This problem is caused by a regression bug in the Visual C++ version 6.0 SP2
	development environment.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build a system-wide keyboard/mouse hook by using Visual C++ 6.0 SP2.
	
	2. Install the system-wide hook.
	
	3. Start any 16-bit application.
	
	4. When mouse (in the case of a mouse hook) or keyboard (in the case of a
	  keyboard hook) input occurs on the 16-bit application, the program stops
	  responding (crashes).
	
	Alternatively:
	
	1. Build a system-wide keyboard/mouse hook by using the /MD compiler switch.
	
	2. Install the system-wide hook.
	
	3. Start any 16-bit application.
	
	4. When mouse (in the case of a mouse hook) or keyboard (in the case of a
	  keyboard hook) input occurs on the 16-bit application, the program stops
	  responding (crashes).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHook kbGrpDSUser kbOSWin95 kbOSWin98 kbDSupport 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : WINDOWS:4.0,95
	Issue type        : kbprb
	
	=============================================================================
	
