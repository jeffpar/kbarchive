---
layout: page
title: "Q164860: XFOR: Garbled Attachments Between Exchange 4.0 and 5.0 IMCs"
permalink: /kb/164/Q164860/
---

## Q164860: XFOR: Garbled Attachments Between Exchange 4.0 and 5.0 IMCs

{% raw %}

	Article: Q164860
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send multiple attachments across Internet Mail Connectors (IMCs)
	between a computer running Microsoft Exchange Server 5.0 and another computer
	running Microsoft Exchange Server 4.0, every other attachment will be garbled if
	the IMCs are configured to transfer messages in binhex.
	
	CAUSE
	=====
	
	The binhex decoder consumes the blank line that separates each binhex bodypart.
	If the message contains consecutive binhex bodyparts with no blank lines between
	these bodyparts, every second binhex bodypart is copied to PR_BODY undecoded.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
