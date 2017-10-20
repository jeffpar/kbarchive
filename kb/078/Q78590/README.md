---
layout: page
title: "Q78590: Xerox XC 6060 Computer Hangs with MS-DOS ANSI.SYS"
permalink: /kb/078/Q78590/
---

## Q78590: Xerox XC 6060 Computer Hangs with MS-DOS ANSI.SYS

{% raw %}

	Article: Q78590
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Xerox has confirmed that when attempting to load ANSI.SYS from Microsoft MS- DOS
	Upgrade on a XEROX XC 6060 8086 computer, the system may hang or have screen
	scrolling difficulties.
	
	To boot successfully or to correct screen problems, add the /S parameter to the
	ANSI.SYS line in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	The XEROX xc 6060 computer screen may have difficulties performing the clear
	screen (CLS) function and with displaying a scrolling directory. To fix this
	behavior, Xerox recommends using the following syntax for ANSI.SYS in the
	CONFIG.SYS file:
	
	  device=[drive:]\[path]ansi.sys /s
	
	The /S parameter for ANSI.SYS is an undocumented switch that will force the
	display into 25-line mode.
	
	The Xerox xc 6060 computer is essentially the same computer as the ATT
	
	1. For more information query on the following words:
	
	  ATT 6300 and ANSI.SYS
	
	Additional query words: 3rdparty 6.22 5.00 5.00a 6.00 6.20 hang LOCK-UP
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
