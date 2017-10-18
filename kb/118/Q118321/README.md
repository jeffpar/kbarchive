---
layout: page
title: "Q118321: PC DB: Gateway Addresses and Template Information"
permalink: kb/118/Q118321/
---

## Q118321: PC DB: Gateway Addresses and Template Information

	Article: Q118321
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.2 of Microsoft Mail for PC Networks, templates can be used to
	create a directory of customized user information. However, template information
	is not allowed for certain address types. The types of addresses that do not
	support templates are: MCI, X400, SMTP, MHS, 3COM, and FAX.
	
	RESOLUTION
	==========
	
	This is not currently supported by the product. Gateways that use a .GLB or .NME
	file to store their addresses (for example, X.400, SMTP, MHS, FAX, MCI, and
	3COM) cannot support extended information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for PC Networks. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Gateways that store addresses in conformance with the 10/10/10 format(for
	example, SNADS and PROFS) support extended information.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
