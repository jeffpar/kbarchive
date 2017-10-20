---
layout: page
title: "Q171994: IBM CICS For Windows NT Stops Working On SNA Server 3.0"
permalink: /kb/171/Q171994/
---

## Q171994: IBM CICS For Windows NT Stops Working On SNA Server 3.0

{% raw %}

	Article: Q171994
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 21-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IBM CICS for Windows NT fails to work when connecting through SNA Server 3.0,
	though it had been previously working through SNA Server 2.11.
	
	CAUSE
	=====
	
	When IBM CICS for Windows NT initializes, it calls the APPC DISPLAY verb to
	determine what SNA Servers are active. It then calls DISPLAY again requesting
	information on all active APPC LU's on the active server.
	
	When using SNA Server 3.0, it is not necessary to configure explicit APPC LU
	partnerships (partnering Local APPC LU, Remote APPC LU and an APPC Mode), as it
	is with SNA Server 2.x. This causes the APPC DISPLAY verb to report that no APPC
	LU sessions are available, so IBM CICS for Windows NT never attempts to allocate
	a conversation.
	
	
	RESOLUTION
	==========
	
	If partnerships are defined in the SNA Server 3.0 configuration file, the above
	error does not occur. To define a partnership using SNACFG.EXE, use the
	following command:
	
	  "SNACFG APPCLLU servername:locallu /ADDPARTNER:remotelu,mode,connection"
	  (without the quotation marks)
	
	The SNA Server service must be stopped and restarted to implement this change.
	
	The ability to define Local/Remote/Mode partnerships is being added in the SNA
	Server 3.0 Service Pack 2 version of Manager. If SNA Server 3.0 or 3.0 Service
	Pack 1 is being used, the SNACFG.EXE command line configuration tool must be
	used to define an APPC LU partnership.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
