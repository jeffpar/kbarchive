---
layout: page
title: "Q152949: XFOR: Read Receipt is Received Instead of Return Receipt"
permalink: /kb/152/Q152949/
---

## Q152949: XFOR: Read Receipt is Received Instead of Return Receipt

{% raw %}

	Article: Q152949
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The problem occurs in the following scenario:
	
	A Microsoft Mail for PC Networks Windows client version 3.5 sends a message to a
	Microsoft Mail for PC Networks postoffice, which transfers the message over the
	MS Mail Connector to a computer running Microsoft Exchange Server, which
	transfers the message over the X.400 Connector to a remote X.400 Message
	Transfer Agent (MTA). Finally, the message reaches an X.400 recipient.
	
	The sender has selected the option "Return Receipt." However, the sender only
	receives a Read Receipt back from the recipient. A Delivery receipt is not
	returned from the remote X.400 MTA.
	
	CAUSE
	=====
	
	By default, Microsoft Exchange Server version 4.0 maps the Microsoft Mail
	"Return Receipt" option into the Read Receipt Request X.400 P2 flag.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: failure crash deletion spurious
	
	======================================================================
	Keywords          : kb3rdparty kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
