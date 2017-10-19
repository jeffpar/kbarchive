---
layout: page
title: "Q264317: XADM: Public Folders Are Re-Homed When You Restore Pub.edb File"
permalink: /kb/264/Q264317/
---

## Q264317: XADM: Public Folders Are Re-Homed When You Restore Pub.edb File

	Article: Q264317
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During a disaster recovery situation, the public folders in an Exchange Server
	organization may be re-homed under the following circumstances:
	
	- The information store is restored to a recovery server.
	- The directory service or information store consistency checker is run on the
	  recovery server.
	- The information store service is stopped on the recovery server.
	- The information store database files are copied to the production server and
	  the information store service is started.
	
	When the information store service is started on the production server (after the
	Pub.edb file is copied from the recovery server), public folder replication
	takes place between the production server and the rest of the public folder
	servers in the organization. After replication has occurred, all unsecured
	public folders in the organization are re-homed to the production server where
	the databases are restored.
	
	After the public folders are re-homed, clients may not be able to access the
	public folders. Also, unlike other public folder re-homing scenarios, in this
	case, no administrators in any site can administer the re-homed public folders.
	
	MORE INFORMATION
	================
	
	The recovery server, on which the information store was restored, did not have a
	copy of the folder from the production server. Therefore, when you run the
	directory service or information store checker on this computer, the directory
	service or information store checker does not have information about all of the
	other servers and mailboxes in the organization. As a result, the public folders
	are re-homed to the recovery server. In addition to re-homing the public
	folders, because a directory object for the public folders is not found in the
	folder on the recovery server, a new directory object is created for each
	re-homed public folder.
	
	The following events are logged on the recovery server on which you run the
	directory service or information store consistency checker:
	
	  Event Type: Information
	  Event Source: MSExchangeIS Public
	  Event Category: IS/DS Interactions
	  Event ID: 7008
	  Date: 4/13/2000
	  Time: 10:13:15 AM
	  User: N/A
	  Computer: EXCHSRV01
	  Description:
	  Created a public folder OFFLINE ADDRESS BOOK\EX:/o=Company/ou=Site\OAB Version
	  2 in the directory service.
	
	  Event Type: Information
	  Event Source: MSExchangeIS Public
	  Event Category: IS/DS Interactions
	  Event ID: 7032
	  Date: 4/13/2000
	  Time: 10:13:15 AM
	  User: N/A
	  Computer: EXCHSRV01
	  Description:
	  The public information store
	  /o=Company/ou=Site/cn=Configuration/cn=Servers/cn= EXCHSRV01/cn=Microsoft
	  Public MDB became the home information store of folder OFFLINE ADDRESS
	  BOOK\EX:/o=Company/ou=Site\OAB Version 2.
	
	  Event Type: Information
	  Event Source: MSExchangeIS Public
	  Event Category: IS/DS Interactions
	  Event ID: 7001
	  Date: 4/13/2000
	  Time: 10:13:15 AM
	  User: N/A
	  Computer: EXCHSRV01
	  Description:
	  The public folder Americas\Texas\Las Colinas in the directory service was
	  updated with information store public folder properties.
	
	  Event Type: Information
	  Event Source: MSExchangeIS Public
	  Event Category: IS/DS Interactions
	  Event ID: 7021
	  Date: 4/13/2000
	  Time: 10:13:15 AM
	  User: N/A
	  Computer: EXCHSRV01
	  Description:
	  Users that were not valid have been removed from the access control list of
	  public folder Americas\Texas\Las Colinas.
	
	When the Pub.edb file from the recovery server is copied to the production server
	and the service is started, the information store recognizes that the public
	store is restored from another server and it logs the following event which says
	that the replication will not occur. This event is not accurate because
	replication does occur.
	
	  Event Type: Information
	  Event Source: MSExchangeIS
	  Event Category: Recovery
	  Event ID: 1117
	  Date: 4/13/2000
	  Time: 11:25:23 AM
	  User: N/A
	  Computer: EXCHSRV01
	  Description:
	  The public database has been restored to an alternate server. This database
	  will no longer be able to replicate with other public databases.
	
	After the information store service is started on the production server, public
	folder replication starts. Because the public folders on this server have been
	modified more recently than those on the other sites or servers, the changes are
	replicated out to the other servers.
	
	When the information store on a server in another site receives the changes,
	which indicates that the folders that were previously homed on it are now homed
	on another site, the information store removes the directory object for that
	public folder from the folder because it assumes that the folder in the new home
	site contains the directory service object for the public folder. This folder
	change is replicated to all of the servers in the organization. Eventually, all
	of the public folder and folder changes are replicated throughout the
	organization. After this is finished, the public folders appear to be homed in
	the site where the public store is restored, and the re-homed public folders do
	not have a corresponding directory object.
	
	Because there is no associated directory object, when you try to get the
	properties of a re-homed public folder, you receive the following error message
	in the Exchange Administrator program:
	
	  The object cannot be found in the directory. This could be because
	  replication has not completed.
	
	  Microsoft Exchange Directory
	  ID no: c1010aae
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
