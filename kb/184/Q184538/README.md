---
layout: page
title: "Q184538: Error Message: A Controller for This Domain Could Not Be Found"
permalink: kb/184/Q184538/
---

## Q184538: Error Message: A Controller for This Domain Could Not Be Found

	Article: Q184538
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to add computers to a domain during Windows NT Setup after you
	have installed the updated Lsasrv.dll file (Lsa-fixi.exe or Lsa- ixa.exe) on the
	Primary Domain Controller (PDC), you may receive the following error message:
	
	  A controller for this domain could not be found.
	
	CAUSE
	=====
	
	The behavior occurs because the updated Lsasrv.dll file (Lsa-fixi.exe or
	Lsa-fixa.exe) implements the new registry item called RestrictAnonymous that
	restricts the use of Null NamedPipes. Windows NT Setup uses a Null NamedPipe for
	the connection to the server to verify the domain. The Null NamedPipe is
	returned with access denied because RestrictAnonymous has been used on the PDC.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	For more information about the updated Lsasrv.dll file (Lsa-fixi.exe or
	Lsa-fixa.exe), please see the following article in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q154087
	  TITLE : Access Violation in LSASS.EXE Due to Incorrect Buffer Size
	======================================================================
	Keywords          : kberrmsg kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
