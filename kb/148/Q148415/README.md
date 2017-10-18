---
layout: page
title: "Q148415: Upgrading From Visual FoxPro 3.0 to Visual FoxPro 3.0b"
permalink: kb/148/Q148415/
---

## Q148415: Upgrading From Visual FoxPro 3.0 to Visual FoxPro 3.0b

	Article: Q148415
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Visual FoxPro 3.0b on a system that currently has a copy of
	Visual FoxPro 3.0 installed, do not install Visual FoxPro 3.0b on top of the
	existing Visual FoxPro 3.0 installation. Remove Visual FoxPro 3.0 first before
	installing Visual FoxPro 3.0b.
	
	
	MORE INFORMATION
	================
	
	Steps to Upgrade from Visual FoxPro 3.0 to Visual FoxPro 3.0b
	-------------------------------------------------------------
	
	1. Run Visual FoxPro 3.0 Setup, and choose the Remove All option. To run Visual
	  FoxPro 3.0 setup, click the Visual FoxPro setup icon in the Visual FoxPro
	  program group, or run setup from the Visual FoxPro CD-ROM or from disk one of
	  the Visual FoxPro setup disks.
	
	2. If Visual FoxPro 3.0 was the professional edition, delete the \Vfp\Distrib
	  subdirectory.
	
	3. If Visual FoxPro 3.0 was the professional edition, delete all occurrences of
	  the following files:
	
	  Dkcontrl.dbf
	  Dkcontrl.cdx
	  Wzsetup.ini
	
	Now, you can safely run Visual FoxPro 3.0b setup. Visual FoxPro 3.0b can be
	installed in the same directory as Visual FoxPro 3.0 or in a new directory.
	
	Note for Professional Edition Users
	-----------------------------------
	
	The name of the extended support library file (Vfp300.esl) is the same for both
	Visual FoxPro 3.0 and Visual FoxPro 3.0b. To avoid any possible confusion, there
	should be only one version of the ESL file located on your system, and it should
	be the Visual FoxPro 3.0b version. All of the .exe files that were built in
	Visual FoxPro 3.0 should be rebuilt in Visual FoxPro 3.0b before you run them.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	
