---
layout: page
title: "Q188832: Intel VTune 3.0 Fails with Windows NT 4.0 Option Pack"
permalink: /kb/188/Q188832/
---

## Q188832: Intel VTune 3.0 Fails with Windows NT 4.0 Option Pack

	Article: Q188832
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 20-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the OS Chronologies option in VTune 3.0 is used on Windows NT Server 4.0
	with the Windows NT 4.0 Option Pack installed, VTune stops responding or fails.
	
	The problem is with W3ctrs.dll, version 4.02.0622, from the Windows NT Option
	Pack.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/ctr-fix/
	
	For more information on other issues fixed by this hotfix, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q185349 : Problems Remotely Accessing W3 or FTP Perfmon Counters Perfmon
	  Counters
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT 4.0 Option Pack.
	This problem was first corrected in Windows NT 4.0 Service Pack 4.0 and Windows
	NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: sp hot fix qfe hang hangs crash crashes
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis400 kbWinNT400OptionPack
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
