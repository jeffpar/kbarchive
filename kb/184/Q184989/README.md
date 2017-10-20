---
layout: page
title: "Q184989: XFOR: Backup Exec Event ID 3004 When Backing Up LinkAge"
permalink: /kb/184/Q184989/
---

## Q184989: XFOR: Backup Exec Event ID 3004 When Backing Up LinkAge

{% raw %}

	Article: Q184989
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article applies to LinkAge version 3.2 Notes, and the OV/VM and/or SNADS
	connectors.
	
	The following error message appears in the Windows NT Event Viewer application
	log:
	
	  The description for Event ID (3004) in Source (Backup Exec 6.1) could
	  not be found. It contains the following insertion string(s):
	  \\USTCAX02\C$\linkage\tables\NOTES.PAB.
	
	NOTE: some of the parameters in the error message may be different, depending on
	the type of connector, specific filenames, location on the disk, and so on.
	
	CAUSE
	=====
	
	When running incremental backups, Backup Exec tries to access the files (in this
	example Notes.pab) which may be in use by one of the LinkAge processes. Backup
	Exec is unable to access the locked file and the above errors are logged.
	
	WORKAROUND
	==========
	
	To eliminate the problem, follow these steps:
	
	1. In Control Panel, select Services.
	
	2. Select the LinkAge Controller service, and click Stop. That will shut down
	  all the LinkAge connector services as well.
	
	3. Perform the backup.
	
	Alternatively, add the LinkAge Controller service to the list of tasks shut down
	by the backup software.
	
	MORE INFORMATION
	================
	
	Backup Types:
	
	  Normal: Backs up and marks selected files, whether or not they have changed
	  since the last backup.
	
	  Copy: Backs up all selected files without marking them as being backed up.
	
	  Incremental: Backs up and marks selected files only if they have changed since
	  the last time they were backed up.
	
	  Differential: Backs up selected files only if they have changed since the last
	  time they were backed up, without marking them as being backed up.
	
	
	Additional query words: seagate arcada profs
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
