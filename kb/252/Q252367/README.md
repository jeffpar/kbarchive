---
layout: page
title: "Q252367: Service Pack May Not Install When Run from Remote Console Client"
permalink: /kb/252/Q252367/
---

## Q252367: Service Pack May Not Install When Run from Remote Console Client

	Article: Q252367
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run an unattended Setup of Microsoft Windows NT 4.0 Service Pack 5 (or
	Service Pack 6) from a Remote Console client, Update.exe runs but it may not
	actually update anything. In addition, a "Service Pack Setup Error" error
	message is displayed in Task Manager. Because graphical user interface (GUI)
	programs that are started from a Remote Console client run in an invisible
	desktop, you cannot view the service pack window.
	
	CAUSE
	=====
	
	This behavior occurs because the Remote Console server loads the client?s
	registry hive (Ntuser.dat) and sets all environment variables except
	%USERPROFILE%. The service pack update is unsuccessful if the %USERPROFILE%
	variable does not exist.
	
	
	WORKAROUND
	==========
	
	To work around this behavior, add the %USERPROFILE% environment variable before
	you run an unattended service pack update.
	
	NOTE: It does not matter if the variable points to the wrong folder. You can set
	the path by typing the following commands and running the service pack Setup:
	
	  set userprofile=%systemroot%\profiles\default user
	
	  update.exe /u /q
	
	MORE INFORMATION
	================
	
	Remote Console is included in the Microsoft Windows NT 4.0 Resource Kit. This
	tool enables a client to start a remote shell running on the server. For more
	information about Remote Console, refer to the Microsoft Windows NT 4.0 Resource
	Kit tools documentation.
	
	Additional query words: fail fails
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
