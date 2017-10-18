---
layout: page
title: "Q123878: Orphan Machine Inventory, Ghost Sites, and Domains"
permalink: kb/123/Q123878/
---

## Q123878: Orphan Machine Inventory, Ghost Sites, and Domains

	Article: Q123878
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbInventory kbHMan smsinv smsdatabase smshierman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you follow the process for adding or removing a domain or site from a
	Systems Management Server Primary Site, you may see warnings indicating that
	sites, addresses, or machines are inconsistent with the database.
	
	CAUSE
	=====
	
	The following situations can cause these messages:
	
	- A client machine is moved from one primary site database to another primary
	  site database. When this happens the "losing" site database is not informed.
	  This constitutes an "orphan" machine, and since the possibility exists that
	  the entire domain was moved to a new site, a warning may be issued. If you do
	  not want the machine movement, you (as the administrator), can increase the
	  FalseLogonThreshold parameter in the registry. Movement from a secondary site
	  to a parent site does not cause a problem because the existing machine
	  inventory is updated with a new site code/domain name.
	
	- A child site detaches or is otherwise removed (secondary site) from the
	  current site. When this happens the machine inventory is left behind. This is
	  similar to the following situation.
	
	- One or more of the current site's domains are removed using the Site
	  Properties <Domains> dialog. When this happens the machine inventory is
	  left behind. Because the machine inventory is keyed to the Site/Domain
	  combination, a warning appears when this combination is no longer valid.
	
	- Sites exist in the database which are not addressable (no sender address has
	  been created). Also, when a site detaches, the parent's address to the child
	  is automatically removed, but the inventory remains.
	
	RESOLUTION
	==========
	
	To correct the database and prevent these message pop-ups, use a query to bring
	up a list of candidate machines to be manually deleted. The query dialog can be
	used to specify a particular site code, domain name, and so forth. In the case
	of site address messages, an address will need to be created, or the ghost site
	can be removed with the PREINST /DELSITE command (see the Admin documentation
	for the Site Hierarchy Manager command-line syntax).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbInventory kbHMan smsinv smsdatabase smshierman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
