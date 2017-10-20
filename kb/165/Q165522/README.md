---
layout: page
title: "Q165522: XCON: MTA Stops, Generating Event IDs 2187, 9405, 9402, &amp; 9996"
permalink: /kb/165/Q165522/
---

## Q165522: XCON: MTA Stops, Generating Event IDs 2187, 9405, 9402, &amp; 9996

{% raw %}

	Article: Q165522
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some high load situations, the Microsoft Exchange MTA stops and generates the
	following Event ID errors:
	
	  Event ID: 2187
	  An MTA database server error was encountered while attempting to unlock
	  an object which is not locked. Called from XAPI. Procedure 253. Object
	  at fault: 0100327C. [DB Server APPLICATION 39 73] (14)
	
	  Event ID: 9405
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Exception c0000005 occurred at Address 2114cae.
	  [BASE APPLICATION 38] (16)
	
	  Event ID: 9402
	  A MTA fatal error has occurred.  A operating system memory heap has
	  been exhausted. [BASE INCOMING RPC 186] (16)
	
	  Event ID: 9996
	  The description for Event ID ( 9996 ) in Source ( MSExchangeMTA ) could
	  not be found. It contains the following insertion string(s): ExitProcess
	  called in file: N:\MTA\NTIL\CC\sbpiwter.c, line: 248.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
