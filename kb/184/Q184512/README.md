---
layout: page
title: "Q184512: SMS: Despooler Refreshes Every File in Package Directory"
permalink: kb/184/Q184512/
---

## Q184512: SMS: Despooler Refreshes Every File in Package Directory

	Article: Q184512
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDespooler smsdespoolerkbbuglist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a job and specify "Refresh Existing Distribution Servers",
	Despooler refreshes every file in the package directory, including files that
	have not changed.
	
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
	
	To work around this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Systems Management Server service pack. The
	hotfix should have the following timestamp:
	
	  4/2/98   1:37pm      252,848 Smsinst.dll (Intel)
	  4/2/98   1:37pm      480,016 Smsinst.dll (Alpha)
	
	MORE INFORMATION
	================
	
	When you use the hotfixed file mentioned above, Despooler only updates files
	that have changed. This may save a considerable amount of time for package
	refreshes.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDespooler smsdespooler kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
