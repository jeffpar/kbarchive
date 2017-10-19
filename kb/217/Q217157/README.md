---
layout: page
title: "Q217157: Event ID 1057 or 1000 When the Cluster Service Attempts to Start"
permalink: /kb/217/Q217157/
---

## Q217157: Event ID 1057 or 1000 When the Cluster Service Attempts to Start

	Article: Q217157
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Cluster service may not start, with the following error message in
	the event log:
	
	  Event ID 1057
	  Source: ClusSvc
	  Description: The cluster service CLUSDB could not be opened.
	
	  -or-
	
	  Event ID: 1000 Source: ClusSvc Description: Microsoft Cluster Server suffered
	  an unexpected fatal error at line ### of source module <source path>.
	  The error code was ####.
	
	This behavior is the result of a local Cluster database being corrupted,
	inaccessible, or otherwise unusable.
	
	RESOLUTION
	==========
	
	The Cluster database is a hive in the registry located at:
	
	  HKEY_LOCAL_MACHINE\Cluster
	
	The file for the Cluster registry hive is located on disk by default at the
	following location:
	
	  %SystemRoot%\Cluster\Clusdb
	
	Note that because the Cluster key is a separate hive, you cannot use the
	Emergency Repair Disk (ERD) to recover Clusdb.
	
	Try each of the following items to fix the problem:
	
	- Check the file permissions for the Clusdb file. Make sure that the domain
	  account under which the Cluster runs has full access.
	
	- Verify that the Clusdb file is not set to Read-Only.
	
	- Restore the file from a backup. (Note that this file is cluster specific.)
	
	- If one of the nodes is still working, uninstall Microsoft Cluster Server
	  (MSCS) from and reinstall MSCS to the failed node. Choose "Join an existing
	  cluster". This procedure may cause problems with some cluster resources. You
	  may have to re-create the resources or reinstall programs. Contact Microsoft
	  Product Support Services for assistance with reinstalling Microsoft products.
	
	- Try the information in the following Microsoft Knowledge Base article:
	
	  Q224999 How to Use the Cluster TMP file to Replace a Damaged Clusdb File
	
	
	- If none of the items above work, you may have to reinstall MSCS on both
	  nodes, or use a disaster recovery procedure for the Cluster.
	
	
	MORE INFORMATION
	================
	
	You can back up the Clusdb file Ntbackup.exe by using the Backup Local Registry
	option.
	
	
	
	Additional query words: read only readonly
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbClustServSearch
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
