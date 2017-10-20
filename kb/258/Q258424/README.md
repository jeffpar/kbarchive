---
layout: page
title: "Q258424: Distmgr.log Shows Errors If Distribution Pt Is Updated"
permalink: /kb/258/Q258424/
---

## Q258424: Distmgr.log Shows Errors If Distribution Pt Is Updated

{% raw %}

	Article: Q258424
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug
	Last Modified: 02-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Packages are created at a primary site and targeted to distribution points,
	which include secondary sites of the primary. When packages are created, they
	may not arrive and errors are noted in the Distmgr.log file.
	
	WORKAROUND
	==========
	
	When you create a package, allow it to be staged on the distribution points
	before you update the distribution points with the same package. If you are
	currently experiencing this problem, update the distribution points a second
	time. This allows the update to proceed normally and the package should arrive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	This behavior occurs if the user updates the distribution point immediately
	after the package creation.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
