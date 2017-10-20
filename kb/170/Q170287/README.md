---
layout: page
title: "Q170287: Multi-session SLI Program Stops Receiving Data"
permalink: /kb/170/Q170287/
---

## Q170287: Multi-session SLI Program Stops Receiving Data

{% raw %}

	Article: Q170287
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an SLI program opens multiple sessions, the application may fail to receive
	error notification on all sessions if a link failure occurs, causing the session
	to stop responding. This problem was observed in the following scenario:
	
	- A Win32-based SLI application (running on the SNA Server or a Windows NT
	  client) opens 100 sessions, then calls SLI_RECEIVE on each session.
	
	- A connection failure occurs, causing all 100 sessions to fail. However, the
	  SLI application fails to receive any error notification on most of the
	  sessions. All SLI_RECEIVEs should return with the following error message
	  when the connection fails:
	
	  
	
	     primary_rc   = 0x000F     (LUA_SESSION_FAILURE)
	     secondary_rc = 0x08310000 (LUA_LU_COMPONENT_DISCONNECTED)
	
	The above scenario describes the common symptom for this problem. However, the
	problem could appear whenever the SLI library receives status or data messages
	on a large number of sessions at the same time.
	
	CAUSE
	=====
	
	The SNA Server SLI interface is queuing messages to the RUI interface
	incorrectly, which could cause outstanding SLI calls to fail to return to the
	SLI application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 SP2 and
	3.0 SP1.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix is now available for 2.11 SP2, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211
	Version           : WINDOWS:2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
