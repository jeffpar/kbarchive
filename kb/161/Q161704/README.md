---
layout: page
title: "Q161704: Ibmsync.sys May Cause Connection Loss"
permalink: /kb/161/Q161704/
---

## Q161704: Ibmsync.sys May Cause Connection Loss

{% raw %}

	Article: Q161704
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using a Synchronous Data Link Control (SDLC) card that uses Ibmsync.sys on
	a multi-drop line, excessive traffic may result in a connection loss. It is
	possible that this problem could occur with any SDLC card that uses Ibmsync.sys
	(IBM and Microgate dumb cards). This problem is extremely rare as it has only
	been observed at one customer site.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Use the 2.1 or 3.0 version of Ibmsync.sys. The problem was only observed in
	  SNA Server versions 2.11 and 2.11 sp1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 and SNA
	Server 2.11 Service Pack 1 (SP1). This problem was corrected in the latest SNA
	Server version 2.11 U.S. Service Pack. For information on obtaining this Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	A supported fix to this problem is in development, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information on the
	availability of this fix.
	
	
	
	
	
	Additional query words: microgate ibm sdlc
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	
	=============================================================================
	

{% endraw %}
