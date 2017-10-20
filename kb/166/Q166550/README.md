---
layout: page
title: "Q166550: XCLN: Active Messaging App Running as Service Fails"
permalink: /kb/166/Q166550/
---

## Q166550: XCLN: Active Messaging App Running as Service Fails

{% raw %}

	Article: Q166550
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 5.0 
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to run an Active Messaging Application from a Windows NT
	Service (for example, AT Scheduler) the following error message may appear.
	
	  MAPI_E_NOT_FOUND
	
	The error message is returned from the Active Messaging Session Object when a
	profile name is passed. The application runs successfully when it is not being
	run in a Windows NT service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem was corrected in the latest Microsoft Exchange Server 5.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Running Active Messaging as a Windows NT service requires additional
	configuration to initialize a MAPI session. For more information, please refer
	to the following article in the Microsoft Knowledge Base:
	
	  Q177851 HOWTO: Build a VB/Messaging Application to Run from a Service
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
