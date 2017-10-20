---
layout: page
title: "Q169172: Allowed Directions Option Available for Leased SDLC Connection"
permalink: /kb/169/Q169172/
---

## Q169172: Allowed Directions Option Available for Leased SDLC Connection

{% raw %}

	Article: Q169172
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Allowed Directions options for a leased line SDLC connection are available
	for selection under the SDLC Connection properties dialog in SNA Server Manager.
	Allowed Directions is used to specify whether the SNA Server, the remote device,
	or either can initiate the connection.
	
	The Allowed Directions option was greyed out for leased line SDLC connections
	under SNA Server 2.x because it does not apply for leased lines.
	
	RESOLUTION
	==========
	
	There are no known workarounds, however leased line SDLC connections do not use
	the Allowed Directions option. This is a cosmetic problem that has not caused
	any communication problems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : :3.0,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
