---
layout: page
title: "Q189943: Performance Counters Become Corrupted After BackOffice 4.0 Setup"
permalink: /kb/189/Q189943/
---

## Q189943: Performance Counters Become Corrupted After BackOffice 4.0 Setup

{% raw %}

	Article: Q189943
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft BackOffice on an existing Windows NT 4.0 Server, you
	may experience one or more of the following symptoms:
	
	- Performance Counter objects and/or their descriptions may disappear when
	  viewed with Performance Monitor. This may occur after BackOffice is
	  installed.
	
	  -or-
	
	- Error messages from Lodcrt.exe may occur while installing BackOffice.
	
	  NOTE: This is usually more evident on non-US versions of Windows NT Server.
	
	CAUSE
	=====
	
	These problems are caused by a corruption in the performance counter
	descriptions in the registry. The corruption is caused by one or more server
	applications in BackOffice. This is normally corrected during BackOffice setup.
	However, some non-US versions of BackOffice do not handle this correctly and the
	corruption is not repaired.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following unsupported fix from the following
	Internet site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-unsup-ed/fixes/nt40/fixcounter/
	
	After installing this fix, if an error message from Lodctr.exe occurs during the
	installation of BackOffice, reinstall BackOffice after installing this fix. If
	corruption is encountered after the installation of BackOffice, install this fix
	to correct it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in BackOffice version 4.0. An
	unsupported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem.
	
	Additional query words: bos
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
