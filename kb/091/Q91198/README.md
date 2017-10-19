---
layout: page
title: "Q91198: Device Error Upgrading WFWG Over Windows with CO/Session"
permalink: /kb/091/Q91198/
---

## Q91198: Device Error Upgrading WFWG Over Windows with CO/Session

	Article: Q91198
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading to Windows for Workgroups (WFWG) from Windows version 3.0 or 3.1
	with version 6.x of CO/Session installed, the following error message occurs
	when you try to run Windows for Workgroups in enhanced mode:
	
	  A device has been specified more than once in the SYSTEM.INI file or a device
	  specified in SYSTEM.INI conflicts with a device which is being loaded by an
	  MS-DOS device driver or application. Remove the duplicate entry from the
	  SYSTEM.INI file and restart Windows.
	
	CAUSE
	=====
	
	Both CO/Session and Windows for Workgroups install a virtual communications
	driver (VxD). When Windows for Workgroups upgrades, it places a second VxD in
	the [386Enh] section of the SYSTEM.INI file. Even though these drivers have
	different filenames, Windows for Workgroups sees them as duplicates because they
	are both virtual communications drivers.
	
	CO/Session originally adds:
	
	      DEVICE=CS$VCD.386
	
	Windows for Workgroups upgrade then adds:
	
	      DEVICE=VCD.386
	
	WORKAROUND
	==========
	
	1. Edit the SYSTEM.INI file with any text editor.
	
	2. Locate the [386Enh] section and find lines similar to the following:
	
	        DEVICE=CS$VCD.386
	        DEVICE=VCD.386
	
	  NOTE: The line may read DEVICE=VCD$CS.386
	
	3. To enable the default Windows for Workgroups driver, insert a semicolon (;)
	  at the beginning of the DEVICE=CS$VCD.386 line, as follows:
	
	        ;DEVICE=CS$VCD.386
	
	4. To enable the CO/Session driver, insert a semicolon (;) at the beginning of
	  the DEVICE=VCD.386 line:
	
	        ;DEVICE=VCD.386
	
	
	MORE INFORMATION
	================
	
	For additional information concerning functionality of CO/Session and Windows
	for Workgroups, contact Triton Technologies, Inc.
	
	CO/Session is manufactured by Triton Technologies, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
