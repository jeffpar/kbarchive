---
layout: page
title: "Q164865: XCON: Msg Text Word Wrap Not Working on X.400"
permalink: /kb/164/Q164865/
---

## Q164865: XCON: Msg Text Word Wrap Not Working on X.400

	Article: Q164865
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set the maximum column size on the Message-Text Word Wrap settings on
	the General tab of the X.400 Connector property dialog box, messages sent from
	downstream X.400 connections may not follow the setting and instead send message
	text in the default 80 columns.
	
	This problem will not be seen from downstream Microsoft Exchange Server computers
	connected via Site Connectors.
	
	CAUSE
	=====
	
	When Exchange Server routes a message over a local X.400 connector, the message
	is converted to the X.400 format based on settings of the local X.400 connector.
	When this message is passed to a server with Message Text Word Wrap settings,
	the message is merely relayed but the existing contents are not reconverted.
	
	RESOLUTION
	==========
	
	To force the Exchange Server with the Message Text Word Wrap setting enabled on
	its X.400 Connector to convert the message to the proper format:
	
	1. In the message transfer agent (MTA) properties for that server, select the
	  Convert Incoming Contents to MS Exchange Format check box.
	
	2. Restart the MTA for this change to take effect.
	
	This setting will make the Exchange Server convert all inbound X.400 messages to
	the internal Exchange Server format. Then, when the message is to be routed out
	the target X.400 connector with the word wrap settings, it is reconverted back
	to the X.400 format based on new parameters.
	
	Additional query words: x400 p1 p2
	
	======================================================================
	Keywords          : kbtshoot kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
