---
layout: page
title: "Q118567: X400: Leave TPDU At Optimal (Default) Size of 2048 Bytes"
permalink: /kb/118/Q118567/
---

## Q118567: X400: Leave TPDU At Optimal (Default) Size of 2048 Bytes

	Article: Q118567
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The optimal size of a transport protocol data unit (TPDU) is 2048 bytes. This is
	the default size and it is not recommended that you change it. It is optimal
	because the Gateway uses send and receive buffers of 2K octets.
	
	The TPDU parameter is configured in the TP4 layer, using the TP4CFG utility. The
	parameter name is "-maxtpdu <value>" where the value can be 128, 256, 512,
	1024, or 2048.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to X.400, TP4/CLNP Administrator's Reference," page 53.
	
	
	Additional query words: 3.2 x400 tp4 tpdu
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
