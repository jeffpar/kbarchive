---
layout: page
title: "Q160775: SMS: Job Status Not Updated for NetWare Clients"
permalink: /kb/160/Q160775/
---

## Q160775: SMS: Job Status Not Updated for NetWare Clients

	Article: Q160775
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcmkbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Systems Management Server detailed job status information for MS-DOS and
	Windows 3.1 NetWare clients is not updated after the completion of the job. This
	problem typically affects clients running Novell's NETX redirector.
	
	CAUSE
	=====
	
	Package Command Manager for DOS (PCMDOS) and Windows (PCMWIN16) fails to write
	the job status information to the logon server's Despooler.box directory after
	job completion. Both PCMDOS and PCMWIN16 rely upon writing job status
	information (for example, job success or failure) to the following UNC path:
	\\Logonserver\SMS\Logon.srv\Despoolr.box. UNC paths are not supported correctly
	using the NETX redirector. Novell VLM clients appear to be unaffected when a UNC
	path is used from a network drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. A supported fix is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	Additional query words: 1.00 1.10 1.20 prodsms commissar despooler
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
