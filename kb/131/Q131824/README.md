---
layout: page
title: "Q131824: PC NTMMTA: Press ESC and Y to Exit Monitor Window"
permalink: /kb/131/Q131824/
---

## Q131824: PC NTMMTA: Press ESC and Y to Exit Monitor Window

	Article: Q131824
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you monitor the Microsoft Mail Multitasking MTA for Windows NT (NT MMTA) as
	a Service, it is possible to press the ESC key then the Y key to exit while an
	instance of External or Dispatch is running. If you view the instance from the
	Control Panel Services, it indicates the External or Dispatch program is still
	running (started).
	
	MORE INFORMATION
	================
	
	The Monitor window has the same functionality as any External session. As a
	result, if you press ESC and Y, it will stop mail from being delivered. However,
	the service that starts External will show that the process is started. To stop
	an instance of External run Control Panel Services, and choose stop. This will
	stop the service and the External process.
	
	
	Additional query words: 3.50 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
