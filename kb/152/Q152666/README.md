---
layout: page
title: "Q152666: XCON: Messages In RAS Connector Queue NDR when Modem is Busy"
permalink: /kb/152/Q152666/
---

## Q152666: XCON: Messages In RAS Connector Queue NDR when Modem is Busy

{% raw %}

	Article: Q152666
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message over the Microsoft Exchange Dynamic Remote Access
	Service (RAS) Connector, you might receive a Non-Delivery Report (NDR) after a
	specific period of time. The NDR will look like this:
	
	  The following recipient(s) could not be reached:
	
	  'TO USER' on 6/14/96 1:35:13 PM
	  The recipient could not be processed due to congestion in the message transfer
	  service
	  [MSEXCH:MSExchangeMTA:EXCHANGE:MAIL1]
	
	This can happen if the modem on the RAS server is in use by another RAS
	connection.
	
	WORKAROUND
	==========
	
	There two ways to avoid this problem:
	
	- Schedule the Dynamic RAS Connector to dial out at predetermined time when the
	  modem will be available.
	
	- Install another modem on the server. In the phone book entry for the Dynamic
	  RAS connector, specify the new modem port or any available modem port.
	
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Message Transfer Agent (MTA) will try to send the message
	over the current RAS connection and this will fail. It will keep trying until
	the retry value set on the MTA override page for the RAS Connector has been
	exhausted. At this time, the MTA will send an NDR to you. This is by design.
	
	Additional query words: RAS NDR mta busy
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
