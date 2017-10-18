---
layout: page
title: "Q175809: How to Prevent the Password Prompt When Using Rsh.exe"
permalink: kb/175/Q175809/
---

## Q175809: How to Prevent the Password Prompt When Using Rsh.exe

	Article: Q175809
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Rsh.exe utility to remotely execute commands on a UNIX server,
	you are prompted for a password for authentication.
	
	MORE INFORMATION
	================
	
	To work around this issue, you can prevent the remote shell (Rsh.exe) utility
	from prompting for a password by configuring the Hosts.equiv file on the UNIX
	server with the IP address and host name of the computer from which you are
	running Rsh.exe.
	
	See Hosts.equiv help on the UNIX host for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
