---
layout: page
title: "Q163213: WebSTONE Benchmark of IIS May Show Poor Results for MP Systems"
permalink: /kb/163/Q163213/
---

## Q163213: WebSTONE Benchmark of IIS May Show Poor Results for MP Systems

	Article: Q163213
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) performance drops dramatically on
	multiprocessor systems when you test with WebSTONE, a popular web benchmark,
	which uses a non-abortive (graceful) close method for TCP sessions.
	
	SPECWEB is another benchmark tool that has shown similar results.
	
	NOTE: This problem does not occur when using regular real-world browsers such as
	Internet Explorer or Netscape Navigator.
	
	CAUSE
	=====
	
	There was a high rate of contention for a TCP resource, which lead to poor
	performance.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated Tcpip.sys to correct the problem. Instructions for
	installing it are available from Microsoft support channels, or directly from
	the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP2/TCPIP-fix
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
