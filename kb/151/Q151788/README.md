---
layout: page
title: "Q151788: XADM: &quot;Reps-From&quot; USN Too High for One Server"
permalink: /kb/151/Q151788/
---

## Q151788: XADM: &quot;Reps-From&quot; USN Too High for One Server

	Article: Q151788
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server administrators may find that newly created objects
	(for example, recipients) on one server have not replicated to other servers
	(within a site or between sites), even though a reasonable period of time has
	passed for replication to have occurred.
	
	The total recipients count (in the lower left corner of the Microsoft Exchange
	Server Administrator program window) may remain consistently less than that of
	other servers in the site. Also, users may find that an address is not available
	in the Global Address List.
	
	CAUSE
	=====
	
	The "Reps-From" update sequence number (USN) count on the server not taking
	replicas from the replicating server has been incorrectly advanced to a value
	higher than the current USN issued by the target server's directory service.
	
	WORKAROUND
	==========
	
	1. The first step in troubleshooting these symptoms is to positively diagnose
	  whether the server's tardy replication is caused by either the problem
	  described in this article or the one in the article Q152942, "XADM: Slow
	  Intra-site Directory Replication Between Servers." These conditions are rare.
	
	
	2. If you are sure that a server maintains a higher "Reps- From" USN than the
	  highest USN assigned by the that server, do one of the following:
	
	  a. If the high "Reps-From" count is between two replication bridgehead
	     servers in a multi-site Microsoft Exchange Server organization:
	
	  Redefine one of the other servers in the site lacking replicas as the
	  replication bridgehead for the site.
	
	     If the server is a single-server site:
	
	  Delete the replication connector and the other site object(s) associated with
	  this replication connector (in both sites). Allow the delete to complete, and
	  then reconfigure the directory replication connector.
	
	  b. If the high "Reps-From" count is between two servers within a site,
	     Re-install the server harboring the high "Reps-From" count into the site,
	     following the steps documented in Microsoft Knowledge Base article
	     Q162353, "XADM: Restoring an Exchange Directory."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q152942 XADM: Slow Intra-site Directory Replication Between Servers
	
	  Q162353 XADM: Restoring an Exchange Directory
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
