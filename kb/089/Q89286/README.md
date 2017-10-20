---
layout: page
title: "Q89286: Real and Standard Modes Preclude Switching from Emulator"
permalink: /kb/089/Q89286/
---

## Q89286: Real and Standard Modes Preclude Switching from Emulator

{% raw %}

	Article: Q89286
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running an MS-DOS 3270 or 5250 emulation package under Windows 3.0 in real
	or standard mode, or Windows 3.1 in standard mode, you cannot switch away from
	the emulator back to Windows without losing connection.
	
	MORE INFORMATION
	================
	
	Most emulator packages that allow a workstation to connect to mini and mainframe
	computers expect to have constant communication or they timeout. MS-DOS-based
	applications in real and standard mode run exclusive. This means they do not
	function when you switch away from them.
	
	Some companies have written terminate-and-stay-resident (TSR) programs that their
	3270 packages to be switched away from without losing connection. Contact your
	vendor to see if the package you are using supports this functionality.
	
	This problem does not occur in 386 enhanced mode because MS-DOS-based
	applications can be set by using its PIF to operate in the background.
	
	Additional query words: 3.00 3.00a 3.10 3.11 5250 irma wall 3270 hp banyan novell 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
