---
layout: page
title: "Q221393: XADM: Exchange 5.5 SP Setup Incomplete on Cluster Server"
permalink: kb/221/Q221393/
---

## Q221393: XADM: Exchange 5.5 SP Setup Incomplete on Cluster Server

	Article: Q221393
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install Exchange Server version 5.5 Standard or Enterprise Edition on a
	computer running Windows NT Server before you install the Cluster Server service
	on that server, installation of any Exchange Server 5.5 service packs does not
	finish.
	
	CAUSE
	=====
	
	Exchange Server 5.5 service packs are "cluster aware," that is, they know that
	the Exchange Server computer is running on a Cluster Server node. When you apply
	a service pack, a dialog box is displayed that contains the following message:
	
	  Select the cluster group configured for Exchange Server. The Exchange Server
	  resources will be added to this group.
	
	The default group is the cluster group. If you click Continue, the following
	error message is displayed:
	
	  This cluster group does not contain the appropriate system resources. Select
	  a group that contains an IP address, a network name, and a shared hard disk.
	
	Because there is no such group, you cannot continue the service pack
	installation.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Back up the Exchange Server databases.
	
	2. Remove Exchange Server from the second Cluster Server node.
	
	3. Install Exchange Server Enterprise Edition on the Cluster Server. For
	  instructions on how to install Exchange Server on a Cluster Server, see the
	  Cluster.doc file on the Exchange Server version 5.5 CD-ROM.
	
	4. Restore the Exchange Server databases.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
