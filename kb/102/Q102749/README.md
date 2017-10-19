---
layout: page
title: "Q102749: X400: Err Msg: MTA_Name Has Queued Messages..."
permalink: /kb/102/Q102749/
---

## Q102749: X400: Err Msg: MTA_Name Has Queued Messages...

	Article: Q102749
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
	
	With version 3.2 of Microsoft Mail Gateway to X.400, the Routing section of the
	Administrator program may give this error:
	
	  MTA_name has queued messages. Delete or deliver the messages, and then delete
	  the MTA.
	
	CAUSE
	=====
	
	This message transfer agent (MTA) cannot be deleted now because it contains
	queued messages.
	
	RESOLUTION
	==========
	
	Delete the messages from the X400\OUTGOING\MTA_NAME subdirectory using the
	MS-DOS DEL command. Then you can delete the MTA.
	
	Additional query words: 3.20 Errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
