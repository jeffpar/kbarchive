---
layout: page
title: "Q162593: DSPU LU Not Reactivated After Host Outage"
permalink: /kb/162/Q162593/
---

## Q162593: DSPU LU Not Reactivated After Host Outage

{% raw %}

	Article: Q162593
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Downstream LUs can occasionally get stuck in inactive state after an outage on
	the host connection. Even though the host connection reactivates and host LUs
	are available, only the first LU will reestablish a session. The others will
	stay unavailable. This problem only occurs if the LUs are in session with a host
	application when the outage occurs. If the LUs are in SSCP mode then the problem
	does not occur.
	
	MORE INFORMATION
	================
	
	Suppose you have a computer running SNA Server that is connected to the host
	using X.25/QLLC over an X.25 card. On this connection two LUs are configured on
	local addresses 05 and 06. Also on the SNA Server an 802.2 downstream connection
	has been configured and the two LUs from the X.25/QLLC connection have been
	assigned. The downstream connection goes over the Ethernet LAN to a DSPU such as
	an OS/2 Warp station running IBM Communication Manager with two LUs on local
	addresses 02 and 03.
	
	The problem occurs if an outage occurs or we stop and restart the X.25 connection
	from the SNA Server Administrator. At this point there is an error message Event
	ID 29 in the application event log:
	
	  Internal Gateway Error
	  Sense code = 4592
	  Parameter 1 = 43
	  Parameter 2 = 68
	  Parameter 3 = 0
	  Parameter 4 = 0
	  Parameter 5 = 0
	  Parameter 6 = 0
	
	After this only the first LU will reestablish a session . The other will stay
	unavailable.
	
	
	CAUSE
	=====
	
	During the processing of messages from the HOST on the LU-SSCP session, there is
	a timing window in the Finite State Machine that can cause the LPI addresses to
	get confused. A code change was made to prevent this happening by reinitializing
	the connection LPI addresses prior to sending an OPEN(SSCP).
	
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 Service Pack 1 corrects this problem. The updated
	module is Snaservr.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.0, 2.1,
	2.11, 2.11 SP1.
	
	
	A supported fix is now available for SNA Server 2.11, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	
	=============================================================================
	

{% endraw %}
