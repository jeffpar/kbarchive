---
layout: page
title: "Q148168: XCLN: Err Msg: Sorry, a System Error Occurred... Error Type 11"
permalink: /kb/148/Q148168/
---

## Q148168: XCLN: Err Msg: Sorry, a System Error Occurred... Error Type 11

{% raw %}

	Article: Q148168
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the Microsoft Exchange Macintosh client, the following error
	might occur:
	
	  Sorry, a system error occurred. "Microsoft Exchange" error type 11.
	
	CAUSE
	=====
	
	This error occurs on computers with 8 MB of RAM if too much memory is dedicated
	to the Microsoft Exchange application.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Change the memory requirements to 4000K:
	
	  a. Select the "Microsoft Exchange" application (click once).
	
	  b. On the File menu, click Get Info (or press COMMAND+I).
	
	  c. Change the memory requirements to 4000 K.
	
	- Add more physical RAM.
	
	- Add a program such as RAM Doubler.
	
	- If running a PowerMac, go to Control Panels, Memory. Make sure Virtual Memory
	  is on, and the cache is at least 1024K.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
