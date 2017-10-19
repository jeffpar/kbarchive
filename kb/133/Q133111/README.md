---
layout: page
title: "Q133111: Systems Management Server Hierarchy Manager"
permalink: /kb/133/Q133111/
---

## Q133111: Systems Management Server Hierarchy Manager

	Article: Q133111
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbDatabase kbHMan kbsmsAdmin smsadmin smssetup smsdatabase smshierman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Systems Management Server Hierarchy Manager is a Win32 service that manages
	the multiple-site hierarchy when the user has multiple sites. It coordinates the
	transfer of configuration information between sites, handles the construction,
	modification, and destruction of the multiple site hierarchy, and controls the
	actual setup, installation, upgrade, and deinstallation of secondary sites. For
	single site installations, the Hierarchy Manager assists in the setup and
	reconfiguration of the site.
	
	MORE INFORMATION
	================
	
	Multiple site hierarchies are constructed in two ways; by connecting Primary
	Sites together, and by creating Secondary Sites immediately beneath Primary
	Sites.
	
	All Primary sites are created by running Systems Management Server Setup.
	Secondary Sites are created using the SMS Administrator. Primary Sites have a
	Systems Management Server Administrator and a SQL database. Secondary sites have
	no Systems Management Server Administrator or SQL database.
	
	The terms parent and child, when applied to SMS sites, have their standard
	meanings used in any tree-based data structure. The site hierarchy tree formed
	can be any arbitrary multi-way tree, subject to the following rules:
	
	1. A site can only have one parent. A strict multi-way tree structure is
	  observed, where each node can only have one parent and an arbitrary number of
	  children. A directed cyclic graph is not possible, nor are kind of cycles
	  possible. In other words, the site tree cannot contain any kind of circular
	  references and sites cannot have more than one parent.
	
	2. Secondary sites cannot report to each other in a parent-child relationship.
	  Each secondary site must report to a primary site as its immediate parent.
	  There is no mechanism at secondary sites to forward information to another
	  site in this way.
	
	3. Primary sites are added to the tree from the bottom up. A parent site does
	  not acquire a primary child site. A primary child site must decide to report
	  to a parent and attach to the parent site after creating an address to that
	  site.
	
	4. Primary sites can decide to detach themselves from their parent site and
	  become a top-level site with no parent. When they do this, the parent
	  receives instructions to eliminate that site and all its children from its
	  hierarchy tree. The primary site can then reattach to a different parent, if
	  needed. The primary Site can also simply switch to a new parent site in one
	  operation.
	
	5. Secondary sites are deleted through their parent site. The site is physically
	  deinstalled when this happens.
	
	6. The structure of the site tree can be altered by changing parent site codes
	  for the various sites. A primary site can detach from its current parent and
	  attach to a new one or become independent, as stated in rule number four
	  above. Secondary sites can also have their parent code altered to another
	  site. While this is technically possible, this usage is not officially
	  supported in Systems Management Server 1.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbDatabase kbHMan kbsmsAdmin smsadmin smssetup smsdatabase smshierman 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
