---
layout: page
title: "Q115551: X400: Manually Adding TP4/CLNP Peer Address to Node"
permalink: kb/115/Q115551/
---

## Q115551: X400: Manually Adding TP4/CLNP Peer Address to Node

	Article: Q115551
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Gateway to X.400 supports the ES to IS routing
	protocol within its CLNP layer, so you can run it over a TP4/CLNP network.
	
	These systems send ES-hellos and answer the ES-hellos of other systems, and this
	makes them automatically aware of other nodes' network addresses.
	
	If a node cannot send or answer ES-hellos, you must manually add its network
	address at the node by running the following command on the system on which you
	are running the gateway TP4/CLNP:
	
	  addrte NSAP MAC
	
	To ensure that the remote network SAP value and MAC address were correctly added,
	run the ESQ command.
	
	For more information, see the "TP4/CLNP Configuration and Utilities Guide."
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
