---
layout: page
title: "Q174729: XADM: Err Msg: No Mapping Between Account Names and Security IDs"
permalink: /kb/174/Q174729/
---

## Q174729: XADM: Err Msg: No Mapping Between Account Names and Security IDs

{% raw %}

	Article: Q174729
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you run the Microsoft Exchange Server Setup program, you may receive the
	following error message:
	
	  Processing file server.ins, at or near line 276
	
	  No mapping between account names and security IDs was done.
	
	  Microsoft Windows NT ID no: 0xc0020534
	
	This error will occur if setup is unable to get the SID for the Microsoft
	Exchange Service Account. Usually this means that the Windows NT Primary Domain
	Controller was unavailable and setup was unable to contact any Backup Domain
	Controllers.
	
	Additional query words: setup fail stop
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	
	=============================================================================
	

{% endraw %}
