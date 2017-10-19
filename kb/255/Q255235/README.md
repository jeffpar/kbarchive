---
layout: page
title: "Q255235: SQL Backup to Remote Drive Fails, Error 18204: Access is Denied"
permalink: /kb/255/Q255235/
---

## Q255235: SQL Backup to Remote Drive Fails, Error 18204: Access is Denied

	Article: Q255235
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to back up a server running Microsoft SQL Server to a remote
	network share, the backup attempt may not succeed and the following error
	message may appear:
	
	  18204 Access is denied
	
	CAUSE
	=====
	
	This behavior can occur when the MSSQLSERVER account does not have the correct
	access permissions to the folder where the backup file is to be created.
	
	RESOLUTION
	==========
	
	To resolve this behavior, make sure that the MSSQLSERVER account has been
	granted the "Access this computer from the network user" right on the remote
	computer, and that it has Full Control permissions to the folder where the
	backup file is to be created. If the backup file already exists on the remote
	share, make sure the MSSQLSERVER account has Full Control permissions to the
	existing file.
	
	MORE INFORMATION
	================
	
	You can check your MSSQLSERVER account permissions by logging on to the
	Microsoft Windows NT Server 4.0-based computer where SQL Server resides, using
	the MSSQLSERVER account. Map to the remote drive, and then delete, rename, or
	create a file in the destination folder where the dump file is to be stored. If
	that does not work, then the account does not have the proper permissions.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
