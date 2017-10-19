---
layout: page
title: "Q196406: XADM: Replication Fails After Disaster Recovery"
permalink: /kb/196/Q196406/
---

## Q196406: XADM: Replication Fails After Disaster Recovery

	Article: Q196406
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you follow standard disaster recovery procedures, the restored server
	appears to fail both in replication and mail transfer. All services start
	successfully and no errors are encountered.
	
	Prior to the recovery, the server was deleted from the site through the Exchange
	Server Administration program.
	
	CAUSE
	=====
	
	Removing a server from the site forces all other servers to purge the server
	from the list of valid servers in the site to be replicating with. When the
	server (both information store and directory service) is restored from backup
	after you Create a New Site in Exchange Server Setup, the other servers in the
	site will not begin replication with the server because there is no Reps-To or
	Reps-From raw value entries for the deleted server. The Reps-To and Reps-From
	entries are only created on "Joining An Existing Site" in Exchange Server Setup.
	
	WORKAROUND
	==========
	
	There are two possible options to restore the server to the original site:
	
	- Directory Restore - Depending on the size of the organization, each directory
	  could be restored to their original servers with a backup time prior to the
	  deletion. Each server must remain offline until all restores have been
	  completed.
	
	- Rebuilding the Directory - A more practical workaround to organizations
	  larger that a few servers is to build a new directory. If the removed server
	  was the system folder server for the site, perform the steps in the following
	  Microsoft Knowledge Base article prior to continuing:
	
	  Q152960 XADM: Reassigning Site Roles after Removing the First Server in an
	  Exchange Site
	
	  1. From the Exchange Administrator Program, on the Tools menu, click
	     Directory Export and export all Recipient containers and Distribution
	     Lists on this server. If possible, export these to the templates provided
	     on the Exchange 4.0 Server CD (Support\Samples\Csvs) to ensure all valid
	     data fields are populated. Verify the data after export.
	
	  2. In Control Panel Services, stop the Microsoft Exchange System Attendant.
	     When prompted, click OK to stop all of the other Microsoft Exchange Server
	     services.
	
	  3. Copy the Pub.edb, Priv.edb, all Edb*.log files, all Res*.log files and the
	     Edb.chk file to another directory or another server as a backup.
	
	  4. Run Setup.exe from the Exchange Server CD, and click Remove All when
	     prompted. Verify and remove all Exchange directories (across all drives if
	     Optimization was run).
	
	  5. Using the Exchange Administrator program on another server, remove this
	     server from the site if it is visible. Allow replication to occur -- the
	     time will depend on the links between the other servers in the site.
	
	  6. Run Setup.exe again, and join the existing site. This will provide the
	     installation with the same Organization Name and Site Name as before.
	
	     NOTE: Remember to reapply any Service Packs applied in the previous
	     installation.
	
	  7. In Control Panel Services, stop the Microsoft Exchange System Attendant.
	     When prompted, click OK to stop all of the other Microsoft Exchange Server
	     services.
	
	  8. Move all the files out of the Exchsrvr\Mdbdata directory (across all
	     drives if Optimization was run). Copy to this directory the all files that
	     were copied to another directory or server in step 1 (Pub.edb, Priv.edb,
	     all Edb*.log files, all Res*.log files and the Edb.chk file).
	
	  9. Start the Microsoft Exchange System Attendant and Microsoft Exchange
	     Directory services in Control Panel Services.
	
	  10. From a command prompt, change directories to Exchsrvr\Bin, and carry out
	     the following command:
	
	  ISINTEG -PATCH
	
	  11. Start the remaining Microsoft Exchange Server services in the Control
	     Panel Services tool.
	
	  12. Run the Microsoft Exchange Server Administrator Program against the
	     server you are reintroducing.
	
	  13. If there were any other Recipients container aside from the default
	     Recipients container, make sure the containers have replicated from one
	     of the other servers in the site before the restore.
	
	  14. Using the comma separated value (CSV) files created in Step 1, on the
	     Tools menu, click Directory Import and import the Directory entries into
	     the Directory.
	
	At this point, all Users should show up in their respective containers.
	
	After these procedures are done, the users will be able to log into the server
	without having lost their mail messages and the public folders will have been
	restored as well.
	
	Additional query words: replication setup recovery
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
