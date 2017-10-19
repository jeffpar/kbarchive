---
layout: page
title: "Q278982: Server Discovery Doesn't Keep History of All Discovered Servers"
permalink: /kb/278/Q278982/
---

## Q278982: Server Discovery Doesn't Keep History of All Discovered Servers

	Article: Q278982
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbDiscovery kbsms200preSP3fix kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMS_WINNT_SERVER_DISCOVERY_AGENT thread generates Data Discovery Record
	(DDRs) for all discovered servers every cycle.
	
	Note that the Discovered Site Systems registry list is located in the following
	registry key:
	
	  HKEY_Local_Machine\Software\Microsoft\SMS\Components\SMS_WINNT_SERVER_DISCOVERY_AGENT
	
	CAUSE
	=====
	
	This problem occurs because the agent does not keep a local history of all
	discovered servers when the agent cannot reach one site system server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	This problem was first corrected in Systems Management Server 2.0 Service Pack 4.
	
	Additional query words: prodsms disc local history
	
	======================================================================
	Keywords          : kbDiscovery kbsms200preSP3fix kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
