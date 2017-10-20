---
layout: page
title: "Q78410: System Hangs with dBase III 1.0 or III+ 1.0"
permalink: /kb/078/Q78410/
---

## Q78410: System Hangs with dBase III 1.0 or III+ 1.0

{% raw %}

	Article: Q78410
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Borland/Ashton-Tate has confirmed that dBase III version 1.0 and dBase III+
	version 1.0 may cause your system to stop responding (hang) if HIMEM.SYS is
	installed.
	
	CAUSE
	=====
	
	dBase III 1.0 and III+ 1.0 include a feature called SuperLock that conflicts
	with HIMEM.SYS. According to Borland/Ashton-Tate, SuperLock is a copy-protection
	feature that allows you to install dBase III 1.0 and III+ 1.0 only once to a
	hard drive.
	
	WORKAROUND
	==========
	
	Adding the /CPUCLOCK:ON switch to the HIMEM.SYS line in your CONFIG.SYS file may
	resolve this conflict. If you are using dBase III or III+, add the following
	line to your CONFIG.SYS file
	
	     device=[drive]:\[dir]\himem.sys /cpuclock:on
	
	where "[drive]" and "[dir]" indicate the location of the HIMEM.SYS driver.
	
	The /CPUCLOCK:ON switch slows HIMEM.SYS, allowing it to wait longer for signals.
	This affects the speed of HIMEM.SYS, but not the system clock speed. Early
	versions of dBase were written for slower machines.
	
	MORE INFORMATION
	================
	
	
	For more information, contact Borland/Ashton-Tate technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 lock up plus ashton tate 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
