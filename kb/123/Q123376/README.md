---
layout: page
title: "Q123376: PC DB: 2.1 Admin Address List Limited to 32,768 Addresses"
permalink: kb/123/Q123376/
---

## Q123376: PC DB: 2.1 Admin Address List Limited to 32,768 Addresses

	Article: Q123376
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 2.1 of the Microsoft Mail for PC Networks, Administrator utility is
	capable of displaying only 32,768 addresses in an address list. Any additional
	addresses in the address list will not be visible.
	
	This is most likely to occur when viewing a gateway address list, such as the
	SNADS address list. To see the SNADS gateway address list, select Gateway, DGNs,
	List on a postoffice.
	
	RESOLUTION
	==========
	
	This limitation does not exist in the version 3.x Administrator's program
	(ADMIN.EXE).
	
	MORE INFORMATION
	================
	
	Most USR files in the mail system database will not grow larger than:
	
	  (500 addresses/PO)*(53 bytes/address)=26500 bytes
	
	This calculation is based on Microsoft Mail postoffices being limited to a
	maximum of 500 local users and that the record size of a USR file is 53 bytes
	per record. It is possible to have USR files that are larger than because the
	USR file may also contain local groups for that postoffice. However, SNADS and
	PROFS gateways also use USR files; thus, the USR files for these two gateways
	can be much larger. Therefore, the SNADS and PROFS address lists should not
	exceed a file size of:
	
	  (32767 SNADS addresses)*(53 bytes/address)=1736651 bytes
	
	
	Additional query words: 2.10 3.00 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320a kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2a
	
	=============================================================================
	
