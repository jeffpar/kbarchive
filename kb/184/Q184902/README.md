---
layout: page
title: "Q184902: XADM: Running Edbutil /d /r /ds"
permalink: kb/184/Q184902/
---

## Q184902: XADM: Running Edbutil /d /r /ds

	Article: Q184902
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In general, running the Edbutil program with the repair option against the
	directory should never be done on a production server. The repair option is
	invoked by using the defragment (/d) and the recovery (/r) parameters together.
	Using these two parameters together is not the same as running the utility
	twice, once with each parameter.
	
	Running /d and /r together can cause unpredictable problems with the directory.
	Once this command is run, it may never be possible to fully recover the
	directory. Unpredictable results may include symptoms such as the inability for
	this server to see new servers added to the site, or the inability to add
	connectors to this server.
	
	If a Dir.edb file has been modified by running Edbutil /d /r /ds, it should not
	be used in a production environment unless specifically recommended by a
	Microsoft Support Professional.
	
	MORE INFORMATION
	================
	
	When /d /r are used together, they function differently than when they are used
	separately, one after the other. When used together, these parameters indicate
	that the Edbutil utility should repair the database while defragmenting it. This
	process eliminates unreadable data from the database. Some of this data may be
	required for the operation of the service, and may not be recoverable.
	
	When Edbutil is run against the Priv.edb or Pub.edb files, the Isinteg -fix
	utility can be used to "clean up" any problems that the combination of the /d /r
	switches might have created. In the case of the Dir.edb file, however, there is
	no such utility. Because it is working in conjunction with the directories of
	all of the other servers in the site, missing entries in one Dir.edb file can
	cause problems throughout the site.
	
	In most cases, if the directory is in an inconsistent state, Edbutil /r /ds
	should return it to a consistent state and the database can be used in
	production. In some cases, it may require running Edbutil /d /r /ds to return
	the directory to a consistent state. If this is done and no changes are made to
	the database, then it may be possible to use this directory in a production
	environment. This determination can only be made by running Edbutil /d /r /ds on
	the directory on a recovery computer after Edbutil /r /ds has failed to make the
	file consistent. Look at the entries in the application event log after the
	utility is run. If there are no events in the 41 to 50 range with the source
	EDB, then the only modification made by the utility was to mark the file as
	being in a consistent state. Please contact a PSS engineer before using such a
	directory in a production system.
	
	In a disaster recovery situation where the directory (Dir.edb) has become
	corrupted, it may make sense to run the utility with these parameters to reclaim
	the directory information by means of an Export. Once the directory is confirmed
	to be corrupted, it must be restored from backup, or Exchange Server will need
	to be reinstalled from scratch to create a new directory file. In the situation
	where Exchange Server must be reinstalled from scratch, running Edbutil /d /r
	/ds on a recovery computer makes sense to get the directory to a state where a
	Tools/Directory Export can be run from the Exchange Administrator program to
	export the mailboxes, custom recipients, and distribution lists (DLs) to .csv
	files. These files can then be imported to the production server to bring back
	all the information about the mailboxes, custom recipients, and DLs into the new
	(empty) directory after the information store has been restored.
	
	Additional query words: directory corruption corrupted
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
