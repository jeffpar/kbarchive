---
layout: page
title: "Q157015: XCON: MTA Outbound Connection Refused by X.400 Host"
permalink: /kb/157/Q157015/
---

## Q157015: XCON: MTA Outbound Connection Refused by X.400 Host

{% raw %}

	Article: Q157015
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outbound connections from Microsoft Exchange Server are refused by the
	destination Message Transfer Agent (MTA) using X.400.
	
	CAUSE
	=====
	
	The reserved byte in the RFC1006 TPKT header is not necessarily 0x0 in the
	Microsoft Exchange MTA. This can cause connection attempts to remote MTAs to
	fail if the remote RFC1006 implementation requires this byte to be 0x0.
	
	This byte is not specified to be a particular value according to RFC1006.
	
	MORE INFORMATION
	================
	
	A trace of the faulting connection might yield a packet similar to the
	following. The line of interest in this particular situation is ISO: Reserved =
	0 (0x0). The following sample shows the Reserved field with the new behavior,
	specifically the Reserved field will always be explicitly set to 0x0. If this
	field shows this to be any other value, this may be the cause of the connection
	failure and is corrected in SP3.
	
	<SOURCE MACHINE> <DESTINATION MACHINE> TPDU Type: Connection Request, Len:
	14 199.199.199.199 200.200.200.200 IP
	
	FRAME: Base frame properties
	ETHERNET: ETYPE = 0x0800 : Protocol = IP:  DOD Internet Protocol
	IP: ID = 0xC6B5; Proto = TCP; Len: 58
	TCP: .AP..., len:   18, seq:  93150219-93150236, ack: 508652377, win: 8760,
	src: 2185  dst:  102
	ISO: RFC 1006 ISO Packet, ver: 3, Len: 4
	   ISO: Version = 3 (0x3)
	   ISO: Reserved = 0 (0x0)<===== RIGHT HERE
	   ISO: Length = 18 (0x12)
	   ISO: Data: Number of data bytes remaining = 14 (0x000E)
	TPDU: Type: Connection Request, Len: 14
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
