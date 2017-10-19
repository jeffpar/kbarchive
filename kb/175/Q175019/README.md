---
layout: page
title: "Q175019: Err Msg: The User Must Change His Password Before He Logs on..."
permalink: /kb/175/Q175019/
---

## Q175019: Err Msg: The User Must Change His Password Before He Logs on...

	Article: Q175019
	Product(s): Microsoft Windows NT
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 3.11 
	- Microsoft Windows 95 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a network resource on the domain, you may receive the
	following error message:
	
	  \\<servername> is not accessible
	
	  The user must change his password before he logs on the first time.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions exist:
	
	- An administrator has enabled "User must change password at next logon" option
	  in your user account properties on the domain controller while you are logged
	  on to the domain.
	
	- The session between your computer and the domain controller has terminated.
	  This can occur if your session has been inactive for a long period of time
	  causing the protocol's timeout period to expire.
	
	RESOLUTION
	==========
	
	To resolve this issue, log off your computer, log back on, and then change your
	password.
	
	To prevent this issue from occurring, the administrator should be certain that
	the user is logged off before setting the policy that requires the user to
	change the password at the next logon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5, 3.51 and
	4.0.
	
	MORE INFORMATION
	================
	
	If you are inactive on the network for the protocol's timeout period causing the
	session between your computer and the domain controller to be terminated, and
	then you attempt to access a network resource on the domain, you must be
	authenticated by the domain controller again. When this occurs, Windows NT does
	not differentiate between a network connection and a network logon. If the "User
	must change password at next logon" option has been enabled, you cannot to
	connect to the network resource until you log off, log back on, and then change
	your password.
	
	Additional query words: 3.00 prodnt security nt40 user manager
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin3xSearch kbWin95search kbZNotKeyword kbZNotKeyword3 kbNetworkClientSearch kbWin311 kbNetworkClient300DOS
	Version           : 1.00
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
