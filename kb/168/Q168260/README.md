---
layout: page
title: "Q168260: Private Byte Memory Leak in Rpcss.exe"
permalink: /kb/168/Q168260/
---

## Q168260: Private Byte Memory Leak in Rpcss.exe

	Article: Q168260
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Over time, the Windows NT system responsiveness appears sluggish, and clients
	may report a gradual decrease in system performance.
	
	By tracking the amount of private bytes for Rpcss.exe, it can be observed that
	over time it increases without decreasing. This is viewable using Windows NT
	Performance Monitor by choosing the following counter to monitor:
	
	  Object:    Process
	  Instance:  RPCSS
	  Counter:   Private Bytes
	
	CAUSE
	=====
	
	A UDP remote procedure call (RPC) datagram packet was received by the server and
	the RPC service referenced in the packet is not running on the Windows NT server
	computer. During processing of the RPC datagram packet, a small buffer was
	allocated that was not freed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression- Tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
