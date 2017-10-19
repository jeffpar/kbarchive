---
layout: page
title: "Q191360: SMS: Despooler Retry Count Increments by 2 and Not by 1"
permalink: /kb/191/Q191360/
---

## Q191360: SMS: Despooler Retry Count Increments by 2 and Not by 1

	Article: Q191360
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP1,1.2 SP2
	Operating System(s): 
	Keyword(s): kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2 SP1, 1.2 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the System Management Server Despooler service repeatedly creates retry
	instruction for a job that is not able to complete, the Despooler retry count
	decreases by 2 each time instead of 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 1 and Service Pack 2. This problem has been corrected
	in the latest U.S. service pack for Systems Management Server version 1.2. For
	information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	To reproduce this behavior, perform the following steps:
	
	1. Send a Program Group Control (PGC) job (Test.bat) and wait for it to
	  complete.
	
	2. Use Microsoft Word for Windows or Microsoft Excel to open a file on the PGC
	  share so that despooler cannot update it. Verify that PGC cannot update the
	  files by trying to delete one of the files manually. A "file in use" error
	  should be generated.
	
	3. Change the "Use Forced Disconnect" Despooler registry setting to "1".
	
	4. Stop and restart the Systems Management Server Executive service to use the
	  new settings.
	
	5. Change the contents of the existing file in the PGC source directory.
	
	6. Create a new PGC job to update the share with changed source file.
	
	After this has been completed, search for the phrase "retry count is now" in the
	Despoolr.log file. These retry statements will not appear in the log if the site
	server is not experiencing the problem.
	
	Additional query words: prodsms SP SP4
	
	======================================================================
	Keywords          : kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS120SP2 kbSMS120SP1
	Version           : :1.2 SP1,1.2 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
