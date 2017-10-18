---
layout: page
title: "Q241419: SMS Executive Causes Access Violation Processing Prochist.dat"
permalink: kb/241/Q241419/
---

## Q241419: SMS Executive Causes Access Violation Processing Prochist.dat

	Article: Q241419
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMS Executive service may stop responding (hang) or generate an "Access
	violation" error message during the processing of the Prochist.dat file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Installing the Hotfix
	---------------------
	
	To install the hotfix, perform these steps on your Systems Management Server
	(SMS) site servers:
	
	1. Stop the SMS Executive and SMS Site Component Manager services.
	
	2. Replace the Baseobj.dll file in the <SMS_root>\Bin\<Platform>
	  folder with the version obtained from the hotfix.
	
	3. Restart the SMS Executive and SMS Site Component Manager services.
	
	Identifying the Problem
	-----------------------
	
	To determine whether you are experiencing the problem outlined in this article,
	review the Crash.log file in the Sms\Logs\CrashDumps\<Date of
	problem>_smsexec folder. The Crash.log file points to the SMS Executive
	thread responsible for the problem. For example:
	
	  Exception Information
	
	  Time = 09/01/1999 09:41:03
	  Service name = SMS_EXECUTIVE
	  Thread name = SMS_CLIENT_INSTALL_DATA_MGR
	  Executable = D:\SMS\bin\i386\smsexec.exe
	  Process ID = 130
	  Thread ID = 344
	  Instruction address = 0x7801042A
	  Exception = 0xC0000005 (EXCEPTION_ACCESS_VIOLATION)
	  Description = "The thread tried to write to the virtual address 0x063B8000 for
	  which it does not have the appropriate access."
	  Raised inside CService mutex = No
	  CService mutex description = ""
	
	Review all thread logs for the thread responsible for the problem and determine
	whether the thread was responsible for creating the FlushToFile thread used for
	processing the Prochist.dat file. The thread ID may be different from the thread
	ID listed in the Crash.log file. For example:
	
	  SMS_CLIENT_INSTALL_DATA_MGR_thread_356
	
	  CProcHistoryCache::LoadData - Created FlushToFile thread...
	  $$<SMS_CLIENT_INSTALL_DATA_MGR><Wed Sep 01 09:20:58.666 1999 Eastern
	  Daylight Time><thread=356 (0x164)>
	
	Additional query words: prodsms smsexec crash
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
