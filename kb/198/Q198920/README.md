---
layout: page
title: "Q198920: XWEB: OWA Is Not Designed for Use with Exchange Server 4.0"
permalink: /kb/198/Q198920/
---

## Q198920: XWEB: OWA Is Not Designed for Use with Exchange Server 4.0

	Article: Q198920
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Users are attempting to access their Exchange Server 4.0 mailboxes using Outlook
	Web Access (OWA). OWA was a new feature introduced with Exchange Server 5.0;
	therefore, it is not available for Exchange Server 4.0.
	
	OWA may work in some read-only cases, but it is not tested or supported for
	Exchange Server 4.0, only for Exchange Server 5.0 and 5.5.
	
	MORE INFORMATION
	================
	
	OWA relies upon Collaborative Data Objects (CDO) technology that was not present
	in Exchange Server 4.0. At that time, the technology was referred to as "Active
	Messaging," which later became CDO in upgrades and a renaming of that
	technology.
	
	Although you may get some response from Exchange Server 4.0 when you attempt to
	use OWA with that version, key objects needed for full functionality, such as
	Send and Reply, are beyond the capabilities of 4.0. The users must have their
	mailbox accounts upgraded or moved to Exchange Server 5.O or above to obtain
	full OWA functionality.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1
	Version           : WINDOWS:5.5; winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
