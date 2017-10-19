---
layout: page
title: "Q112896: PC Rmt: Remote Postoffice List Only Contains Local Addresses"
permalink: /kb/112/Q112896/
---

## Q112896: PC Rmt: Remote Postoffice List Only Contains Local Addresses

	Article: Q112896
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for MS-DOS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.0 of Microsoft Mail Remote for MS-DOS, the postoffice list will not
	contain external postoffice users, even if the Mail administrator has added
	external postoffice users to the postoffice list.
	
	CAUSE
	=====
	
	The Regenerate command is displayed after you select the Remote command in the
	Mail Administrator program (ADMIN.EXE). The Regenerate command creates a file
	called RNETWORK.GLB, which contains the default user list for a Remote Mail
	user. When external postoffice users are added to the postoffice list, they are
	added to the ADMIN.NME file. The regenerate process looks at the ACCESS2.GLB
	file rather than the ADMIN.NME file. Therefore, only local users appear in the
	postoffice list of the MS-DOS Remote client.
	
	RESOLUTION
	==========
	
	To view external postoffice users, choose Postoffice Network List and then
	select the postoffice for which you want the list of external addresses. Note
	that the current postoffice users and the external postoffice users will not be
	part of the same list.
	
	REFERENCES
	==========
	
	For more information about remote clients, see the following sources:
	
	- Pages 186-191 of the version 3.0 Microsoft Mail for PC Networks
	  "Administrator's Guide"
	
	- Pages 204-211 of the version 3.2 Microsoft Mail for PC Networks
	  "Administrator's Guide"
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote300DOS
	Version           : MS-DOS:3.0
	
	=============================================================================
	
