---
layout: page
title: "Q104550: RPLLINK.EXE Allows Dynamic Loading and Unloading of Protocols"
permalink: /kb/104/Q104550/
---

## Q104550: RPLLINK.EXE Allows Dynamic Loading and Unloading of Protocols

	Article: Q104550
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	RPLLINK.EXE, which is run by default after the NET START RDR on an RPL
	workstation, enables the post-boot use of Demand Protocol Architecture (DPA) to
	load and unload protocols dynamically. DPA loading and unloading requires that
	network device drivers be available in the MS-DOS device driver chain, and
	RPLLINK.EXE links device driver chains together so that they are available by
	name to drivers and programs.
	
	You need RPLLINK.EXE only if you are dynamically loading and unloading protocols
	such as TCP/IP, XNS, DLC, or IPX. If you are not, you do not need RPLLINK.EXE,
	in which case you can remove it. Then NetBEUI is loaded statically, as it is
	anyway under RPL, but other protocols are not available for demand loading or
	unloading by means of DPA. If you remove RPLLINK.EXE, you do not need to modify
	CONFIG.SYS, AUTOEXEC.BAT, PROTOCOL.INI, or LANMAN.INI; NetBEUI will be available
	by default. NETBIND.EXE is not the proper binding program to run on an RPL
	client; binding is taken care of in DOSBB.CNF, which you should not modify.
	
	Additional query words: 2.00 2.10 2.10a 2.20 2.0 2.1 2.1a 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
