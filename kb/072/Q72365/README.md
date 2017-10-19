---
layout: page
title: "Q72365: PC-Kwik Disk Cache Requires VirtualHDIRQ=False"
permalink: /kb/072/Q72365/
---

## Q72365: PC-Kwik Disk Cache Requires VirtualHDIRQ=False

	Article: Q72365
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To operate properly, Super PC-Kwik version 4.0 by Multisoft Corporation requires
	the following setting in the [386Enh] section of the SYSTEM.INI file:
	
	     VirtualHDIRQ=False
	
	MORE INFORMATION
	================
	
	Super PC-Kwik is a third-party disk-caching utility similar to Microsoft
	SMARTDrive. Unlike SMARTDrive, which uses extended or expanded memory for its
	cache buffers, Super PC-Kwik allows the cache buffers to be placed in extended,
	expanded, and conventional memory through command-line switches.
	
	Super PC-Kwik also contains command-line switches that allow for faster writing
	to floppy and hard disk drives. This support is not available unless the
	"VirtualHDIRQ=False" line is added to the SYSTEM.INI file.
	
	PC-Kwik and SoundBlaster
	------------------------
	
	PC-Kwik may also exhibit some problems when working with SoundBlaster under
	Microsoft Windows. Even if there isn't a physical IRQ conflict, SoundBlaster may
	report that it cannot install successfully under Windows. Both PC-Kwik and
	SoundBlaster will appear to function correctly under MS-DOS.
	
	To work around this problem, edit the PCKWIK.INI file and change the following
	settings:
	
	     [pckspl]
	     parallelints=no
	
	This should allow SoundBlaster to work properly.
	
	For more information or for support of Super PC-Kwik, contact Multisoft Technical
	Support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3rdparty WIN30 3.00 3.0 3.00a 3.0a list SYSINI3.TXT readme.txt read me text file fixed 3.1 3.10 quick 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
