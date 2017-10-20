---
layout: page
title: "Q187301: SMS: New Msaudit.rul Causes Audit32 to Stop Responding at 80%"
permalink: /kb/187/Q187301/
---

## Q187301: SMS: New Msaudit.rul Causes Audit32 to Stop Responding at 80%

{% raw %}

	Article: Q187301
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the new Msaudit.rul file (dated 1/28/98 with 14,400 rules), Audit32
	may stop responding with the progress bar showing 80 percent completion. At this
	point, Audit32 can take over 30 minutes to complete.
	
	CAUSE
	=====
	
	There is a problem with Msaudit.rul file (dated 1/28/98).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned in the STATUS section
	of this article, or wait for the next Systems Management Server service pack.
	The hotfix should have the following timestamps:
	
	     3/10/98   11:03pm        188,368 Audit32.exe (Intel)
	     3/10/98   11:02pm        626,448 Audit32.exe (Alpha)
	     4/23/98    4:20pm      1,579,385 Audit.rul
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
