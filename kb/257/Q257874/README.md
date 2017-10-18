---
layout: page
title: "Q257874: XADM: Hard Coded Organization Name When Installing DMS"
permalink: kb/257/Q257874/
---

## Q257874: XADM: Hard Coded Organization Name When Installing DMS

	Article: Q257874
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 19-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install the Defense Message System (DMS) version of Exchange Server from
	the CD-ROM provided from Lockheed Martin Federal Systems, the organization name
	is hard coded (it cannot be changed) as the following:
	
	  Organization
	
	MORE INFORMATION
	================
	
	During the installation you can enter any organization name. For example, you
	can enter an organization name of "ORGANIZATON" or "organization," but the
	actual organization name is still "Organization."
	
	This is important to remember when you need to recover the directory on a
	DMS-enabled server. If there is not an exact, case-sensitive match of the
	organization name, you cannot restore the directory properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
