---
layout: page
title: "Q146791: XFOR: IMC Cannot Receive Message with Missing Folder"
permalink: /kb/146/Q146791/
---

## Q146791: XFOR: IMC Cannot Receive Message with Missing Folder

{% raw %}

	Article: Q146791
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run low on disk space, or if you rename or remove the IN directory while
	the Exchange Internet Mail Connector (IMC) is running, inbound SMTP mail
	messages are not accepted and the following error message may appear:
	
	  421 Internal Error. Connection Closing.
	
	In addition, if you stop and restart the IMC service in Control Panel Services,
	the following error message appears and the IMC service stops:
	
	  Could not stop the Microsoft Exchange Internet Mail Connector on \\<Server
	  Name>
	
	  0008: Not enough storage space is available.
	
	RESOLUTION
	==========
	
	To correct this problem, stop and restart the IMC service. The IMC recreates the
	IN directory upon startup. The default working directory is EXCHSRVR\IMCDATA\IN.
	
	MORE INFORMATION
	================
	
	The Internet Mail Connector must have access to the IN directory while the
	service is running. If the directory is removed, inbound SMTP calls may be
	refused. If a call is accepted, the mail will be rejected with the following
	Event Log error:
	
	 Event ID:   4055
	 Source:     MSExchangeIMC
	 Type:       Error
	 Category:   Internal Processing
	
	 Unable to move file
	 <drive>\exchsrvr\imcdata\work\<filename> to
	 <drive>\exchsrvr\imcdata\in\<filename> due to system error.
	 The system cannot find the path specified.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbtool 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
