---
layout: page
title: "Q112237: SMTP: ERROR Write and ERROR Read Messages"
permalink: kb/112/Q112237/
---

## Q112237: SMTP: ERROR Write and ERROR Read Messages

	Article: Q112237
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mail Gateway to SMTP displays "ERROR write" and "ERROR read" messages.
	
	CAUSE
	=====
	
	There is a problem in the TCP/IP layer of the network transport. If no other
	errors indicate an obvious cause, the most common one is mismatched TCP/IP
	window sizes.
	
	RESOLUTION
	==========
	
	Define the window sizes in the gateway computer's TCP/IP layer and the TCP/IP
	host to be in the same range. The best method is to make them the same size and
	the minimum size allowed. If window sizes match but network errors persist, use
	a protocol analyzer on the network segment between the gateway computer and the
	TCP/IP host to pinpoint their cause.
	
	REFERENCE KB on "TCP/IP Sliding Windows Concept"
	
	Additional query words: 3.00 smtp tcpip windows
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
