---
layout: page
title: "Q100650: Internal Processing Error at 0270:0Bf8 with LMSM"
permalink: /kb/100/Q100650/
---

## Q100650: Internal Processing Error at 0270:0Bf8 with LMSM

	Article: Q100650
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When you reboot after installing LAN Manager services for Macintosh version 1.0
	on a system with LAN Manager version 2.1 or 2.1a and TCP/IP, you get an internal
	processing error at location 0270:0BF8 and the machine hangs.
	
	CAUSE
	=====
	
	The LAN Manager services for Macintosh work with NetBEUI, but encounter this
	problem with TCP/IP because of conflicts created by the ordering of TCP/IP and
	Appletalk drivers in the CONFIG.SYS file.
	
	WORKAROUND
	==========
	
	Edit the Device= and Run= lines in the CONFIG.SYS file so that the Appletalk
	drivers are listed first.
	
	1. Boot from the HPFS recovery disk for the HPFS file system or from an MS-DOS
	  diskette for the FAT file system.
	
	2. Copy the CONFIG.SYS file to a floppy disk so you can modify it on another
	  workstation. Rearrange the appropriate lines so that the Appletalk drivers
	  precede the TCP/IP drivers. Use this order:
	
	     Device=c:\lanman\drivers\protocol\appltalk\atalk2\atalk2.os2
	     Run=c:\lanman\drivers\protocol\appltalk\atalkini.exe
	
	3. Save CONFIG.SYS and copy it back to the server.
	
	4. Reboot the server.
	
	This problem doesn't occur if LAN Manager version 2.2 and LAN Manager Services
	for Macintosh version 1.0a are used.
	
	Additional query words: sfm 1.30 lm 2.2 2.20 2.1a 2.10a LMSF
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
