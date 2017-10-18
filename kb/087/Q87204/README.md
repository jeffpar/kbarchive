---
layout: page
title: "Q87204: PROFS: How the Different Software Layers Communicate on the PC"
permalink: kb/087/Q87204/
---

## Q87204: PROFS: How the Different Software Layers Communicate on the PC

	Article: Q87204
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the PROFS gateway PC is running, several different software products work
	together to communicate with the gateway VM ID and the mail system database on
	the local-area network (LAN).
	
	The Gateway PC loads the gateway program from its hard disk or from a server. The
	gateway program (HostDisp or VMGATE) then communicates with the mail system
	database using MS-DOS file I/O. This normally takes place through a network
	operating system and the associated network protocol, which allows the gateway
	to read and write files on the server.
	
	Also, the gateway program uses the 3270 emulation and file transfer programs to
	exchange messages with the gateway VM ID. The gateway program talks directly to
	the 3270 API to converse with the host, and spawns the SEND and RECEIVE programs
	in order to transfer files.
	
	
	Additional query words: 3.00 pcmail profslan
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
