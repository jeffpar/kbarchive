---
layout: page
title: "Q169393: XFOR: Messages Containing Doclinks Are Stuck in Exchange.box"
permalink: /kb/169/Q169393/
---

## Q169393: XFOR: Messages Containing Doclinks Are Stuck in Exchange.box

	Article: Q169393
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2; winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message from Notes to Exchange Server, Notes messages containing
	doclinks get trapped in the Exchange.box file.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Apply the latest LinkAge Message Exchange version 3.2 patch. This problem was
	  fixed in patch version 070723(the latest patch is cumulative). The readme
	  file, Patches.txt, states:
	
	  The "Convert Exchange to Notes" process can now handle Exchange Server
	  messages without any RTF body part. The process previously restarted when it
	  encountered this kind of message.
	
	MORE INFORMATION
	================
	
	Notes is manufactured by Lotus, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2; winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
