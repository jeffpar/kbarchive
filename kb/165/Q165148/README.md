---
layout: page
title: "Q165148: BUG: TN3270 Server Disconnects Clients When a Popup Message Occu"
permalink: /kb/165/Q165148/
---

## Q165148: BUG: TN3270 Server Disconnects Clients When a Popup Message Occu

{% raw %}

	Article: Q165148
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	TN3270 Client disconnects from the TN3270 Server when a client receives a
	message. The message received by the client was sent by a host application from
	another user.
	
	CAUSE
	=====
	
	The TN3270E Server received an RQD message from the host that contained the EC
	(End Chain) indicator. The TN3270 server sent the data to the client, and
	changed its internal state to let the client have send-direction. The TN3270
	server then receives data from the client before receiving a positive response
	from the client for the previous message. When the TN3270 server tries to send
	this data from the client across the RUI interface, it is rejected with the
	error LUA_RSP_BEFORE_SENDING_REQ.
	
	RESOLUTION
	==========
	
	The fix is to discard data received from the client if the client owes the
	server a positive response. The TN3270 Server service has been updated to
	correct this problem.
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in SNA Server version 3.0
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
