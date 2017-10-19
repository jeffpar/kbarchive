---
layout: page
title: "Q137695: Proteon 1390 Fails to Initialize During Installation"
permalink: /kb/137/Q137695/
---

## Q137695: Proteon 1390 Fails to Initialize During Installation

	Article: Q137695
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Setup on your computer with a Proteon 1390 Token Ring
	adapter installed, errors appear during the initialization of the Proteon 1390
	Token Ring adapter and the adapter initialization fails.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- If you do not plan to set up Windows NT Server as a backup domain controller
	  (BDC):
	
	  Ignore the errors during Setup and continue with the installation.
	  The driver functions properly after you reboot your computer in spite of the
	  errors during Setup.
	
	  -or-
	
	- If you plan to set up Windows NT as a BDC:
	
	  It is necessary that your adapter initializes during Setup so it can contact
	  the primary domain controller (PDC) for security purposes. For this reason,
	  temporarily install another supported Token Ring adapter before you run
	  Windows NT Setup. After Windows NT is installed, replace the existing adapter
	  and driver with the Proteon 1390 adapter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
