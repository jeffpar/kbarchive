---
layout: page
title: "Q198180: Unable to Correlate SLI_OPEN Request With SLI BIND Routine"
permalink: /kb/198/Q198180/
---

## Q198180: Unable to Correlate SLI_OPEN Request With SLI BIND Routine

{% raw %}

	Article: Q198180
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an SLI application makes multiple SLI_OPEN calls to open an LUA pool, and
	registers a BIND routine callback procedure, the SLI application has no way to
	correlate the BIND routine with the original SLI_OPEN request, when the
	application's BIND routine procedure is called. The lua_correlator field
	provided to the SLI_OPEN request is not provided to the application's BIND
	routine.
	
	CAUSE
	=====
	
	The SNA Server SLI DLL file (Winsli32.dll) was failing to provide the
	lua_correlator field to the SLI application's BIND routine while an SLI_OPEN
	request is being processed.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 4.0.
	This problem was first corrected in SNA Server version 3.0 Service Pack 4 and
	SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
