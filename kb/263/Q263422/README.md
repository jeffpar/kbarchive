---
layout: page
title: "Q263422: SMS: Refreshing Multiple Network Trace Maps Causes Icon Overlap"
permalink: /kb/263/Q263422/
---

## Q263422: SMS: Refreshing Multiple Network Trace Maps Causes Icon Overlap

{% raw %}

	Article: Q263422
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200bug kbsms200preSP3
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open multiple windows in the Network Trace tool and then refresh the
	windows that opened first, icons that represent the site may overlap. Each icon
	may be placed on top of the other, making the trace map unreadable. When you try
	to refresh the affected network trace windows, the problem is not corrected. You
	can refresh the window that is opened last with no adverse effects.
	
	WORKAROUND
	==========
	
	To work around the icon overlap problem, close the affected windows, and then
	restart the Network Trace tool for the site system by using a single window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
