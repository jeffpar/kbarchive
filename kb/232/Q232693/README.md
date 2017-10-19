---
layout: page
title: "Q232693: XADM: Clients May Hang After You Remove a Public Folder Server"
permalink: /kb/232/Q232693/
---

## Q232693: XADM: Clients May Hang After You Remove a Public Folder Server

	Article: Q232693
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,98; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you move public folders between servers in the same site, such as from
	ServerA to ServerB, and then remove ServerA from the site, clients may stop
	responding (hang) when users attempt to access the public folders.
	
	CAUSE
	=====
	
	The public folder server is cached on the client and if the public folders have
	been moved to another server after the original ServerA has been removed from
	the site, the clients may hang because they are attempting to access ServerA.
	
	WORKAROUND
	==========
	
	To work around this problem, leave ServerA online until all users have accessed
	a public folder after it has been moved. Doing so allows the client to attempt
	to access ServerA, at which time the profile is successfully updated to point to
	the folders on ServerB. After a folder has been accessed by every client after
	being moved to ServerB, it is safe to remove ServerA.
	
	If this workaround is not feasible, then the only other option is to have clients
	re-create their profiles.
	
	MORE INFORMATION
	================
	
	The following method is a safer method for removing a public folder server from
	the site in a manner that does not affect users.
	
	NOTE: If the server to be removed is also the first server in the site, see the
	following article in the Microsoft Knowledge Base first:
	
	  Q152959 How to Remove the First Exchange Server in a Site
	
	1. Add replicas to the new server (public folder server B), which will become
	  the new public folder server.
	
	2. Allow replication to fully finish (preferably 24 hours to be safe).
	
	3. Change the properties of the private information store of ServerA to point to
	  the new public folder server, ServerB.
	
	4. Remove replicas from the original public folder server, ServerA (allow
	  replication to occur).
	
	5. Keep both ServerA and ServerB online and have clients access a public folder
	  homed on ServerB. This updates the client profile to look on ServerB. If a
	  client doesn't access a public folder, that client may stop responding after
	  ServerA is removed.
	
	  -or-
	
	  Send an e-mail to users with a link to the public folder for them to access.
	  When the users click the link, it hits the public folder, and updates the
	  client profile.
	
	  For more information on how to complete this operation in Outlook, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q197361 OL2000: (CW) How to Include Shortcut to Public Folder in Mail
	
	6. Stop the Exchange Server services on ServerA but don't remove it until you
	  have confirmed that users can still access public folders.
	
	7. If no one has difficulty accessing public folders, it is safe to remove
	  ServerA; otherwise, bring ServerA online until all client profiles have been
	  updated.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,98; winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
