---
layout: page
title: "Q139589: Distribution of Files with Long Filenames Require NTFS"
permalink: /kb/139/Q139589/
---

## Q139589: Distribution of Files with Long Filenames Require NTFS

	Article: Q139589
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbScheduler smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to distribute files with long file names to a NetWare server
	that has the OS/2 Name Space NLM loaded, the server stops responding and fails
	to receive the complete distribution of files. In addition, the following error
	message appears:
	
	  SMSEXEC.EXE - Application Error
	  The instruction at <address> referenced memory at <memory
	  address>.
	  The memory could not be written.
	
	Some of the Systems Management Server services stop, including the Systems
	Management Server Executive service. The following event appears in the Systems
	Management Server application log:
	
	  113 There isn't any NTFS drive on server <server name>, which is needed
	  by the despooler to decompress or install the package.
	
	CAUSE
	=====
	
	When the Scheduler creates a package for distribution, it checks for files that
	have long file names. If it detects a file with a long file name, the Scheduler
	sets a flag which requires the Windows NTFS file system as the package
	destination. The despooler should not attempt to distribute the package when it
	detects the flag.
	
	
	WORKAROUND
	==========
	
	To work around this problem, either rename or delete the file (or files) that
	are in the 8.3 file format and then distribute the package again. Refer to the
	"Run Command on Workstation Job" flowchart in Appendix C of the "Systems
	Management Server Administrators Guide" for the location of the file (or files).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
