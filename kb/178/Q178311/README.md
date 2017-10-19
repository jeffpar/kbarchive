---
layout: page
title: "Q178311: XADM: Error Running ISINTEG on a Cluster Server"
permalink: /kb/178/Q178311/
---

## Q178311: XADM: Error Running ISINTEG on a Cluster Server

	Article: Q178311
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Isinteg -patch on a Microsoft Cluster Server, you may receive the
	following error message:
	
	  The private store could not be updated
	  Reason: JET_errKeyDuplicate
	
	WORKAROUND
	==========
	
	Before you run the Isinteg -patch command on a Microsoft Exchange Server
	computer that is running on a Microsoft Cluster Server, you must set the
	environment variable _CLUSTER_NETWORK_NAME_ to the Exchange Resource Group
	network name. For example, if your Exchange Resource Group network name is
	EXCLUSTER, type the following at the command prompt (all uppercase)
	
	  SET _CLUSTER_NETWORK_NAME_=<IP ADDRESS NAME>
	
	where <IP ADDRESS NAME> is the name assigned to the IP Address resource in
	the Exchange Resource Group. This is essentially the NetBIOS name of the
	Exchange Server computer. It is found using Cluster Admin\Exchange Resource
	Group\Exchange Cluster Network Name\Properties\Parameters.
	
	
	Additional query words: Wolfpack node
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
