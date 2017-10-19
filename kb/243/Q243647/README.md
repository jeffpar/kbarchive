---
layout: page
title: "Q243647: &quot;Error Communicating with Component&quot; Querying for Service Status"
permalink: /kb/243/Q243647/
---

## Q243647: &quot;Error Communicating with Component&quot; Querying for Service Status

	Article: Q243647
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool kbsms200
	Last Modified: 06-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the SMS_NT_Logon_Discovery_Agent thread in Systems Management
	Server (SMS) Service Manager to query for its status, you may receive the
	following error message or one similar to it:
	
	  Error communicating with component
	
	CAUSE
	=====
	
	If Windows Networking Logon Client Installation is enabled but Windows
	Networking Logon Discovery is not enabled, the Microsoft Windows NT Domain
	controllers do not get the SMS_NT_Logon_Discovery_Agent installed. This agent
	appears in the SMS Service Manager tool, but when you query this agent, you
	receive the error message listed earlier in this article. It is by design
	behavior that the SMS_NT_Logon_Discovery_Agent (which runs as a service on
	domain controllers) would not be installed, and so would not be able to respond
	to a query request.
	
	RESOLUTION
	==========
	
	To verify the agent is not installed on the domain controllers, you can use the
	Windows NT Server Manager to connect to that server, or if you are at the
	console of a domain controller, use the Services tool in Control Panel to search
	for the SMS_NT_Logon_Discovery_Agent. Note that it should not be there.
	
	If Windows Networking Logon Discovery is enabled, the domain controllers should
	receive the SMS_NT_Logon_Discovery_Agent service, and query requests within the
	SMS Service Manager tool should be successful in displaying a started or stopped
	status.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
