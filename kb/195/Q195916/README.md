---
layout: page
title: "Q195916: XADM: Setting Network Connection Logging for Exchange Server"
permalink: /kb/195/Q195916/
---

## Q195916: XADM: Setting Network Connection Logging for Exchange Server

{% raw %}

	Article: Q195916
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article states how to monitor Exchange Server Directory connections when
	you suspect heavy loads, security violations, or clients are not being connected
	or verified.
	
	MORE INFORMATION
	================
	
	By enabling logging in the Exchange Server Administration program, it is
	possible to determine which protocols and/or ports users of Exchange Server are
	connecting to the Directory with.
	
	To set this, perform the following steps:
	
	1. Start the Exchange Server Administrator program, click Configuration, click
	  Servers, click the <servername>, and then click Directory Service.
	
	2. Click on the Diagnostic Logging tab, and set the Logging level for MAPI
	  Interface to "Maximum".
	
	As clients connect to the directory, Events from Source: MSExchangeDS and
	Category: MAPI Interface will logged in the Windows NT Event Viewer Application
	log. Common events are 1170 and 1136. The User column of the Event Viewer will
	list the user that made the connection.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
