---
layout: page
title: "Q200858: SMS: WinNT 3.51 Clients Fail w/Wbemsdk.exe Err. After WBEM Inst."
permalink: /kb/200/Q200858/
---

## Q200858: SMS: WinNT 3.51 Clients Fail w/Wbemsdk.exe Err. After WBEM Inst.

	Article: Q200858
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbWBEM kbsms200
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Systems Management Server 2.0 onto a client computer running
	Microsoft Windows NT 3.51, a Wbemsdk.exe error is displayed with the following
	text:
	
	  The application or DLL \DOS Devices| c:\Temp\GLF2fs.tmp is not a valid
	  Windows NT image.
	
	WORKAROUND
	==========
	
	The Systems Management Server 2.0 client requires that Windows NT 3.51 Service
	Pack 5 is installed on client computers running Windows NT 3.51. This error may
	indicate that the service pack is not installed. Either apply or reapply Windows
	NT 3.51 Service Pack 5 to correct this error.
	
	Additional query words: sp sp5 prodsms
	
	======================================================================
	Keywords          : kbWBEM kbsms200 
	Technology        : kbSMSSearch
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
