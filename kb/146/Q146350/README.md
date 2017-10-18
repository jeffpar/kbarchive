---
layout: page
title: "Q146350: XCLN: Shutdown Does Not Ask User to Exit Exchange Client"
permalink: kb/146/Q146350/
---

## Q146350: XCLN: Shutdown Does Not Ask User to Exit Exchange Client

	Article: Q146350
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you shut down Windows 95 with the Microsoft Exchange client running and
	mail in the Outbox, there is no dialog box asking you to exit Microsoft
	Exchange.
	
	CAUSE
	=====
	
	Typically, when you perform an Exit and Log Off from Microsoft Exchange while
	there is mail in the Outbox, the Microsoft Exchange client will display the
	following message:
	
	  There is still mail in your Outbox; exit anyway? Yes/No
	
	However, when you choose to shut down Windows 95 with mail in the Outbox, the
	Microsoft Exchange client will not display this dialog. This is due to a
	deadlocking condition with Windows 95 and Microsoft Exchange. Because of this,
	the Microsoft Exchange client cannot prompt the user during shutdown.
	
	This is by design.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
