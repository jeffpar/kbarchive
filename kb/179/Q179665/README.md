---
layout: page
title: "Q179665: XADM: Message Receipts Generated Even with Option Cleared"
permalink: /kb/179/Q179665/
---

## Q179665: XADM: Message Receipts Generated Even with Option Cleared

{% raw %}

	Article: Q179665
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This problem occurs in a situation where a distribution list is created on a
	server. On the Advanced tab of its properties in the Exchange Server
	Administrator program, the Report to Message Originator checkbox is cleared. The
	membership of the distribution list consists of users on this server and other
	servers.
	
	A message is now sent to the distribution list with a request for read receipts
	and/or delivery receipts. The expected behavior is that no read receipts and/or
	delivery receipts from individual recipients will be generated. However, if the
	recipient is located on a server other than the originating server, a read or
	delivery receipt is generated.
	
	CAUSE
	=====
	
	When the mail is sent to a DL (the PRIV_DL_REPORT_TO_ORIG bit of which is off)
	on Server1 that has recipients on both Server1 and Server2 with Read/Delivery
	Receipts requested, the message is transferred to Server2, with the
	PR_DL_REPORT_FLAGS preserved on the envelope. However, the store on the
	receiving end fails to suppress reports based on the flags. Consequently the
	store delivers to recipients on Server2 and emits Read/Delivery Receipts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
