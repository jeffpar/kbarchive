---
layout: page
title: "Q184821: Copydbg.cmd Fails to Copy All of the Symbols from SP3 CD."
permalink: /kb/184/Q184821/
---

## Q184821: Copydbg.cmd Fails to Copy All of the Symbols from SP3 CD.

	Article: Q184821
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Copydbg.cmd utility included on the Windows NT 4.0 Service Pack 3 CD only
	copies over the debugging components and their associated symbols to the
	destination paths included in the command line. It does not copy over the entire
	set of Service Pack 3 symbols to the destination path included in the command
	line.
	
	CAUSE
	=====
	
	The inclusion of the Copydbg.cmd on Windows NT 4.0, Service Pack 3 was intended
	to pull the new build of some of the debugging modules included in the Service
	Pack 3 and copy them and their associated symbols to the destination path
	included in the command line:
	
	For example, if your CD-ROM is drive E, your debugging tools are in D:\Mytools,
	and your .DBG files are in C:\Winnt\Symbols, type the following:
	
	  copydbg e: d:\mytools c:\winnt\symbols
	
	RESOLUTION
	==========
	
	The Windows NT 4.0 Service Pack 3 CD-ROM contains the Service Pack 3 symbols in
	an uncompressed format in the following paths on the CD-ROM:
	
	  "CD-ROM drive letter":\Support\Debug\I386\Symbols Intel
	  "CD-ROM drive letter":\Support\Debug\Alpha\Symbols Alpha
	
	For debugging purposes, the Service Pack 3 symbols can be used directly from the
	above paths on the CD-ROM or copied over to appropriate destinations where the
	debugger(s) are directed to look for symbols.
	
	Additional query words: ntdebug
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
