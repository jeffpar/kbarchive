---
layout: page
title: "Q236316: Performance Improvement for Redirector/Server Connections"
permalink: kb/236/Q236316/
---

## Q236316: Performance Improvement for Redirector/Server Connections

	Article: Q236316
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs that perform numerous small file operations, such as locking and
	unlocking files or writing small records, may experience slow performance.
	
	CAUSE
	=====
	
	This problem occurs because the combination of "Nagling" (a TCP concept
	described in the Microsoft Knowledge Base and white papers) and TCP delayed
	acknowledgment can cause unnecessary network delay when numerous small file
	operations are outstanding between a client and server. More details on Nagling
	are available at the following Microsoft Web site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/TCPIMP2.EXE
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	NOTE: The optimization that is described in this article may lead to a
	performance decrease in some scenarios. This has been observed when a computer
	with the fix installed accesses a server on the network that does not have the
	fix. When the client performs many file locks and small reads, performance may
	be slower than between two computers without the fix. In this case, Microsoft
	recommends deploying SP6a on all the computers. If deploying SP6a is not an
	option, the following fix is still available that incorporates the change as a
	post-SP5 hotfix.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size      File name   Platform
	  --------------------------------------------------
	  06/28/99  01:10p   123,120   Netbt.sys   x86
	  06/28/99  01:09p   224,144   Netbt.sys   Alpha
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	The Netbt.sys driver has been modified to disable nagling in the TCP stack for
	NetBT connections.
	
	Additional query words: nagle tcpip netbt
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
