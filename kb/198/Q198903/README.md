---
layout: page
title: "Q198903: XFOR: PROFS Connector Does not Support &quot;Messages&quot;"
permalink: /kb/198/Q198903/
---

## Q198903: XFOR: PROFS Connector Does not Support &quot;Messages&quot;

{% raw %}

	Article: Q198903
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for IBM OV/VM does not support the delivery of
	"messages" from the host to Exchange Server.
	
	In the OV/VM environment, it is possible to send "messages" rather than "notes"
	to other Office users. "Messages" are smaller versions of "notes." When a host
	user attempts to send a "message" to an Exchange Server user, an error will
	occur on the RSCS console with the following error message:
	
	  No active path to [NODE] is currently open. Message sent to <username>
	  at node <node>.
	
	CAUSE
	=====
	
	The only form of mail documents supported by the Microsoft Exchange Connector
	for IBM OV/VM connector are "notes."
	
	WORKAROUND
	==========
	
	Instruct host users to send only "notes" to Exchange Server users.
	
	STATUS
	======
	
	Microsoft acknowledges this to be a problem.
	
	Additional query words: RSCS, console, messages, error, missing
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
