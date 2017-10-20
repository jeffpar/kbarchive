---
layout: page
title: "Q184185: XFOR: Older Versions of Exchange Server Cannot Send ETRN Command"
permalink: /kb/184/Q184185/
---

## Q184185: XFOR: Older Versions of Exchange Server Cannot Send ETRN Command

{% raw %}

	Article: Q184185
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ETRN command is supported in Microsoft Exchange Server 5.0 Service Pack 1
	and later. It is also supported in Exchange Server 5.5. If you are unable to
	receive Simple Mail Transfer Protocol (SMTP) messages using the ETRN command,
	apply the latest Exchange Server 5.0 service pack or upgrade to Exchange Server
	5.5.
	
	MORE INFORMATION
	================
	
	The ETRN command is an Extended SMTP (ESMTP) command that causes an ESMTP host
	to send messages to a particular domain. When an Exchange Server computer sends
	the ETRN command to an ESMTP host, the host sends any messages that are waiting
	to be sent to recipients in the specified domain. Older versions of Exchange
	Server cannot send the ETRN command.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
