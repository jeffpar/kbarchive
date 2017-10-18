---
layout: page
title: "Q152229: SMS: Expired SMS Jobs Alter Detailed Job Status"
permalink: kb/152/Q152229/
---

## Q152229: SMS: Expired SMS Jobs Alter Detailed Job Status

	Article: Q152229
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler kbPCM smsdespooler smspcm
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Displaying the detailed job status of a Systems Management Server job shows
	Retrying or Canceled for Workstation entries after a Package Command Manager
	(PCM) job has expired.
	
	CAUSE
	=====
	
	The Systems Management Server despooler incorrectly creates a detailed job
	status MIF as the result of a PCM job expiry notification received from an
	Systems Management Server client. In Systems Management Server 1.0, the detailed
	job status for the Workstation entry is set to Retrying as the result of the job
	expiry. In Systems Management Server 1.1, the detailed job status for the
	Workstation entry is set to Canceled.
	
	The expected behavior is to maintain the last reported job status for the
	workstation.
	
	MORE INFORMATION
	================
	
	An example situation is described below:
	
	A job is created in the Systems Management Server Administrator program to
	distribute a PCM Package to five clients. The package is only to be offered for
	two days, therefore the job expiration time is set to two days after the offer
	date. All five clients receive the package displayed in PCM, three succeed in
	executing the package successfully on day one, the fourth client fails to
	execute the package successfully, and the fifth client is unoccupied and never
	executes the package.
	
	Two days after the package offer date, the package expires. During each polling
	cycle, PCM on each client checks its Workstation Instruction (WINST) file on its
	Systems Management Server logon server. It checks for new packages arriving and
	for packages expiring. On job expiration, the package is removed from the
	client's PCM window and a despooler instruction is written to the Despoolr.box
	on the logon server. After the site's despooler processes this instruction, it
	creates a detailed job status MIF to update the Workstation entry in the job's
	detailed status. Depending on the version of SMS running on the site, this
	alters the results displayed for the job status.
	
	For the example above, the following results will be displayed for the detailed
	job status in Systems Management Server 1.0.
	
	End of day 1
	- Workstations 1-3 (were successful)     Workstation Job Status = Complete
	- Workstation 4 (failed package)         Workstation Job Status = Retrying
	- Workstation 5 (job never executed)     Workstation Job Status = None
	
	After job expires
	- Workstations 1-3 (were successful)     Workstation Job Status = Retrying
	
	End of day 3
	- Workstation 4 (failed package)         Workstation Job Status = Retrying
	- Workstation 5 (job never executed)     Workstation Job Status = Retrying
	
	NOTE: After the job expiration time, it is no longer possible to determine
	whether the PCM job was a success, a failure, or did not run at all.
	
	RESOLUTION
	==========
	
	Unfortunately the behavior of the despooler component under Systems Management
	Server versions 1.0 and 1.1 cannot be resolved. The problem is corrected in
	Systems Management Server version 1.2.
	
	The following workarounds are suggested if you encounter problems determining the
	current status of package installation for SMS clients.
	
	- Extend the job expiration date to give enough time to review the job status
	  for each client, where possible.
	
	- Use a NOIDMIF to report details about the package installation (that is,
	  Complete, Failed), so that a new attribute for the package is displayed for
	  each client detailing the install status.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	The problem is corrected in Systems Management Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDespooler kbPCM smsdespooler smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
