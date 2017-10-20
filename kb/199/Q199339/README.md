---
layout: page
title: "Q199339: XFOR: Chat Server Join Command to Multiple Channels Doesn't Work"
permalink: /kb/199/Q199339/
---

## Q199339: XFOR: Chat Server Join Command to Multiple Channels Doesn't Work

{% raw %}

	Article: Q199339
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Chat Server, when you place a space within a list of
	channels to be joined by a single join command, the following message appears:
	
	  475:Cannot join channel (+k)
	
	None of the channels listed in the join command will be joined. The expected
	behavior is that the channels up to the space character are joined and all
	channels following the space are ignored.
	
	WORKAROUND
	==========
	
	Remove the space from the join command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Chat Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
