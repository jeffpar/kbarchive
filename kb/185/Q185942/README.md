---
layout: page
title: "Q185942: XADM: Cannot Run ISINTEG -PATCH on Cluster Server Computer"
permalink: /kb/185/Q185942/
---

## Q185942: XADM: Cannot Run ISINTEG -PATCH on Cluster Server Computer

	Article: Q185942
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Microsoft Exchange Information Store Integrity Checker
	(Isinteg.exe) with the -PATCH option on an Exchange Server computer on which
	Microsoft Cluster Server is installed, you may be unable to start the
	information store. When you attempt to do so, you may receive an error message
	indicating that the information store and directory databases are inconsistent
	and that you need to run the ISINTEG -PATCH command again.
	
	Note that this problem occurs even when you properly set the
	_CLUSTER_NETWORK_NAME_ environment variable before you run Isinteg.exe with the
	-PATCH option.
	
	CAUSE
	=====
	
	When you run Isinteg.exe with the -PATCH option, it modifies the base GUID
	(generated unique ID or globally unique identifier) used by the information
	store, but it does not notify Microsoft Cluster Server that the change has taken
	place. This causes Microsoft Cluster Server to overwrite the new base GUID,
	because it thinks the GUID is invalid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	For additional information about setting the _CLUSTER_NETWORK_NAME_ environment
	variable before you run Isinteg.exe with the -PATCH option, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q178311 XADM: Error Running ISINTEG on a Cluster Server
	
	Additional query words: clustering clustered
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
