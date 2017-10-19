---
layout: page
title: "Q166869: XADM: EDBUTIL Uses Exchange Bin Directory for Tempdfrg.edb"
permalink: /kb/166/Q166869/
---

## Q166869: XADM: EDBUTIL Uses Exchange Bin Directory for Tempdfrg.edb

	Article: Q166869
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	EDBUTIL uses the Microsoft Exchange Server Bin directory for defragmentation and
	repair. If Exchange Server is installed on a disk drive with insufficient disk
	space to accommodate the Tempdfrg.edb, the EDB file will be truncated.
	
	MORE INFORMATION
	================
	
	Edbutil reads from the source .edb file and writes to the destination .edb file.
	After the source .edb file reaches end-of-file, the destination is copied over
	the source .edb file.
	
	If the Exchange Server Bin directory does not have adequate space, EDBUTIL
	continues to read from the source .edb file, even though EDBUTIL cannot write to
	the destination .edb file. This causes the final .edb file to appear corrupt and
	unusable.
	
	For example, Exchange Server is running on drive C, which has 100 MB of free disk
	space; drive D has 5 GB free space. Priv.edb is 2 GB. If you run EDBUTIL without
	specifying the Tempdfrg.edb path, Priv.Edb will be truncated to about 100 MB.
	
	To assure Tempdfrg.edb is placed on the drive with adequate free space:
	
	- Use the /T<DRIVE:>PATH switch:
	
	  EDBUTIL /D /ISPRIV /TC:\MYDIRECTORY\TEMPDFRG.EDB
	
	  The tempdfrg.edb can be <any name>.edb
	
	Additional query words: won't start corruption filesize
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	
	=============================================================================
	
