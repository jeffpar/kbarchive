---
layout: page
title: "Q137437: How SNA Server Manages Send and Receive Window Sizes on SDLC"
permalink: /kb/137/Q137437/
---

## Q137437: How SNA Server Manages Send and Receive Window Sizes on SDLC

{% raw %}

	Article: Q137437
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server Admin does not support configuration of the SDLC send and receive
	window sizes, as the 802.2 connection does with the Unacknowledged Send Limit
	and Receive Ack Threshold parameters. This article describes how SNA Server
	determines the send and receive window sizes on SDLC connections.
	
	NOTE: Do not confuse these send and receive window sizes with the send and
	receive pacing counters configured on an APPC mode entry, or with the send and
	receive window sizes negotiated on a BIND exchange when establishing an LU-LU
	session.
	
	MORE INFORMATION
	================
	
	The SDLC send window is defined as the number of frames that SNA Server sends
	before setting the P/F bit requesting an acknowledgment. By default, the SDLC
	send window is set to 7. You can override the SDLC send window value in SNA
	Server by modifying the value in byte 27 of Format 3 XID frames sent from the
	remote system. This is the field in which the XID sender specifies the receive
	window size. SNA Server then takes that value in the Format 3 XID exchange and
	uses it for the SNA Server send window size.
	
	
	NOTE: The XID format is documented in the IBM SNA Formats Guide (IBM part number
	GA27-3136).
	
	The SNA Server SDLC receive window is the number of frames which the SNA Server
	link service can receive before requiring an acknowledgement. For SNA Server
	SDLC connections there is no configured receive windows. The receive window is
	actually a function of the Credit messages that flow between the SNA Server SDLC
	link service and the SNA Server service. These Credit messages manage the
	internal flow control between the link service and the server and determine the
	receive window size at any given instant.
	
	
	Additional query words: prodsna pacing
	
	======================================================================
	Keywords          : kbnetwork sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
