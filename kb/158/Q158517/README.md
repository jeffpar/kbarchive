---
layout: page
title: "Q158517: Stop 0x000000094 Running Windows NT 4.0 and NFS Maestro"
permalink: /kb/158/Q158517/
---

## Q158517: Stop 0x000000094 Running Windows NT 4.0 and NFS Maestro

	Article: Q158517
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A STOP 0x00000094 error occurs on a system running Windows NT 4.0 and NFS
	Maestro. The STOP code may look like the following.
	
	  STOP: 0x00000094 (0x00000000, 0x00000000, 0x00000000, 0x00000000)
	  KERNEL_STACK_LOCKED_AT_EXIT
	
	CAUSE
	=====
	
	This STOP is caused by older versions of NFS Maestro, a 32-bit, kernel mode,
	multithreaded NFS client. Because of changes in the file system APIs of Windows
	NT 4.0, use of NFS Maestro versions 5.0, 5.1, 5.1.1, and 5.1.2 may result in a
	STOP 0x00000094.
	
	Version 5.1.3 of NFS Maestro for Windows NT 4.0 is designed to run on Windows NT
	4.0 and will not cause these STOP error messages. Previous versions of NFS
	Maestro do not support Windows NT 4.0 and can cause Windows NT 4.0 to have a
	blue screen error message.
	
	MORE INFORMATION
	================
	
	Customers may call Hummingbird Sales at 416-496-2200 or e-mail
	sales@hummingbird.com to request the new version. Hummingbird also has a web
	site available at http://www.hummingbird.com/.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
