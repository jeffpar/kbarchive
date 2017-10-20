---
layout: page
title: "Q164643: 3270 Print Session May Stop Responding in Spooling Status"
permalink: /kb/164/Q164643/
---

## Q164643: 3270 Print Session May Stop Responding in Spooling Status

{% raw %}

	Article: Q164643
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a system with 80 or more 3270 printer sessions configured, 3270 print
	sessions may stop responding with a "Spooling" status and fail to recover after
	receiving large 3270 printer jobs.
	
	CAUSE
	=====
	
	On busy systems, the 3270 Print Server (3270PPD) may run out of internal message
	control blocks. If they do run out, it causes the print sessions to stop
	responding and not recover.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With the hotfix, the
	SNA Server 3270 Print Server message control block handling has been extended to
	prevent control block buffer shortages.
	
	
	The updated module is:
	
	  <snaroot>\system\Ppd3270.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
