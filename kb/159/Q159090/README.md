---
layout: page
title: "Q159090: Delphi 2.00 and 2.01 Users Encounter Error 998"
permalink: kb/159/Q159090/
---

## Q159090: Delphi 2.00 and 2.01 Users Encounter Error 998

	Article: Q159090
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Delphi 2.00 and 2.01, users encounter error 998 every time they rebuild the
	Delphi component library. The same error is encountered frequently when the user
	runs an application, terminates the application, recompiles the application and
	then runs it once more. This issue also impacts Borland C++ 5.00 and 5.01.
	
	CAUSE
	=====
	
	The write-back disk cache is not cleared after the first initialization has
	completed.
	
	WORKAROUND
	==========
	
	This problem has been fixed in Windows NT 4.0 Service Pack 2 and later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: compiler prodnt
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
