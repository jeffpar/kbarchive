---
layout: page
title: "Q176489: XCON: MTA Generates NDRs and Message Loops"
permalink: kb/176/Q176489/
---

## Q176489: XCON: MTA Generates NDRs and Message Loops

	Article: Q176489
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you restart a Microsoft Exchange Server computer that has been offline for
	a few hours or days, the Message Transfer Agent (MTA) may start rejecting
	messages, holding messages in the queues, or creating message loops. All of
	these symptoms contribute to degraded system performance and slow mail flow. The
	following error may occur:
	
	  Event ID 200
	  Source MSExchangeMTA
	  Type Warning
	  Category X.400 Service
	  Description An error occurred while ASN.1 was decoding an object (dump
	  reference 192). [limit exceeded on set of or sequence of 30464 2614
	  1spdi 192 MTA XFER-IN 15 97] Event ID 2024 Source MSExchangeIS Private
	  TypeError Category MTA Connections Description: Unable to access the
	  object manager (OM) object from the Microsoft Exchange MTA for
	  MH_T_ALTERNATE_RECIP_ALLOWED, MH_T_CONVERSION_LOSS_PROHIBITED, etc.
	
	CAUSE
	=====
	
	This behavior can occur when the MTA Open Interval time is set too low. These
	settings are located in a few places depending on the setup. The global setting
	can be found by:
	
	1. Opening the Microsoft Exchange Administrator program.
	
	2. Highlight and expand the Exchange Site name.
	
	3. Highlight the Configuration option.
	
	4. Highlight MTA Site Configuration and select File, Properties.
	
	5. Select the Messaging Defaults Tab.
	
	The Administrator may also set the MTA Open Interval time on individual X400 and
	Dynamic RAS connectors. The Open Interval Setting is located on each connector's
	Override tabs on their respective property pages.
	
	MORE INFORMATION
	================
	
	The Open Interval time is used to determine how long the MTA should wait before
	attempting an association to another MTA. The default is 600 seconds, which
	should suffice in most situations. The lowest value that can be entered is 15
	seconds; however, if you set the value this low, the above problem will occur if
	the MTA has to handle a large volume of messages (such as restarting after a
	maintenance period). It is recommend that this setting is never below 30 seconds
	on a LAN and 60 seconds on a RAS connection.
	
	Additional query words: ndr stuck queue perfmon
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
