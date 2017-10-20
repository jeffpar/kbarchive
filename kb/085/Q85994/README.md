---
layout: page
title: "Q85994: Patch Available for BlueMAX 6.x Drivers on PS/2"
permalink: /kb/085/Q85994/
---

## Q85994: Patch Available for BlueMAX 6.x Drivers on PS/2

{% raw %}

	Article: Q85994
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Microsoft Windows version 3.1 with Qualitas BlueMAX memory manager
	versions 6.x for IBM PS/2 computers, you may receive an error messages related
	to the virtual driver BLUEMAX.VXD similar to the following:
	
	  BLUEMAX.VXD A Memory Manager for IBM PS/2 Systems Linked with LoadHi version
	  2.0 Can't find WINDIR environment variable or open KRNL386.EXE. BLUEMAX.VXD
	  Not Loaded, Windows initialization terminated. Press any key to return to
	  DOS...
	
	The above message occurs when you run Windows from a shared directory on a
	network.
	
	RESOLUTION
	==========
	
	To correct this problem, contact Qualitas technical support to obtain the
	software patch for BLUEMAX.SYS: ASQ.EXE, MEMLIMIT.EXE, and BLUEMAX.VXD. This
	patch is also available on the Qualitas bulletin board service (BBS). Download
	the BLPWIN.EXE file. When you run BLPWIN.EXE, it decompresses into the patch
	program.
	
	MORE INFORMATION
	================
	
	If you are receiving a virtual driver (VXD) error message about the EMS cache
	not functioning properly, do the following:
	
	1. Open the AUTOEXEC.BAT file in a standard ASCII text editor (for example,
	  Notepad).
	
	2. Add the following line:
	
	  set emscache=OK
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 ps2 blue max win31 386max 386_max 386-max 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
