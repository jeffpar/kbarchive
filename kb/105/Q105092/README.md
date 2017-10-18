---
layout: page
title: "Q105092: No Default Printer Selection in Printer Pool"
permalink: kb/105/Q105092/
---

## Q105092: No Default Printer Selection in Printer Pool

	Article: Q105092
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You cannot select a default printer when you set up a printer pool.
	
	For example, suppose you want to set a local printer on LPT1 as the printer to
	which the first job into the printer pool will be printed. To do this, you
	specify LPT1 in the Print To option of the Printer Properties dialog box in
	Print Manager. Then you choose two other printer ports in the Print To
	Additional Ports option of the Printer Details dialog box. Accept the choices,
	and close the Printer Properties dialog box. When you reopen Printer Properties,
	LPT1 will no longer be the selected printer in the Print To option. You will not
	be able to direct the first print job to LPT1 by default.
	
	CAUSE
	=====
	
	No functionality was built-in to the Windows NT Print Manager that allows you to
	select a default or primary port in the printer pool. The Windows NT Print
	Manager selects printer ports according its own internal algorithm. Print jobs
	are sent to these ports on a rotational basis depending on how many print jobs
	are queued in the print spooler.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a printer in the Print Manager.
	
	2. Select Printer Properties and assign LPT1 to the Print To port.
	
	3. Choose the Details option.
	
	4. Choose at least two other ports in the Print to Additional Ports option of
	  the Printer Details dialog box.
	
	5. Accept these setting and close the Printer Properties dialog box.
	
	6. When you reopen Printer Properties, LPT1 no longer appears in the Print To
	  option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1 and 3.5x.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
