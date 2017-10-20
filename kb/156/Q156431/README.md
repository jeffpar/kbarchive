---
layout: page
title: "Q156431: XFOR: Error 71 When Using NT Server from MSDN Select CD"
permalink: /kb/156/Q156431/
---

## Q156431: XFOR: Error 71 When Using NT Server from MSDN Select CD

{% raw %}

	Article: Q156431
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server on Windows NT Server version 4.0, you
	might see the following error:
	
	  Error 71: No more connections can be made to this remote computer at this
	  time because there are already as many connections as the computer can
	  accept.
	
	CAUSE
	=====
	
	One possible cause for this error is that the NT Server was installed from the
	MSDN Select CD. This version of NT Server has a 10 client connection limit.
	
	MORE INFORMATION
	================
	
	For additional information on troubleshooting error 71, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q149522 System Error 71 and License Manager
	
	  Q148967 Err Msg: "This Request Not Accepted by Network" on WFWG Client
	
	  Q130631 Client License Assignment in Per Server Mode
	
	Additional query words: license manager connect
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbWinNTsearch kbWinNTSsearch kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2 kbGraph500
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
