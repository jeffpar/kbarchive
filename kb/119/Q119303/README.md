---
layout: page
title: "Q119303: X400: Err Msg: ERROR 3 (RTS): RTS Open Refused..."
permalink: /kb/119/Q119303/
---

## Q119303: X400: Err Msg: ERROR 3 (RTS): RTS Open Refused...

	Article: Q119303
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
	
	Version 3.2 of Microsoft Mail Gateway to X.400 may give the following error:
	
	  ERROR 3 (RTS): RTS open refused (session limit exceeded)
	
	CAUSE
	=====
	
	So that it can always leave one outgoing connection available, the X.400 gateway
	version 3.2 can accommodate no more than three incoming connections in a given
	time period. How the Gateway counts sessions during that time period explains
	why this error is returned.
	
	Consider this example sequence:
	
	- The gateway receives an incoming connection and holds it open for a long time
	  (because it has several messages to receive).
	
	- While the first connection is open, the gateway receives a second incoming
	  connection, which it accepts, processes and closes.
	
	- While the first connection is still open, the gateway receives a third
	  incoming connection, which it accepts, processes and closes.
	
	- At this point the gateway calculates that the three-session limit has been
	  reached within a specific interval, so when a fourth incoming connection
	  request is received it is refused at the RTS level.
	
	- The gateway refuses subsequent incoming connection requests until the first
	  connection is finished and closed.
	
	This is hardcoded and cannot be changed.
	
	RESOLUTION
	==========
	
	If this error becomes a problem, install another X.400 gateway on another
	postoffice to spread the mail traffic.
	
	If you have External running, try starting the gateway with the -md option
	(mailer disable). With -md on, the gateway puts incoming mail in the postoffice,
	but lets External finish the job by moving the mail to the recipient's mailbag.
	This also saves memory on the X.400 Gateway.
	
	Additional query words: errmsg kberrmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
