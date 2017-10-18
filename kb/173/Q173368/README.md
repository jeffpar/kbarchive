---
layout: page
title: "Q173368: ATI Mach64GX/CT Chipsets May Hang System during Display Test"
permalink: kb/173/Q173368/
---

## Q173368: ATI Mach64GX/CT Chipsets May Hang System during Display Test

	Article: Q173368
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT setup may stop responding (hang) while performing the video adapter
	test on a system containing an ATI 2 MB or 4 MB SGRAM video card that uses the
	ATI Mach64 GX/CT chipset. The system will hang on the display adapter test with
	a black screen and the only way to continue setup is to reset the system.
	
	Some Gateway2000 G6-200 systems ship with these display adapters installed.
	
	CAUSE
	=====
	
	Windows NT setup detects the card as an ATI-compatible adapter and installs a
	video driver which is incompatible with this card.
	
	RESOLUTION
	==========
	
	During Windows NT setup, click Cancel when you are asked to perform the video
	test, then click Cancel again to close the Display properties page. This will
	force setup to load the Standard VGA driver. After Windows NT is completely
	installed, you can then load the proper driver from ATI by going to their Web
	site and downloading the Windows NT drivers for the chipset.
	
	
	-OR-
	
	If installing Windows NT on a Gateway computer, use the display driver located on
	the Gateway system CD in the Winntdrv\Display\Atigt\Nt40\Ati directory.
	
	In the Control Panel Display tool, click the Settings tab, click display type,
	click Have Disk, then select the "ATI Graphics expression PCI adapter" driver.
	
	MORE INFORMATION
	================
	
	For information about how to contact ATI Technologies, query in the Knowledge
	Base for one of the following articles:
	
	ARTICLE-ID: Q65416
	TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	ARTICLE-ID: Q60781
	TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	ARTICLE-ID: Q60782
	TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
