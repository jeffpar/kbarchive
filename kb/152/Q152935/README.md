---
layout: page
title: "Q152935: XADM: Adding/Removing Recipient Containers to MSMail Dir-Sync"
permalink: kb/152/Q152935/
---

## Q152935: XADM: Adding/Removing Recipient Containers to MSMail Dir-Sync

	Article: Q152935
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbinterop exc4 exc5 exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Exchange Server is participating as a requestor in the
	Microsoft Mail directory synchronization (dir-sync), entire Microsoft Mail
	postoffice lists may be removed from the Global Address List (GAL).
	
	CAUSE
	=====
	
	When a Microsoft Exchange Server is participating as a requestor in the
	Microsoft Mail dir-sync, inappropriately adding and removing recipient
	containers into and out of the dir-sync stream can generate large numbers of
	dir-sync transactions and potentially result in the accidental removal of entire
	Microsoft Mail postoffice lists from the Global Address List (GAL).
	
	MORE INFORMATION
	================
	
	This article details how to avoid generating these excess dir-sync transactions
	in three situations: when exporting Microsoft Exchange users into the dir-sync
	stream, with Microsoft Mail, and with a link monitor.
	
	Generally, Exchange Server participates as a requestor to the Microsoft Mail
	dir-sync for the purpose of exporting:
	
	- Exchange users into the dir-sync stream.
	
	- Custom recipients (non-Microsoft Mail) into the shared file system (SFS)
	  dir-sync stream.
	
	For administrative and organizational purposes, various recipients may be grouped
	into specific recipient containers. For instance, all Exchange users within a
	site may be grouped into one or more recipient containers. Likewise, custom
	recipients can be logically grouped into recipient containers--for instance, all
	external SMTP recipient addresses may be grouped into one or more recipient
	containers.
	
	These recipient containers are added to, or removed from, the Microsoft Mail
	directory synchronization (dir-sync) stream as follows:
	
	1. Start the Microsoft Exchange Administrator program, and expand the Site,
	  Configuration, and Connections containers.
	
	2. Double-click the dir-sync-requestor object, click the Export Containers tab,
	  and modify the Export these Recipients field.
	
	The act of adding these recipient containers to, or removing them from, the
	Microsoft Mail dir-sync stream results in a large number of dir-sync
	transactions. Dir-sync messages containing Add, Modify, Delete, or Replace
	transactions are sent to the dir-sync server (DSS). These messages contain the
	standard dir-sync transactions, but the transactions can combine in ways that
	are unexpected.
	
	Exchange Recipient Containers:
	
	By default, new Exchange mailboxes are created in the site's recipients
	container. However, an alternate container can specified on the Advanced
	property page.
	
	Microsoft Mail Custom Recipients Containers:
	
	When a Microsoft Exchange Server system is functioning as a requestor to SFS
	dir-sync, do not allow custom recipients for users on Microsoft Mail postoffices
	to be exported from Exchange to the SFS DSS. Only SFS postoffices hosting these
	users should be sending updates or modifications about their users to the DSS.
	
	If you create custom recipients for Microsoft Mail postoffice users within
	Microsoft Exchange Server, create these recipients in containers that are not
	exported (for dir-sync). Additionally, the custom recipients may be hidden or
	the trust level raised to 100 to prevent them from exporting.
	
	Exporting these custom recipients and/or removing their container(s) from the
	list of exported recipients can result in Replace transactions for the SFS
	users' postoffices added to the list of pending dir-sync transactions. This can
	result in unnecessary dir-sync processing and in the temporary loss of PCMail
	address information from Global Address Lists (GALS). Subsequent recovery can
	require large numbers of dir-sync transactions.
	
	Exchange Link Monitor:
	
	When configuring a link monitor to a Microsoft Mail postoffice, the administrator
	must configure a bogus custom recipient so that the postoffice will be
	monitored. The link monitor then sends messages to this bogus custom recipient.
	When the Microsoft Mail message transfer agent (MTA) determines that the user
	does not exist, a non-delivery report (NDR) is sent back to the link monitor.
	Reception of the NDR by the link monitor confirms that the link is up and
	working properly. If no NDR is received within the configured time frame, the
	link monitor signals that the link is down.
	
	Adding or removing this custom recipient to or from the dir-sync stream can
	result in a Replace for this user's postoffice being added to the list of
	pending dir-sync transactions. During the next T2 cycle, the DSS will process
	this transaction, effectively instructing all other postoffices participating in
	dir-sync to remove this postoffice's entire list from their GALs. This can be
	resolved by doing a full export from the postoffice that is not currently in the
	GAL and completing the manual dir-sync process. After performing a full export
	from the missing postoffice(s), the normal dir-sync cycle should restore the
	missing addresses.
	
	To avoid this problem, create link monitor recipients in their own container and
	do not export them into the dir-sync process. Another suggestion is to set the
	trust level of the custom recipient container to 100 to prevent the recipients
	from exporting to Microsoft Mail. For more information on link monitors, review
	Chapter 16 of the Exchange Administrator's Guide. For more information on
	directory synchronization with other systems (such as Microsoft Mail), review
	Chapter 14 of the Microsoft Exchange Server Administrator's Guide.
	
	Additional query words: addresses missing disappear lost link monitor gone
	
	======================================================================
	Keywords          : kbinterop exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
