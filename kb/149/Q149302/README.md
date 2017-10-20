---
layout: page
title: "Q149302: If No Session Configured, TN3270 Client Error Can Be Misleading"
permalink: /kb/149/Q149302/
---

## Q149302: If No Session Configured, TN3270 Client Error Can Be Misleading

{% raw %}

	Article: Q149302
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If no LUs are defined in the TN3270 Server configuration, or you have a pool
	with zero sessions, the following error message returned to the client can be
	misleading:
	
	  The primary error message is an event 511:
	  Telnet negotiation failure: client did not send term type.
	
	This can cause some confusion as why you are unable to establish a session.
	
	RESOLUTION
	==========
	
	Define LUs in the TN3270 Server configuration on SNA Server 2.11, or assign LUs
	to a TN3270 Server in SNA Server Manager on SNA Server 3.0. Verify that LUA
	pools used by the TN3270 servers contain valid LUs.
	
	MORE INFORMATION
	================
	
	A trace shows the client and server going into a loop trying to establish its
	terminal type, and finally the TN3270 server terminating the session. This
	happens because the client did not send the correct terminal type. Because no
	LUs are configured, there is no way it can ever send the correct terminal type.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
