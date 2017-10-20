---
layout: page
title: "Q260288: XADM: Offline Address Book Generation Does Not Work"
permalink: /kb/260/Q260288/
---

## Q260288: XADM: Offline Address Book Generation Does Not Work

{% raw %}

	Article: Q260288
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Offline Address Book generation process, you may receive the
	following error message:
	
	  An error occurred while generating the offline address book... ID no:c1031662
	
	Also, you may receive the following error in the Event Viewer application log:
	
	  Source: MSExchangeSA
	  Event ID: 5004
	  Description:
	  Generation of the offline Address Book is complete. Result: The required MAPI
	  profile cannot be created because the file MAPISVC.INF cannot be modified.
	
	CAUSE
	=====
	
	The Exchange Server service account does not have appropriate rights to the
	Winnt/System32 folder.
	
	RESOLUTION
	==========
	
	Give the Service account full control rights to the System32 folder.
	
	The Exchange Server Service account should normally be placed in the local
	Administrator group on member servers, or the Domain Administrator group on
	domain controllers.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
