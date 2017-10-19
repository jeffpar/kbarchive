---
layout: page
title: "Q124959: Err Msg: ...the Package Requires an NTFS Drive to Install..."
permalink: /kb/124/Q124959/
---

## Q124959: Err Msg: ...the Package Requires an NTFS Drive to Install...

	Article: Q124959
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbScheduler smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A shared application package fails to be distributed to a NetWare server. The
	DESPOOL.LOG file shows the following error:
	
	  Server SMSDIST is not a Windows NT machine and the package requires an NTFS
	  drive to install to, we'll skip this server.
	
	CAUSE
	=====
	
	This problem occurs if the package source directory is on an NTFS partition and
	has been shared as a Macintosh volume through Services for Macintosh. If a long
	filename (LFN) is detected by the Systems Management Server Scheduler service,
	while it compresses the package source directory, it includes an attribute
	noting this package requires an NTFS partition in the instruction file. When the
	SMS Despooler receives the package, it sees the indication that the package
	requires an NTFS partition. Since there is no NTFS partition on the NetWare
	server, it fails to install the package.
	
	WORKAROUND
	==========
	
	Use Windows NT File Manager to remove the Macintosh volume from the SMS package
	source directory or remove any long filenames from the package source directory
	tree. Then resend and redistribute the package.
	
	Additional query words: sms sfm prodsms
	
	======================================================================
	Keywords          : kbnetwork kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
