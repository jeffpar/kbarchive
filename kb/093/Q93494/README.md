---
layout: page
title: "Q93494: TCP NODE Problem on OS/2 Workstations and Peer Servers"
permalink: /kb/093/Q93494/
---

## Q93494: TCP NODE Problem on OS/2 Workstations and Peer Servers

	Article: Q93494
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	  If you have the TCP/IP NODE service installed on your OS/2 1.3 LAN Manager
	  2.1a workstation and you run NET START WORKSTATION, the Net 3056 error
	
	  file not found
	
	  is displayed.
	
	CAUSE
	=====
	
	  There is a problem when installing the TCP/IP NODE service with the LAN
	  Manager Setup program during OS/2 PEER Server installation as well as OS/2
	  Workstation installation. The DE.EXE program is not being copied from the
	  disk into the \LANMAN\SERVICES directory.
	
	RESOLUTION
	==========
	
	  Use the DECOMP.EXE program in the \LANMAN\NETPROG directory and decompress
	  NODE.EX$ from the OS/2 Server disk as follows:
	
	  Place the OS/2 Server disk into the disk drive (for example, drive A) and
	  enter the following command (all on one line):
	
	     c:\lanman\netprog\decomp a:\services\NODE.EX$
	     c:\lanman\services\NODE.EXE
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
