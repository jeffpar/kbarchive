---
layout: page
title: "Q90080: General Protection Fault in Module FLSYS30.DLL"
permalink: /kb/090/Q90080/
---

## Q90080: General Protection Fault in Module FLSYS30.DLL

	Article: Q90080
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run version 1.x or 2.0 of Bitstream Facelift under Microsoft Windows,
	you may receive a general protection (GP) fault in module FLSYS30.DLL.
	
	CAUSE
	=====
	
	This is a problem with Bitstream's FaceLift font package.
	
	WORKAROUND
	==========
	
	To prevent this error, Bitstream's technical support suggests deleting and then
	reinstalling FaceLift, or upgrading from 1.x to FaceLift 2.0. Versions earlier
	than 2.0 were not designed to run under Windows 3.1.
	
	If FaceLift has been disabled, another possible correction is to remove the
	[Typefaces] section from the WIN.INI file, and replace the DISPLAY.DRV and
	DISPLAY.ORG in the SYSTEM.INI file with an appropriate display driver for the
	system. This prevents Windows-based applications from trying to use FaceLift
	fonts that are no longer present on the system.
	
	MORE INFORMATION
	================
	
	For more information on disabling Bitstream FaceLift, query on the following
	words here in the Microsoft Knowledge Base:
	
	  disable and bitstream and facelift
	
	For more information on FaceLift, call Bitstream technical support.
	
	The Bitstream FaceLift product included here is manufactured a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: gpf 3.10 3.11 GP fault bit stream face lift excel 5.00 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
