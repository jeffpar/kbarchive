---
layout: page
title: "Q214563: NET USE /d Returns Error 2404 After Applying Service Pack 4"
permalink: kb/214/Q214563/
---

## Q214563: NET USE /d Returns Error 2404 After Applying Service Pack 4

	Article: Q214563
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT version 4.0 Service Pack 4 on a workstation or
	server, you may receive the following error when you run a script or batch file
	that connects to a resource, runs an application, and then disconnects from that
	resource:
	
	  The device is being accessed by an active process. More help is available by
	  typing NET HELPMSG 2404.
	
	An example script would be similar to the following:
	
	  net use q: \\servername\share
	  q:
	  login.bat
	  c:
	  net use q: /d
	
	CAUSE
	=====
	
	The redirector holds a reference to the File Control Block (FCB) in the cache. A
	fix to the Redirector (Rdr.sys) in Service Pack 4 was made to check for open
	references before tearing down the session.
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
