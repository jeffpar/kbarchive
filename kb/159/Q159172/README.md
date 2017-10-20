---
layout: page
title: "Q159172: XCON: Attachments from Wang Office are Losing Filenames"
permalink: /kb/159/Q159172/
---

## Q159172: XCON: Attachments from Wang Office are Losing Filenames

{% raw %}

	Article: Q159172
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages sent from Wang Office to Microsoft Exchange by means of the Microsoft
	Exchange X.400 Connector, with Transport Neutral Encapsulation Format (TNEF)
	attachments, are losing the attachment filename. The filename is being replaced
	with att.dat'
	
	CAUSE
	=====
	
	The X.400 Content Conversion was incorrectly reading the TNEF file and therefore
	unable to get the correct attachment filename from the TNEF.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: MTA message transfer agent
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
