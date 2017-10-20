---
layout: page
title: "Q169899: XGEN: Event Log Displays Different Error Description"
permalink: /kb/169/Q169899/
---

## Q169899: XGEN: Event Log Displays Different Error Description

{% raw %}

	Article: Q169899
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to correctly interpret the messages in Windows NT Server Event Logs,
	make sure that the logs are viewed on a computer running the same version of
	Microsoft Exchange Server as the computer that created the logs. Viewing the
	logs on a computer that has a different version of Microsoft Exchange Server
	installed on it can result in confusion in interpreting the log's messages.
	
	MORE INFORMATION
	================
	
	Event logs will display different description messages depending on the version
	of Microsoft Exchange Server that is installed on the computer. The Event ID
	will remain the same. For example, an event log entry from a computer with
	Microsoft Exchange Server version 4.0 installed on it will state:
	
	  Event ID: 8
	  Description: MSExchangeIS ((479)) Redoing log file
	  D:\exchsrvr\MDBDATA\edb.log
	
	The same event viewed on a computer with Microsoft Exchange Server version 5.0
	installed in it will state:
	
	  Event ID: 8
	  Description: MSExchangeIS ((479)) size mismatch on logfile
	  D:\exchsrvr\MDBDATA\edb.log. IO size %4 expected while returned size is %5
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
