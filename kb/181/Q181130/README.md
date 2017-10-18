---
layout: page
title: "Q181130: XFOR: Additional Characters Appear in Migrated cc:Mail Messages"
permalink: kb/181/Q181130/
---

## Q181130: XFOR: Additional Characters Appear in Migrated cc:Mail Messages

	Article: Q181130
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate messages from Lotus cc:Mail Release 6 (DB8) or earlier, four
	additional characters may appear in some messages when you open them in an
	e-mail client after the migration.
	
	CAUSE
	=====
	
	When you migrate messages from cc:Mail, the messages are converted to Rich Text
	Format (RTF) before they are migrated to the Microsoft Exchange Server computer.
	Messages migrated from cc:Mail Release 6 (DB8) or earlier may not be converted
	correctly. This may cause additional characters to appear in the messages when
	you open them in an e-mail client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Lotus cc:Mail is manufactured by Lotus, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: ^b1e ^b1f ^b70
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
