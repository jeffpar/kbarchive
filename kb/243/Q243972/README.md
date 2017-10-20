---
layout: page
title: "Q243972: SDLC Connection with MicroGate MGT1 Adapter Remains Pending"
permalink: /kb/243/Q243972/
---

## Q243972: SDLC Connection with MicroGate MGT1 Adapter Remains Pending

{% raw %}

	Article: Q243972
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): _IK sna4
	Last Modified: 21-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SDLC connection configured to use the MicroGate T1 SDLC Adapter from
	MicroGate Corp. may stay in pending status.
	
	CAUSE
	=====
	
	The incorrect interface (RS232, RS422, or V.35) may have been selected on the
	adapter.
	
	RESOLUTION
	==========
	
	Set the J5, J6, or J7 jumper to the correct interface type.
	
	MORE INFORMATION
	================
	
	There are three jumper settings that correlate to the types of interface. The J5
	jumper selects RS-232, J6 selects V.35, and J7 selects RS-422. RS-232 is
	generally associated with analog modems at 2400 to 19.2 baud, V.35 is a digital
	interface using CSU/DSUs (Channel Service Unit/Data Service Unit) at 56 kb per
	second or greater, and RS-422 is a differential standard using a DB-25
	connector. It is most frequently used in Europe.
	
	Other SDLC adapters, such as the Attachmate Corp. (formerly DCA) ISCA Adapter,
	may have similar configuration settings.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400
	Version           : WINDOWS:2.11,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
