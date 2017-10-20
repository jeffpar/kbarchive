---
layout: page
title: "Q97468: PC WRmt: Mail Does Not Display Friendly Names from Headers"
permalink: /kb/097/Q97468/
---

## Q97468: PC WRmt: Mail Does Not Display Friendly Names from Headers

{% raw %}

	Article: Q97468
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use headers for mail retrieval with version 3.2 of Microsoft Mail
	Remote for Windows, the messages listed show only mailbox names, not friendly
	names. This makes choosing which messages to download difficult if you are
	looking for messages from known senders.
	
	It is not possible to get the friendly name from the message header.
	
	CAUSE
	=====
	
	The Microsoft Shared File System (SFS) transport never looks up the friendly
	names because they are already contained in the message. As a result, there is
	no support to look up a mailbox entry and return the friendly name associated
	with that mailbox.
	
	To provide this, the headers dialog would have to search all the entries in the
	appropriate address directories and check to see if the given mailbox is in the
	list and then return the associated friendly name. Because of the time required
	to search, it is not appropriate for relatively slow telephone/modem
	connections.
	
	It could not be guaranteed to work on all addresses because messages coming
	through gateways may not have entries in any of the address directories (that
	is, the Global Address List (GAL), local postoffice or Personal Address Book
	(PAB)), but they may still have a friendly name in message header somewhere.
	
	It is not possible to get the friendly name without the mail item itself. Mail
	cannot do a look-up of the friendly name because mailbox IDs are unique only
	within the same postoffice, and we do not know which postoffice the mail header
	came from.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0a, and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
