---
layout: page
title: "Q73679: Appropriate Uses of WINMEM32"
permalink: /kb/073/Q73679/
---

## Q73679: Appropriate Uses of WINMEM32

{% raw %}

	Article: Q73679
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
	
	WINMEM32 is a dynamic-link library (DLL) that supports 32-bit flat memory under
	the Microsoft Windows graphical environment. WINMEM32 provides a flat model
	computing environment for applications ported from another operating system to
	Windows. New applications should not be designed using WINMEM32.
	
	MORE INFORMATION
	================
	
	WINMEM32 is designed for an application structured as follows:
	
	    +------------------------+
	     |       Front End        |
	     | Performs all           |
	     | interaction with I/O   |
	     | devices, the user, and |
	     | the operating system.  |
	     +------------------------+
	                /\ 
	                ||
	                ||
	                \/ 
	     +-----------------------+
	     | Computation Engine    |
	     +-----------------------+
	
	The front end application that provides the user interface is a standard
	application for the 16-bit Windows environment. WINMEM32 supports the 32-bit
	"computation engine" that has no user interface and does not interact with any
	peripheral devices or the operating system.
	
	Windows is not designed to support 32-bit applications; WINMEM32 is a temporary
	measure to support an independent software vendors (ISV) with a substantial
	investment in 32-bit code developed for another operating system. Even with
	WINMEM32, porting an application to Windows involves many complex issues that an
	ISV must carefully address for the application to work properly.
	
	Future versions of Windows will address the 32-bit application issues better than
	WINMEM32 does. Future versions of Windows will support WINMEM32 applications
	even though WINMEM32 is not developed any further.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
