---
layout: page
title: "Q175129: XADM: Wrong OFL Deleted in Forms Administrator"
permalink: /kb/175/Q175129/
---

## Q175129: XADM: Wrong OFL Deleted in Forms Administrator

	Article: Q175129
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you delete an Organizational Forms library (OFL) from a site that has more
	than two individual Forms libraries of the same language may cause the wrong
	form to be deleted. Specifically, this occurs in the following situation. Two
	sites, A and B, have an English OFL called A and B, respectively. An
	administrator in site A pulls a replica of the site B OFL so that site A now has
	a replica of both A and B OFLs. The administrator opens the Forms Administrator
	and can see both OFLs. If the administrator deletes OFL B, it disappears from
	view in the Forms Administrator, but re-appears in Forms Administrator upon
	exit. OFL A, however, will have been deleted.
	
	WORKAROUND
	==========
	
	When deleting an OFL, follow the following steps:
	
	1. Ensure that the site has only a single replica, the replica that exists in
	  the OFL's home site.
	
	  The end result prior to deletion would be as follows:
	
	   - There are no replicas of OFL A anywhere in site B.
	
	   - There are no replicas of OFL B anywhere in site A.
	
	2. Verify that OFL B was not replicated to other sites. The only replica of OFL
	  B should exist in site B on OFL B's home server.
	
	3. Delete the OFL from the Forms Administrator while connected to the server
	  that maintains the single replica. In the example above, this would mean
	  connecting to a server in site B.
	
	4. Open the Forms Administrator, and delete OFL B.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0.
	
	
	Additional query words: EForm Library
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
