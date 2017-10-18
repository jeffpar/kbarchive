---
layout: page
title: "Q151215: XFOR: Exchange PCMTA Writes to SENT and RECV Logs"
permalink: kb/151/Q151215/
---

## Q151215: XFOR: Exchange PCMTA Writes to SENT and RECV Logs

	Article: Q151215
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange PCMTA writes to both the Send.log and Recv.log for any
	Microsoft Mail Postoffice (PO) it serves. These are the only text logs that the
	PCMTA writes to. All diagnostic logging is kept in the Windows NT Event Viewer
	on the computer where the PCMTA is running.
	
	The PCMTA logs the .MAI hex number for both incoming and outgoing mail.
	
	An example Recv.log:
	
	DATE RECEIVED   SIZE  FROM                   TO
	-------------   ----  ----                   --
	05/17/96 09:39  1239  NETWORK/REMOTEPO/ADMIN NETWORK/LOCALPO/ADMIN        *
	00000306
	
	In this Recv.log file, 00000306 is the hex number for the incoming MAI file that
	is being written to disk.
	
	An example Sent.log:
	
	DATE SENT       SIZE  SENDER                   TO
	---------       ---  ------                    --
	05/17/96 09:44  715  NETWORK/LOCALPO/Admin     NETWORK/REMOTEPO/Admin
	0000030C 00000403
	
	In this example, 0000030C is the hex number for the MAI file written to disk and
	00000403 is the hex number for the target MAI file on the remote PO.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
