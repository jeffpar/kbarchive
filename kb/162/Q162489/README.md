---
layout: page
title: "Q162489: Server Fails w/ SNA Server Event 624 and SnaBase Event 686"
permalink: /kb/162/Q162489/
---

## Q162489: Server Fails w/ SNA Server Event 624 and SnaBase Event 686

	Article: Q162489
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server may fail suddenly with the following errors logged to the Windows NT
	Application Event log:
	
	  Event: 624
	  Source: SNA Server
	  Description: Creating dump file C:\SNA\traces\snadump.log for
	  Snaservr.exe
	
	NOTE: The failure may also occur in Snabase.exe.
	
	  Event: 686
	  Source: SnaBase
	  Description: SNA Server Internal buffer pool error.
	  Reason = Invalid Owner Id
	  Module = C:\SNA\system\SNABASE.EXE
	  Process = 241
	  Pool = TRUSTED ELTS
	  Details = Current Owner Id B4H, Correct ID 15EA15EAH
	
	  Event: 4097
	  Source: DrWatson
	
	In addition, the <Ntroot>\Drwtsn32.log indicates the entry summarized
	below:
	
	  Application exception occurred:
	        App: snaservr.DBG (pid=<process ID>)
	        When: <date and time>
	        Exception number: c0000005 (access violation)
	
	 State Dump for Thread Id <thread ID>
	
	  function: CopyToSnapsBuffers
	    [...]
	          00b639ca 8bca             mov     ecx,edx
	          00b639cc c1e902           shr     ecx,0x2
	  FAULT ->00b639cf f3a5            rep  movsd ds:4a9c1ffe=????????
	
	NOTE: The failure has been observed in other routines as well, since buffer pool
	corruption can cause a number of random access violations in any SNA component
	(for example, Snaservr.exe, Snabase.exe, Snalink.exe, Snaadmin.exe, and so on).
	
	CAUSE
	=====
	
	A 3270 emulator sends an invalid 3270 Emulator Interface (EIS) message to SNA
	Server, which SNA Server is not properly rejecting. This problem can occur if a
	3270 emulator sends an EIS message where
	
	- the startd and endd were both larger than the actual message size
	
	  and
	
	- endd was set larger than startd.
	
	This problem can occur over any SNA Server client-server interface (that is,
	named pipes, TCP/IP sockets, Netware IPX/SPX, or Banyan IP).
	
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 Service Pack 1 is available for SNA Server. This
	update enhances verification checking on incoming messages from 3270 client
	emulators, to protect the server from encountering an access violation. With
	this update applied, if such an invalid message is received from a 3270 client,
	the following process occurs:
	
	- invalid messages detected
	
	- an Event 631 is logged in the Windows NT application event log and the
	  address of the offending client is indicated
	
	- the message is dropped (that is, is not processed), possibly causing the
	  client to hang, but preventing a server-side access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.0, 2.1,
	2.11, and 2.11 Service Pack 1. This problem does not occur with SNA Server 3.0.
	This problem was corrected in the latest SNA Server version 2.11 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: Dr. Watson prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	
	=============================================================================
	
