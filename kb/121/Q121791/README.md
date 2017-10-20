---
layout: page
title: "Q121791: Settings for 3C509 Not Detected Correctly"
permalink: /kb/121/Q121791/
---

## Q121791: Settings for 3C509 Not Detected Correctly

{% raw %}

	Article: Q121791
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbsetup kbfasttip
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade or perform a new installation of Windows NT Workstation and
	Windows NT Server version 3.5 with a 3Com EtherLink III (3C509) adapter, Setup
	may not correctly detect the settings for the network card. If you continue with
	the installation and do not verify the settings, the following error message may
	appear when you start your computer:
	
	  At least one service or driver failed during system startup.
	
	Event ID: 5003
	Source: ELNK31
	Type: Error
	Description: Could not find an adapter.
	
	The automatic detection of network adapters in Windows NT may alter the
	non-volatile memory (NV RAM) on the 3Com EtherLink III network adapter, which
	the 3Com network adapter Setup utility cannot correct in interactive mode.
	
	WORKAROUND
	==========
	
	To work around this problem, the following is recommended:
	
	1. In Windows NT version 3.5, remove all installed network software and the
	  network adapter card driver.
	
	2. Boot to MS-DOS and use the 3Com EtherDisk utility version 3.0 (3C5X9CFG.EXE)
	  by typing the following at the MS-DOS command prompt:
	
	  3c5x9cfg configure /xcvr: X
	
	  where X is TP, COAX or AUI. For additional valid configuration commands, type
	  the following at the MS-DOS command prompt:
	
	  3c5x9cfg configure /?
	
	3. In Windows NT version 3.5, manually select the network adapter driver. Do not
	  select the "autodetect" function.
	
	4. Manually configure the network card with any setting (for IRQ, Base I/O
	  Address and Tranceiver type). Then re-configure the network card with correct
	  settings.
	
	5. Restart your computer.
	
	The EtherLink III is manufactured by 3Com Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
