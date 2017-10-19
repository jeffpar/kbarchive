---
layout: page
title: "Q160991: SNA Server Sends Sense Code 400D to Host after CD Received"
permalink: /kb/160/Q160991/
---

## Q160991: SNA Server Sends Sense Code 400D to Host after CD Received

	Article: Q160991
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When SNA Server receives an SNA message from the host with the Change-Direction
	(CD) bit set on a full duplex LU0 session, SNA Server will reject the message
	with sense code 400D:
	
	  Event 21: Negative Response Sent on Connection <value> (SENSE=400D)
	
	  where 400D = CD Not Supported: The Change-Direction indicator was set,
	  but is not supported
	
	SNA Server can be configured to work around this host problem by setting the
	NO400D registry value as defined below. However, even with this option set, SNA
	Server still does not allow an LUA (RUI or SLI) application to set the CD bit on
	a full duplex LU0 session, since this is a protocol violation.
	
	MORE INFORMATION
	================
	
	When a host application initiates an LU0 session with full duplex send/receive
	mode (by setting bit 0-1 to "00" in Byte 7 of the BIND message), this indicates
	that the Change Direction (CD) bit is not to be used on the session. The Change
	Direction bit is only used on half-duplex sessions to indicate which end has
	direction to send on a session.
	
	However, some host applications may still set the CD bit on a full duplex
	session, though this is a protocol violation. However, it may not be possible to
	fix the host application, so SNA Server will ignore this message by enabling the
	following registry key:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/ 
	  SnaServr/Parameters/ 
	
	  NO400D: REG_SZ: YES
	
	This causes SNA Server to ignore any messages received on an LU0 full duplex
	session which has the CD bit set. However, the LUA (RUI or SLI) application
	running on SNA Server is still not allowed to set the CD bit when sending
	messages to the host on a full duplex LU0 session, since this is a protocol
	violation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
