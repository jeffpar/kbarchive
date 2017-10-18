---
layout: page
title: "Q136489: PC Ext: External Access Up to 50 NetWare Network Connections"
permalink: kb/136/Q136489/
---

## Q136489: PC Ext: External Access Up to 50 NetWare Network Connections

	Article: Q136489
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The External Mail program, included with Mail for PC Networks, can access up to
	50 network connections by using the Novell NetWare VLM redirector.
	
	NOTE: In earlier versions, External was limited to 8 network connections with the
	older IPX - NETX redirector combination.
	
	MORE INFORMATION
	================
	
	The following CONFIG.SYS, AUTOEXEC.BAT, and NET.CFG sample files provide an
	example configuration for an External workstation:
	
	CONFIG.SYS
	----------
	
	DEVICE=c:\dos\himem.sys
	device=c:\dos\emm386.exe noems
	SHELL=c:\command.com /e /p:512
	BUFFERS=30,0
	FILES=50
	LASTDRIVE=Z
	
	AUTOEXEC.BAT
	------------
	
	@echo off
	PATH=c:\;c:\dosc:\nwclient
	cd \nwclient
	lh lsl
	lh 3c509 (or other Multi-Link Interface Driver (MLID) network card)
	lh ipxodi
	lh vlm
	login {mta login name} {password}
	map f:=sys:maildata
	map g:=server2\sys:maildata
	map h:=server3\sys:maildata
	.
	.
	.   (additional drive mappings as needed)
	.
	.
	.
	external or a batch file that starts external
	
	NET.CFG
	-------
	
	  show dots = on
	  file handles = 50
	
	LINK SUPPORT
	  buffers 8 1586
	  Mempool 4096
	
	Link Driver 3c509
	  port 300
	  int 10
	  Frame Ethernet_802.3
	  Protocol IPX 0 Ethernet_802.3
	NetWare DOS Requestor
	  First Network Drive = F
	  Connections = 50
	
	NOTE: The indentions in the NET.CFG file are required.
	
	For more information about the NetWare VLM redirector, please refer to "Inside
	NetWare 3.12" by Debra Niedermiller-Chaffins and Drew Hetwood published by New
	Riders Publishing.
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
