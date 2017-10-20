---
layout: page
title: "Q88761: HP Mouse Stops in Windows"
permalink: /kb/088/Q88761/
---

## Q88761: HP Mouse Stops in Windows

{% raw %}

	Article: Q88761
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	A Hewlett-Packard HP-HIL mouse may stop in Windows 3.0 and 3.1 for one
	of two possible reasons:
	
	- The HP-HIL mouse may connect to the computer keyboard on some Hewlett-Packard
	  (HP) Vectra machines and will not move while disk I/O is taking place. This
	  is a hardware limitation of this mouse model and is not a Windows problem.
	  The problem may be less evident outside of Windows because normal MS-DOS is
	  not a multitasking environment.
	
	- Using an older Hewlett-Packard (HP) MS-DOS mouse driver (MOUSE.COM or
	  MOUSE.SYS) with Windows versions 3.0 and 3.1 can cause the HP-HIL Mouse to
	  freeze when switching between MS-DOS-based applications.
	
	  The Microsoft MS-DOS mouse drivers will NOT recognize the HP HIL Mouse. The HP
	  mouse driver must be used. Use the MOUSEHP.CO_ and MOUSEHP.SY_ from the
	  Windows disks, and use the EXPAND utility to expand them into MOUSEHP.SYS and
	  MOUSEHP.COM.
	
	Additional query words: 3.00 3.00a 3.10 3.11 hang crash stop freeze lock 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
