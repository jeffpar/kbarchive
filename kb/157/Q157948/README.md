---
layout: page
title: "Q157948: XCLN: StuffIt Delux Files Received with Incorrect File"
permalink: /kb/157/Q157948/
---

## Q157948: XCLN: StuffIt Delux Files Received with Incorrect File

{% raw %}

	Article: Q157948
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange connectors (for example, the Internet Mail Connector [IMC]
	and the AppleTalk message transfer agent [ATMTA]) change an incoming StuffIt
	Delux attachment (that is, type=.sitd) to the more basic version of StuffIt
	(that is, type=.sit!). This makes the file open incorrectly in the Microsoft
	Exchange Macintosh client.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	1. Save the file to the hard disk drive.
	
	2. Start StuffIt Delux.
	
	3. Open the file.
	
	-or-
	
	NOTE: The following workaround is for the Microsoft Mail AppleTalk Connector
	only.
	
	1. On any computer running Microsoft Exchange Server and Windows NT Server with
	  AppleTalk Connectors configured, look in
	
	     <exchsrvr>\connect\msmcon\maildata\macgate\ini\mappings.txt
	
	  for an entry for files with the .sit extension. It reads:
	
	     .SIT=StuffIt file:SIT!:SIT!:Binary
	
	2. Comment out this line, by inserting a number sign (#). This ensures that the
	  file is sent in macbinary format.
	
	  NOTE: This probably wasn't an issue with older versions of StuffIt where
	  archives didn't contain a resource fork.
	
	3. Stop and restart the Microsoft Mail for PC Networks and AppleTalk Connector
	  services.
	
	4. Send a test message with StuffIt Delux file from AppleTalk Mail to Microsoft
	  Exchange Server. Use the Microsoft Exchange AppleTalk Mail Connector, and not
	  SMTP, for this test.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q155705 XCLN MAC: How to Change File Associations
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
