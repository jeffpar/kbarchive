---
layout: page
title: "Q158526: XADM: .Pat Files in Mdbdata and Dsadata Directories"
permalink: /kb/158/Q158526/
---

## Q158526: XADM: .Pat Files in Mdbdata and Dsadata Directories

	Article: Q158526
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You might find the following files when examining the contents of the Mdbdata
	directory:
	
	  Priv.pat
	  Pub.pat
	
	Likewise you might find this file in the Dsadata directory:
	
	  Dir.pat
	
	These files are created during the online backup process.
	
	MORE INFORMATION
	================
	
	Patch files (.pat files) are created when doing an online backup of the Exchange
	databases. These temporary files get created as soon as the backup process
	begins; they contain whatever transactions take place during the online backup.
	This way the Edb.log can be copied during the backup while transactions are
	written to the patch files. The *.pat files are also copied to the hard disk
	drive and replayed when a restore is done.
	
	It is safe to delete these patch files if these two conditions apply:
	
	- There is no backup taking place.
	
	- There is no startup recovery in process after a restore.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
