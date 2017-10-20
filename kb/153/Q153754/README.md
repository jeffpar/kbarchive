---
layout: page
title: "Q153754: XADM: Misleading NDR When Recipient has Incoming Size Limit"
permalink: /kb/153/Q153754/
---

## Q153754: XADM: Misleading NDR When Recipient has Incoming Size Limit

{% raw %}

	Article: Q153754
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you sent a message a Microsoft Exchange account that has a Maximum Incoming
	Message Size limit and the message exceeds this limit, you will receive
	Non-Delivery Report (NDR) similar to the following:
	
	  Your message did not reach some or all of the intended recipients:
	  Subject: test
	  Sent: 7/16/96 2:23:23 PM
	  The following recipient(s) could not be reached:
	  Curley on 7/16/96 2:23:23 PM
	  Either the size of this message exceeds your maximum allowed message size or
	  you have exceeded the storage limit on your mailbox.
	  [MSEXCH:MSExchangeIS:MARVEL:XMEN]"
	
	MORE INFORMATION
	================
	
	Notice that the NDR seems to imply that the sender has exceeded a quota or
	message size limit although the sender does not have any restrictions and the
	restrictions are on the intended recipient.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
