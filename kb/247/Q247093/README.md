---
layout: page
title: "Q247093: Backup and Recovery Guidelines for Index Server Catalog"
permalink: /kb/247/Q247093/
---

## Q247093: Backup and Recovery Guidelines for Index Server Catalog

{% raw %}

	Article: Q247093
	Product(s): Internet Information Server
	Version(s): winnt:1.0,1.1,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.0, 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details some backup and recovery guidelines for an Index Server
	catalog.
	
	WARNING: This information is provided as a guideline and is not supported by
	Microsoft Product Support Services (PSS). Use this information at your own risk.
	
	MORE INFORMATION
	================
	
	Before you attempt to back up an Index Server catalog, please note the
	following:
	
	- Do not run antivirus programs while Index Server is running, or when you back
	  up the Index Server catalog.
	
	- Index Server, antivirus programs, and backup programs all use the Windows NT
	  file notification system. When new or modified files are entered into the
	  directory file system, Windows NT detects the changes and alerts programs
	  through the file notification system. Index Server uses these alerts to
	  determine when to add or re-filter documents for the catalog.
	
	- A contention situation can occur in one of the following ways:
	
	   - When antivirus programs or backup programs are also using the alerts, and
	     locks the file handles to these new or modified files, Index Server fails
	     to filter the file, and therefore, fails to add the files to the catalog.
	
	   - If Index Server locks the file handles before the antivirus program or
	     backup program, then the file is filtered and added to the catalog. The
	     catalog is then modified and the file notification system detects the
	     change in the catalog. An alert is sent, and the antivirus program or
	     backup program can lock the file handles for the catalog. If a service
	     other than Index Server locks the catalog, when Index Server attempts to
	     write updates to the catalog, it fails. This can cause the catalog not to
	     update and possible catalog corruption.
	
	- If an antivirus program is absolutely required, configure it to exclude the
	  documents where Index Server is filtering, and to exclude the Catalog.wci
	  directory where the catalog resides.
	
	- An alternative may be available if the antivirus program allows specific
	  configuration for the scanning of incoming and outgoing files. Disabling the
	  scanning of outgoing files may resolve issues with file-handle locking and
	  Index Server contention.
	
	Backup
	------
	
	1. Open the Microsoft Management Console (MMC), and then select the Index Server
	  snap-in.
	
	2. Right-click the Index Server snap-in, and then click Stop to stop the Index
	  Server service.
	
	3. Determine the location of the Catalog.wci directory that corresponds to the
	  catalog you want to back up. Right-click the catalog name, and then click
	  Properties. The resulting dialog box displays the location of the Catalog.wci
	  directory.
	
	4. Run a backup program that can be configured to include the entire contents of
	  the Catalog.wci directory.
	
	5. When the backup is complete, restart Index Server.
	
	NOTE: You can issue command-line statements to stop and restart the Index Server
	service. This can be useful if the backup program scheduler permits command-line
	instructions before and after the backup. For example, the syntax to stop and
	start the Index Server service is net stop cisvc and net start cisvc.
	
	Recovery
	--------
	
	In the case of catalog corruption, extending storage capacity, or moving the
	catalog to a new volume, please follow these steps to restore a backup of the
	catalog:
	
	1. Open the MMC, and then select the Index Server snap-in.
	
	2. Right-click the Index Server snap-in, and then click Stop to stop the Index
	  Server service.
	
	3. Determine the location of the Catalog.wci directory that corresponds to the
	  catalog you want to back up. Right-click the catalog name, and then click
	  Properties. The resulting dialog box displays the location of the Catalog.wci
	  directory.
	
	4. Run a restore program that can be configured to include the entire contents
	  of the Catalog.wci directory from the recovery media.
	
	5. When the restore is complete, restart Index Server.
	
	Additional query words: iis search query content failure antivirus anti-virus norton exec seagate cheyenne arcserve macafee
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ110 kbIdxServ200
	Version           : winnt:1.0,1.1,2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
