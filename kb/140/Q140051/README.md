---
layout: page
title: "Q140051: Run Command On Workstation Job Doesn't Refresh...."
permalink: kb/140/Q140051/
---

## Q140051: Run Command On Workstation Job Doesn't Refresh....

	Article: Q140051
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following incorrect behavior applies only to "Run Command On Workstation"
	jobs and does not happen with "Share Package On Server" jobs.
	
	When you take an existing package, one that has previously been distributed to a
	machine group, and try to refresh that package on a new group that contains a
	partial list of servers from the original group, the distribution servers are
	not refreshed.
	
	The SMS Despooler processed the instruction file but fails to decompress the
	package and copy any files.
	
	This occurs when only the "Put on Specified Distribution Servers" is selected in
	the Distribute phase of the Job Details window.
	
	NOTE: If you select "Refresh Existing Distribution Servers" the package is
	distributed to all the original distribution servers regardless of the machine
	group selected in the drop down box within that dialog.
	
	WORKAROUND
	==========
	
	If it is necessary to refresh certain distribution servers, Select "Refresh
	Existing Distribution Servers" in the Distribute Phase of the Job Details
	window. This refreshes all original distribution servers for this package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
