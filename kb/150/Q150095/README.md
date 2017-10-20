---
layout: page
title: "Q150095: XADM: NDRs After Removing X.400 Address From DL"
permalink: /kb/150/Q150095/
---

## Q150095: XADM: NDRs After Removing X.400 Address From DL

{% raw %}

	Article: Q150095
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the X.400 address of a Microsoft Exchange Distribution List (DL) is removed,
	messages sent to the DL will return with Non-Delivery Receipts (NDRs) from the
	Microsoft Exchange Message Transfer Agent (MTA). The following is the message:
	
	  Unable to complete the expansion of a distribution list.
	
	
	RESOLUTION
	==========
	
	You must define a valid X.400 address for the Distribution List by following
	these steps:
	
	1. Confirm your X.400 address for the site under Configuration, Site Addressing,
	  Site Addressing Tab. It should have the X.400 address for the site.
	
	2. Under the E-mail Addresses tab of the Distribution List properties, select
	  New.
	
	3. Under e-mail address type, select X.400.
	
	4. Fill in the General property tab with the information gathered from the Site
	  Addressing tab (Step 1).
	
	5. Specify the Surname(s) field with the Alias of the Distribution List.
	
	6. Select OK to save the changes.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
