---
layout: page
title: "Q156724: XCON: Messages Cannot Be Sent to Remote MTA, Repeated Err 2171"
permalink: /kb/156/Q156724/
---

## Q156724: XCON: Messages Cannot Be Sent to Remote MTA, Repeated Err 2171

{% raw %}

	Article: Q156724
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages cannot be sent to the remote message transfer agent (MTA). Error 2171
	is repeatedly logged in the Event Application log, followed by unsuccessful
	transfer retries.
	
	CAUSE
	=====
	
	This is a corruption in the MTA data files (Exchsrvr\Mtadata), which manifests
	itself by blocking queues between two MTAs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
