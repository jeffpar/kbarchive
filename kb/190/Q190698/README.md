---
layout: page
title: "Q190698: Microsoft Key Management Server Event ID 5058"
permalink: /kb/190/Q190698/
---

## Q190698: Microsoft Key Management Server Event ID 5058

	Article: Q190698
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Key Management Server service, you may receive an
	Event ID 5058 in the Event Viewers application log, which states the following:
	
	  (Microsoft Exchange Key Management service has trapped an exception.
	  Event data contains exception and context records).
	
	CAUSE
	=====
	
	This event occurs when the Kmsdata directory is corrupt or missing files.
	
	WORKAROUND
	==========
	
	Restore the Kmsdata directory from an offline backup.
	
	MORE INFORMATION
	================
	
	The Kmsdata directory is located in the Exchsrvr directory.
	
	NOTE: The Kmsdata directory is not included in the backup routine of online
	backups; it is required that the Kmsdata directory be backed up regularly in
	offline mode for full recovery potential.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	
	=============================================================================
	
