---
layout: page
title: "Q166618: XADM: Batch Export Crashes When Non Zero ulUSNBase is Specified"
permalink: /kb/166/Q166618/
---

## Q166618: XADM: Batch Export Crashes When Non Zero ulUSNBase is Specified

{% raw %}

	Article: Q166618
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run a batch export in Microsoft Exchange Server, version 5.0, the
	Directory Service may abort operation.
	
	CAUSE
	=====
	
	If BatchExport is called with non-zero ulUSNBase, the data structure used to
	build the filter object for passing to the Directory Service is missing a field
	(size). This causes the filter to be built with a NULL value, which results in
	an error on the ds_search. The error handling routines then attempt to access
	the current Attribute/Value tables, which don't exist for BatchExport.
	
	This behavior will not occur when you use the Microsoft Exchange Administrator
	program. The export command in the Administrator program does not provide an
	option to set the ulUSNBase to not zero.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
