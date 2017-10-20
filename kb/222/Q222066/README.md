---
layout: page
title: "Q222066: XADM: Event ID 11 Logged in the Application Log"
permalink: /kb/222/Q222066/
---

## Q222066: XADM: Event ID 11 Logged in the Application Log

{% raw %}

	Article: Q222066
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The following Event ID 11 is logged in the application log of the Event Viewer
	when a client action spawns the activation of a script.
	
	  Event ID: 11
	  Source: MSExchangeES
	  Type: Error
	  Description: A fatal error (0x80040111) occurred in an IExchangeEventSink
	  while processing message [Subject = ].
	
	Depending on the size of your environment, you may notice that some or all
	scripts are not running. In a large environment, it may appear that the scripts
	are running successfully because of the inability to pinpoint the failing
	script.
	
	CAUSE
	=====
	
	At least one script was last modified by someone who shares the same alias,
	surname, or display name as someone else in the global address list.
	
	The EventSink caches the information about the last person who modified the
	script. However, if there is more than one user in the global address list with
	the same alias as the person that last modified a folder's Agent or Script, the
	Collaboration Data Objects (CDO) routine cannot determine which alias is the
	correct one, so it stops responding and logs the 80040111(MAPI_E_LOGON_FAILURE)
	error. This error creates the impression that the account that caused the script
	to run doesn't have the necessary permissions on the folder, which is not true.
	In fact, it is the CDO routine that fails to log on to run the script from
	within the Event Service.
	
	WORKAROUND
	==========
	
	
	To work around this problem:
	
	First Part
	----------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Determine which mailbox has a duplicate alias by clicking on the
	  EventConfig_<servername> folder for the server that is receiving the
	  errors, then see who has Owner permissions. Do this because only the owners
	  can modify the scripts.
	
	2. To check for ambiguity for each of those aliases:
	
	   - Type their alias in the To line of the client and perform a Check Name.
	
	-or-
	
	   - Type "=alias" (without the quotation marks) on the To line, then press
	     ALT+K.
	
	-or-
	
	   - Perform a directory export of the global address list and sort on the
	     Alias column to see if any of the owners of the
	     EventConfig_<servername> folder shows multiple listings.
	
	3. Set diagnostic logging to Maximum (5) for the Event Service. This can only be
	  done in the registry at:
	
	  HKEY_Local_Machine/System/CurrentControlSet/Services/MSExchangeES/Parameters
	
	After the multiple aliases have been determined, you must decide whether you want
	to choose a different (unique) mailbox to edit the scripts or remove the other
	mailboxes from the global address list.
	
	Second Part
	-----------
	
	If the scripts are installed in mailbox folders, the next part is even more
	detailed if you do not have a list of which mailboxes have scripts associated
	with them or there are many that do. This is because even with Event Service
	logging turned up to Maximum (5) in the registry, the Event ID 16385 (which
	occurs just before the Event ID 11) says that the folder being processed is
	Inbox. Every mailbox has an Inbox folder. So you cannot know which mailbox has
	been altered by the "rogue" EventConfig owner.
	
	1. Post or send a message to the above mailboxes in a segmented fashion to
	  determine when the Event ID 11 occurs. Twenty percent intervals during a
	  quiet time in the environment is suggested.
	
	2. When you find the mailbox, simply go into the script and save it while you
	  are logged on as a unique mailbox alias.
	
	Third Part
	----------
	
	If the scripts are installed in public folders:
	
	1. Set Event Service logging to Maximum (5) in the registry.
	
	2. Post or send messages to the public folders in the same fashion as decribed
	  with mailboxes above, and monitor the application log.
	
	3. Event ID 16385 tells you which folder it is processing and, in case there are
	  multiple agents in the folder, Event ID 32773 tells you the agent that it's
	  calling.
	
	4. Log on to a unique mailbox that has Owner permissions on the
	  EventConfig_<servername> and the public folder, then open the script,
	  and save it.
	
	MORE INFORMATION
	================
	
	An Event ID 15 is logged with the same MAPI error code (80040111) if the
	execution of the script has been scheduled to run. Make sure the mailboxes that
	have Owner permissions on the EventConfig_<servername> folder are not
	hidden because the Event Service algorithm needs to resolve the name before it
	executes. It is a good idea to name the Event Service Accounts something that
	will be unique to the global address list and always log on as this person when
	you want to modify the scripts.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
