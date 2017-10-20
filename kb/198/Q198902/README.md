---
layout: page
title: "Q198902: XFOR: How to Run the GroupWise Router in Console Mode"
permalink: /kb/198/Q198902/
---

## Q198902: XFOR: How to Run the GroupWise Router in Console Mode

{% raw %}

	Article: Q198902
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The GroupWise Router program may be started in console mode. This may be useful
	for troubleshooting the GroupWise Connector and Calendar Connector connectivity
	to the GroupWise API gateway.
	
	MORE INFORMATION
	================
	
	To start the GroupWise Router program in console mode, follow these steps:
	
	1. Ensure that the GroupWise Router for Novell service is not running.
	
	2. Locate the Gwrouter.exe program, which can be found in the
	  Exchsrvr\Connect\Exchconn directory.
	
	3. At a command prompt, type "gwrouter.exe" (without the quotation marks) or
	  double-click the file in Windows Explorer to start the GroupWise Router
	  program in console mode. You may wish to change the properties of the command
	  window in order to view more information before it scrolls up.
	
	4. To stop the GroupWise Router, press CTRL+BREAK to end the program. In some
	  cases, you may have to end the task.
	
	Additional query words: gwrouter, troubleshooting, GroupWise Router, console
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
