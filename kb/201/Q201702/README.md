---
layout: page
title: "Q201702: SMS: Win16 Bindery Client Receives Error During Logon Script"
permalink: /kb/201/Q201702/
---

## Q201702: SMS: Win16 Bindery Client Receives Error During Logon Script

	Article: Q201702
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbClient kbsms200 kbsms200bug kbBindery kbCAP kbDiscovery kbOSNovell
	Last Modified: 04-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When 16-bit clients run the logon script over Bindery services, the following
	error may appear within the client's logon script window:
	
	  ERROR: \\<servername>\SYS\SMLOGON\X86.bin\SMSNW1.EXE returned 34819!
	  Cannot run the SMS bootstrap!
	
	The boot process will continue and the client is successfully discovered and
	installed. This error occurs when running the NetWare VLM client from Microsoft
	Windows 3.1 or Microsoft Windows for Workgroups 3.11, and not when the user logs
	on from MS-DOS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: prodsms cli16nw login execute
	
	======================================================================
	Keywords          : kbinterop kbsetup kbClient kbsms200 kbsms200bug kbBindery kbCAP kbDiscovery kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
