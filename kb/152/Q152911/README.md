---
layout: page
title: "Q152911: XADM: FAX Cover Sheet Does Not List Recipients"
permalink: kb/152/Q152911/
---

## Q152911: XADM: FAX Cover Sheet Does Not List Recipients

	Article: Q152911
	Product(s): Microsoft Exchange
	Version(s): MS-DOS:3.2; WINDOWS:3.0,3.2,3.2a,3.5,4.0; winnt:4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 23-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0 SP1, 4.0 SP2 
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	- Microsoft Mail Gateway to Fax, version 3.2 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The FAX Cover Sheet will not list the fax recipients when a fax is sent from a
	Microsoft Exchange client, through a Microsoft Exchange Server, to the Microsoft
	Mail Gateway to Fax on a Microsoft Mail postoffice.
	
	MORE INFORMATION
	================
	
	The recipient of the FAX can be determined by looking at the To: field in the
	header on the second page of the FAX.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in Service Pack 3 for Microsoft
	Exchange Server version 4.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	RESOLUTION
	==========
	
	This problem can be resolved by importing the updated Fax.scr file released in
	Microsoft Exchange Service Pack 3 (SP3) using the Microsoft Exchange
	Administrator program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350 kbMailGateFax320 kbExchange400SP1 kbExchange400SP2 kbExchange400NT kbExchange400Win95
	Version           : MS-DOS:3.2; WINDOWS:3.0,3.2,3.2a,3.5,4.0; winnt:4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
