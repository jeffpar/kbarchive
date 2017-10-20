---
layout: page
title: "Q87057: MCI: How Mail Gets from Downstream Postoffice to Gateway"
permalink: /kb/087/Q87057/
---

## Q87057: MCI: How Mail Gets from Downstream Postoffice to Gateway

{% raw %}

	Article: Q87057
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MCI, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mail being sent from MCI to a downstream postoffice is first picked up by the
	MCI gateway. The gateway looks at the TO: address of the mail message: if the
	mail is going to a downstream postoffice, the gateway puts the mail in that
	postoffice's queue, along with any other local mail going to the downstream
	postoffice.
	
	The External program picks up mail items from the queue and transmits them to the
	downstream postoffice.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  "pcmail" (without the quotation marks) and "mci" (without the quotation
	  marks) and "indirect" (without the quotation marks) and "downstream" (without
	  the quotation marks) and "external" (without the quotation marks)
	
	
	Additional query words: 3.00 pcmail indirect 2.1a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMCI300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
