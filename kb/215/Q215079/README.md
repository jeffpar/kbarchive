---
layout: page
title: "Q215079: SMS: Unable to Establish Remote Connection to IPX Client"
permalink: /kb/215/Q215079/
---

## Q215079: SMS: Unable to Establish Remote Connection to IPX Client

{% raw %}

	Article: Q215079
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to establish a remote chat session from a Microsoft Systems
	Management Server (SMS) site to a Microsoft Windows for Workgroups client
	running the Internetwork Packet Exchange (IPX) protocol, the connection does not
	complete and the remote session window is terminated.
	
	CAUSE
	=====
	
	This behavior can occur with the Microsoft Internetwork Packet
	Exchange/Sequenced Packet Exchange (IPX/SPX) protocol stack.
	
	WORKAROUND
	==========
	
	To work around this issue, use the TCP/IP protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
