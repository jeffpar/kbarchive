---
layout: page
title: "Q153539: 16-bit PGC: Appstart GPFs When WFW is Low on Environment Space"
permalink: /kb/153/Q153539/
---

## Q153539: 16-bit PGC: Appstart GPFs When WFW is Low on Environment Space

	Article: Q153539
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a Windows for Workgroups client is running low on environment space,
	APPSTART causes a general protection fault (GPF) when you attempt to run the
	shared application. The following error message appears:
	
	  Error : General Protection Fault APPSTART caused an error in ACT16DLL.DLL
	
	WORKAROUND
	==========
	
	Reduce the number of environment variables set in the autoexec.bat.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms GPF ACT16DLL.DLL
	
	======================================================================
	Keywords          : kbinterop kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
