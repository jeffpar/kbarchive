---
layout: page
title: "Q107122: SDLC Link Failure Due to Invalid XIDs"
permalink: /kb/107/Q107122/
---

## Q107122: SDLC Link Failure Due to Invalid XIDs

{% raw %}

	Article: Q107122
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an invalid XID or an XID already in use is detected by the host when a
	dial-up (switched) SDLC connection is being established, the following error
	will be recorded in the Event Log under Application. The Event Detail will
	report the source SNA IBM SDLC Link. The description might read like this:
	
	  Event: 182
	  Connection failure, code=11
	  Cause Data = 3601 3401 3302 f035
	  Link Role = 00
	  Remote Node Type = 00
	
	CAUSE
	=====
	
	Cause data is a list of the failure causes from the Failure subvector in the
	alert. Link role and remote node type are as described in the Link Connections
	Subsystem Configuration Data subvector in the alert. A connection failure can be
	due to a station outage, rather than a link outage. If it is due to a station
	outage--which can be recognized by outage code values of X'80' or higher--then
	message #183 will also be logged.
	
	If this occurs and there are no other configuration issues that could be causing
	the link service to fail, this is more than likely the cause of the failure.
	
	The SNA Server Reference Guide (Connection failure, code=11) corresponds to "Data
	Set Ready (DSR) failure". This occurs when the host drops the link when the
	Local Node ID (XID) sent by SNA Server is not recognized or not is use.
	
	RESOLUTION
	==========
	
	Change the XID to a known XID, or an XID that is confirmed not to be in use. You
	can do this by doing the following:
	
	1. From SNA Server Admin, select the link service you want to change.
	
	2. Choose Services, and then choose Properties.
	
	3. In the Connection Properties dialog box, choose Setup.
	
	4. Change the Local Node ID by choosing the OK button, and then choosing the OK
	  button again.
	
	5. Save this configuration, and then restart SNA Server.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	
	=============================================================================
	

{% endraw %}
