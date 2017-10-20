---
layout: page
title: "Q122386: Non-Existing Administrative Share Causes Incomplete Site"
permalink: /kb/122/Q122386/
---

## Q122386: Non-Existing Administrative Share Causes Incomplete Site

{% raw %}

	Article: Q122386
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install a Systems Management Server version 1.0 site to a non-existing
	Windows NT Server's administrative share (for example: C$), the Setup program
	does not display a warning message, and installs an incomplete site (missing
	subdirectories).
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Remove the site.
	
	2. Restart the Windows NT Server.
	
	3. Install the Systems Management Server site again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem has been corrected in Systems Management Server
	version 1.1.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
