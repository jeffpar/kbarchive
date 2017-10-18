---
layout: page
title: "Q134551: Hardware Suspend Button Hangs AcerNote 782 Computer"
permalink: kb/134/Q134551/
---

## Q134551: Hardware Suspend Button Hangs AcerNote 782 Computer

	Article: Q134551
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the Windows 95 Advanced Power Management (APM) features enabled on an
	AcerNote 782 laptop computer, if you press the hardware Suspend button on the
	computer, the computer stops responding (hangs). Turning the computer off and
	then back on does not resolve the problem.
	
	CAUSE
	=====
	
	Windows 95 uses APM version 1.1. The AcerNote 782 computer does not reliably
	support APM 1.1.
	
	RESOLUTION
	==========
	
	To work around this problem, configure Windows 95 to use APM version 1.0. To do
	so, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the System branch, and then
	  double-click Advanced Power Management Support.
	
	3. On the Settings tab, click the Force APM 1.0 Mode check box to select it.
	
	4. Click OK until you return to Control Panel. When you are prompted to restart
	  your computer, do so.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
