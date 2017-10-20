---
layout: page
title: "Q105290: SMTP: Err Msg: Insufficient Memory"
permalink: /kb/105/Q105290/
---

## Q105290: SMTP: Err Msg: Insufficient Memory

{% raw %}

	Article: Q105290
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Gateway to SMTP displays the error message:
	
	  Insufficient memory
	
	CAUSE
	=====
	
	This error usually is seen when a message has more than 300 recipients and the
	SMTP gateway has low memory available in the conventional 640k RAM.
	
	System requirements place a strain on the available conventional memory. The SMTP
	Gateway code requires different amounts of memory depending on which TCP/IP
	stack is used, and the TCP/IP stack must also be loaded, although it can be
	loaded high if memory is available. Finally, the Gateway's configuration files
	and the postoffice routing files are also loaded:
	
	  LOCAL.CFG
	  ADDR_MAP.CFG
	  NETWORK.GLB
	  *.XTN (All files in the XTN directory)
	  GROUP.GLB
	  ACCESS2.GLB
	
	If the Gateway postoffice has many mailboxes and the Gateway serves many
	downstream postoffices, the amount of memory left for processing mail messages
	can become unacceptably low.
	
	This error will also be returned if there is a corrupt *.P1 file in the P1
	directory.
	
	RESOLUTION
	==========
	
	Unfortunately, there are so many variables involved that it is very difficult to
	provide enough memory to process messages under all conditions.
	
	But there are two ways to provide the Gateway with more working memory to handle
	large messages and user lists: you can load MS-DOS, the network operating
	system, and the TCP/IP software above the 640k conventional memory, and you can
	reduce the size of the ACCESS2.GLB and GROUP.GLB files by moving users off the
	Gateway postoffice and deleting unused groups.
	
	If there is a corrupt .P1 file, clearing the *.P1 files from the P1 directory
	will usually resolve the problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
