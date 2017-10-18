---
layout: page
title: "Q132149: Logon Scripts Run From Wrong Server"
permalink: kb/132/Q132149/
---

## Q132149: Logon Scripts Run From Wrong Server

	Article: Q132149
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a backup domain controller (BDC) or primary domain controller
	(PDC) with an account from a trusted domain, and the user accounts profile calls
	for Windows NT to run a login script, Windows NT searches for the login script
	on both computers in the %SYSTEMROOT%\SYSTEM32\REPL\IMPORT\SCRIPTS
	subdirectory.
	
	For example, the account resides in the Master domain and the you are logging on
	from a primary domain controller (PDC) or backup domain controller (BDC) in the
	Resource domain. The user account profile in the Master domain calls for LOG.BAT
	to be run. If the file is present, the PDC or BDC in Resource domain runs the
	script correctly. However, if you are logging on from a domain controller (DC)
	and the LOG.BAT file is not in the %SYSTEMROOT%\SYSTEM32\REPL\IMPORT\SCRIPTS
	subdirectory on the validating PDC in Master domain, and the profile calls for
	LOG.BAT to be run, Windows NT searches for the file in the trusting domain.
	
	This causes problems when you use the complete trust model and all logon scripts
	have the same name, but have different contents in each domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows NT version 3.5. We are
	researching this problem and will post any new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
