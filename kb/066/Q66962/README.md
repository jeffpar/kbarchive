---
layout: page
title: "Q66962: Dell 316LT and Dell 320LT Require EMMExclude with Windows 3.0"
permalink: /kb/066/Q66962/
---

## Q66962: Dell 316LT and Dell 320LT Require EMMExclude with Windows 3.0

{% raw %}

	Article: Q66962
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	To run Microsoft Windows version 3.0 in 386 enhanced mode on a Dell 316LT,
	316SX, or 320LT laptop computer, the following EMMExclude lines under the
	[386ENH] section of the SYSTEM.INI file are required:
	
	     EMMExclude = E000 - EFFF
	     EMMExclude = C000 - C7FF
	
	MORE INFORMATION
	================
	
	These high-memory page segments are used for extended video RAM and RAM BIOS
	shadowing. However, the segments may appear to be free when Windows starts in
	386 enhanced mode. Windows may attempt to use these memory segments while
	operating, which will corrupt the video RAM or the BIOS shadowing. This may
	cause UAEs, crashing, or lock-ups of the I/O devices (keyboard, mouse, and so
	on).
	
	For more information about Dell computers, call Dell technical support.
	
	The products included here are manufactured by Dell, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW 3rdparty winmem win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
