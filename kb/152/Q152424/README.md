---
layout: page
title: "Q152424: XFOR: Exchange Requestor Drops Users After Dirsync"
permalink: /kb/152/Q152424/
---

## Q152424: XFOR: Exchange Requestor Drops Users After Dirsync

{% raw %}

	Article: Q152424
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 27-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Exchange Server acts as a directory synchronization (dir-sync)
	requestor, it may drop custom recipients from its Global Address List (GAL).
	This occurs when it processes specific transactions that have been inserted into
	dir-sync through a manual import file.
	
	CAUSE
	=====
	
	Users are dropped when transactions are received that follow the alternative
	format suggested in the "Microsoft Mail Administrator's Guide," for versions 3.2
	and 3.5. On page 328(page 330 of the 3.5 manual), the following example is given
	for modification of a user's template information:
	
	  M George Jones
	   - Title:/Sales Rep
	   - Local:/3423
	   - Department:/Sales
	
	Microsoft Exchange will respond unpredictably when it processes a transaction in
	this format. One effect often seen is that it drops the user from the GAL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange Server. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	WORKAROUND
	==========
	
	To make template modifications without encountering this problem, construct the
	input file using modify transactions similar to the following:
	
	  M George Jones                   PCM:ABC/TESTING/GJONES
	    George Jones                   PCM:ABC/TESTING/GJONES
	   - Title:/Sales Rep
	   - Local:/3423
	   - Department:/Sales
	
	Notice the extra line added beneath the line beginning with M. Microsoft Exchange
	expects transactions in this two-line format.
	
	If users have been dropped from the GAL due to this problem, request a full
	import and the users will be restored on the next dir-sync cycle. To request a
	full import on Microsoft Exchange, start the Microsoft Exchange Administrator
	program and view the properties of the Dir-Sync Requestor object. On the
	Settings property page, select the Import on Next Cycle checkbox.
	
	MORE INFORMATION
	================
	
	See Appendix A of the Microsoft Exchange Administrator's Guide for additional
	information regarding the import program and its use with an import file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
