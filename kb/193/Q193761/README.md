---
layout: page
title: "Q193761: XFOR: cc:Mail Connector Doesn't Deliver NDRs from Certain ADMDs"
permalink: /kb/193/Q193761/
---

## Q193761: XFOR: cc:Mail Connector Doesn't Deliver NDRs from Certain ADMDs

	Article: Q193761
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Lotus cc:Mail recipients send incorrectly addressed messages to X.400 users
	who are reached through certain X.400 providers, the resulting non- delivery
	report (NDR) is not delivered to the cc:Mail recipient.
	
	This occurs in an environment in which Exchange Server and Lotus cc:Mail
	messaging and dirsync connectivity has been established through the Exchange
	Connector for Lotus cc:Mail, with Exchange acting as an X.400 switch into an
	X.400 service provider.
	
	CAUSE
	=====
	
	This issue is caused by the Exchange Connector for Lotus cc:Mail not being able
	to handle NDRs from Administrative Management Domains (ADMDs) that have no P2
	(content). Many providers send the content back with the NDR. The Exchange
	Connector for Lotus cc:Mail can correctly deliver the NDRs back to the cc:Mail
	originator; however, for those providers that have content return disabled for
	NDRs, the resulting NDR is not delivered.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange Connector for Lotus cc:Mail
	
	  File Name   Version
	  ----------------------
	  Ccmc.exe    5.5.2358.0
	  Ccmsg.dll   5.5.2358.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
