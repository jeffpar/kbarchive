---
layout: page
title: "Q157012: XFOR: Corrupted Message When Using Hebrew or Arabic"
permalink: /kb/157/Q157012/
---

## Q157012: XFOR: Corrupted Message When Using Hebrew or Arabic

{% raw %}

	Article: Q157012
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages sent from an Arabic or Hebrew edition of the Microsoft Exchange Server
	to an Arabic or Hebrew edition of MS-Mail 3.x, or vice versa, with Arabic or
	Hebrew text in the message header and/or the message body, may appear garbled.
	
	For example, all Arabic or Hebrew text appears as follows:
	
	  ????C???E???
	
	CAUSE
	=====
	
	The Microsoft Mail Interchange (MSMI) does not support Arabic or Hebrew language
	content.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Apply the fix referenced below.
	
	2. On the Interchange tab of the MS Mail Connector object, click Properties.
	
	3. Select Arabic or Hebrew in the "Primary Language for Clients" list box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
