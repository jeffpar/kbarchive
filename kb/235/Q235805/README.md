---
layout: page
title: "Q235805: SMS: Package Job Status Not Reported From 1.2 Child to Parent"
permalink: /kb/235/Q235805/
---

## Q235805: SMS: Package Job Status Not Reported From 1.2 Child to Parent

{% raw %}

	Article: Q235805
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Systems Management Server 2.0 parent site receives a Systems Management
	Server 1.2 package status Management Information File (MIF), the despooler at
	the Systems Management Server 2.0 site will convert it to a package status
	record and create a *.sta file in the distribution manager inbox.
	
	Systems Management Server 2.0 Distribution Manager does not correctly process the
	status and an error occurs in the SMS_DISTRIBUTION_MANAGER log such as the
	following:
	
	  This PkgID (100Z0006) does not exist in the parent table, SMSPackages.
	
	CAUSE
	=====
	
	The format of certain status files generated at a Systems Management Server 1.2
	site prevents the status from being processed successfully by Distribution
	Manager on a Systems Management Server 2.0 site.
	
	More specifically, Systems Management Server 1.2 replaces the fourth character of
	a Package ID with a "Z" to indicate the success of a Share Package on Server
	job. When distribution Manager on the Systems Management Server 2.0 site
	attempts to process this update, it fails to locate the specific Package ID
	because it does not exist in the site database with a Z in the fourth position
	of the Package ID.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
