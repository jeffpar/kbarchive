---
layout: page
title: "Q111948: X400: Err Msg: ERROR 8 (layer): Initialization Failed...MEMORY"
permalink: /kb/111/Q111948/
---

## Q111948: X400: Err Msg: ERROR 8 (layer): Initialization Failed...MEMORY

	Article: Q111948
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of Microsoft Mail Gateway to X.400 may give this error on
	initialization:
	
	  ERROR 8 (layer): Initialization failed x=RC_MEMORY check value.
	
	CAUSE
	=====
	
	The gateway failed to initialize the protocol stack to listen for incoming
	calls, this indicates low memory.
	
	RESOLUTION
	==========
	
	Unload some unneeded TSR programs. The gateway requires at least 400K of
	conventional memory on the gateway machine after all drivers are loaded.
	
	Additional query words: 3.20 Errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
