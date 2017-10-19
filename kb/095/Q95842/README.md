---
layout: page
title: "Q95842: Windows Network Setup User Directory Files"
permalink: /kb/095/Q95842/
---

## Q95842: Windows Network Setup User Directory Files

	Article: Q95842
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Microsoft Windows 3.0 or Windows 3.1 from an Administrative,
	Shared directory on a local area network (LAN) using the Setup /N command, the
	Setup program prompts you for a drive and path. This creates a user directory on
	the specified drive with all the needed files.
	
	MORE INFORMATION
	================
	
	The following is the directory listing of the Windows 3.0 (5/1/90), Windows 3.0a
	(10/31/90), and Windows 3.1 (3/10/92) network user directory, created by
	installing Windows from a network with the Setup /N command.
	
	Windows 3.0 (5/1/90)            Windows 3.0a (10/31/90)
	--------------------            -----------------------
	
	WIN      INI      1259          WIN      INI      1244
	SYSTEM   INI      1259          SYSTEM   INI      1205
	WIN      COM     19358          WIN      COM     19358
	CONTROL  INI      1578          CONTROL  INI      1578
	SMARTDRV SYS      6866          SMARTDRV SYS      7746
	RAMDRIVE SYS      5719          RAMDRIVE SYS      5719
	EMM386   SYS     60994          EMM386   SYS     60994
	WINVER   EXE      8704          WINVER   EXE      8704
	PROGMAN  INI       201          PROGMAN  INI       201
	MAIN0    GRP      7417          MAIN0    GRP      5064
	ACCESSO0 GRP     12279          ACCESSO0 GRP      7159
	GAMES0   GRP      2506          GAMES0   GRP      1482
	_DEFAULT PIF       545          _DEFAULT PIF       545
	
	13 file(s)     128685 bytes     13 file(s)    120999 bytes
	
	Any additional files in the network user directory are placed there after the
	installation of Windows.
	
	Windows 3.1 (3/10/92)
	
	SYSTEM   INI      1529      WINVER   EXE      3904
	WIN      INI      3294      _DEFAULT PIF       545
	WIN      COM     44170      DOSPRMPT PIF       545
	BOOTLOG  TXT      1181      CONFIG   WIN       414
	MOUSE    INI        24      AUTOEXEC WIN       253
	EMM386   EXE    110174      PROGMAN  INI       205
	MOUSE    COM     56408      REG      DAT      2556
	RAMDRIVE SYS      5873      MAIN     GRP      5828
	SMARTDRV EXE     43609      ACCESSOR GRP      9460
	CONTROL  INI      3609      GAMES    GRP      1482
	HIMEM    SYS     13824      STARTUP  GRP        44
	
	24 file(s)     308931 bytes
	
	For more information, see page 545 of the "Microsoft Windows User's Guide" for
	version 3.0 or page 6 of the "Microsoft Windows Getting Started with Microsoft
	Windows" for version 3.1.
	
	Additional query words: 3.00 3.00a 3.10 3.11 dir
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
