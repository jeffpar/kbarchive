---
layout: page
title: "Q201147: XFOR: Group Wise Router Takes Three Minutes to Stop"
permalink: /kb/201/Q201147/
---

## Q201147: XFOR: Group Wise Router Takes Three Minutes to Stop

{% raw %}

	Article: Q201147
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you stop the Microsoft Exchange Router for Novell GroupWise program, it can
	take up to three minutes to completely stop. During this time the router is
	trying to reconnect to the NetWare server.
	
	CAUSE
	=====
	
	This behavior is caused by a hard-coded time-out routine where the GroupWise
	router tries to reconnect to the NetWare server. This routine runs when it fails
	to establish a successful connection the first time. After the router is in this
	loop, it will ignore the stop command until it wakes up three minutes later.
	
	STATUS
	======
	
	Microsoft acknowledges this to be a limitation with the Microsoft Exchange
	Router for Novell GroupWise.
	
	MORE INFORMATION
	================
	
	There are many reasons why the GroupWise router program might be trying to
	reconnect to the NetWare server.
	
	Perform the following actions to verify this problem:
	
	1. Confirm that both the user ID and password are correct.
	
	2. Ensure that the NetWare server is up and running.
	
	3. Confirm that there are no network problems between the Exchange Server
	  computer and the NetWare server.
	
	Additional query words: stopping, shutting down, gwrouter
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
