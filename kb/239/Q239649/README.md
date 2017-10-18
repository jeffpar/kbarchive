---
layout: page
title: "Q239649: XADM: InterOrg Sync Doesn't Update Same Alias Import Containers"
permalink: kb/239/Q239649/
---

## Q239649: XADM: InterOrg Sync Doesn't Update Same Alias Import Containers

	Article: Q239649
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the InterOrg Synchronization tool to update the contents
	of each organization's directory, users with the same alias in each directory
	may not get added to the Import container.
	
	RESOLUTION
	==========
	
	A new version of the InterOrg Synchronization tool is now available. The tool
	allows multiple Microsoft Exchange Server organizations to synchronize the
	contents of their directories. To obtain this feature immediately, contact
	Microsoft Product Support Services. For a complete list of Microsoft Product
	Support Services phone numbers and information on support costs, please go to
	the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Component: Exchange OrgSynch NT Service (BORK)
	
	+--------------------------+
	| File name    | Version   | 
	+--------------------------+
	| Orgsynch.exe | 1.2.0.375 | 
	+--------------------------+
	
	STATUS
	======
	
	The InterOrg Synchronization tool is available in the Microsoft BackOffice
	Resource Kit (BORK), Second Edition. Microsoft Product Support Services will use
	commercially reasonable efforts to support this product. Please do not confuse
	the InterOrg Synchronization tool with the InterOrg Replication utility for
	public folders, which is available on the Microsoft Exchange Server 5.5 Service
	Pack 2 CD.
	
	MORE INFORMATION
	================
	
	For additional information about installing and configuring the InterOrg
	Synchronization tool, please see the following Microsoft Knowledge Base
	article:
	
	  Q198789 XADM: Installing, Configuring, and Using the InterOrg Synch
	
	Additional query words: resource kit t-shoot tshot dirsynch Synch BORKIII GAL replication
	
	======================================================================
	Keywords          : exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
