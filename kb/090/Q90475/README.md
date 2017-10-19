---
layout: page
title: "Q90475: Using PING.EXE with Windows for Workgroups"
permalink: /kb/090/Q90475/
---

## Q90475: Using PING.EXE with Windows for Workgroups

	Article: Q90475
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PING.EXE is a utility provided with Microsoft LAN Manager 2.1 TCP/IP support.
	This utility does not function properly under Windows for Workgroups.
	
	PING.EXE attempts to spawn NMTSR.EXE out of the LANMAN.DOS\DRIVERS\PROTOCOL\TCPIP
	directory when PING.EXE is initially run. To use PING.EXE, you must have the
	TCP/IP protocol installed in Windows for Workgroups, and you must manually load
	NMTSR.EXE before using PING.EXE.
	
	MORE INFORMATION
	================
	
	PING.EXE is a TCP/IP utility with the Microsoft LAN Manager 2.1 and Windows NT
	products that allows you to see if another machine is active on the network. By
	providing PING.EXE with a specific network address, you can test to see if
	another machine is responding to network broadcasts.
	
	To manually load NMTSR.EXE to be visible in all virtual machines when running
	Windows, start NMTSR.EXE in the AUTOEXEC.BAT file or at the MS-DOS command
	prompt before starting Windows by typing:
	
	  c:\lanman.dos\drivers\protocol\tcpip\nmtsr.exe
	
	Additional query words: 3.10 VM 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
