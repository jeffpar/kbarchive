---
layout: page
title: "Q202922: Dr. Watson When Running Rdisk.exe"
permalink: kb/202/Q202922/
---

## Q202922: Dr. Watson When Running Rdisk.exe

	Article: Q202922
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT Server 4.0 may encounter an Application exception
	and display the following error message:
	
	  App: exe\rdisk.dbg
	  When: x/x/xxxx @ x:x:x.xxx
	  Exception number: c0000094 (divide by zero)
	
	CAUSE
	=====
	
	This problem occurs when Rdisk.exe is run while a registry hive is locked by
	another process or service.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 4.
	
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
