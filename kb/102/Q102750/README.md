---
layout: page
title: "Q102750: X400: Err Msg: ERROR 3 (RTS): RTS Open Refused..."
permalink: /kb/102/Q102750/
---

## Q102750: X400: Err Msg: ERROR 3 (RTS): RTS Open Refused...

{% raw %}

	Article: Q102750
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of Microsoft Mail Gateway to X.400 may give the following error on
	an outbound connection:
	
	  ERROR 3 (RTS): RTS open refused (Dialogue mode not supported)
	
	CAUSE
	=====
	
	The remote message transfer agent (MTA) is negotiating for a two-way alternate
	dialog mode for use in a connection. The gateway supports only monolog mode.
	Check the remote MTA for the correct configuration.
	
	
	Additional query words: 3.20 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
