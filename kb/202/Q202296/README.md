---
layout: page
title: "Q202296: SMS: Cannot Modify Time of Day in Software Metering Graph Wizard"
permalink: /kb/202/Q202296/
---

## Q202296: SMS: Cannot Modify Time of Day in Software Metering Graph Wizard

{% raw %}

	Article: Q202296
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsmsMeter
	Last Modified: 03-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Graph Wizard tool on the Tools menu of the Software
	Metering console, if you select Days as the time period for each unit, you are
	unable to modify the time of day in the "When would you like to graph from?"
	option. Pressing the UP ARROW and DOWN ARROW keys does not change the time of
	day from its default setting of 12:00:00 A.M.
	
	CAUSE
	=====
	
	When the interval is set to days, the time of day cannot be adjusted. When the
	time period for each unit is set to minutes, the time of day adjustment works as
	expected.
	
	
	Additional query words: prodsms time spinner
	
	======================================================================
	Keywords          : kbsms200 kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
