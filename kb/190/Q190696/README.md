---
layout: page
title: "Q190696: XADM: Event ID 116, Service Database Corruption"
permalink: kb/190/Q190696/
---

## Q190696: XADM: Event ID 116, Service Database Corruption

	Article: Q190696
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the information store, the following Event ID appears the
	Windows NT event viewer application log:
	
	  Event ID 116
	  Source ESE97
	  Type Error
	  Category Database Page Cache
	
	  MSExchangeIS ((52) ) Synchronous read page checksum error -1018
	  ((1:1057816 1:3688618971) (3688618971-3688618971) (0-16815256))
	  occurred. Please restore the databases from a previous backup.
	
	NOTE: For versions 4.0 and 5.0, "Source" above is "EDB".
	
	CAUSE
	=====
	
	The Microsoft Exchange Server computer has suffered from service database
	corruption as a result of the Exchange database being compressed and growing
	beyond 4 GB in size.
	
	WORKAROUND
	==========
	
	To work around this problem, decompress the database drive, if applicable, and
	restore from a backup.
	
	If a good backup is not available, decompress the Priv.edb and Pub.edb files and
	bring the database to consistency by performing an EDButil /r /ispriv and/or
	/ispub for Exchange Server versions 4.0 and 5.0. For Exchange Server version
	5.5, use ESEutil /r /ispriv and/or /ispub.
	
	If the above steps are not successful, the database may need to be repaired to
	bring it to consistency.
	
	MORE INFORMATION
	================
	
	- Database compression is only one possible cause of -1018 errors.
	
	- You may encounter the -1018 errors at any time, not just at startup.
	
	- You may also get an asynchronous read page error with a different Event ID.
	  Both are -1018 errors, however.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
