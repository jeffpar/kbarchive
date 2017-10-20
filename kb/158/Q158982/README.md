---
layout: page
title: "Q158982: TN3270E Server Sends SSCP Screens to Printer LUs"
permalink: /kb/158/Q158982/
---

## Q158982: TN3270E Server Sends SSCP Screens to Printer LUs

{% raw %}

	Article: Q158982
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start a printer LU on a Microsoft TN3270E Server, an SSCP screen is
	sent back, which causes the session to fail.
	
	RESOLUTION
	==========
	
	The TN3270E Server has been updated so that it will send a negative response to
	LU-SSCP data from the host on a session for a printer LU.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 and 2.11
	Service Pack 1 (SP1). This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
