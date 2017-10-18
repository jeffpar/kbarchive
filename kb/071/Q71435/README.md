---
layout: page
title: "Q71435: ALR 386 Microchannel (MPS) and Seagate IDE Drives"
permalink: kb/071/Q71435/
---

## Q71435: ALR 386 Microchannel (MPS) and Seagate IDE Drives

	Article: Q71435
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ALR 386 Microchannel (MPS) computers with Seagate IDE drives cannot run Windows
	in enhanced mode. If you run enhanced mode Windows on an ALR 386 Microchannel
	(MPS) computer with a Seagate IDE hard drive, the following error message is
	displayed repeatedly:
	
	  Device driver specified <x> is invalid or corrupt
	
	where <x> is a virtual driver used by Windows to run in enhanced mode.
	
	Windows also may not run consistently in standard or real modes on ALR
	Microchannel machines with Seagate IDE hard drives. The following error message
	may appear when you try to run any application, even if the system has
	sufficient free memory and hard disk space:
	
	  Insufficient Memory to Run Application
	
	CAUSE
	=====
	
	ALR and Seagate report there is an incompatibility between the ALR BIOS and
	Seagate IDE drives. They are currently working on a solution.
	
	NOTE: ALR does not install Seagate drives in its Microchannel machines, and
	reports no problems when using factory installed Western Digital and Toshiba
	hard drives.
	
	WORKAROUND
	==========
	
	Replace the Seagate IDE hard drive with a Western Digital or Toshiba IDE hard
	drive. ALR also reports compatibility with Quantum and Maxtor IDE drives.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a win30 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
