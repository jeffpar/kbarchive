---
layout: page
title: "Q162536: SMS: SMS Event 336 with a Large Number of Sites"
permalink: /kb/162/Q162536/
---

## Q162536: SMS: SMS Event 336 with a Large Number of Sites

{% raw %}

	Article: Q162536
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbusage kbsmsAdmin smsadmin smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server Event 336, "Cannot read Site Control file for site X
	from database SQL Server Y" is produced on a primary site where large numbers of
	Systems Management Server addresses exist.
	
	CAUSE
	=====
	
	An image of the site control file Sitectrl.ct0 is stored in the Systems
	Management Server database. Currently, the maximum size of this image that can
	be read from or written to the database, is set by Systems Management Server to
	256 KB. This allows for an approximate maximum of 1,100 sites to exist in a
	Systems Management Server hierarchy.
	
	Attempting to add an address for a new site that already has this approximate
	number of addresses defined causes the Systems Management Server Hierarchy
	Manager to produce event 336. You can examine the size of the Sitectrl.ct0 file
	in the Site.srv\Sitecfg.box directory to determine if the Site Control image is
	approaching its size limit.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2.
	
	
	A supported fix is now available for version 1.1 only, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	This problem was corrected in the latest Microsoft Systems Management Server 1.2
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms scalability
	
	======================================================================
	Keywords          : kbusage kbsmsAdmin smsadmin smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
