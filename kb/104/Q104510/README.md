---
layout: page
title: "Q104510: Two NCBs per Session Based on Need Declining as Traffic Climbs"
permalink: /kb/104/Q104510/
---

## Q104510: Two NCBs per Session Based on Need Declining as Traffic Climbs

	Article: Q104510
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The recommended ratio of two network control blocks (NCBs) per session seems to
	contradict the fact that an NCB setting of 254 is suggested when there are 128
	or more sessions.
	
	An extra NCB per session is generally recommended because at any one time there
	can be at least one asynchronous NCB posted per session, and it can be useful to
	have another NCB available. For example, a second NCB can be used for raw I/O,
	where an asynchronous RECEIVE is posted on the session then a SEND is issued on
	the same session while the RECEIVE is pending. In addition to cases of this
	sort, the system also requires overhead NCBs such as the auxiliary RECEIVE_ANY
	and the RECEIVE_DATAGRAMS that are always pending for computername, domain,
	otherdomains, and so on.
	
	But as the number of active sessions increases, the likelihood that there will
	actually be a pending asynchronous NCB posted on every session decreases
	radically, which means that the likelihood of two pending NCBs per session
	decreases even more. In short: when there are lots of sessions, the need for an
	extra NCB per session decreases sharply.
	
	The recommended ratio of two NCBs/session (not three or more) takes into account
	that the redirector and server utilize the interface in such a way that it's
	unlikely that more than two NCBs will ever be pending on a single session.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
