---
layout: page
title: "Q295071: XFOR: How to Restore and Back Up Correlation Tables for SNADS"
permalink: /kb/295/Q295071/
---

## Q295071: XFOR: How to Restore and Back Up Correlation Tables for SNADS

{% raw %}

	Article: Q295071
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to backup and restore correlation tables that are
	used by SNADS.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Connector for SNADS uses correlation tables to maintain a
	mapping of the connector's generated SNADS proxy addresses with the SMTP
	addresses for messages that are received from the Internet and bound for SNADS
	recipients. It is recommended that you use the procedures described in this
	section to back up and restore these tables to prevent SNADS recipients from
	being unable to reply to SMTP messages, or to prevent SNADS recipients from
	replying to the wrong Internet address.
	
	NOTE: To complete the backup procedure, the Lmetprox.seq file must be intact.
	
	To back up correlation tables, copy the contents of the
	<Exchsrvr>\Connect\Exchconn\Tables folder.
	
	To restore correlation tables, replace all of the files in the
	<Exchsrvr>\Connect\Exchconn\Tables folder except for the Lmetprox.seq
	file; retain the current Lmetprox.seq file. When you do so, the proxy addresses
	assigned sequence remains uninterrupted. If Lmetprox.seq is replaced with the
	backup file, it is possible that the same SNADS proxy address may be assigned to
	two different SMTP addresses. Lmetprox.seq tracks how proxy addresses are
	assigned and generated.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
