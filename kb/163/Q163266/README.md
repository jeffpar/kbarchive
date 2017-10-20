---
layout: page
title: "Q163266: SNA Server Service Always Sends a Null XID on a Leased Line"
permalink: /kb/163/Q163266/
---

## Q163266: SNA Server Service Always Sends a Null XID on a Leased Line

{% raw %}

	Article: Q163266
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain circumstances it may be appropriate to configure SNA Server as the
	primary on a leased SDLC connection and have end to end LLC connectivity
	established without the prior exchange of XIDs during activation.
	
	To enable this type of connection activation, the following change must be made
	to the "System Identification" parameters of the "Connection properties" for the
	SDLC connection in question. One set of these parameters, which together
	constitute the "Local Node Name", includes a parameter called the "Local Node
	ID". The "Local Node ID" is composed of two fields, the ID Block (first field of
	3 digits) and the ID Number(second field of 5 digits), to prevent sending an XID
	you must delete the ID Block digits.
	
	Note that it must be deleted (in other words, select all 3 chars and hit the DEL
	key) not filled with spaces. Addtionally, it is still a required to supply an ID
	number field (the second 5 characters) even though it will never be used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	On leased SDLC links, SNA Server Service always sends a NULL XID and expects a
	response to indicate to the SNA Server Service to send the Open(Station) request
	to the Link Service causing the LLC mode setting command SNRM to flow to the
	secondary link station.
	
	This configuration tells the SNA Server Service that there is no XID to send on
	the connection and as a result it will follow an Open(Link) Response OK with an
	Open(Station) request immediately causing the Link Service to send a SNRM.
	
	
	Additional query words: null xid
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
