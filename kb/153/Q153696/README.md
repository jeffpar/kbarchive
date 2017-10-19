---
layout: page
title: "Q153696: Partners Have Different Expiration Times for WINS Entries"
permalink: /kb/153/Q153696/
---

## Q153696: Partners Have Different Expiration Times for WINS Entries

	Article: Q153696
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
	
	SUMMARY
	=======
	
	The expiration date of a Windows Internet Naming Service (WINS) database entry
	is different for partners.
	
	MORE INFORMATION
	================
	
	When a Microsoft WINS enabled client registers its name in its local database,
	the expiration date for the entry is calculated by adding the current clock time
	and WINS configuration renewal time. The default is 96 hours, or four days, for
	Windows NT 3.51; it is 144 hours, or six days, for Windows NT 4.0.
	
	Once this entry replicates to a partner, the entry's expiration date is then
	recalculated on the partner. The expiration date used on a replicated entry is
	calculated by adding the current clock time on the partner server to the WINS
	configuration verify interval on the partner server (the default is 576 hours,
	or 24 days).
	
	Additional query words: prodnt configure timeout expire deleted
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
