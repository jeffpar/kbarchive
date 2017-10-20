---
layout: page
title: "Q182269: TN3270 Incorrectly Logs Event 902 - TCPRecv Internal Error"
permalink: /kb/182/Q182269/
---

## Q182269: TN3270 Incorrectly Logs Event 902 - TCPRecv Internal Error

{% raw %}

	Article: Q182269
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain timing conditions, the SNA Server TN3270 service may log the
	following event:
	
	  Event ID: 902
	  Source: TN3270 Server
	  Description: Logic error in module TCPRecv identified by:
	  IOAlreadyOutstanding
	
	  EXPLANATION
	  An unexpected logic error has occurred.
	
	  ACTION
	  Record message and contact technical support.
	
	However, this does not cause any TN3270 client connectivity problems. This event
	has been reproduced when the Wall Data Rumba TN3270 client is connected through
	the SNA Server TN3270 service configured to use an SNA Server 3270 demo link
	service or to an actual host application.
	
	CAUSE
	=====
	
	In certain timing conditions, the TN3270 service was posting a second TCP/IP
	receive request against a socket, while a previous receive command was already
	outstanding. This is a benign condition and should not be logged.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0 SP1,
	3.0 SP2 and 4.0. This problem was corrected in the latest SNA Server version 3.0
	and 4.0 U.S. Service Packs. For information on obtaining these Service Packs,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	MORE INFORMATION
	================
	
	With this update applied, the TN3270 service no longer logs this specific error
	condition.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
