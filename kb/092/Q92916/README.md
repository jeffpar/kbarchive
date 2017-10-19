---
layout: page
title: "Q92916: UB Cards Not Initialized If Memory Window Is Not Excluded"
permalink: /kb/092/Q92916/
---

## Q92916: UB Cards Not Initialized If Memory Window Is Not Excluded

	Article: Q92916
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Ungermann-Bass Ethernet cards use a shared-memory window in the upper memory
	area (UMA). The Network Driver Interface Standard (NDIS) media access control
	(MAC) driver attempts to initialize the card when it loads. During this process,
	it initializes the shared-memory window; however, if a memory manager has been
	set up to use this memory window, initialization fails.
	
	If the memory window has not been excluded from an upper memory manager (such as
	EMM386), error messages similar to those below may be displayed when the media
	access control driver loads:
	
	  MS$NIUPCTP: Initialization started.
	
	  MS$NIUPCTP: The NIU failed its diagnostic tests. Please check the network
	  connection, configuration parameters, and hardware installation.
	
	  MS$NIUPCTP: Initialization failed.
	
	When NET.EXE attempts to bind, you also receive the following error message:
	
	  Error 5733: The protocol manager has reported an incomplete binding.
	
	WORKAROUND
	==========
	
	To correct this problem, exclude the shared-memory window with your memory
	manager. Using EMM386.EXE, exclude the memory address for the shared-memory
	window by specifying the X= parameter on the device line in the CONFIG.SYS file
	for EMM386. For example, for the Ungermann-Bass NIUpc with the shared-memory
	windows configured for D800-DFFF, you would use the following:
	
	       DEVICE=C:\WINDOWS\EMM386.EXE NOEMS X=D800-DFFF
	
	NOTE: The Ungermann-Bass NIUpc/EOTP is software configurable for A000, A800,
	B000, B800, C000, C800, D000, D800, E000, E800. The most common default
	configurations are D800-DFFF or C800-CFFF.
	
	The Ungermann-Bass products included here are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 3.11 MAC
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
