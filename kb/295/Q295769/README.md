---
layout: page
title: "Q295769: Slow DDR Processing with a Growing DDM Backlog"
permalink: /kb/295/Q295769/
---

## Q295769: Slow DDR Processing with a Growing DDM Backlog

{% raw %}

	Article: Q295769
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience slow DDR processing with a growing Discovery Data Manager
	(DDM) backlog.
	
	CAUSE
	=====
	
	On Windows NT 4.0 clients that are running RAS, MAC addresses of
	00:00:00:00:00:00 are reported as part of the discovery data. As the DDM
	sometimes uses the MAC address when it queries the database, NULL MAC addresses
	cannot be used to locate a single client as the MAC address should be unique and
	not null. DDM copes with this situation with a set of enhanced queries, and this
	causes the slow processing.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	To "clean up" the database after you applying this hotfix, a SQL script that
	deletes the rows from the system_mac_addres_ARR that have the
	'00:00:00:00:00:00' entries can be used:
	
	  delete from system_mac_addres_ARR where MAC_Addresses0 = '00:00:00:00:00:00'
	  go
	
	NOTE: While this hotfix allows DDRs to process more quickly, it does not prevent
	the problem from being recreated by the backlogged files. So the script would
	have to be run periodically until the backlog of files are processed or the
	backlog would have to be removed prior to the initial run. Given that the
	problem may be occurring at several sites in a hierarchy, the easiest option is
	to run the script periodically until the backlogs are gone.
	
	
	Additional query words: prodsms ddm backlog mac address NULL zero
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
