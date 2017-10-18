---
layout: page
title: "Q148948: Windir Environment Variable Lost if Batch File Run from &#42;.PIF"
permalink: kb/148/Q148948/
---

## Q148948: Windir Environment Variable Lost if Batch File Run from &#42;.PIF

	Article: Q148948
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a batch file from a *.PIF file on a Windows NT computer, the
	environment variable "Windir" is not retained in the environment. Some
	applications make use of this variable, and it is normally available in the
	Windows NT environment. If it is not available, the application may fail.
	
	RESOLUTION
	==========
	
	At the beginning of the batch file, place an entry that reads:
	
	  SET windir=%systemroot%
	
	This restores the variable to the environment.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
