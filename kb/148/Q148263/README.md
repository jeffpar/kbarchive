---
layout: page
title: "Q148263: Invalid Audit and History Records"
permalink: kb/148/Q148263/
---

## Q148263: Invalid Audit and History Records

	Article: Q148263
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	History records maintained by Systems Management Server (SMS) begin to get
	cluttered and often contradictory as successive audits are run on files which
	may have been moved, or even deleted. At this time, the only way to be sure you
	have accurate records is to run DBCLEAN, and delete all audit files, then re-run
	the audit jobs.
	
	CAUSE
	=====
	
	The problem is that every part of an Audited Software row is a key field. Even
	though the package number and file names may always be the same, the "Time
	Collected" is always different. Thus, the Data Loader does not correctly
	identify and map the previous instances to the new ones, and assumes all the
	data is new.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
