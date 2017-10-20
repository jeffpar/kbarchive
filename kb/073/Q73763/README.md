---
layout: page
title: "Q73763: Sysgen Driver Version 3.41 Required with Windows"
permalink: /kb/073/Q73763/
---

## Q73763: Sysgen Driver Version 3.41 Required with Windows

{% raw %}

	Article: Q73763
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To work correctly under Microsoft Windows versions 3.0 or 3.1, some Sysgen
	external floppy drives require Sysgen driver version 3.41 or later.
	
	NOTE: The version 3.41 driver only works if SMARTDRV.SYS is removed from the
	CONFIG.SYS or AUTOEXEC.BAT file. If you do not remove SMARTDRV.SYS, your system
	automatically accesses drive A upon entering Windows. Version 3.44 of the Sysgen
	driver corrects the conflict with SMARTDRV.SYS.
	
	MORE INFORMATION
	================
	
	Sysgen floppy drives and required drivers are as follows:
	
	  Floppy Drive Name         Driver Version
	  ----------------------------------------
	  Bridgefile                3.44
	  Easy Floppy               3.02
	  Omni Bridge               3.50
	  Value Store               1.xx
	
	NOTE: Sysgen is no longer in business and all support is being handled by Value
	Store Technical support at (408) 945-4188.
	
	The Sysgen products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.1 bridge BRIDGE.DRV BRIDGE.SYS 3rdparty KBHW reads starts startup win31 load a: win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
