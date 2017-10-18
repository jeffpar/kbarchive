---
layout: page
title: "Q155508: Imagehlp.dll UnDecorateSymbolName Does Not Return Correct Name"
permalink: kb/155/Q155508/
---

## Q155508: Imagehlp.dll UnDecorateSymbolName Does Not Return Correct Name

	Article: Q155508
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you supply a decorated template name when calling UnDecorateSymbolName, it
	may return an empty string (a string with just a NULL in it) rather than the
	correctly undecorated symbol name.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem has been corrected in the latest Microsoft Windows NT U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
