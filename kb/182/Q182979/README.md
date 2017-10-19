---
layout: page
title: "Q182979: XADM: Function and Effects of the DS/IS Consistency Adjuster"
permalink: /kb/182/Q182979/
---

## Q182979: XADM: Function and Effects of the DS/IS Consistency Adjuster

	Article: Q182979
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the function and effects of running DS/IS consistency
	adjuster. Because of the potential problems that the DS/IS consistency adjuster
	may cause, Microsoft recommendeds that you contact Microsoft Product Support
	Services (PSS) before you run it.
	
	MORE INFORMATION
	================
	
	The DS/IS consistency adjuster is used in disaster recovery scenarios where it
	is not possible to restore the directory to the recovery computer, or where the
	information store (the Priv.edb or Pub.edb file) is copied to a recovery
	computer with a name that is different from that of the original server.
	
	The DS/IS consistency adjuster is run to re-create the directory objects for the
	mailboxes and for public folders that are in the store and not in the directory.
	This process also resets the Home-MDB attribute on all public folders in the
	hierarchy that are homed on unknown sites or servers. In addition, the process
	strips the public folder access control lists (ACLs) of any invalid entries
	(that is, users who do not exist in the current directory). Servers and sites
	are "unknown" and invalid entries exist when replication has not completed to
	the server that the DS/IS consistency adjuster was run on or when a replication
	connector to another site has been removed.
	
	After the rehoming process is complete, if you re-create a replication connector
	to the organization, there is a conflict for each rehomed public folder. The new
	server wins the conflict because it has the latest changes to the public folders
	in question. Accordingly, the public folder is homed on the new server, and the
	new ACL is kept. This results in lost permissions for any users not on the site
	where the DS/IS consistency adjuster was run.
	
	The DS/IS consistency adjuster is modified in Exchange Server 5.5 and each of
	these functions (making new directory entries for mailboxes, modifying ACLs in
	mailboxes, rehoming public folders, and modifying ACLs in public folders) must
	be selected manually to take effect. Additionally, a new attribute of public
	folders in Exchange Server 5.5 is to "Limit Administrative Access" to a public
	folder to a home site, which prevents other sites from being able to rehome
	those particular folders. Note that this property is only fail-safe in an
	environment that is completely Exchange Server 5.5. In a mixed version 4.0, 5.0,
	and 5.5 Exchange Server environment, version 4.0 and 5.0 Administrator
	Consistency Adjustment programs ignore the Administrative Access flag and rehome
	the folders anyway.
	
	NOTE: You do not need to run the DS/IS consistency adjuster if you only want to
	restore an information store to a production server that has a good working
	directory.
	
	To run DS/IS consistency adjuster:
	
	1. In the Exchange Server 5.5 Administrator program, click a server running
	  Exchange Server 5.5 that contains a public information store.
	
	2. On the File menu, click Properties, and then click the Advanced tab.
	
	3. Click Consistency Adjustment.
	
	4. In DS/IS Consistency Adjustment, select the Remove unknown user accounts from
	  public folder permissions check box, and then select All inconsistencies.
	
	NOTE: Clear all other check boxes.
	
	Additional query words: exfaq 7037
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
