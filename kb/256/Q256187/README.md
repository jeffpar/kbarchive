---
layout: page
title: "Q256187: XFOR: MS Mail Interchange Service Stops Processing Messages"
permalink: /kb/256/Q256187/
---

## Q256187: XFOR: MS Mail Interchange Service Stops Processing Messages

{% raw %}

	Article: Q256187
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 20-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The flow of e-mail messages between Microsoft Mail and Exchange Server may stop
	without any error message being displayed in the application event log. If you
	view the performance log, you can see the MSExchangeMSMI service has stopped
	processing messages. If you restart the MSExchangeMSMI service, the flow of
	e-mail messages resumes. However, after some time, the flow of e-mail messages
	stops again.
	
	CAUSE
	=====
	
	This behavior can occur if there are too many files in the Att and Mai folders.
	If there are too many *.att or *.mai files in these folders, the MSExchangeMSMI
	service stops processing messages.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the old *.att and *.mai files:
	
	1. In Windows NT Explorer, locate the Exchsrvr\Connect\Msmcon\Maildata folder.
	
	2. Right-click the folder, and then click Find.
	
	3. In the Named box, type "*.att;*.mai" (without the quotation marks).
	
	4. Click to select the files in the list on the right, and then delete them.
	
	Additional query words: msmi hang
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
