---
layout: page
title: "Q142061: Preloaded LMHOSTS Entries Overwrite Previous Entries"
permalink: kb/142/Q142061/
---

## Q142061: Preloaded LMHOSTS Entries Overwrite Previous Entries

	Article: Q142061
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your Windows NT computer has multiple Lmhosts entries preloaded for the same
	NetBIOS name and the NetBIOS Name table only contains the last entry in the
	Lmhosts file.
	
	CAUSE
	=====
	
	The LMHosts file is read sequentially from top to bottom. The preloaded entries
	are no exception so if you have two entries for the same NetBIOS name that are
	preloaded in your LMHosts file, the first entry listed in the LMHosts file will
	be overwritten and the second entry will be used.
	
	RESOLUTION
	==========
	
	To resolve this issue you need to edit the Lmhosts file so that it contains only
	one entry for each NetBIOS name.
	
	MORE INFORMATION
	================
	
	When you preload entries with the special keyword #PRE, this causes the entry to
	be preloaded into the name cache. Normally, to speed up the searches, these
	entries should be left for the end of the file because they are preloaded into
	cache and are not accessed later.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
