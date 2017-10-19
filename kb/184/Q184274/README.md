---
layout: page
title: "Q184274: Windows 95 Causes Spooler to Approach 100% CPU Usage"
permalink: /kb/184/Q184274/
---

## Q184274: Windows 95 Causes Spooler to Approach 100% CPU Usage

	Article: Q184274
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, when Microsoft Windows 95 clients submit a large
	number of print jobs to a computer running Windows NT Server, the CPU usage of
	the print spooler process will approach 100 percent.
	
	Also, all other connected Windows 95 clients appear to stop responding (hang) as
	well as the server itself. When the number of jobs drops below the threshhold,
	the server will free up and all clients will return to normal.
	
	A network trace between the client and server will show a constant stream of
	remote procedure call (RPC) traffic. The number of jobs that will expose the
	problem is variable, and has been observed to be as low as 88 (all the documents
	in the queue have extremely long names and the queue is being shared by Windows
	NT Server) or as high as 141 (all the documents in the queue have single
	character names and the queue is being shared by Windows NT Workstation).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Windows
	NT service pack.
	
	This fix should have the following time stamp:
	
	  04/01/98  10:21pm             88,226  xactsrv.dll (Intel)
	  04/01/98  10:22pm            170,768  xactsrv.dll (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: win95
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
