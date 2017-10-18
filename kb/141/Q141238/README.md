---
layout: page
title: "Q141238: Remote Network Monitor Agents Information Not Available"
permalink: kb/141/Q141238/
---

## Q141238: Remote Network Monitor Agents Information Not Available

	Article: Q141238
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsnetmon
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to find all remote Network Monitor agents across routers in
	Systems Management Server Administrator User Interface (SMS Admin UI), the
	remote agents information is not available.
	
	CAUSE
	=====
	
	This problem occurs due to one or all of following:
	
	- The multicast forwarding option on the router is not enabled
	
	- Recent computer inventory of the client computer does not have the network
	  monitor agent running for its current state.
	
	WORKAROUND
	==========
	
	To work around the problem, do one or all of the following:
	
	- Configure the router for multicast packets to pass through the router. The
	  router may be allowing only IP and IPX packets to pass.
	
	- For remote network monitoring, manually enter the computer name or network
	  address of the client computer in Network Monitor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The SMS Admin UI runs a query against the database to find computers with the
	Network Monitor Agent current status as "Running." The Network Monitor user
	interface is invoked with a command line parameter of the computer name
	detected.
	
	In Network Monitor, an "Identify Network Monitor users" option is available. This
	option sends a series of multicast packets to all NetBIOS- enabled systems that
	have the Network Monitor agent installed. After detecting all the Network
	Monitor agents, a list of the agents is displayed.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork smsnetmon 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
