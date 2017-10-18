---
layout: page
title: "Q247032: XADM: Unable to Add a Directory Replication Connector to a Site"
permalink: kb/247/Q247032/
---

## Q247032: XADM: Unable to Add a Directory Replication Connector to a Site

	Article: Q247032
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create an X.400 Connector or site connector for a new site and try to set
	up a directory replication connector to the site, the setup does not work.
	
	The site may not be displayed in the list of sites that are available for
	directory replication under "Remote site name", or if you start the Exchange
	Server Administrator program and, on the File menu, click New, click Other, and
	then click "Directory Replication connector", the following error message may be
	displayed:
	
	  Mail connectivity must be configured to a new site before a new replication
	  connector can be created.
	
	CAUSE
	=====
	
	A directory replication route currently exists to the remote site. If you can
	see the Site container for this remote site in the Exchange Server Administrator
	program when you open it against a server in the local site, a directory
	replication route exists through a directory replication connector to another
	site.
	
	RESOLUTION
	==========
	
	If you want to establish a directory replication connector directly to that
	site, you must first remove the directory replication connector to the site that
	currently updates your Exchange Server directory with the naming contexts and
	objects from that destination site (the site that you want to establish a
	directory replication connector to).
	
	Exchange Server does not allow duplicate directory replication routes. Multiple
	and duplicate messaging routes can be established for messaging redundancy, but
	updates of the naming context of a site can only be received through one
	directory replication connector.
	
	Additional query words: c1035c64
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Hardware          : ALPHA MIPS PPC x86
	Issue type        : kbprb
	
	=============================================================================
	
