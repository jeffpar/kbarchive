---
layout: page
title: "Q234387: XCON: Hole in Web 3 Connector w. GroupWise 5.5 Internet Agent"
permalink: /kb/234/Q234387/
---

## Q234387: XCON: Hole in Web 3 Connector w. GroupWise 5.5 Internet Agent

{% raw %}

	Article: Q234387
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you forward e-mail to an Exchange Server user from a Novell GroupWise 5.5
	e-mail system by using the Web 3 Connector, the wrong header may appear in the
	e-mail. The sender, recipient, and subject information are incorrect. The
	attached original message is lost.
	
	You may be able to change the header with a text editor and attach this new
	header to an original new e- mail message, but the erroneous header information
	becomes part of the new message and cannot be distinguished from the rest of the
	text.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename all of your Mime.822 files in the GroupWise
	Internet Agent. For example, rename the Mime.822 files to Mime.txt.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
