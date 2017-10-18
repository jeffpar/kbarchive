---
layout: page
title: "Q163889: XADM: Trust Levels not Used in Exchange Directory Replication"
permalink: kb/163/Q163889/
---

## Q163889: XADM: Trust Levels not Used in Exchange Directory Replication

	Article: Q163889
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you set up replication connectors between Microsoft Exchange Sites, all
	recipients and public folder hierarchy information will be replicated between
	the Sites, regardless of the trust level set on them.
	
	MORE INFORMATION
	================
	
	Trust levels for recipients and public folders are intended for use with
	Directory Synchronization with Microsoft Mail postoffices only. Trust levels do
	not pertain to Microsoft Exchange Directory Replication.
	
	The Trust level for a recipient is found in the Advanced tab of the property page
	for each recipient in the Microsoft Exchange Administrator program.
	
	The Trust level for a public folder is found in the Advanced tab of the property
	page for each public folder in the Microsoft Exchange Administrator program.
	
	For more information, please consult the Microsoft Exchange Books Online or the
	Microsoft Exchange Administrator's Guide.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbinfo
	
	=============================================================================
	
