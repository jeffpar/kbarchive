---
layout: page
title: "Q68752: NEC Prospeed 386 with Math Coprocessor May Hang Windows Setup"
permalink: /kb/068/Q68752/
---

## Q68752: NEC Prospeed 386 with Math Coprocessor May Hang Windows Setup

{% raw %}

	Article: Q68752
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NEC Prospeed 386 Laptop may stop responding (hang) during Microsoft Windows
	setup if a math coprocessor is installed and the jumper to the left of the math
	coprocessor is set incorrectly.
	
	The jumper has three pins. The default settings are pins 2 and 3. Windows
	requires that the jumper be set to pins 1 and 2. This has been confirmed by NEC
	technical support.
	
	NEC Prospeed users should contact NEC technical support or their dealer for
	correct installation instructions.
	
	MORE INFORMATION
	================
	
	If you are using the NEC Docking Station, then the regular AUTOEXEC.BAT and
	CONFIG.SYS files are ignored and files named AUTOEXEC.DS and CONFIG.DS are used.
	You also need to add /M:7 to the HIMEM.SYS line:
	
	  device=c:\HIMEM.SYS /M:7
	
	The NEC Prospeed 386 Laptop Computer is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3rdparty WIN30 3.0 3.00a 3.0a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
