---
layout: page
title: "Q281121: Ps.exe and Top.exe Commands Stop Responding in Windows NT 4.0"
permalink: /kb/281/Q281121/
---

## Q281121: Ps.exe and Top.exe Commands Stop Responding in Windows NT 4.0

	Article: Q281121
	Product(s): Microsoft Windows NT
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The utilities Ps.exe and Top.exe, which are included as third-party demo
	software with Services for UNIX 2.0, hang or stop responding when you run them
	on a Windows NT 4.0-based computer.
	
	CAUSE
	=====
	
	This problem occurs when these utilities make a function call with an argument
	that is not properly handled by Services for UNIX 2.0 that is running on a
	Windows NT 4.0-based computer.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Ps.exe and Top.exe utilities only on a
	computer that is running Services for UNIX 2.0 in conjunction with Windows 2000.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The MKS Toolkit Demo manufacturer maintains a Web site at the following address:
	
	  http://www.mks.com
	
	
	Additional query words: SFU
	
	======================================================================
	Keywords          : kb3rdparty kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
