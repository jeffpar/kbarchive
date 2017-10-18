---
layout: page
title: "Q87402: PC DB: How ACCESS Files Are Linked Together"
permalink: kb/087/Q87402/
---

## Q87402: PC DB: How ACCESS Files Are Linked Together

	Article: Q87402
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are three access files that contain all local user information:
	
	  Access File     Description
	  -----------     -----------
	
	  ACCESS.GLB      Contains user operating environment information
	                  (User record size is 586 bytes)
	
	  ACCESS2.GLB     Used to verify a user's mailbox name during login
	                  (User record size is 69 bytes)
	
	  ACCESS3.GLB     Contains remote user and folder information
	                  (User record size is 512 bytes)
	
	It is assumed that there will always be one record in each file for each user in
	the postoffice. If John Smith's information is at record 100 in the ACCESS2.GLB
	file, it is also at record 100 in the other access files. The access files are
	not stored in alphabetic order, but in the order they were created.
	
	When a user logs into a Microsoft Mail client, the ACCESS2.GLB file is first
	checked to see whether it is a valid mailbox name. If it is, the record number n
	is then stored for future use. This number n can be used to quickly calculate
	the physical byte offset in the ACCESS.GLB and ACCESS3.GLB files to retrieve the
	user's information.
	
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	
