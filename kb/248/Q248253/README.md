---
layout: page
title: "Q248253: XCON: Deferred Delivery Issues in Exchange Server 5.5 SP3 MTA"
permalink: kb/248/Q248253/
---

## Q248253: XCON: Deferred Delivery Issues in Exchange Server 5.5 SP3 MTA

	Article: Q248253
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Deferred delivery in Exchange Server 5.5 Service Pack 3 (SP3) may not be working
	correctly. This issue may be exhibited by one of the following behaviors or a
	combination of these behaviors:
	
	- The message transfer agent (MTA) may deliver deferred delivery messages late
	  or not at all. Delivery times may be inconsistent; sometimes deferred
	  delivery mail may be sent a day late or even later.
	
	- If a message is sent with deferred delivery to a distribution list (DL) that
	  contains users from different servers, the message may not be delivered to
	  some users while others receive it. If the message is sent again with
	  deferred delivery to the same DL, some users do not receive the message, but
	  this time they may be different users than in the first attempt.
	
	- If the message is sent with deferred delivery with the sender's name in the
	  To field, From field, BCC field, and CC field all at once, messages may not
	  be delivered on time or may not be delivered to some recipients at all. It
	  may cause the deferred message to get stuck in the MTA.
	
	- When sent with deferred delivery to a DL, messages may be delivered early and
	  ahead of the delivery schedule.
	
	The preceding scenarios can only happen when messages are set for deferred
	delivery by using Microsoft Outlook 97, Microsoft Outlook 98, or the Microsoft
	Exchange Client. These scenarios do not occur for messages set for deferred
	submission. For a more detailed explanation of deferred delivery versus deferred
	submission, please read the "More Information" section later in this article.
	This issue occurs only with Outlook 98 and earlier.
	
	You can verify the presence of deferred delivery messages in the message transfer
	agent (MTA) by:
	
	- Observing the Deferred Delivery Msgs counter in Performance Monitor, under
	  the MSExchangeMTA object.
	
	- Checking the application event log for Event IDs 275 and 273. If diagnostics
	  logging is turned to Maximum on the server's MTA object, X.400 Service
	  category, an Event ID 275 is written to the application log for each deferred
	  delivery message when the MTA is started. Also, when the message timer
	  expires, an Event ID 273 from the MTA service is also written to the
	  application log.
	
	Event ID 275
	
	  A deferred delivery timer started for message id C=US;A=
	  ;P=Microsoft;L=EXCHANGE-991102190304Z-3324, object 991102190400Z. Delivery is
	  scheduled for 991102190400Z. [MTA SUBMIT 15 359] (10)
	
	Event ID 273
	
	  A deferred delivery timer has expired for message C=US;A=
	  ;P=Microsoft;L=EXCHANGE-991102190304Z-3324, object 06000132. [MTA SUBMIT 15
	  205] (12)
	
	CAUSE
	=====
	
	To set deferred delivery on messages, in the client, you click Options from the
	View menu, and then click to select the "Do not deliver before <Date>"
	check box. This defers messages by setting the deferred X.400 bit in the
	message, and they are stored in the MTA until delivery. However, an MTA variable
	that is responsible for setting up deferred delivery timer is not getting
	initialized correctly, which results in the timer queue getting sorted
	incorrectly. Because this variable is not initialized correctly and has
	different values at different times, it results in the different incorrect
	behaviors explained in the "Symptoms" section.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, defer messages from the pre-Outlook 2000 client or
	the Exchange Client by following these steps:
	
	- On the File menu, click Properties, click Send Options, click the MS Exchange
	  Server tab, and then click "Send this item in <variable>" where
	  <variable> can be minutes, hours, days, or weeks.
	
	Stopping and restarting the MTA may also causes deferred messages to be
	delivered.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5
	SP3. This problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The two methods for deferring messages are deferred delivery and deferred
	submission.
	
	The deferred delivery method is when the deferred delivery bit is set on the
	message and it is placed in the Mtadata folder until the timer expires. You see
	the Event ID 275 indicating that the deferred timer is starting with the MTS-ID
	of the message, and if the X.400 service is set to maximum, an Event ID 272
	immediately follows, which indicates the message submission and displays the
	MTS-ID and the .dat file ID. This is purely MTA-based and it maps to the MTA's
	X.400 P1 field. To set messages for deferred delivery, follow the steps in the
	"Cause" section.
	
	The deferred submission method gives you more control over the message. This
	method puts the message in the Outbox until the timer expires. At this point,
	the information store is responsible for the message, and the user has the
	option of changing the time or deleting the message all together. The scenarios
	described in the "Symptoms" section do not occur for messages that are set for
	deferred submission. To set messages for deferred submission; follow the steps
	in the "Workaround" section.
	
	
	For additional information on deferred delivery and deferred submission, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q188696 XCLN: Deferred Delivery Options for Exchange/Outlook Clients
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
