---
layout: page
title: "Q185179: SMS: No Retry For &quot;Remove Package&quot; Jobs"
permalink: kb/185/Q185179/
---

## Q185179: SMS: No Retry For &quot;Remove Package&quot; Jobs

	Article: Q185179
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a "Remove Package" job fails during the sending phase, no attempt to resend
	the job occurs. The job status is correctly updated (retrying), but nothing is
	done to retry the send operation.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the following fix by contacting Microsoft
	Technical Support or wait for the next Systems Management Server service pack.
	
	This fix should have the following time stamp:
	
	  04/24/98   10:55p        537,120 base4.dll (Intel)
	  04/24/98   10:51p        917,264 base4.dll (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0, 1.1, and 1.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
