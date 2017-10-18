---
layout: page
title: "Q159268: How To Create VFP Setup Disks for Both Win3.1 Chinese Versions"
permalink: kb/159/Q159268/
---

## Q159268: How To Create VFP Setup Disks for Both Win3.1 Chinese Versions

	Article: Q159268
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Setup Wizard in Visual FoxPro 3.0b Traditional Chinese version (TC version)
	or Simplified Chinese version (SC version) supports file names longer than eight
	characters on 32-bit platforms. However, it does not support Chinese Windows 3.1
	TC version or Windows 3.2 SC version since Windows 3.1 does not support long
	file names. Using the Setup Wizard in Visual FoxPro 3.0b, the application cannot
	be installed on a Windows 3.1/3.2 platform. If the application needs to be
	installed on a Windows 3.1/3.2 platform, perform the following steps:
	
	1. Copy the following three files from the ADD_IN folder on your CD to the
	  following path:
	
	     Wzsetup.app => \Vfp\Wizards
	     Compress.dbf => \Vfp\Distrib.src
	     Acmset16.exe => \Vfp\Distrib.src\Setup\Setup16
	
	2. Completely remove the \Vfp\Distrib folder.
	
	3. If the distribution disks have been created, completely remove the
	  \Compress\Diskimage or \Netsetup folder and delete the Dkcontrl.dbf,
	  Dkcontrl.cdx, and Wzsetup.ini files from the distribution tree folder
	  (Application folder).
	
	4. Run the Setup Wizard to re-generate the distribution files under the \Distrib
	  folder.
	
	Additional query words: vfoxwin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
