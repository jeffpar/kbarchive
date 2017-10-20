---
layout: page
title: "Q166583: XADM: Folders Are Sorted When Non-English Settings Are Used"
permalink: /kb/166/Q166583/
---

## Q166583: XADM: Folders Are Sorted When Non-English Settings Are Used

{% raw %}

	Article: Q166583
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When Microsoft Outlook users choose regional settings other than English, they
	may find that their folders are sorted on the last item modification date.
	
	CAUSE
	=====
	
	When a non-English regional setting is used, indexing within a specific Jet
	database table is handled differently than a case where the English regional
	setting is used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	This problem was corrected in the latest Microsoft Exchange Server 5.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
