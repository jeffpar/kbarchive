---
layout: page
title: "Q226853: SMS: Program Assigned to Run at Next Logon Cannot Be Rescheduled"
permalink: /kb/226/Q226853/
---

## Q226853: SMS: Program Assigned to Run at Next Logon Cannot Be Rescheduled

{% raw %}

	Article: Q226853
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program assigned to run at the next logon does not run.
	
	CAUSE
	=====
	
	You cannot schedule a program that was originally assigned for logon to run at
	any scheduled time (in the past or the future).
	
	WORKAROUND
	==========
	
	To work around this problem, you can use the Run the Selected Program Now
	command on the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
