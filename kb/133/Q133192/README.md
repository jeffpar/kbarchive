---
layout: page
title: "Q133192: XCLN: Received Message Time Stamp Is Time Zone Impaired"
permalink: kb/133/Q133192/
---

## Q133192: XCLN: Received Message Time Stamp Is Time Zone Impaired

	Article: Q133192
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0 95
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Microsoft Exchange client to access a Microsoft Mail 3.0, 3.2, or
	3.5 postoffice with the Microsoft Mail Information Provider, a Mail message's
	Received Time Stamp is not correct when the message crossed a time zone.
	
	MORE INFORMATION
	================
	
	Delivery time is obtained from the time stamp in the .MBG record. This time
	stamp is the local time of the sender for backward compatibility reasons with
	Mail 3.2. There is no time zone information stored in the mail message.
	
	CAUSE
	=====
	
	This is by product design.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWin95search kbExchangeSearch kbExchange400 kbZNotKeyword2 kbWin95
	Version           : 4.0 5.0 95
	
	=============================================================================
	
