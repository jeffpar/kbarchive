---
layout: page
title: "Q150795: SNA Server Exception 0xC0000194 (Possible Deadlock)"
permalink: kb/150/Q150795/
---

## Q150795: SNA Server Exception 0xC0000194 (Possible Deadlock)

	Article: Q150795
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After ending a user-written SNA Server application that submitted three
	concurrent TRANSFER_MS_DATA calls to submit an alert to NetView, the SNA Server
	will fail with Event 624. You will get the following Drwtsn32.log exception
	error:
	
	  Application exception occurred:
	  App: snaservr.DBG (pid=223)
	  Exception number: c0000194 (possible deadlock)
	
	CAUSE
	=====
	
	Under certain conditions, the application shutdown was causing an internal SNA
	Server buffer pool mutex to be left in a signaled state, causing the SNA Server
	to wait indefinitely for the mutex to be released.
	
	
	RESOLUTION
	==========
	
	
	To avoid this deadlock, the internal buffer pool mutex time-out interval is now
	configurable, with the default still set to infinite. Instead of waiting forever
	for the pool event to be signaled, the code now retries to lock the pool mutex
	each time the time-out expires.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	An updated Snadmod.dll now supports a configurable time-out setting using the
	following new registry parameter:
	
	   HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaBase
	         /Parameters/ 
	
	   PoolMutexTimeout:REG_DWORD:<time-out in milliseconds>
	
	Valid values are 100ms through 0xFFFFFFF (infinite). 1000ms is the recommended
	setting if this problem is being encountered.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11. This
	problem was corrected in the latest SNA Server for Windows NT version 2.11 U.S.
	Service Pack. For information on obtaining this update, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
