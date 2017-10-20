---
layout: page
title: "Q223772: XFOR: Connector for cc:Mail Loops Trying to Import Same Message"
permalink: /kb/223/Q223772/
---

## Q223772: XFOR: Connector for cc:Mail Loops Trying to Import Same Message

{% raw %}

	Article: Q223772
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Connector for Lotus cc:Mail loops trying to import the same
	message. If, for whatever reason, the connector receives a message that the
	cc:Mail IMPORT program returns result code 1 (contained in the description for
	event 59 in the application event log), it is likely that the cc:Mail IMPORT
	program will not delete the original .ccm file that it was asked to import. The
	result is that the connector continually tries to import the same message. A
	non-delivery report is written to the .und file for each attempt that is made to
	import the message; consequently, the .und file gets larger and larger.
	
	CAUSE
	=====
	
	The Exchange Connector for cc:Mail has been modified to work around this class
	of error from the cc:Mail import program, and remove the .ccm file from the
	import directory.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Connector for Lotus cc:Mail
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Ccmc.exe  | 5.5.2571.0 | 
	+------------------------+
	| Ccmsg.dll | 5.5.2571.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
