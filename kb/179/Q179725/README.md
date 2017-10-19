---
layout: page
title: "Q179725: XFOR: ICS: &quot;Cant&quot; Misspelling Is Per RFC-1459"
permalink: /kb/179/Q179725/
---

## Q179725: XFOR: ICS: &quot;Cant&quot; Misspelling Is Per RFC-1459

	Article: Q179725
	Product(s): Microsoft Exchange
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Commercial Internet System version 2.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user is connected to the Microsoft Internet Chat server and sends a mode
	command the user is not able to execute upon another user, the following error
	message will be displayed:
	
	  -server error
	  :server 502 nick1 :Cant change mode for other users
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Chat Server, version
	2.0. Microsoft is researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Some administrators may note the misspelling of "Cant", which should be
	"Can't".
	
	This misspelling occurred in the actual IRC RFC-1459 and has been adopted by all
	current IRC2 servers. The Microsoft Internet Chat Server must use the same
	misspelling in order to maintain compatibility.
	
	This behavior is by product design.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbMCISSearch kbMCIS200
	Version           : 2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
