---
layout: page
title: "Q168308: XADM: Event ID 1191: Total Number of Threads Too Low"
permalink: /kb/168/Q168308/
---

## Q168308: XADM: Event ID 1191: Total Number of Threads Too Low

{% raw %}

	Article: Q168308
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive the following error in the application log when you upgrade from
	Microsoft Exchange Server 4.0 to 5.0:
	
	  Event ID 1191
	  Source: MSExchangeIS
	  Type: Stop
	
	  The total number of threads (64) configured for the Information Store is
	  too low.
	  Assuming 67 threads.
	
	The number of threads in the error message you see may differ from this example.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Rerun the Exchange Server Performance Optimizer with the default options. Be
	  careful not to move the location of database and/or log files if the
	  recommended location is not what it desired.
	
	
	Additional query words: setup
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	
	=============================================================================
	

{% endraw %}
