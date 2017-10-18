---
layout: page
title: "Q170809: XADM: Exchange Services Stop Due to Low Disk Space"
permalink: kb/170/Q170809/
---

## Q170809: XADM: Exchange Services Stop Due to Low Disk Space

	Article: Q170809
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are experiencing some or all of the following:
	
	- Getting low storage space notifications.
	
	- Running out of hard drive space on Exchange Server computers.
	
	- Microsoft Exchange Server services stop due to low disk space.
	
	- Large Archive directories under %Exchsrvr%\Imcdata\In\Archive and
	  %Exchsrvr%\Imcdata\Out\Archive.
	
	CAUSE
	=====
	
	Archive logging in the Exchange Server Administrator program located under
	Connectors/Internet Mail Service (Connector)/Properties/Diagnostic Logging/
	Message Archival, is active.
	
	In conjunction, a looping message may be looping back and forth between the
	Exchange Client and an outside source.
	
	MORE INFORMATION
	================
	
	Maximum logging usually saves a copy of each and every message that leaves the
	mailbox.
	
	Page 579 of the Administrator's Guide, in the section on "Creating a Message
	Archive," states that when Message Archival is set to minimum logging, no
	messages are archived.
	
	This is incorrect. Turning off Message Archival can only be accomplished by
	setting the logging for Message Archival to none. This is a documentation error,
	which is documented in Knowledge Base Article:
	
	  Q168504, XGEN: DocErr: Set Archiving to None to Stop Archiving.
	
	For additional information about troubleshooting a looping message, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170361 XADM: Troubleshooting a Rapidly Growing Information Store
	
	The Microsoft Exchange Server Mailbox Manager in Exchange Server 5.5 Service Pack
	3 can also cause the drive to fill up and stop the Exchange Server services if
	logging on the Mailbox Manager has been set to either 4 or 5 (under the Advanced
	properties).
	
	
	RESOLUTION
	==========
	
	Manually delete the looping message if there is one. Set Message Archival to
	Minimum or None. Restart the Internet Mail Connector (Exchange Server 4.0) or
	Internet Mail Service (Exchange Server 5.0 and 5.5) after making any changes to
	the logging settings.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
