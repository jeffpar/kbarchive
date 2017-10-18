---
layout: page
title: "Q185574: XADM: Space Requirements for Exchange 5.5 Fault Tolerant Upgrade"
permalink: kb/185/Q185574/
---

## Q185574: XADM: Space Requirements for Exchange 5.5 Fault Tolerant Upgrade

	Article: Q185574
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article states the free disk space requirements for the Fault Tolerant
	Upgrade, which involves upgrading from Microsoft Exchange Server version 5.0 to
	version 5.5.
	
	MORE INFORMATION
	================
	
	To successfully complete the upgrade process, the computer must have a local
	disk drive (network drives cannot be used) with free space equal to (or greater
	than) the size of all three (or four) Exchange Server databases. This disk will
	be the location of the temporary directory specified during the upgrade process
	in the Fault Tolerant window. The databases involved in the upgrade are
	Priv.edb, Pub.edb, Dir.edb, and XDir.edb. XDir.edb exists if MS Mail dirsync has
	been run against this server. Therefore, before you attempt to upgrade, add the
	sizes of the Priv.edb, Pub.edb, Dir.edb, and XDir.edb files, and then add 2
	megabytes (MB). Verify that the temporary file location that you specify has
	sufficient free space to ensure that the upgrade can complete successfully.
	
	The Fault Tolerant upgrade defragments each database and places the temporary,
	defragmented .edb file into the specified directory. Temp is the default
	directory. After all files have completed the defragmentation process, they are
	copied to the location of the original .edb files, overwriting the original
	files. The upgrade process removes the temporary files from the Temp directory.
	Therefore, if the defragmentation process fails on any of the files, all of the
	originals are still in place and the upgrade can be aborted.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
