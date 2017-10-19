---
layout: page
title: "Q258557: XFOR: How to Record Internet Messages Sent by an Exchange User"
permalink: /kb/258/Q258557/
---

## Q258557: XFOR: How to Record Internet Messages Sent by an Exchange User

	Article: Q258557
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you enable the Message Archival setting on the Exchange Server Internet Mail
	Service, an Exchange Server computer can record copies of Simple Mail Transfer
	Protocol (SMTP) messages. However, if you only want to record copies of messages
	from a single Exchange Server user, you must make additional configuration
	changes to prevent other users' messages from being recorded. This article
	describes steps to record the messages that a specific user sends out of the
	Exchange Server organization.
	
	MORE INFORMATION
	================
	
	The following method uses at least two Exchange Server computers that have the
	Internet Mail Service in the Exchange Server organization; the first server
	handles default SMTP mail delivery for most users, and the second is dedicated
	to recording the messages from the specific user that you want to monitor.
	
	To record the messages that a specific user sends out of the Exchange Server
	organization:
	
	1. Use the Exchange Server Administrator program to connect to the mailbox
	  server of the user that you want to monitor.
	
	2. Under the site Configuration container, double-click the Site Addressing
	  object.
	
	3. Click the Routing tab and make a note of all of the routes to the Internet
	  that are available to users from this mailbox server (typically, this is
	  displayed as SMTP:*).
	
	4. After you locate all of the possible routes (and their corresponding Internet
	  Mail Service servers) in the organization for outbound messages, make the
	  following modifications to these routes:
	
	  a. Open each Internet Mail Service and click the "Delivery restrictions" tab.
	
	  b. Add the user to the "Reject messages from" list.
	
	  c. Restart the Internet Mail Service.
	
	5. On another server that does not have an Internet Mail Service, create a new
	  Internet Mail Service and dedicate it as the "message-archiving" connector:
	
	  a. During the setup of the new Internet Mail Service, there are several
	     options that are available for message delivery. The simplest
	     configuration is to have this new Internet Mail Service relay all of its
	     messages to an Internet Mail Service or SMTP relay agent that handles
	     delivery for most users.
	
	  b. In the new Internet Mail Service, click the Delivery Restrictions tab and
	     add only the user that you want to monitor to the "Accept messages from"
	     list.
	
	  c. Click the Diagnostics Logging tab, and set Message Archival to maximum.
	
	  d. Restart this newly created Internet Mail Service.
	
	Use test mailboxes to verify that a small set of messages are archived to the
	Exchsrvr\Imcdata\Out\Archive folder of the new Internet Mail Service server. The
	messages that are archived are in pure SMTP format, so they may contain garbled
	text as well as the plain text of the message when you open the files in
	Notepad. To open the attachments in a message, replay them into your mailbox for
	better examination. For additional information about how to modify the To line
	of each the message and place the archived messages into the Pickup folder,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q201314 XFOR: Exchange Internet Mail Pickup Directory Usage
	
	Although you can use a single Internet Mail Service for message archival without
	creating an additional Internet Mail Service, if you do, you face the following
	consequences:
	
	- All other users' messages are archived, so available storage capacity
	  decreases more quickly over a shorter period of time.
	
	- It is tedious to search for specific messages from specific users, because
	  there may be thousands of SMTP messages, each recorded as a separate file, in
	  the Archive folder.
	
	- The Exchange Server computer experiences a performance degradation because of
	  the additional disk activity associated with archiving SMTP messages.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
