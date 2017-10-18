---
layout: page
title: "Q258301: XADM: Running Isinteg -t When Isinteg Fails For Lack of Space"
permalink: kb/258/Q258301/
---

## Q258301: XADM: Running Isinteg -t When Isinteg Fails For Lack of Space

	Article: Q258301
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the isinteg -fix command and the command fails because of a lack of
	disk space, you may receive the following error message:
	
	  JET Error JET_errDiskFull while opening the IS Databases
	
	When you view the application event log, the following event is displayed:
	
	  Event ID: 142
	  Source: ESE97
	  Category: Error
	  Description:
	  The database disk is full.
	
	CAUSE
	=====
	
	This behavior can occur if there is not enough free space on the drive to create
	the Refer.mdb file. The Refer.mdb file is a temporary database that is created
	when you run the Microsoft Exchange Information Store Integrity Checker
	(Isinteg) utility. Isinteg browses the tables in the information store database,
	looking for errors. For the cross-reference tables, Isinteg builds a Microsoft
	Exchange Server database of reference counts (Refer.mdb) before browsing the
	tables. After traversing all the cross-reference tables, Isinteg compares the
	counts found to the counts in the reference database. If you run Isinteg with
	the -fix switch, these counts are updated to their true values as determined by
	Isinteg.
	
	The default location for the Refer.mdb file is the subdirectory where the
	information store database is located, which is either the Priv.edb file or the
	Pub.edb file. If there is not enough room on the drive to build the Refer.mdb
	file, Isinteg fails, and you receive an "Out Of Disk Space" error message.
	
	RESOLUTION
	==========
	
	In Exchange Server 5.5, there is an option to run Isinteg and specify a location
	for the Refer.mdb file. The option is a command-line switch -t. To generate a
	list of the command-line switches for Isinteg for Exchange Server 5.5, go to a
	command prompt, switch to the Exchsrvr\Bin subdirectory on an Exchange Server
	5.5 computer, and type "isinteg" (without the quotation marks) without any
	switches. The command-line switches for Isinteg for Exchange Server 5.5 are also
	listed in the document entitled "Isinteg.rtf" on the Exchange Server 5.5 compact
	disc.
	
	Both sources give the same syntax for running the command:
	
	  isinteg -pri|-pub [-fix]-t refdblocation (default location of the store)
	
	NOTE: The syntax for command-line switches in Isinteg is different from the
	Eseutil utility; Isinteg uses the dash (-), whereas the Eseutil utility uses the
	forward slash (/).
	
	When using Isinteg -t, you specify only the location; do not specify the file
	name:
	
	  ISINTEG -FIX -PRI -t d:\ -TEST ALLTESTS
	
	Specifying an alternate location with sufficient space for the Refer.mdb database
	file should allow the temporary database to be built while Isinteg is running,
	and allow Isinteg to complete successfully.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q258302 XADM: Troubleshooting Refer.mdb File Issues
	
	  Q182081 Description of ISINTEG Utility
	
	Additional query words: JET_errDiskFull
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
