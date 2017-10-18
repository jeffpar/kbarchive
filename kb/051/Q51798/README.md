---
layout: page
title: "Q51798: &quot;File Not Found&quot; Error Returned Over Novell Network"
permalink: kb/051/Q51798/
---

## Q51798: &quot;File Not Found&quot; Error Returned Over Novell Network

	Article: Q51798
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive a "file not found" error over a Novell network when the file
	referenced is on a network drive. This message occurs even if the file is
	included in the search mappings or specified using a fully qualified path.
	
	CAUSE
	=====
	
	The error message is caused because the requested file has not been properly
	closed by the network software. Thus, according to the network and to MS-DOS,
	the file is still open and being accessed.
	
	To confirm that open files are causing this problem, you must have supervisor
	capabilities. Running the NetWare utility FCONSOLE with supervisor capabilities
	allows you to observe the file attributes. The file will be marked as open.
	
	WORKAROUND
	==========
	
	Rebooting the workstation or logging out may not correct the problem. However,
	rebooting the server usually closes the file and solves the problem. Novell has
	no utility to manually close a file, so you must wait for the internal processes
	to time out and close the file. The length for time out has not been determined,
	but can be up to 15 or 20 minutes.
	
	MORE INFORMATION
	================
	
	For more information on this problem, contact Novell.
	
	The Novell products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20 net 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
