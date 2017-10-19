---
layout: page
title: "Q158318: XFOR: IMC Doesn't Deliver Mail When Service Is Started"
permalink: /kb/158/Q158318/
---

## Q158318: XFOR: IMC Doesn't Deliver Mail When Service Is Started

	Article: Q158318
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Connector (IMC) does not deliver mail immediately upon startup
	when it is past its scheduled time to dial.
	
	RESOLUTION
	==========
	
	If you want the IMC to dial upon startup instead of waiting for the next cycle,
	you can configure the IMC to use available RAS phone book entries to retrieve
	and send mail.
	
	1. Ensure that you are using Microsoft Exchange Server version 4.0 Service Pack
	  2 (SP2) or a later version.
	
	2. When configuring the dial-up properties, choose to dial "Every."
	
	REFERENCES
	==========
	
	See the online help for the Dial-Up Connections on "Dial" for details.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
