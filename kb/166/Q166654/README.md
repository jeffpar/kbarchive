---
layout: page
title: "Q166654: XFOR: Message Loop Across Two Mail Systems"
permalink: kb/166/Q166654/
---

## Q166654: XFOR: Message Loop Across Two Mail Systems

	Article: Q166654
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage exc4 exc5 exc55
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Exchange Server distribution list (DL) may contain recipients that
	exist on both sides of a connector (for example, on a TAO host and in Exchange
	Server). If dirsync is enabled and propagation of DLs is allowed, the Exchange
	Server DL shows up in the foreign mail system, usually as an individual
	recipient within the foreign mail system. If a user on the foreign mail system
	sends a message to that DL, the DL traverses the connector and be fanned out at
	the DL's creation point (in this case Exchange Server).
	
	Once DL expansion is completed, Exchange Server attempts to send to all
	recipients. If one or more of these recipients reside on the foreign mail
	system, then when Exchange Server attempts to send to these recipients, the
	connector recognizes that the correlation ID of this message is the same as that
	of the original message (original DL). The connector detects this as a looping
	message and a corresponding log entry is written. This is because each message
	that traverses the connector has a unique correlation ID. During message
	conversion this ID is extracted and appended to the correlation table. If two
	instances of a message traverse the connector with the same correlation ID, the
	connector attributes this to a looping message.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- In order to modify the default behavior of message-looping detection, add the
	  following parameter to the [LME] section of the Linkage.ini or Exchconn.ini
	  files:
	
	        DISABLETRACECHECKEX = YES
	
	CAUTION: Use this modification with caution. This parameter also disables all
	messages-looping protection that Exchange Development Kit (EDK) connectors
	provide as an important feature.
	
	The Disabletracecheckex parameter is valid for all EDK connectors, which includes
	the following:
	
	- Microsoft Exchange Connector for Lotus Notes
	
	- Microsoft Exchange Connector for GroupWise
	
	- Microsoft Exchange Connector for IBM OfficeVision/VM (Exchange 5.5 ONLY)
	
	- Microsoft Exchnage Connector for SNADS (Exchange 5.5 ONLY)
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
