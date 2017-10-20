---
layout: page
title: "Q213091: SMS: Connection Failure Gives Wrong Software Metering Msg"
permalink: /kb/213/Q213091/
---

## Q213091: SMS: Connection Failure Gives Wrong Software Metering Msg

{% raw %}

	Article: Q213091
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbsmsAdmin kbsmsUtil
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are modifying licensed software information with the Software Metering
	tool, the following error message may be displayed:
	
	  An unexpected error occurred while enumerating the Product table, error
	  returned Communication link failure.
	
	After you click OK, this error message is displayed:
	
	  The selected product no longer exists.
	
	
	CAUSE
	=====
	
	This can occur when connection to the SQL Server has been lost. Review the
	Windows NT Event Viewer and SQL Error Logs to determine the cause.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbsmsAdmin kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
