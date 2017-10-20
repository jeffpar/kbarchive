---
layout: page
title: "Q85849: MicroSpeed FastTrap Mouse and Windows 3.1"
permalink: /kb/085/Q85849/
---

## Q85849: MicroSpeed FastTrap Mouse and Windows 3.1

{% raw %}

	Article: Q85849
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MicroSpeed has confirmed that its three-button FastTrap Mouse only works in
	two-button mode in Windows version 3.1.
	
	MORE INFORMATION
	================
	
	According to MicroSpeed, to use the FastTrap mouse in two-button mode with the
	drag-lock option, the "Microsoft, or IBM PS/2" mouse driver should be selected
	in the Windows 3.1 Setup, and the MicroSpeed MS-DOS-level mouse driver (MAP.SYS
	or MAP.COM) version 2.1 must be loaded with the /D switch as follows:
	
	In the CONFIG.SYS File
	----------------------
	
	  Device=C:\MAP.SYS /D
	
	  -or-
	
	In the AUTOEXEC.BAT File
	------------------------
	
	  Device=C:\MAP.COM /D
	
	For more information on the FastTrap mouse, contact MicroSpeed at (510)
	490-1403.
	
	The product included here (MicroSpeed FastTrap) is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this products' performance or reliability.
	
	
	Additional query words: 3.10 3.1 micro speed
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
