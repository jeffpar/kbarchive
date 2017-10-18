---
layout: page
title: "Q85104: Windows 3.1 Upgrade Backs Up WIN.INI and SYSTEM.INI"
permalink: kb/085/Q85104/
---

## Q85104: Windows 3.1 Upgrade Backs Up WIN.INI and SYSTEM.INI

	Article: Q85104
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	When upgrading a Windows 3.0 installation to Microsoft Windows version 3.1,
	the Setup program will back up the existing WIN.INI and SYSTEM.INI files as
	WININI.W31 and SYSINI.W31 before performing the upgrade.
	
	This backup is made every time you run Setup to perform an upgrade, whether
	upgrading from Windows 3.0 or running the upgrade over a current Windows
	3.1 installation. Therefore, if you upgrade a Windows 3.0 installation to
	Windows 3.1, and reinstall Windows 3.1, the WININI.W31 and SYSINI.W31 files
	will reflect the changes made to the WIN.INI and SYSTEM.INI files by the
	first upgrade; they will no longer be the INI files used under Windows 3.0.
	
	Additional query words: 3.10 3.11 backup setup
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
