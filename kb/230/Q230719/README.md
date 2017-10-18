---
layout: page
title: "Q230719: XADM: Rules in Error and Error Unknown"
permalink: kb/230/Q230719/
---

## Q230719: XADM: Rules in Error and Error Unknown

	Article: Q230719
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set up a rule in Microsoft Outlook by using the Rules Wizard or the Inbox
	Assistant to forward incoming mail to another user, the following error message
	may be displayed:
	
	  RULES IN ERROR
	  Rule: "<name_of_rule>"
	  Error: Unknown Error
	
	CAUSE
	=====
	
	This problem can occur if the Exchange Server 5.5 post Service Pack 1 (SP1) fix
	has been applied to the Exchange Server computer. The post-SP1 fix does not
	handle forwarding rules in the client.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	This problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The error message is only displayed the first time that the rule starts. After
	that, if you start Outlook as the user for whom the rule was created, the error
	message is not displayed, but the rule does not work.
	
	If you set diagnostic logging to maximum for rules on the private information
	store, the following events are logged in the following sequence:
	
	  Event ID: 1037
	  Source: MSExchangeIS Private
	  Type: Information
	  Category: Rules
	  Description: Triggering the rule (RuleName) with sequence number 2.
	  The distinguished name of the owning mailbox is Admin Exchange 'ServerName'
	
	  Event ID: 1045
	  Source: MSExchangeIS Private
	  Type: Information
	  Category: Rules
	  Description: Attempting to perform action 0 in rule ID 1-B9C. The type of
	  action is Forward.
	
	  Event ID: 1040
	  Source: MSExchangeIS Private
	  Type: Error
	  Category: Rules
	  Description: The rule (RuleName) with sequence number 2 is being disabled due
	  to errors encountered while applying the rule. The distinguished name of the
	  owning mailbox is Admin Exchange 'ServerName'
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
