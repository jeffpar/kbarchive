---
layout: page
title: "Q127943: Mac Client Can't Logon Because Password Has Expired"
permalink: /kb/127/Q127943/
---

## Q127943: Mac Client Can't Logon Because Password Has Expired

	Article: Q127943
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to automount or connect to an Macintosh accessible volume using an
	alias from a Macintosh client, the following error message appears when the
	Macintosh client tries to establish a connection:
	
	  The alias <alias name> could not be opened, because the shared disk
	  <name of the shared volume> could not be found on the network.
	
	This error message does not help determine the true cause of the problem.
	
	CAUSE
	=====
	
	This problem can occur when the Macintosh client's user account password has
	expired on the Windows NT domain, or when the account has been disabled through
	User Manager.
	
	To determine if an expired Macintosh user account password is the cause of this
	problem, attempt to manually connect to the Windows NT Macintosh accessible
	volume through Chooser. If the password is expired the following error message
	appears:
	
	  Your password has expired on the server.
	
	MORE INFORMATION
	================
	
	Windows NT Server is sending the same error code in both cases though the
	Macintosh client is not displaying the same error message in both cases.
	
	STATUS
	======
	
	To correct this problem, update the Macintosh client's user account password in
	Windows NT User Manager for Domains.
	
	The Macintosh computer and AppleTalk protocol are manufactured by Apple
	Computers, Inc., a vendor independent of Microsoft; we make no warranty, implied
	or otherwise, regarding this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
