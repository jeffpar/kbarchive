---
layout: page
title: "Q63915: Tandy 2500 XL ROM DOS Needs Configuration Setup"
permalink: /kb/063/Q63915/
---

## Q63915: Tandy 2500 XL ROM DOS Needs Configuration Setup

{% raw %}

	Article: Q63915
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	Unlike other PCs, the Tandy 2500 XL has MS-DOS in ROM. By default, the
	Tandy 2500 XL does not read the CONFIG.SYS and AUTOEXEC.BAT file so any
	changes Microsoft Windows makes to CONFIG.SYS and AUTOEXEC.BAT are not read
	by the system.
	
	To disable this feature, run the CMOS Setup program for the Tandy and turn
	on the settings for the "Check for Config.sys" and "Check for
	Autoexec.bat."
	
	The default for the ROM DOS files and buffers is 10. This can also be
	changed through the Tandy system Setup program.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
