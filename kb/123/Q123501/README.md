---
layout: page
title: "Q123501: PC Adm: Err Msg: Can Not Create User or Can Not Delete User"
permalink: kb/123/Q123501/
---

## Q123501: PC Adm: Err Msg: Can Not Create User or Can Not Delete User

	Article: Q123501
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Mail for PC Networks administrator's may receive the one of the
	following error messages when creating (adding) or deleting gateway addresses
	from the gateway lists using the Mail Administrator program (ADMIN.EXE):
	
	  Can not create user
	
	  -or-
	
	  Can not delete user
	
	CAUSE
	=====
	
	The gateway address list is too large for ADMIN.EXE. These errors will happen
	when the number of gateway addresses exceeds approximately 32,500 users.
	However, this will depend on the amount of conventional memory on the
	workstation running ADMIN.EXE and/or the length of the gateway names.
	
	RESOLUTION
	==========
	
	To resolve this problem use IMPORT.EXE to add or delete users from the gateway
	lists (refer to Appendix A in the Microsoft Mail "Administrator's Guide" for
	more information about the Import utility).
	
	Additional query words: 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a
	Version           : WINDOWS:3.0,3.0a,3.2
	
	=============================================================================
	
