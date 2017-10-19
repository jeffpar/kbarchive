---
layout: page
title: "Q302166: Error Message When an Account Operator Creates a Home Path"
permalink: /kb/302/Q302166/
---

## Q302166: Error Message When an Account Operator Creates a Home Path

	Article: Q302166
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An account operator that is using either a Terminal Server or the latest version
	of User Manager from the Windows NT 4.0 Server Resource Kit to manage user
	accounts may receive the following error message:
	
	  The Home Directory. \\<UNCPATH>, <USERNAME> could not be created.
	  The user Account has been updated. You must create the Home Directory
	  manually
	
	Note that this symptom occurs when you let the operating system create the home
	directory for users.
	
	CAUSE
	=====
	
	Because the initial permissions are set to only allow the administrators and the
	user account full control when user manager creates the home directory, the user
	who is changing the home path does not have permissions to create the Windows
	and Windows\System folders.
	
	RESOLUTION
	==========
	
	To work around this problem, use any of the following methods.
	
	- Use the version of Usrmgr.exe from a Windows NT 4.0 Server-based computer,
	  but note that administrators cannot then set WTS-specific features.
	
	- Use Usrmgr.exe from a domain controller.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If the account operator has local administrator rights on the server that hosts
	the home directory, the error message is not generated. Either way it still
	creates the user home directory, but with local administrators rights, the home
	directory has the Windows and Windows\System folders.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP5,4.0 SP6
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
