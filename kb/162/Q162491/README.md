---
layout: page
title: "Q162491: SNA Server Performance Degrades with Event 631 Errors"
permalink: /kb/162/Q162491/
---

## Q162491: SNA Server Performance Degrades with Event 631 Errors

{% raw %}

	Article: Q162491
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA client response is slow, and at the same time SNA Server or SnaBase reports
	multiple Event 631 errors (from 10-30 per second) in the Windows NT application
	event log:
	
	  Event: 631
	  Source: SNA Server (or SnaBase)
	  Description: Invalid message received across the LAN:
	  remote: <client IP address:port> msgid 0x0 incorrect or msgtype 1
	  too high (max 33)
	
	All Event 631 errors are reported from the same client address and client port
	number.
	
	CAUSE
	=====
	
	Event 631 is logged by SNA Server (or SnaBase) whenever it receives an
	improperly formatted message from an SNA Server client emulator over an existing
	client TCP/IP socket. The cause of this client behavior is under investigation.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 SP1 and SNA Server 3.0 changes the way that invalid
	client messages are handled. Instead of reporting an Event 631 on each invalid
	message, this update causes SNA Server (or SnaBase) to:
	
	- report a single Event 631 for this client port, and
	
	- close the TCP/IP socket to this client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11, 2.11
	SP1 and 3.0.
	
	
	A supported fix for SNA Server 2.11 SP1 and 3.0 is now available, but has not
	been fully regression-tested and should be applied only to systems experiencing
	this specific problem. Unless you are severely impacted by this specific
	problem, Microsoft recommends that you wait for the next Service Pack that
	contains this fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1,3.0
	
	=============================================================================
	

{% endraw %}
