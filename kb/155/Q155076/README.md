---
layout: page
title: "Q155076: Only Admins May Log in After Applying C2 Security from Reskit"
permalink: /kb/155/Q155076/
---

## Q155076: Only Admins May Log in After Applying C2 Security from Reskit

	Article: Q155076
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply C2 security from the Windows NT Resource Kit, only user accounts
	that are members of the administrator's group are allowed to log on. Others
	receive one of the following messages:
	
	  You are not allowed to logon from this workstation.
	
	  -or-
	
	  Your account is configured to prevent you from using this workstation.
	
	CAUSE
	=====
	
	The C2 configuration application is configured with CrashOnAuditFail set to 2.
	This value allows only administrators to log on to a server.
	
	NOTE: An alternate error
	
	  Access Denied: an extended error has occurred
	
	may occur when attempting to connect to a file share on a server. This may also
	indicate that CrashOnAuditFail is set to a value of 0x2.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa
	
	2. Look for the value CrashOnAuditFail. If the value is set to 2, follow
	  instructions outlined in Q140058 to change this value.
	
	
	Additional query words: prodnt reskit c2 security logon login
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
