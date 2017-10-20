---
layout: page
title: "Q193780: XFOR: Message Sent with X.400 One-Off Address Generates NDR"
permalink: /kb/193/Q193780/
---

## Q193780: XFOR: Message Sent with X.400 One-Off Address Generates NDR

{% raw %}

	Article: Q193780
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message from Lotus Notes to Microsoft Exchange Server through
	the Exchange Notes Connector using an X.400 one-off address, the message may not
	be delivered successfully, and you may receive a non- delivery report (NDR).
	
	CAUSE
	=====
	
	This problem occurs when the X.400 one-off address does not contain a leading
	slash mark (/). The Exchange Notes Connector requires that X.400 one-off
	addresses have a leading slash mark, but Lotus Notes does not allow X.400
	one-off addresses to be created in this format.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange Notes Connector
	
	  File Name     Version
	  -------------------------
	  Lsmexif.dll   5.5.2232.19
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
