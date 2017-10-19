---
layout: page
title: "Q60845: Source Level Routing and OpenAdapter Issues"
permalink: /kb/060/Q60845/
---

## Q60845: Source Level Routing and OpenAdapter Issues

	Article: Q60845
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following are questions and answers about LAN Manager source level routing
	and OpenAdapter issues:
	
	1. Q. What does it mean when an NDIS driver says it supports source routing?
	  Does this mean the NDIS driver keeps a table of routing information for
	  subsequent use, or does it mean that the token-ring chipset the NDIS driver
	  talks to keeps the routing information? Or, does this signal JETBEUI that the
	  data it is receiving from the NDIS driver may have source routing
	  information? This would mean that when JETBEUI receives the data, it has to
	  know how to determine whether the source routing field exists, and determine
	  the length of the source routing field in order to determine where the real
	  data in the frame begins.
	
	  A. If IBM source routing is used (bit 9 in MACservice specific
	  characteristics), it is the protocol module's responsibility to encode and
	  interpret appropriate source routing information. This bit merely implies
	  that the device is capable of sending packets with the source routing bit set
	  in the source address so that a protocol may recognize such a packet.
	
	2. Q. If a Token-ring NDIS driver says it supports the open adapter, is it
	  JETBEUI's responsibility to call OpenAdapter to get onto the ring? Or should
	  the NDIS driver open the adapter itself once the NDIS driver has initialized
	  the adapter?
	
	  A. If OpenAdapter (bit 11) is set, the protocol driver must ensure that the
	  adapter is open. The open status of an adapter can be determined by examining
	  bit 4 of the MAC status in the MAC-specific status table. If the adapter is
	  not open, the protocol must issue an OpenAdapterRequest (normally during
	  bind-time processing).
	
	Additional query words: 2.00 2.10 2.10a 2.20 source routing ndis
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
