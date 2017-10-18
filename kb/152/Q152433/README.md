---
layout: page
title: "Q152433: XADM: How to Remove Orphaned Public Folders"
permalink: kb/152/Q152433/
---

## Q152433: XADM: How to Remove Orphaned Public Folders

	Article: Q152433
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you stop replication between two or more sites, folders are still shown in
	the Public Folder Hierarchy but they are not accessible from Microsoft Exchange
	clients or the Microsoft Exchange Administrator program.
	
	For Exchange Server 4.0, from the Microsoft Exchange Administrator program, the
	following message will be encountered:
	
	  The object cannot be found in the directory. This may be because replication
	  has not completed.
	  Microsoft Exchange Directory. c1010aae."
	
	From a Microsoft Exchange client, the error message will be:
	
	  The folder could not be opened. The contents of this public folder are
	  currently unavailable. Either the MS Exchange server computer servicing this
	  public folder is down or the public folder has not been replicated to this
	  site.
	
	In Exchange Server 5.5, you receive the following error message:
	
	  The object in the information store could not be found.
	
	  Microsoft Exchange Information Store
	  ID no: c1040af2
	
	RESOLUTION
	==========
	
	To remove these orphaned folders, follow these steps:
	
	Warning: The orphaned folders should not be deleted if site replication is ever
	going to be re-established. This is because once a folder is removed from a
	site, and replications is re-established, the remove action will be backfiled to
	the server were the folder belonged to originally. This means that if a folder
	that used to belong to site A is removed while on site B, and sites A and B are
	rejoined through replication, the folder will eventually be also deleted on site
	A.
	
	1. Start the Microsoft Exchange Administrator program and go to the Server
	  container.
	
	2. Double-click on the Public Information Store.
	
	3. Look for the Public Folders on the left hand side of the Instances Property
	  page and add them to Folders on This Information Store on the right hand side
	  of the Instances Property page. This has to be done for every orphaned
	  folder.
	
	  NOTE: If the folders do not appear on the right hand side, you must follow
	  these steps:
	
	  WARNING: If you ever plan to re-join the sites, do NOT go through this
	  procedure.
	
	  a. Go back to the server object and display the properties.
	
	  b. From the Advanced tab, go to the DS/IS consistency adjustment.
	
	  c. Choose to adjust all inconsistencies and click on Adjust.
	
	4. Go to the Organization's Public Folder tree on left hand side of the window.
	
	5. Double-click on the folder in question.
	
	6. Click the Client Permissions button on the General tab and give Owner rights
	  to an administrator account.
	
	7. Start a Microsoft Exchange client, log on as the administrator above, and
	  remove the orphaned folders.
	
	The Offline Address Book and Schedule+ Free Busy folders from other replicated
	sites cannot be removed from the hierarchy using this procedure. These folders
	should disappear from the System Folder hierarchy a week after replication has
	been broken. The Information Store will mark the folders for deletion the first
	time it is restarted after replication has been broken between the sites. The
	next time that the Information Store is restarted, after the 7 day waiting
	period, the orphan folders will be removed from the hierarchy. This is done to
	avoid recreating the system folder hierarchy if the sites are re-connected
	within a week. These folders are completely harmless because they are not
	visible from the clients and have no effect on any other store task.
	
	MORE INFORMATION
	================
	
	If you plan on setting replication back up again, DO NOT take ownership of the
	public folders and delete them in the manner described in this article, as this
	will cause the public folders in the original site to be deleted once the
	replication connector is re-established.
	
	Only take ownership of these orphaned public folders if you NEVER want to setup
	replication again with the site that actually contains the public folders.
	
	Additional query words: 80004005-0507-00000469
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
