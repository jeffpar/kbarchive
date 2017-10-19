---
layout: page
title: "Q97446: Third Party Software Shares Files on NetWare"
permalink: /kb/097/Q97446/
---

## Q97446: Third Party Software Shares Files on NetWare

	Article: Q97446
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	NetWare has a FLAG function with which you can set file access permissions to
	read, write, or share. Some third party software can run on NetWare with FLAG
	set to shareable but cannot share files on LAN Manager 2.1.
	
	FLAG is similar in function to MS-NET compatibility mode. The heuristic reacts
	differently when you use HPFS386.
	
	Check the value for SRVHEURISTIC 11, which controls the way the server regulates
	access to .EXE, .COM and .BAT files when more than one workstation requests
	access. Try setting it 0 (always use compatibility mode).
	
	You can also check heuristic 5, which supports file control block (FCB) opens.
	This heuristic is useful only with MS-DOS workstations on the network. The
	default is 1 (active).
	
	REFERENCES
	==========
	
	Microsoft LAN Manager "Administrator's Reference," version 2.1, pp. 245 and 247;
	version 2.2, pp. 259 - 264.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
