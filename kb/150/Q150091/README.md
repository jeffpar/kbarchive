---
layout: page
title: "Q150091: New Features in Compaq SSD Version 1.17c"
permalink: /kb/150/Q150091/
---

## Q150091: New Features in Compaq SSD Version 1.17c

	Article: Q150091
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article details changes and updates contained in version
	1.17c of the Compaq Support Software Diskette (SSD) for Windows NT 3.5x (NT
	SSD). The information presented was taken directly from the NTreadme.hlp file
	found on the SSD.
	
	MORE INFORMATION
	================
	
	The 1.17c release of Compaq's NT SSD contains the following new features and
	maintenance modifications:
	
	  Compaq Standby Recovery Server Option
	
	   - New support for both the SMART-2/E and SMART-2/P Controller. (For
	     more information, refer to the SMART-2 Array Controller User Guide.)
	   - New support for mismatched configurations. (For more information,
	     refer to the Recovery Server Option User Guide.)
	   - New support for shorter timeout values.
	   - New support for ProSignia 300 and 500. (Standby Recovery Server now
	     supports all of the following Compaq systems: ProLiant 4500, ProLiant
	     4000, ProLiant 2000, ProLiant 1500, ProSignia 500, ProSignia 300.)
	
	  Compaq On-Line Recovery Server Option
	
	   - Support for both the SMART-2/E and SMART-2/P Controllers. (For more
	     information, refer to the SMART-2 Array Controller User Guide.)
	   - New support for ProSignia 300 and 500.
	
	  Compaq NetFlex-3 Driver
	
	   - Fixed a potential problem where the NetFlex-3/P and NetFlex-3/E
	     Controllers could exhibit one of the following:
	
	      - Poor performance
	      - List Error Adapter Check (refer to the Event Log)
	      - Acknowledge Error Adapter Check (refer to the Event Log)
	
	    - New support for the Compaq 10T PCI UTP and 10/100TX PCI UTP
	      Controllers.
	
	  Compaq ISA Hardware Abstraction Layer for Windows NT 3.5x
	
	   - Fixed a problem with how the HAL interfaces with the Power Management
	     driver. This problem occurs when you run the Power Management applet
	     from Control Panel and try to change the settings. The Control Panel
	     applet does not work properly and therefore does not update any
	     changes. Some of the symptoms include:
	
	      - Event Log errors
	      - Power Management Service termination
	      - Application termination
	
	     To fix this problem, install the updated HAL from the Compaq SSD for
	     Windows NT 1.17c.
	
	
	Compaq NT SSD is manufactured by Compaq, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt compaq
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
