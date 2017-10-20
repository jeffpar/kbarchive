---
layout: page
title: "Q182504: XADM: How to Activate Protocol Logging for POP3 and IMAP4"
permalink: /kb/182/Q182504/
---

## Q182504: XADM: How to Activate Protocol Logging for POP3 and IMAP4

{% raw %}

	Article: Q182504
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	When you are running Microsoft Exchange Server version 5.5, it is possible to
	log all protocol activity to a log, using the POP3 and IMAP4 protocols. This
	article details how to enable and locate this logging.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Logging is activated by adding specific entries to the registry.
	
	1. Start Regedt32.exe and locate the following key:
	
	  SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	2. Administrators can adjust the following values:
	
	  POP3 Protocol Logging Level      REG_DWORD: 0 through 5
	  POP3 Protocol Log Path         REG_SZ:<c:\exchsrvr\mdbdata>
	  IMAP Protocol Logging Level      REG_DWORD: 0 through 5
	  IMAP Protocol Log Path         REG_SZ:<c:\exchsrvr\mdbdata>
	
	After you do this, log files will be created the next time a session is
	activated. They will start with the name L0000001.log. The first line in the
	file will declare the service it is associated with.
	
	NOTE: After they are created, these log files are continuously locked open. To
	delete them, set the logging level to 0. The next time a session is started, the
	file handle will be released.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
