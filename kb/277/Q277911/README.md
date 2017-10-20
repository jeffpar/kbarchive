---
layout: page
title: "Q277911: XADM: Lost Mail During MoveUser Between Two 5.5 Servers"
permalink: /kb/277/Q277911/
---

## Q277911: XADM: Lost Mail During MoveUser Between Two 5.5 Servers

{% raw %}

	Article: Q277911
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550preSP4fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you move a user from one Exchange Server 5.5 computer to another by means
	of a Microsoft Exchange 2000 server, mail sent during the move may be lost. You
	may not receive a non-delivery report (NDR) for the messages that are lost.
	
	CAUSE
	=====
	
	The logs indicate that the following steps occur automatically in a MoveUser
	operation:
	
	1. A new mailbox for the moved user is created on the destination server.
	
	2. A different thread in the information store delivers a message to the newly
	  created mailbox.
	
	3. The administrator tool sets the InTransit flag on the mailbox that was
	  created in step 1.
	
	4. All delivery threads deliver mail for this new mailbox in the InTransitFolder
	  instead of the actual folder.
	
	5. After the move is finished, the InTransit flag is removed, and the
	  InTransitFolder is flushed to the new mailbox.
	
	6. A message arriving at Step 2 is missing, as it is delivered after the mailbox
	  is created, but before it is tagged as in transit.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP4fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
