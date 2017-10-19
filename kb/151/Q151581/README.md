---
layout: page
title: "Q151581: Cannot Upgrade Windows 95 to Windows NT Workstation 4.0"
permalink: /kb/151/Q151581/
---

## Q151581: Cannot Upgrade Windows 95 to Windows NT Workstation 4.0

	Article: Q151581
	Product(s): Microsoft Windows NT
	Version(s): 4.0 95
	Operating System(s): 
	Keyword(s): kbsetupkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You can automatically upgrade to Windows NT Workstation version 4.0 from MS-DOS
	version 6.x, Windows or Windows for Workgroups version 3.x, or Windows NT
	Workstation version 3.x. If you install Windows NT Workstation 4.0 in the same
	folder as your existing installation of Windows or Windows for Workgroups 3.x,
	your existing installation of Windows is preserved so you can dual-boot between
	both versions.
	
	However, you cannot upgrade to Windows NT Workstation 4.0 from Windows 95. In
	addition, you cannot install Windows NT Workstation 4.0 in the same folder as an
	existing Windows 95 installation. To install Windows NT Workstation 4.0 on a
	computer running Windows 95, you must install it in a new folder. After doing
	so, you can dual-boot Windows 95 and Windows NT, but you must reinstall your
	Windows-based programs for them to function properly in Windows NT. In addition,
	any custom settings that are present in Windows 95 will not be present in
	Windows NT.
	
	The inability to upgrade an existing Windows 95 installation is a known
	limitation of Windows NT Workstation 4.0 that will be addressed in a later
	version of Windows NT Workstation.
	
	MORE INFORMATION
	================
	
	There are two primary reasons that Windows NT Workstation 4.0 cannot upgrade
	Windows 95:
	
	- The registry structure is not identical in Windows 95 and Windows NT
	  Workstation 4.0. This causes many programs to store settings in one location
	  when you install the program in Windows 95 and store the settings in a
	  different location when you install the program in Windows NT. Therefore,
	  when you install Windows NT Workstation 4.0 over Windows 95, the Windows NT
	  Setup program is unable to transfer the settings from the Windows 95 registry
	  to the Windows NT registry.
	
	- The Windows NT Workstation 4.0 Setup program cannot determine which devices
	  Windows NT Workstation 4.0 does not support. In addition, Windows 95 supports
	  more devices than Windows NT Workstation 4.0, so it is possible for a device
	  that is not supported by Windows NT Workstation 4.0 to be installed and
	  functioning properly in Windows 95.
	
	  Because the Setup program cannot determine which devices Windows NT
	  Workstation 4.0 does not support, it cannot prevent the installation process
	  from proceeding on a computer that contains an unsupported device. This may
	  cause the installation process to fail, or may cause the device to fail or
	  other problems to arise after the installation process is finished.
	
	To install Windows NT Workstation 4.0 on a computer running Windows 95, follow
	these steps:
	
	1. Check to see if the devices installed in your computer and the programs that
	  you currently use in Windows 95 are supported by Windows NT Workstation 4.0.
	
	2. Install Windows NT Workstation 4.0 in a new folder, and then verify that you
	  are able to successfully dual-boot between Windows NT and Windows 95. Note
	  that installing Windows NT Workstation on the same drive on which Windows 95
	  is installed is not recommended.
	
	3. Reinstall any Windows-based programs that you want to use in Windows NT
	  Workstation 4.0. If the program you are reinstalling has separate Windows 95
	  and Windows NT versions, be sure to install the Windows NT version of the
	  program instead of reinstalling the Windows 95 version. The Windows NT
	  version of the program should not be installed in the same folder in which
	  the Windows 95 version is installed.
	
	4. If you do not want to run Windows 95 after installing Windows NT Workstation
	  4.0, manually remove the Windows 95 folder.
	
	======================================================================
	Keywords          : kbsetup kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWin95search kbZNotKeyword3
	Version           : 4.0 95
	Issue type        : kbprb
	
	=============================================================================
	
