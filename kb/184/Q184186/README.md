---
layout: page
title: "Q184186: XADM: Recovering Exchange from a Corrupted Directory"
permalink: kb/184/Q184186/
---

## Q184186: XADM: Recovering Exchange from a Corrupted Directory

	Article: Q184186
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Microsoft Exchange Server, you should create a backup directory
	in the directory that contains the Dir.edb file. A default installation without
	optimization will have the Dir.edb file in the Exchsrvr\Dsadata directory. After
	replication has been completed with other servers in the site, the directory
	service should be stopped, and a copy of the Dir.edb file should be placed in
	the backup directory. Then you can restart the services.
	
	MORE INFORMATION
	================
	
	This suggestion is made as a precautionary measure against future problems. As a
	standard course of action, you should have a solid backup plan with tape
	rotations and periodic testing of the backups. However, in a worst case
	scenario, this backup copy can be used to bring the server back on line if the
	directory has become unusable. Unlike the Priv.edb and Pub.edb, repair utilities
	should not be run against the Dir.edb file because it stays synchronized with
	the other directories in the site.
	
	Also, unlike the Priv.edb and Pub.edb files, the Dir.edb file is machine name
	specific and the system cannot regenerate a new one if the old one is missing.
	If a directory becomes unusable and there are no viable backups, you can stop
	the directory service on the computer, and move all of the files out of the
	Dsadata directory on all drives that the Exchange Optimizer has placed them in.
	The original Dir.edb can then be copied from the backup directory and you can
	restart the directory. Through the process of backfill, the directory will bring
	itself up to date with the other directories in the site.
	
	Without this original Dir.edb file or a valid backup, the only way to get a new
	directory is through full disaster recovery. This involves removing Microsoft
	Exchange Server from the computer and reinstalling it.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
