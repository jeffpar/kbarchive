---
layout: page
title: "Q280494: Deadlock in Ps.exe"
permalink: kb/280/Q280494/
---

## Q280494: Deadlock in Ps.exe

	Article: Q280494
	Product(s): Microsoft Windows NT
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Ps.exe from Windows Services for UNIX 2.0 in Windows NT 4.0,
	Ps.exe may stop responding (hang) without displaying any output on the screen.
	
	CAUSE
	=====
	
	This problem is caused by a deadlock during thread creation.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Size     File name  
	  -----------------------------------------
	  11/28/2000   16:18   80,384   Wsfures.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
