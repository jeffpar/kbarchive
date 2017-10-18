---
layout: page
title: "Q146036: XCLN: Deliver/Read Receipts Continue Though Turned Off"
permalink: kb/146/Q146036/
---

## Q146036: XCLN: Deliver/Read Receipts Continue Though Turned Off

	Article: Q146036
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 26-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When disabling deliver/read receipt after having it on for a period of time, you
	may continue to receive deliver/read receipt messages.
	
	Receipt messages can be enabled/disabled by using the Option item on the Tools
	menu. In the Send tab and there are two options: request a receipt when the item
	has been read and request a receipt when the item has been delivered
	
	CAUSE
	=====
	
	This is by design. Although you have turned off Deliver/Read Receipt, if you
	have messages that were created prior to turning off these options then the
	notification messages will still appear. This is because these attributes are
	applied to the message at compose time not at send time
	
	Additional query words: clients
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
