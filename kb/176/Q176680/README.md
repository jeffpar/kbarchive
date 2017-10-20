---
layout: page
title: "Q176680: XFOR: Embedded Cc: Line is Interpreted as Cc: Line for Forwards"
permalink: /kb/176/Q176680/
---

## Q176680: XFOR: Embedded Cc: Line is Interpreted as Cc: Line for Forwards

{% raw %}

	Article: Q176680
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Linkage 3.2 to move mail between a Microsoft Exchange Server system
	and a PROFS system, you may experience problems with unwanted users being cc'd
	when mail is forwarded to an Exchange user from PROFS. These unwanted users were
	cc'd in the original PROFS email.
	
	CAUSE
	=====
	
	The PROFS Connector detects original CC: line embedded in the forwarded message
	as the CC: line for the message forwarded to the Exchange user.
	
	WORKAROUND
	==========
	
	Install the latest Linkage patch. It modifies the PROFS connector to allow it to
	detect the real PROFS NOTE CC: list if the message forwarded contains the
	embedded CC: list from the original message. After the patch is installed, the
	embedded CC: list's recipients will be skipped and the real CC: list will be
	mapped as Exchange P2 recipients.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
