---
layout: page
title: "Q297421: &quot;Liccheck.exe DLL Initialization Failed&quot; ARCserve Error Message"
permalink: /kb/297/Q297421/
---

## Q297421: &quot;Liccheck.exe DLL Initialization Failed&quot; ARCserve Error Message

	Article: Q297421
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Computer Associates ARCserve 6.6 Standard Version, you may
	receive one or both of the following error messages:
	
	  Liccheck.exe - DLL Initialization Failed
	  Initialization of dynamic link library c:\winnt\system32\cstool.dll failed.
	  This process is terminating abnormally.
	
	  Liccheck.exe - DLL Initialization Failed
	  Initialization of dynamic link library c:\winnt\system32\wstwsp.dll failed.
	  This process is terminating abnormally.
	
	The error message typically appears within one or two days after you install
	ARCserve, and then the performance of the computer seems to degrade.
	
	CAUSE
	=====
	
	This behavior can occur if the ARCserve Discovery Service component Liccheck.exe
	causes a memory leak.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Computer Associates for more information.
	
	WORKAROUND
	==========
	
	As a temporary workaround, you can keep this process from running by turning off
	the ARCserveIT Discovery Agent Service.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact Computer Associates, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
