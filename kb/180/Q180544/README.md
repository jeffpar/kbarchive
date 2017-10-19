---
layout: page
title: "Q180544: XADM: SMTP Display Name in Korean Displays Incorrectly"
permalink: /kb/180/Q180544/
---

## Q180544: XADM: SMTP Display Name in Korean Displays Incorrectly

	Article: Q180544
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This is a problem specific to the Korean display name of SMTP messages. When an
	SMTP message is replicated to public folder, the From field is displayed and
	printed incorrectly. For example, original SMTP message in a public folder
	displays
	
	  From: Hong Gil Dong [gdhong@subdomain.domain]
	
	But the replicated SMTP message is displayed as
	
	  From: gdhong@subdomain.domain
	
	and printed as
	
	  From: Hong Gil Dong [gdhong@subdomain.domain] on behalf of
	  gdhong@subdomain.domain
	
	CAUSE
	=====
	
	The wrong code page is used for the display if the sender name field has names
	that are not ASCII compatible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: replication public
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
