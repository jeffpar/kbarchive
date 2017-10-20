---
layout: page
title: "Q178126: SNA NT Clients Should not Fall Back to Named Pipes"
permalink: /kb/178/Q178126/
---

## Q178126: SNA NT Clients Should not Fall Back to Named Pipes

{% raw %}

	Article: Q178126
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a Windows NT SNA Server Client configured to use TCP/IP sockets
	connection against SNA Server, the client will try to using named pipes if the
	TCP connection fails. This behavior may need to changed in order to prevent
	extra network traffic. The use of named pipes may result in extra network
	traffic. For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q128985 Comparing SNA client TCP/IP named pipes vs sockets
	
	One sign that the client has switched to named pipes is if the initial client
	connection takes 45 to 60 seconds to complete. This is usually the time required
	for the default TCP/IP retry timers to expire.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1, 2.11
	SP1, 2.11 SP2, 3.0, 3.0 SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	
	
	MORE INFORMATION
	================
	
	This function is By Design for the Windows NT SNA Server Client. However, a
	hotfix is available that allows this function to be disabled by adding the
	following registry parameter:
	
	  HKEYLOCALMACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\Parameters\ 
	  IgnorenamedPipes:REG_DWORD:0|1,
	
	The default is 0 (1 = Never use named pipes)
	
	Note: The hotfix must first be applied.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
