---
layout: page
title: "Q163562: TN3270 Server Does Not Handle DACTLU/ACTLU Sequence Properly"
permalink: /kb/163/Q163562/
---

## Q163562: TN3270 Server Does Not Handle DACTLU/ACTLU Sequence Properly

{% raw %}

	Article: Q163562
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After logging off of some host applications (such as TSO), a TN3270 display or
	printer emulator may be unable to reconnect through the TN3270 server until the
	user disconnects and reconnects his or her TN session.
	
	CAUSE
	=====
	
	With some host applications (such as TSO), the host sends Deactivate Logical
	Unit (DACTLU) and Activate Logical Unit (ACTLU) request units to recycle the
	logical unit (LU) following a user logoff. The TN3270 Server component
	disconnects the LU after receiving the DACTLU.
	
	WORKAROUND
	==========
	
	To work around this problem, reconnect the client.
	
	The TN3270 service and the RUI library have been updated to handle the case where
	the host resets an LU by sending a DACTLU followed by an ACTLU.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11 (and all Service Packs), 3.0, and 3.0 Service Pack 1.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression-tested and should be applied only to s ystems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product SupportServices for more information.
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	
	=============================================================================
	

{% endraw %}
