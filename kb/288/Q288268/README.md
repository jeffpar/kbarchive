---
layout: page
title: "Q288268: XADM: How to Determine Which Users Are Using KMS"
permalink: /kb/288/Q288268/
---

## Q288268: XADM: How to Determine Which Users Are Using KMS

{% raw %}

	Article: Q288268
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine which users (mailboxes) in a given
	Exchange Server site are using Key Management server (KMS).
	
	MORE INFORMATION
	================
	
	If you are an Exchange Server Administrator, to find out which users are using
	KMS, perform a folder export of the mailboxes to a .csv file. Create .csv file
	with a header called "Tagged-X509-Cert" (without quotes). All the mailboxes that
	are using KMS have entries in the Tagged-X509-Cert header.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
