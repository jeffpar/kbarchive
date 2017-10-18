---
layout: page
title: "Q142046: License Manager Purchase History Lost Promoting BDC to PDC"
permalink: kb/142/Q142046/
---

## Q142046: License Manager Purchase History Lost Promoting BDC to PDC

	Article: Q142046
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you change the role of a Backup domain controller to Primary you may lose
	the Purchase History if the current primary cannot be contacted.
	
	WORKAROUND
	==========
	
	To work around this problem, copy %SystemRoot%\SYSTEM32\CPL.CFG from the former
	PDC to the new PDC and restart License Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.51
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Licensing information for each domain is stored in the CPL.CFG file on the PDC.
	This information is replicated up to the PDC. When a BDC is promoted and the
	License Manager is started, it creates a new CPL.CFG if one does not exist. In
	this case, the purchase history will have to be reentered.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
