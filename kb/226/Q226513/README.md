---
layout: page
title: "Q226513: NPFS Leak When AddJob API Returns a Named Pipe"
permalink: kb/226/Q226513/
---

## Q226513: NPFS Leak When AddJob API Returns a Named Pipe

	Article: Q226513
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user-mode process that creates a named pipe and passes its path name as an out
	parameter of the AddJob() call may leak non-paged pool memory when a client
	connects to the named pipe and writes the job content resulting in an eventual
	disabled server. The leakage is in proportion to the size of the job. The
	resource is not reclaimed when the provider is restarted (the computer must be
	restarted).
	
	The leak may be observed by using the Performance Monitor utility and tracking
	the Memory/Pool nonpaged bytes counter. The size of the leak is proportional to
	the job size (the size of the file copied to the Named Pipe), the leak is larger
	in the case of the print command than the copy command. This resource leak
	eventually disables the server and you may see the following message in the
	System Event log:
	
	  Date: 4/2/99
	  Time: 7:39:58 PM
	  User: N/A
	  Event ID: 2019
	  Source: Svr
	  Type: Error
	  Description: The server was unable to allocate from the system nonpaged pool
	  because the pool was empty.
	
	CAUSE
	=====
	
	This problem occurs because the Server Service was not cleaning up the I/o
	Requested Packet after the job was completed. Even though the leak looks like it
	is in Named Pipes File System, it is actually caused by the Server Service
	(Srv.sys).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
