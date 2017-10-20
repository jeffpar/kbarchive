---
layout: page
title: "Q189530: SMS: Scheduler Never Creates Send Request"
permalink: /kb/189/Q189530/
---

## Q189530: SMS: Scheduler Never Creates Send Request

{% raw %}

	Article: Q189530
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbScheduler smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new "Run Command on Workstation" job and do not enable the Run
	Phase, no send request is created for the destination site(s). No compressed
	file or instruction file is created. As a result, the job remains active and is
	never distributed.
	
	CAUSE
	=====
	
	Two or more Identification groups exist in the SMS database. This can be the
	result of a custom Identification MIF (IDMIF) being added to the SMS site.
	
	WORKAROUND
	==========
	
	To work around this problem, use the SMS Database Manager to delete all of the
	group classes defined in any architecture other than Personal Computer that
	contains an Identification group. Doing this will remove the architecture from
	the SMS database. Take steps to ensure that the architecture is not re-created.
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Systems Management Server service pack.
	
	     7/1/98   1:52am      537,120 Base4.dll (Intel)
	     7/1/98   1:50am      917,264 Base4.dll (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words: prodsms scheduler
	
	======================================================================
	Keywords          : kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
