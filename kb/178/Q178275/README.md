---
layout: page
title: "Q178275: PRB: Unattended Installation Using AGP Video Cards"
permalink: /kb/178/Q178275/
---

## Q178275: PRB: Unattended Installation Using AGP Video Cards

{% raw %}

	Article: Q178275
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform an unattended installation on a computer that uses Advanced
	Graphic Port (AGP) technology, your system will restart with one of the
	following error messages:
	
	  Invalid Display Settings
	
	  The currently selected display resolution is invalid.
	
	  The default resolution has been temporarily used by the system.
	
	  Please use the Display option in the Windows NT Control Panel to select your
	  preferred display resolution.
	
	One of these messages is displayed even though a valid resolution supported by
	the adapter has been selected.
	
	CAUSE
	=====
	
	On systems with a PCI bridge, Windows NT Service Pack 3 is required prior to
	installing AGP video drivers. Because this is an unattended installation using
	AGP drivers, the video drivers are installed prior to SP3 being installed. For
	additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q174567 AGP Video Support for Windows NT 3.51 and 4.0
	
	RESOLUTION
	==========
	
	The problem can be resolved by using the HAL from SP3 during the unattended
	installation. Modifications were made to the HAL in SP3 to accommodate AGP
	technology.
	
	You should identify which specific HAL the computer requires and only copy those
	files. You can copy all of the HAL files to the distribution server, but it is
	not recommended.
	
	1. On the distribution share containing the source files, rename the original
	  HAL to HAL.ORG
	
	2. Copy the desired HAL from the Windows NT Service Pack 3 compact disc to the
	  distribution share containing the source files.
	
	3. Continue with the unattended installation.
	
	Example of HALs to be installed, based on computer type.
	
	  486c_up       = hal486c.dll
	  astmf_mp      = halast.dll
	  cbus2_mp      = halcbus.dll
	  cbusmc_mp     = halcbusm.dll
	  e_isa_up      = hal.dll
	  mca_up        = halmca.dll
	  mps_up        = halapic.dll
	  mps_mp        = halmps.dll
	  mps_mca_mp    = halmpsm.dll
	  ncr3x_mp      = halncr.dll
	  oli5030_mp    = haloli.dll
	  syspro_mp     = halsp.dll
	  wyse7000_mp   = halwyse7.dll
	
	NOTE: In order to ensure proper functionality of the computer, apply Service Pack
	3 (SP3) either during or after the unattended install is completed. Simply
	copying the Service Pack 3 files in this article does not constitute the
	application of Service Pack 3. Service Pack 3 can be applied during an
	unattended Setup using the /e command-line switch with the WINNT command (for
	additional information about the /e command-line switch, please see the NT
	Deployment Guide), or it can be manually applied after the computer is starts
	for the first time.
	
	Additional query words: Unattended Setup Install
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
