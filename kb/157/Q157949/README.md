---
layout: page
title: "Q157949: Slow Keyboard Response on Some Windows 95-Based Computers"
permalink: /kb/157/Q157949/
---

## Q157949: Slow Keyboard Response on Some Windows 95-Based Computers

{% raw %}

	Article: Q157949
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw kbpolicy win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience slow keyboard response on some Windows 95-based computers.
	When you are typing, characters may not appear on the screen for 3-4 seconds.
	The problem persists until you restart your computer.
	
	CAUSE
	=====
	
	This issue occurs due to a timeout set by Vpic.vxd (the Programmable Interrupt
	Controller virtual device) that is being canceled by Lpt.vxd.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This problem is often observed with Microsoft Office programs.
	
	Computer models with which this problem has been observed include:
	
	- Compaq Deskpro/Prolinea Series 172029-00x
	
	- Compaq Prolinea 5100e (Compaq Designed ASIC)
	
	- Compaq Prolinea E Series FDC37C665GT (SMC Super I/O Chip)
	
	- Computers with Jade P133 motherboards
	
	This problem has also been reported to occur on certain Toshiba computers that
	have the ECP port enabled. The problem has been reported on the following
	computers:
	
	- Toshiba T2450CT
	
	- Toshiba T400CD
	
	- Toshiba T430CD
	
	- Toshiba Tecra 700 CT
	
	This problem has also been reported to occur if the port was configured for high
	speed bi-directional operation in the CMOS. You may be able to resolve this
	problem by setting the port to "normal" in the CMOS.
	
	
	Additional query words: word95 word97 xl95 xl97
	
	======================================================================
	Keywords          : kbhw kbpolicy win95 kbHardware kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
