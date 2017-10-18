---
layout: page
title: "Q181036: INFO: Suitable Applications for Exchange Server Event Scripting"
permalink: kb/181/Q181036/
---

## Q181036: INFO: Suitable Applications for Exchange Server Event Scripting

	Article: Q181036
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server 5.5 Scripting Agent provides the ability to run
	server-side scripts in response to events that occur in folders, including
	private mailboxes. This article will explain why the proper application of Event
	Scripting is limited to medium-volume workflow and administrative applications.
	
	MORE INFORMATION
	================
	
	Because the Microsoft Exchange Server 5.5 Scripting Agent permits scripts to run
	against individual mailboxes, many developers have attempted to write Inbox
	Agents in VBScript. These attempts have yielded poor results, because the Event
	Scripting Agent is not designed to replace traditional mailbox agents written in
	C/C++. Such agents are normally used to scan every piece of mail in or out of
	the system for viruses, or to archive every message for government
	record-keeping purposes.
	
	There are several vital limitations to the Microsoft Exchange Event Service that
	render it unsuitable for such applications:
	
	- There is no guarantee that a script will see every message. The Event Service
	  fires events asynchronously with respect to the Microsoft Exchange
	  information store. This means that the information store does not block an
	  event script (wait for it to run) before letting other processes or users
	  access the folder or message. Consequently, that message could be moved,
	  copied, deleted, or modified before a script has a chance to run. For
	  example, a script to process all outgoing messages, applied to the
	  OnMessageCreated event in the Outbox folder, may not react to the event
	  before the new message has been delivered and deleted from your Outbox.
	
	- Some of these types of scripting applications may face problems of scale.
	  Depending on the application's purpose, either the script would have to be
	  manually installed in every folder for every user, or event volume would
	  simply be too high to process with an interpreted language like VBScript.
	
	- The Event Service is single-threaded. No matter how many scripts are
	  registered, only one can run at a time. The performance consequences are
	  substantial. For example, a script that requires two seconds to execute, only
	  allows one script to execute every two seconds, for a maximum of 30 scripts
	  per minute. At that rate, 600 scripts would require 20 minutes to process.
	
	- Event Scripts run in a privileged Windows NT security context, that of the
	  Exchange Server service account. One grave consequence of this arrangement is
	  the possibility that a script can open any mailbox on the server and make
	  changes to the contents, without the owner's knowledge. The Exchange 5.5
	  Release Notes state: "The Scripting Agent is not a safe, general purpose
	  replacement for the Inbox Assistant rules because it allows new code to be
	  installed and run on your servers."
	
	REFERENCES
	==========
	
	  Microsoft Exchange Scripting Agent Help File
	  Microsoft Exchange Server 5.5 Release Notes
	  Microsoft Exchange Server Product Group
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
