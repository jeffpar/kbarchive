---
layout: page
title: "Q136514: PC DirSync: Err Msg: Fatal Error 54 Server Name Not Accessed"
permalink: /kb/136/Q136514/
---

## Q136514: PC DirSync: Err Msg: Fatal Error 54 Server Name Not Accessed

	Article: Q136514
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import a file into a Mail postoffice, you may get the following error
	message:
	
	  Fatal error 54 Server name could not be accessed.
	
	RESOLUTION
	==========
	
	Remove the -c IMPORT.EXE command line option.
	
	The -c option will try to create new postoffices. However, it needs to know about
	an existing Directory Synchronization (Dir-Sync) server, and if this has not
	been defined, it will give the above error.
	
	For additional information, please refer to the "Administrator's Guide," Appendix
	A, page 319 for version 3.2 or page 320 for version 3.5 Microsoft Mail for PC
	Networks.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
