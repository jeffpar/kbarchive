---
layout: page
title: "Q188647: XADM: Folder Assistant Rule to Forward Messages May Fail"
permalink: /kb/188/Q188647/
---

## Q188647: XADM: Folder Assistant Rule to Forward Messages May Fail

	Article: Q188647
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are setting up a rule in the Folder Assistant to forward messages to a
	mailbox and are using Insert Message as an Attachment as the method, you may
	notice that posts to that public folder are not forwarded and the rule has been
	disabled.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	  Component: Information Store
	
	  File Name   Version
	  ----------------------
	  Store.exe   5.5.2442.0
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the other two methods under Folder
	Assistant to forward messages:
	
	- Standard
	
	- Leave Message Intact
	
	1. Under Folder properties, click Folder Assistant.
	
	2. Select the edit rule that has been disabled (a red X).
	
	3. Under Edit Rule, select the forward method to be either Standard or Leave
	  Message Intact.
	
	4. Click OK to apply the rule.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	
	Additional query words: freedocs freedoc posting inbox assistant
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
