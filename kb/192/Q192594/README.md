---
layout: page
title: "Q192594: XFOR: Message with Empty From: Field Stuck in MTS_OUT Queue"
permalink: /kb/192/Q192594/
---

## Q192594: XFOR: Message with Empty From: Field Stuck in MTS_OUT Queue

	Article: Q192594
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Internet mail message with an empty From: field is addressed to a
	cc:Mail user, the Exchange Connector for Lotus cc:Mail cannot handle this and
	the message gets stuck in the MTS_OUT queue.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: cc:Mail Connector
	
	  File Name     Version
	  -----------------------
	  Ccmc.exe      5.5.2348
	  Ccmsg.dll     5.5.2348
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
