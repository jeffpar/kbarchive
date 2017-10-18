---
layout: page
title: "Q175040: XFOR: Read Receipts Not Translated Over AppleTalk Connector"
permalink: kb/175/Q175040/
---

## Q175040: XFOR: Read Receipts Not Translated Over AppleTalk Connector

	Article: Q175040
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Mail for AppleTalk Networks sends a message to a Microsoft
	Exchange Server user and requests a read receipt, the AppleTalk connector
	returns a text message like this:
	
	  To: AppleTalk User
	
	  Microsoft Mail v3.0 IPM.Microsoft Mail.Read Receipt
	  From: Exchange User
	  Date sent: 1996-10-31 16:48
	  To: AppleTalk User
	  Subject:  Read Receipt: Exchange User
	  Message Identifer: 8531445D0933D011B89B000000000001
	  Primary message ID: 20D925BF0B33D011B89B000000000001
	  Your message to: Exchange User(MS:MICROSOFT/BREST/EXUSER)
	  With subject: Message Subject
	  And sent on: 1996-10-31 11:06
	  Was read on: 1996-10-31 16:48
	  Priority level: C
	
	Normally, AppleTalk read receipts are in the following graphical format:
	
	  -------------------------------------------------
	  |          Message Subject                      |
	  -------------------------------------------------
	  |   The message :  Subject     <stamp icon>     |
	  |   was read by :      Receiver's Name          |
	  |   on:       Thur. Oct 31, 1996 4:48pm         |
	  -------------------------------------------------
	
	CAUSE
	=====
	
	The AppleTalk connector does not translate Read and Not Read messages into
	graphical format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	With the fix applied, read receipts are translated into graphical format.
	However, if the Exchange Server user deletes the message before it is read, then
	the notification will be in the form of a normal message with the prefix "Not
	Read" added to the subject. Even thought this is non-graphical, no header
	information will be included in the body of the message.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
