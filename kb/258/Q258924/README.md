---
layout: page
title: "Q258924: Performance Problems Can Occur When a Child Site Reconnects"
permalink: /kb/258/Q258924/
---

## Q258924: Performance Problems Can Occur When a Child Site Reconnects

{% raw %}

	Article: Q258924
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 16-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a child site reconnects to a parent site, potentially significant network
	performance issues can occur.
	
	MORE INFORMATION
	================
	
	When a site connects to a parent, it bundles all the inventory in its database
	into a large binary file and sends it to the new parent, where it is expanded
	and written into the database. If there is a lot of inventory in the database,
	this can cause a significant load. This is true whether or not the child was
	connected to this parent site in the past.
	
	Also, if the site has ever been connected to a parent previously, software
	distribution information might be overwritten. Software distribution objects
	such as packages and advertisements are locked when the definitions are
	automatically sent to all child sites. During a connect sequence, a dump of all
	these objects is sent to all child sites; as they are updated or created at the
	parent, the changes are forwarded to all child sites. If a child site
	disconnects, it gains ownership of these objects. At that point, the child site
	can edit and modify them as best fit the needs of that site. If the site
	reconnects to the site that originally owned the objects, or a child of the site
	that originally owned the objects, a fresh dump of all software distribution
	objects is forwarded to all child sites from the parent site that just had a
	child connect to it.
	
	These object definitions overwrite any changes made to the object definitions at
	the parent while the child site was not connected. Any software distribution
	object definitions that are created at the child site are unaffected by object
	definitions created at a parent and forwarded down the hierarchy.
	
	If the parent site, or any site above it in the path to the central site, was
	ever reinstalled or recovered, software distribution information might be
	overwritten as well. If a site is reinstalled without incrementing the serial
	numbers for its software distribution objects, and if it has ever distributed
	objects with the current serial numbers before, the earlier object definitions
	are overwritten by the new definitions.
	
	If a child site was disconnected from a parent before a recovery operation was
	run without correctly incrementing the serial numbers, there is a risk of all
	serial-number-based definitions being overwritten after the connection to the
	parent is made. For example, if package number 14 originally distributed
	Microsoft Office, and after the reinstallation package number 14 is used to
	distribute Microsoft SQL Server, there is a possibility that SQL Server would be
	installed on all of the clients that should have had Office installed.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
