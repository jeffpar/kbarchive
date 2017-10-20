---
layout: page
title: "Q272506: XFOR: Event 3018 Occurs When Restarting the IMS"
permalink: /kb/272/Q272506/
---

## Q272506: XFOR: Event 3018 Occurs When Restarting the IMS

{% raw %}

	Article: Q272506
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Internet Mail Service after it has failed, the
	service does not start and the following event is reported in the application
	event log of Microsoft Event Viewer:
	
	  Event ID: 3018
	  Source: IMC
	  Description: The available disk space on the spool drive has dropped below
	  (%1)K. The Internet Mail Connector will not accept messages for inbound and
	  outbound conversion until the available disk space has increased above (%1)K.
	
	CAUSE
	=====
	
	This issue can occur if there is a 16-GB file in the Exchsrvr\Imcdata\Out
	folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the 16-GB file, delete the Queue.dat file from the
	Exchsrvr\Imcdata folder, and then restart the Internet Mail Service.
	
	Additional query words: IMS exch2kp2w
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
