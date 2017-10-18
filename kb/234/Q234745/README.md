---
layout: page
title: "Q234745: XFOR: Corrupted Message Stops Inbound Traffic, Monopolizes CPU"
permalink: kb/234/Q234745/
---

## Q234745: XFOR: Corrupted Message Stops Inbound Traffic, Monopolizes CPU

	Article: Q234745
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
	
	A corrupted Lotus cc:Mail message (.ccm) file may cause the Microsoft Exchange
	Connector for Lotus cc:Mail to use up to 90 percent of the CPU and subsequently
	stop the processing of all inbound mail messages.
	
	CAUSE
	=====
	
	The 'Contents:' field is mandatory in a cc:Mail message. If the cc:Mail message
	is missing this field because of corruption in the body, the cc:Mail Connector
	loops indefinitely.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Microsoft Lotus cc:Mail Connector
	
	+---------------------+
	| File name | Version | 
	+---------------------+
	| Ccmc.exe  | 2623.0  | 
	+---------------------+
	| Ccmsg.dll | 2623.0  | 
	+---------------------+
	
	
	WORKAROUND
	==========
	
	You can remove the corrupted cc:Mail message by stopping the Microsoft Exchange
	cc:Mail Connector service, and then deleting the stuck message in the
	Exchsrvr\Ccmcdata\Export folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: ccmail, stuck message, high CPU, 100%
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
