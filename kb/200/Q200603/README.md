---
layout: page
title: "Q200603: BUG: SMS 2.0 Shows No Version for an SMS Version 1.2 Child Site"
permalink: /kb/200/Q200603/
---

## Q200603: BUG: SMS 2.0 Shows No Version for an SMS Version 1.2 Child Site

{% raw %}

	Article: Q200603
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading a central site running Systems Management Server (SMS) 1.2 to
	Systems Management Server 2.0, child and secondary sites running version 1.2 may
	be displayed as a different version in the database of the upgraded central
	site.
	
	CAUSE
	=====
	
	This is by design. The Version and Build Number fields are introduced by Systems
	Management Server version 2.0 and are stored in the Sites table of the version
	2.0 database. The version information for sites running version 1.x is not
	written to these new fields during the upgrade process. These fields are updated
	once the new version 2.0 central site receives a site control file from the
	version 1.x child and secondary sites, which should be completed within 24
	hours.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
