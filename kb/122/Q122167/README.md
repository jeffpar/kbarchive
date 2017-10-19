---
layout: page
title: "Q122167: Microsoft RAS Does Not Work on Intel PCMCIA Data/Fax Modem"
permalink: /kb/122/Q122167/
---

## Q122167: Microsoft RAS Does Not Work on Intel PCMCIA Data/Fax Modem

	Article: Q122167
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to run or install Microsoft Remote Access Services (RAS) when the
	Intel CCCOMM.DRV communications driver is running in place of the Windows
	COMM.DRV driver.
	
	CAUSE
	=====
	
	By default, the installation programs for Intel PCMCIA data and fax modems
	disable the Windows COMM.DRV communications driver and install the proprietary
	Intel CCCOMM.DRV driver in its place. ("CCC" in the driver filename stands for
	credit card communications.)
	
	The Intel CCCOMM.DRV driver enhances the performance of Intel cards when you are
	running the Intel fax software supplied with Intel modems. However, CCCOMM.DRV
	is unnecessary for other communications utilities, such as Windows Terminal, and
	it actually conflicts with the operation of Microsoft RAS.
	
	RESOLUTION
	==========
	
	Intel offers an alternative MODEM.INF file that loads the Windows COMM.DRV file
	instead of CCCOMM.DRV when you run Microsoft RAS on your Intel PCMCIA data and
	fax modems.
	
	You can obtain the self-expanding MODINF.EXE file from the Intel bulletin board
	service (BBS) at (503) 645-6275.
	
	After you obtain the updated MODEM.INF file, you should follow its installation
	instructions precisely. Specifically, you must run the fix in your Windows
	SYSTEM subdirectory to replace the original MODEM.INF file. You should pick only
	your particular card from the list, which appears in the RAS Setup Configure
	dialog box. If you select the incorrect Intel modem, or if you try to simply
	replace the CCCOMM.DRV file with COMM.DRV without obtaining the fix from Intel,
	a
	
	  Serial Communications Overflow
	
	error occurs when you try to dial from RAS.
	
	According to Intel technical support, you can find the version number (called the
	"order number") for your modem under the support phone number on the PCMCIA card
	label. If no order number is printed on the label for your Intel data and fax
	14.4K baud modem, you probably have version 6830; in this case, select 6830 in
	the RAS Setup Configuration dialog box.
	
	MORE INFORMATION
	================
	
	For additional assistance or more information, contact Intel technical support
	at (503) 629-7000.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3rdparty 3.10 3.11 data/fax
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
