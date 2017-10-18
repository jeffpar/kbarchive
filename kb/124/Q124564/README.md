---
layout: page
title: "Q124564: MIDL Compiler Wraps the Operation Number After 255"
permalink: kb/124/Q124564/
---

## Q124564: MIDL Compiler Wraps the Operation Number After 255

	Article: Q124564
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The RPC MIDL compiler (version 2.00.72) that ships with the Win 32 SDK appears
	to only keep 8 bits of "Operation number" when it generates the stub code. This
	creates a problem if you define more than 256 remote procedures. When operation
	256 is to be called, operation 0 is really called instead because the call
	number created by the MIDL compiler wrapped at 255.
	
	WORKAROUND
	==========
	
	If you have more than 256 Remote Procedures defined, manually edit the output
	file and correct the operation number. You can do this by examining the stub
	code created by the MIDL compiler. The 4th parameter to the
	NdrClientInitializeNew() wraps around after 255; edit this for each successive
	procedure in the stub and increment it correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
