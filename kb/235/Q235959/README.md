---
layout: page
title: "Q235959: SNA Server Fails to Reestablish Session Under Certain Conditions"
permalink: /kb/235/Q235959/
---

## Q235959: SNA Server Fails to Reestablish Session Under Certain Conditions

{% raw %}

	Article: Q235959
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An attempt to reestablish a disconnected session may fail unless the connection
	is stopped and restarted.
	
	CAUSE
	=====
	
	SNA Server does not correlate Host SSCP responses to the original SSCP request
	if the response is unexpected.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	4.0, 4.0SP1, 4.0SP2. This problem was first corrected in SNA Server version 4.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	The symptoms described above can only be seen when the Host is sending an
	unexpected response.
	
	In the case reported, the message flow looks as follows:
	
	Host                     SNA Server
	===================================
	ACTLU RQD       ->
	
	               <-       ACTLU +RSP
	
	               <-       NOTIFY SLU enabled
	
	INITSELF -RSP   ->  
	with sense code 0857 0002, SSCP - PLU session not active
	
	NOTIFY +RSP     ->
	
	The message flow shows that the Host is sending an INITSELF -RSP in error, which
	is unexpected as a Response to a NOTIFY Request. However, SNA Server treats this
	unexpected Response as a Response to its NOTIFY Request. At this point, the Host
	and the SNA Server are not synchronized any more as far as this session is
	concerned.
	
	Additional query words: reconnect hangs correlator sequence
	
	======================================================================
	Keywords          : kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
