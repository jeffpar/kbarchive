---
layout: page
title: "Q87029: SMTP: Explanation of TCP/IP"
permalink: kb/087/Q87029/
---

## Q87029: SMTP: Explanation of TCP/IP

	Article: Q87029
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TCP/IP is a protocol suite containing two protocols: Transmission Control
	Protocol (TCP) and Internet Protocol (IP).
	
	TCP is a connection oriented protocol that compensates for the underlying
	network's lack of reliability. It ensures the correct sequence of packets and
	provides end-to-end acknowledgment.
	
	IP is a connectionless protocol. Each packet contains routing information that
	allows the network nodes to route the packet toward its destination. The nodes
	themselves do not try to understand the packet data.
	
	TCP functionality is comparable with that of the Open Systems Interconnection's
	(OSI's) transport service class 4; that is, TP4.
	
	REFERENCES
	==========
	
	TCP is specified in RFC-793.
	
	IP is specified in RFC-791.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
