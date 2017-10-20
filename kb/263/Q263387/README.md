---
layout: page
title: "Q263387: SMS: &quot;Run Once For Every User Who Logs On&quot; Makes Ad Run Twice"
permalink: /kb/263/Q263387/
---

## Q263387: SMS: &quot;Run Once For Every User Who Logs On&quot; Makes Ad Run Twice

{% raw %}

	Article: Q263387
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200preSP3
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program for a package created with the "Run Once For First User Who Logs On"
	option is advertised and run. If you change the program properties option to
	"Run Once For Every User Who Logs On", the advertisement runs a second time for
	the one user who has already run the program.
	
	CAUSE
	=====
	
	Schedule changes are generally treated as readvertisement of the program.
	
	WORKAROUND
	==========
	
	Create a new program specifying the "Run Once For Every User Who Logs On"
	option. Create a new advertisement for that program with a mandatory assignment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To select the "Run Once For Every User Who Logs On" option for your new program,
	follow these steps:
	
	1. From the Systems Management Server Administrator console, navigate to
	  Packages.
	
	2. Click Programs, and then select "Program properties" for the program you
	  created.
	
	3. On the Advanced tab of the "Program properties", click "When Program Is
	  Assigned".
	
	Note: The options available for "When Program Is Assigned" are valid only if the
	corresponding advertisement has a mandatory assignment on the Schedule tab of
	"Advertisement properties".
	
	Additional query words: multiple twice software distribution
	
	======================================================================
	Keywords          : kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
