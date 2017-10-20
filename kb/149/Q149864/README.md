---
layout: page
title: "Q149864: XADM: Compression of Replication Traffic"
permalink: /kb/149/Q149864/
---

## Q149864: XADM: Compression of Replication Traffic

{% raw %}

	Article: Q149864
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes when Microsoft Exchange replication traffic is
	compressed.
	
	MORE INFORMATION
	================
	
	Directory Replication Traffic:
	
	Inter-site directory replication traffic is compressed by the Microsoft Exchange
	Directory service (DS) before these messages are submitted to the Microsoft
	Exchange Message Transfer Agent (MTA). This is done regardless of the underlying
	message transport.
	
	Intra-site directory replication traffic is not compressed.
	
	Folder Replication Traffic
	--------------------------
	
	Only the message body is compressed for both inter and intra-site folder
	replication. Attachments are not compressed. Transports, such as RAS, may
	compress lower level data streams.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
