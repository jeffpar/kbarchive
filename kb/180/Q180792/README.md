---
layout: page
title: "Q180792: Print Server Logs Event 4103 as a Stop Event"
permalink: /kb/180/Q180792/
---

## Q180792: Print Server Logs Event 4103 as a Stop Event

{% raw %}

	Article: Q180792
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Print service may log the following events in the Windows NT Event
	Viewer Application log when it receives control codes from an AS/400 that it
	does not support:
	
	  Event ID: 4103
	  Source: PPV5250
	  Description: The print server does not support the control code 0xC8
	  (Set Graphic Error Action).
	
	  Event ID: 4103
	  Source: PPV5250
	  Description: The print server does not support the control code 0xD1
	  (Set Graphic Character Set).
	
	These events are logged as Stop events by the print service, even though they are
	not an indication of a serious problem. The print service simply ignores these
	control codes if they are contained in an AS/400 print job.
	
	CAUSE
	=====
	
	Event ID 4103 is being logged as a serious stop error rather than a lower
	priority informational event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Event 4103 has been modified to give additional information to assist in
	troubleshooting.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
