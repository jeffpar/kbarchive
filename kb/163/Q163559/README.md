---
layout: page
title: "Q163559: SLI Verbs Return w/ Cancelled Error Before SLI_CLOSE Completes"
permalink: /kb/163/Q163559/
---

## Q163559: SLI Verbs Return w/ Cancelled Error Before SLI_CLOSE Completes

{% raw %}

	Article: Q163559
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a session failure occurs on an SLI session, any pending SLI_BID request will
	return immediately with an error. If the SLI application then calls SLI_CLOSE
	followed immediately by SLI_OPEN, the SLI_OPEN will fail with an LUA_CANCELLED
	error.
	
	CAUSE
	=====
	
	While an SLI_CLOSE is being processed, an SLI_OPEN is being accepted and returns
	with an error before the SLI_CLOSE completes. The problem occurs since the
	underlying RUI interface has not completed session cleanup on the previous
	session failure.
	
	RESOLUTION
	==========
	
	An update to Winsli32.dll corrects this problem by changing the handling of the
	SLI_CLOSE function. When an application issues SLI_CLOSE, all the pending SLI
	verbs are cancelled. This fix changes the order of processing so that all
	pending verbs are not returned until the SLI_CLOSE completes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1, 2.11,
	2.11 Service Pack 1 (SP1), and 3.0. This problem was corrected in the latest
	Microsoft SNA Server 2.11 and 3.0 U.S. Service Packs. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
