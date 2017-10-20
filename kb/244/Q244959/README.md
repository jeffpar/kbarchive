---
layout: page
title: "Q244959: Error Message Refreshing Report in SMS Administrator Console"
permalink: /kb/244/Q244959/
---

## Q244959: Error Message Refreshing Report in SMS Administrator Console

{% raw %}

	Article: Q244959
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool kbsms200 kbsms200bug
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to refresh a report in the SMS Administrator Console while you are
	designing or viewing the properties of the report in Crystal Info Reports
	Designer, you may receive the following error message:
	
	  An error occurred communicating with APS
	
	CAUSE
	=====
	
	This issue can occur if the report is already open or in use by another program
	such as Crystal Info Reports Designer. When the report file is open or in use,
	attempts to open or use the same report by another program (such as SMS
	Administrator Console) simultaneously are not permitted.
	
	RESOLUTION
	==========
	
	To resolve this issue, do not view a report in two different programs at the
	same time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
