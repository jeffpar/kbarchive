---
layout: page
title: "Q105282: Incorrect Source Routing Bit Causes NetBEUI Network Storm"
permalink: /kb/105/Q105282/
---

## Q105282: Incorrect Source Routing Bit Causes NetBEUI Network Storm

	Article: Q105282
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	SYMPTOMS
	========
	
	Receiving a frame on an Ethernet with the source routing bit enabled can cause a
	machine running NetBEUI to propagate a network storm: entering a loop of
	transmitting invalid frames to other machines on the net. This seems to occur
	mostly with 3Com Etherlink3 network interface cards (NICs).
	
	CAUSE
	=====
	
	NOTE: SABME and UA are defined below.
	
	When a link is established and the SABME frame has the source routing bit set
	erroneously, the routing length field is accounted for in the link table entry
	as well as in the original routing header info.
	
	This causes all subsequent frames on this link (including the following UA) to
	contain the original source routing info, but the source routing bit is ignored
	on the receive end, causing the frame to be misinterpreted. When the original
	frame contains a SABME with the source routing bit set incorrectly, the two
	machines enter a loop broadcasting SABME frames back and forth.
	
	STATUS
	======
	
	A fix has been made to NetBEUI, causing it to refuse to accept frames containing
	source routing information when operating on an Ethernet network.
	
	
	DEFINITIONS
	-----------
	
	- SABME stands for "set asynchronous balanced mode extended." It is a frame
	  sent from one logical link control (LLC) layer to another requesting
	  establishment of a link connection between them.
	
	- UA stands for "unnumbered acknowledgment." It is a frame sent in response to
	  a SABME that accepts the request and establishes the link connection.
	
	Additional query words: 2.20 2.2 multicast
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
