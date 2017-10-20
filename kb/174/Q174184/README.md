---
layout: page
title: "Q174184: MDG: Mail Is Missing"
permalink: /kb/174/Q174184/
---

## Q174184: MDG: Mail Is Missing

{% raw %}

	Article: Q174184
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users report that mail sent to them is disappearing. Users who have Schedule+
	running but not mail may notice that, when they log on to mail, messages sent to
	them are missing. These users will be using a mail client that does not use the
	MMF file, such as Windows 95 Inbox, Outlook, or Exchange and probably have
	Schedule+ in the startup group.
	
	CAUSE
	=====
	
	The users will be running Schedule+ 1.0, a 16-bit version and 32-bit PST-based
	mail client. When launched, Schedule+ looks for Mapi.dll. If a MAPI session is
	not running, it will start it. Schedule+ 1.0 needs a Simple MAPI-based client
	running to work. This will, in effect, be spooling users' mail into their old
	MMF files. Then when starting Inbox or another PST client, users will not see
	the messages as they have already been delivered into the mail message store and
	deleted from each user's mailbag.
	
	RESOLUTION
	==========
	
	Upgrade users to a 32-bit scheduling client such as Schedule+ 7.0 or Outlook,
	which can use Schedule+ 95 as the primary calendar part of the client. Adding
	the PST-based mail client to the startup group will not, in itself, guarantee
	that some mail will not slip into the MMF, but will reduce the chances of lost
	mail.
	
	Additional query words: Sch+ Missing Lost Mail OL97 OL98
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
