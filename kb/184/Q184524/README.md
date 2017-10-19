---
layout: page
title: "Q184524: XFOR: cc:Mail Connector Sends Messages Twice Under Load"
permalink: /kb/184/Q184524/
---

## Q184524: XFOR: cc:Mail Connector Sends Messages Twice Under Load

	Article: Q184524
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0 5.5
	Operating System(s): 
	Keyword(s): kbusage exc55sp2fix
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for Lotus cc:Mail may send duplicate copies of
	a message from Exchange to cc:Mail during the transmission. The problem depends
	on timing and generates duplicates of a few messages just after the connector
	begins processing the queue.
	
	
	CAUSE
	=====
	
	The connector uses multiple threads to check notification messages for items to
	be added to the queue. There is a small possibility of two threads accessing the
	same notification and adding the message to the queue.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Exchange Server 5.0
	-------------------
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	Additional query words: duplicated twice extra ccmail gateway
	
	======================================================================
	Keywords          : kbusage exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
