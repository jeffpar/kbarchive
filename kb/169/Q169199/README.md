---
layout: page
title: "Q169199: XADM: Purpose of Hierarch.dat in the DSADATA Directory"
permalink: /kb/169/Q169199/
---

## Q169199: XADM: Purpose of Hierarch.dat in the DSADATA Directory

{% raw %}

	Article: Q169199
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft Exchange directory service shuts down, it writes the basic
	hierarchy structure to a file called Hierarch.dat in the Dsadata folder. This
	file is used by the directory service on startup to quickly load the hierarchy
	structure information and shorten startup time without having to read the entire
	directory database again.
	
	MORE INFORMATION
	================
	
	This file can be safely deleted at any time. The only adverse effect is that the
	directory service may take longer to start if the file is deleted while the
	service is stopped.
	
	The Hierarch.dat file is used to keep the number of objects in a container
	between stops and starts of the directory service. Exchange Server writes it out
	when shutting down, and reads it back in when starting up. Note that with
	hierarchy calculation, finding out what containers there are is easy;
	calculating the number of objects in a container is expensive. Normally, if you
	press F5 in the Exchange Server Administrator program, you cause the hierarchy
	to be recalculated. Shutting down the directory and deleting the Hierarch.dat
	file also causes the hierarchy to be recalculated at start up, often leading to
	long startup times for the directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
