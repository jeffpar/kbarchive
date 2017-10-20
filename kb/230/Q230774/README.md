---
layout: page
title: "Q230774: XADM: Changing Dedicated PF Server May Break AutoAccept Scripts"
permalink: /kb/230/Q230774/
---

## Q230774: XADM: Changing Dedicated PF Server May Break AutoAccept Scripts

{% raw %}

	Article: Q230774
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the private information store to point to another Exchange Server
	computer for public folders, event scripting (AutoAccept scripts) may not run on
	existing resource and conference room mailboxes.
	
	CAUSE
	=====
	
	Pointing the private information store to a dedicated public folder server
	affects the processing of AutoAccept scripts and may break AutoAccept scripts on
	existing resource accounts. AutoAccept scripts read the Free/Busy system folder
	for free and busy information. If you change the private information store to
	point to another server, the Free/Busy system folder is also changed, and the
	AutoAccept script can no longer read the Free/Busy system folder.
	
	RESOLUTION
	==========
	
	To ensure that event scripting works on existing resource accounts, perform the
	following steps:
	
	1. Rehome the EventConfig_<server> system folder to the dedicated public
	  folder server.
	
	2. Run the Event Service on the dedicated public folder server.
	
	3. In the client, right-click the Inbox. Click Properties, click the Agents tab,
	  and then point scripting to run on the new public folder server.
	
	
	Additional query words: Sample delegates resources
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
