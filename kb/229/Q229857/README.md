---
layout: page
title: "Q229857: SMS: Identical Site Names on Multiple Sites Can Cause Problems"
permalink: /kb/229/Q229857/
---

## Q229857: SMS: Identical Site Names on Multiple Sites Can Cause Problems

{% raw %}

	Article: Q229857
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you name a site in Systems Management Server (SMS), ensure that site names
	are not duplicated. If you use duplicate site names, problems may occur when you
	retrieving information from the database. These problems occur because the site
	name is used as part of the key for retrieving data.
	
	MORE INFORMATION
	================
	
	If you use a duplicate site name, you may notice that computers appear under the
	wrong site in SMS Administrator. SMS Administrator uses the site name as part of
	the key for finding computers within a site.
	
	When you run a query to retrieve the computers in a specific site, computers may
	appear under an incorrect site that has the same site name as the site to which
	the computers actually belong.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms120 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
