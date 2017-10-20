---
layout: page
title: "Q156998: XADM: To: Recipients Shown Half-size if Client is on Server"
permalink: /kb/156/Q156998/
---

## Q156998: XADM: To: Recipients Shown Half-size if Client is on Server

{% raw %}

	Article: Q156998
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer is running Windows NT Server version 4.0 and you install a
	Microsoft Exchange Service Pack 2 Server before the Microsoft Exchange Service
	Pack 2 client, you will see that the scroll control for the To, From, Cc, and
	Bcc boxes is not the full up or down arrow, but smaller and squished. Clicking
	the buttons will scroll the view of the name, cut it in half, and never go to a
	new line. In addition, if you perform a Check Name, the name will be shifted
	down, cut in half, and no scroll option will be provided.
	
	
	CAUSE
	=====
	
	The Microsoft Exchange client and Administrator programs use different character
	sets. One is using a single byte character set (SBCS) and the other is using a
	double byte character set (DBCS). Both need to use the same character set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
