---
layout: page
title: "Q67705: User's Guide Incorrect on Configuring an 8086 or 8088 System"
permalink: /kb/067/Q67705/
---

## Q67705: User's Guide Incorrect on Configuring an 8086 or 8088 System

	Article: Q67705
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	The "Microsoft Windows User's Guide" for version 3.0 contains incorrect
	information in the "Configuring an 8086 or 8088 Computer" near the bottom
	of page 502. The statement reads:
	
	  If your system has an EGA monitor and you run non-Windows applications with
	  Windows in real mode or standard mode, your CONFIG.SYS file should contain a
	  command line like the following:
	
	  device=c:\windows\ega.sys "
	
	An 8086 or 8088 computer cannot run Windows in standard mode. Standard
	mode requires a 80286, 80386, or 80486 microprocessor and extended
	memory.
	
	Additional query words: 3.00 3.00a documentation error win30 docerr KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
