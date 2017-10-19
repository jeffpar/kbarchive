---
layout: page
title: "Q116435: PC DirSync: Null Dir-Sync Password Settings Accepted on Server"
permalink: /kb/116/Q116435/
---

## Q116435: PC DirSync: Null Dir-Sync Password Settings Accepted on Server

	Article: Q116435
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For versions 3.0 and 3.2 of Microsoft Mail for PC Networks, if the password for
	the directory synchronization (Dir-Sync) server postoffice for each requestor
	definition (the Config, Dir-Sync, Server, Requestor menu) is null (that is,
	there is no password), the server accepts any password from any requestor
	postoffice.
	
	Setting the Dir-Sync server password to null means the server will accept any
	password from any requestor. This allows the administrator to allow the Dir-Sync
	server to accept input from any requestor, regardless of that requestor's
	particular Dir-Sync password.
	
	In this manner, the Microsoft Mail administrator can effectively disable the
	Dir-Sync password option without having to change the individual passwords on
	each requestor postoffice.
	
	Additional query words: 3.00 3.20 3.50 requester dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	
