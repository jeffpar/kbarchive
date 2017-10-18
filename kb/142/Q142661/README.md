---
layout: page
title: "Q142661: Cacls.exe May Report Errors when Handling Extended Characters"
permalink: kb/142/Q142661/
---

## Q142661: Cacls.exe May Report Errors when Handling Extended Characters

	Article: Q142661
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to use Cacls.exe to modify or view the access control list (ACL)
	for a file whose filename contains extended characters, Cacls.exe may report the
	following error message:
	
	  The system cannot find the file specified.
	
	When you try to use Cacls.exe to add a new file ACL, or modify an existing file
	ACL, for a user or group name that contains extended characters, Cacls.exe may
	report the following error message:
	
	  No mapping between account names and security IDs was done.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt ntfs permissions
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
