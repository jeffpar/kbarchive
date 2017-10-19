---
layout: page
title: "Q104282: X400: Transports Supported by the X.400 Gateway"
permalink: /kb/104/Q104282/
---

## Q104282: X400: Transports Supported by the X.400 Gateway

	Article: Q104282
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Gateway to X.400 has implemented connectivity over
	TP4/CLNP/802.3 (Transport Class 4/Connectionless Network Protocol/Ethernet.)
	This is in addition to the TP0/X.25/X.121 connectivity provided in earlier
	releases of the gateway.
	
	MORE INFORMATION
	================
	
	The X.400 gateway supports multiple connections (two incoming and one outgoing)
	on either of these transports. These transport stacks are implemented according
	to International Standards Organization (ISO) Open Systems Interconnection (OSI)
	specifications:
	
	               TP0
	       |--------------------|
	       |     Application    |\ 
	       |--------------------|  \ 
	       |     Presentation   |- \ \ 
	       |--------------------|      > X.400 Gateway Layers
	       |     Session        |- / / 
	       |--------------------|  / 
	       |     Transport      |/ 
	       |--------------------|
	       |     Network        |\ 
	       |--------------------|  \ 
	       |     Data Link      |---->   TP0/X.25 Layers
	       |--------------------|  / 
	       |     Physical       |/ 
	       |--------------------|
	
	               TP4
	       |--------------------|
	       |     Application    |\ 
	       |--------------------|  \ 
	       |     Presentation   |---->   X.400 Gateway Layers
	       |--------------------|  / 
	       |     Session        |/ 
	       |--------------------|
	       |     Transport      |\ 
	       |--------------------|  \ 
	       |     Network        |- \ \ 
	       |--------------------|      > TP4/CLNP Layers
	       |     Data Link      |- / / 
	       |--------------------|  / 
	       |     Physical       |/ 
	       |--------------------|
	
	NOTE: The TPO/X.25 works with the bottom three layers of the OSI stack, whereas
	TP4/CLNP works with the bottom four.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
