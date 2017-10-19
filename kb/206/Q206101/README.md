---
layout: page
title: "Q206101: SMS: Shared DLLs Are Not Removed During a Silent Uninstall"
permalink: /kb/206/Q206101/
---

## Q206101: SMS: Shared DLLs Are Not Removed During a Silent Uninstall

	Article: Q206101
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsmsInst
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you perform a silent uninstall to remove an application using the Systems
	Management Server Installer, shared .dll files are not removed. The shared .dll
	files, which are listed in the Install.log, are not removed because the
	Uninstall.exe program defaults to "no to all," which you cannot change for a
	silent uninstall.
	
	
	Additional query words: prodsms smsinst delete
	
	======================================================================
	Keywords          : kbsms200 kbsmsInst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : WINDOWS:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
