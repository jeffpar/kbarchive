---
layout: page
title: "Q159722: Err Msg: The User Has Not Been Granted the Requested Logon..."
permalink: kb/159/Q159722/
---

## Q159722: Err Msg: The User Has Not Been Granted the Requested Logon...

	Article: Q159722
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access an administrative network share (for example, C$, D$,
	etc..) you may receive the following error message:
	
	  The user has not been granted the requested logon type at this computer.
	
	This behavior may occur even if you are logged on as a Domain Administrator on
	any server in the domain.
	
	CAUSE
	=====
	
	This behavior can occur if the Domain Administrators group has been removed from
	the Local Administrators group on the validating domain controller.
	
	RESOLUTION
	==========
	
	To resolve this issue, at the primary domain controller, add the administrator
	account to the local administrators group, and then synchronize the domain.
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	
