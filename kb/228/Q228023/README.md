---
layout: page
title: "Q228023: Connection Status Incorrect in Mixed SNA3 And SNA4 Domain"
permalink: /kb/228/Q228023/
---

## Q228023: Connection Status Incorrect in Mixed SNA3 And SNA4 Domain

{% raw %}

	Article: Q228023
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When running in a mixed version environment with computers running both SNA
	Server 3.0 and SNA Server 4.0, where an SNA 3.0 system is the primary SNA
	server, the connection status of the SNA 4.0 servers may show up incorrectly on
	the SNA 3.0 servers.
	
	CAUSE
	=====
	
	SNA Server 3.0 Service Pack 2 does not support some of the enhancements in SNA
	Server 4.0.
	
	
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
	
	Additional query words: status
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
