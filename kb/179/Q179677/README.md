---
layout: page
title: "Q179677: XFOR: Comma Precedes SMTP Sender's Display Name"
permalink: kb/179/Q179677/
---

## Q179677: XFOR: Comma Precedes SMTP Sender's Display Name

	Article: Q179677
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send mail to a cc:Mail user by means of the Microsoft Exchange Server
	Internet Mail Service, the Microsoft Exchange Connector for Lotus cc:Mail adds a
	preceding comma to the sender's SMTP address. In the cc:Mail client, the
	sender's address is displayed as follows:
	
	  ,User [SMTP:User@Domain.com] at <Exchange Server site>
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	
	This problem does not interfere with mail flow between the systems. All replies
	are processed normally. Also, this problem only manifests itself if the
	Connector for cc:Mail is configured to point to a cc:Mail DB8 post office. The
	Connector for cc:Mail was updated to convert the addresses in the following
	manner:
	
	+----------------------------------------------------------+
	| SMTP Senders Display Name | How It Appears in ccMail Now | 
	+----------------------------------------------------------+
	| Test User                 | "Test User"                  | 
	+----------------------------------------------------------+
	| User, Test                | "User; Test"                 | 
	+----------------------------------------------------------+
	| Test                      | "Test"                       | 
	+----------------------------------------------------------+
	| "Test"                    | "Test"                       | 
	+----------------------------------------------------------+
	
	Additional query words: DB8 ccMail
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
