---
layout: page
title: "Q189942: System Eventually Slows Down When MMC Left Open"
permalink: /kb/189/Q189942/
---

## Q189942: System Eventually Slows Down When MMC Left Open

	Article: Q189942
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Over time, the Windows NT system's responsiveness appears sluggish, and clients
	may report a gradual decrease in system performance. You may also notice that
	the Internet Information Server (IIS) is sluggish or not responding to clients.
	
	CAUSE
	=====
	
	The Microsoft Management Console (MMC) is leaking memory.
	
	RESOLUTION
	==========
	
	To resolve this problem, quit the Microsoft Management Console.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	MORE INFORMATION
	================
	
	By tracking the amount of private bytes for Mmc.exe, you can observe that, over
	time, the amount increases without decreasing. View this with the Windows NT
	Performance Monitor by selecting the following counter to monitor:
	
	  Object: Process
	  Instance: MMC
	  Counter: Private Bytes
	
	Additional query words: MTS Snap-in handles
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
