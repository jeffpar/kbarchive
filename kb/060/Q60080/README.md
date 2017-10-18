---
layout: page
title: "Q60080: Codepage Support Setup Information"
permalink: kb/060/Q60080/
---

## Q60080: Codepage Support Setup Information

	Article: Q60080
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS version 3.30 introduced the use of codepages. Codepages can
	only be used with devices that have codepage support files (such as EGA or LCD
	displays, or some printers). To install a different codepage on your system, you
	need to add certain commands to your CONFIG.SYS and AUTOEXEC.BAT files.
	
	MORE INFORMATION
	================
	
	The following commands should be added to your CONFIG.SYS file to add codepage
	support
	
	  DEVICE=[drive:][path]DISPLAY.SYS con=(<devname>,yyy,2)
	  COUNTRY=xxx[,[yyy],[drive:][path]country.sys
	
	where: xxx is the country code
	yyy is the default codepage used by the machine hardware (in North America, this
	is usually 437).
	
	The following lines should be added to your AUTOEXEC.BAT file to add codepage
	support
	
	  nlsfunc
	  mode <device> codepage prepare=((www)[drive:][path]<devname>.cpi)
	  chcp www
	  mode <device> codepage select=www
	  keyb zz,www,[drive:][path]<devname>.cpi
	
	where:
	
	  www is the codepage for the country
	  zz is a two-letter keyboard code
	  <device> is the device to support codepage switching
	  <devname> is the name of the codepage information file
	
	Listed below is a sample codepage setup that demonstrates what changes need to be
	made to your CONFIG.SYS and AUTOEXEC.BAT files so that you can use the Norwegian
	Codepage on a system with an EGA display:
	
	  rem CONFIG.SYS
	  files=30
	  buffers=30
	  device=e:\dos\display.sys con=(ega,437,2)
	  country=001,437,e:\dos\country.sys
	  rem AUTOEXEC.BAT
	  nlsfunc
	  mode con codepage prepare=((850)e:\dos\ega.cpi)
	  chcp 850
	  mode con codepage select=850
	  keyb us,850,e:\dos\keyboard.sys
	
	Additional query words: 6.22 3.30 3.30a 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20 code page
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
