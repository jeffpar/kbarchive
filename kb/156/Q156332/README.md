---
layout: page
title: "Q156332: Low Free Conventional Memory with OEM Service Release 2"
permalink: kb/156/Q156332/
---

## Q156332: Low Free Conventional Memory with OEM Service Release 2

	Article: Q156332
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running OEM Service Release 2 (OSR2), there may not be enough free
	conventional memory.
	
	CAUSE
	=====
	
	Buffers are being loaded into conventional memory.
	
	RESOLUTION
	==========
	
	Add the following lines to the Config.sys file in the root folder of the boot
	drive, and then restart your computer:
	
	  DOS=HIGH,UMB
	  DEVICE=C:\WINDOWS\HIMEM.SYS
	  DEVICE=C:\WINDOWS\SETVER.EXE
	  DEVICE=C:\WINDOWS\IFSHLP.SYS
	  BUFFERS=13
	
	MORE INFORMATION
	================
	
	When a "buffers=" value is not specified in the Config.sys file, buffers are set
	to 23. Buffers are loaded into the High Memory Area (HMA) if space allows.
	Io.sys and Msdos.sys are also normally loaded into the HMA, leaving insufficient
	room to store 23 buffers. The buffers are therefore loaded into conventional
	memory, creating the low memory situation.
	
	Additional query words: out
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	
