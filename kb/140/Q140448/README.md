---
layout: page
title: "Q140448: XADM: Errors Processing Incoming Replication Messages"
permalink: kb/140/Q140448/
---

## Q140448: XADM: Errors Processing Incoming Replication Messages

	Article: Q140448
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to select the system folders from the Microsoft Exchange
	Administrator program the following error may occur:
	
	  An internal processing error has occurred: naming violation. Try restarting
	  the Administrator Program or the Microsoft Exchange Server computer, or
	  both.
	
	  Microsoft Exchange Directory ID No: DS_E_NAMING_VIOLATION
	
	This will also be paired with an error in the Application Log. The application
	log message SOURCE will be the MSExchangeIS Public, the EVENT ID will be 3089,
	the CATEGORY will be Replication and Type will be Warning. The description will
	read as follows:
	
	  Error 0x8004010f occurred while processing an incoming replication message.
	
	CAUSE
	=====
	
	When you select the properties of a system folder, the Microsoft Exchange
	Administrator program is calling the Microsoft Exchange Directory (DS) and
	asking for a site id from a table in the database. The DS does not have an entry
	in that field to return and generates the above error messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
