---
layout: page
title: "Q162258: How to Remove Cross-Platform Printer Drivers on Windows NT"
permalink: /kb/162/Q162258/
---

## Q162258: How to Remove Cross-Platform Printer Drivers on Windows NT

{% raw %}

	Article: Q162258
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to remove cross-platform printer drivers on a
	computer running Windows NT Server for clients to Point and Print. This includes
	instructions on removing entries from the registry and deleting the driver files
	from the hard disk drive.
	
	MORE INFORMATION
	================
	
	Cross-platform drivers refer to drivers installed on the Windows NT print server
	for other operating system (OS) versions (for example, Windows NT 3.5x), OS type
	(for example, Windows 95/98), and alternate CPU OS builds (for example, Alpha
	and MIPS when considering Intel-processor-based installations). For additional
	information about cross-platform printing in Windows NT, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q100346 Cross Platform Network Printing with Windows NT
	
	The following procedure for removing unwanted cross-platform printer drivers
	involves editing the registry and deleting driver files. Be careful not to
	delete driver files and registry keys for the platform you are on.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Open the Control Panel and double-click the Services icon.
	
	2. Click the Spooler service and then click Stop. Click Yes when prompted.
	
	3. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM
	 \CurrentControlSet
	   \Control
	     \Print
	       \Environments
	         \<Platform>
	           \Drivers
	             \Version-<x>
	               \<Printer driver>
	
	  Where:
	   - <Platform> is one of the following:
	
	  Windows 4.0 (Windows 95)
	  Windows NT Alpha_AXP (Alpha)
	  Windows NT PowerPC (PPC)
	  Windows NT R4000 (MIPS)
	  Windows NT x86 (Intel)
	
	   - Version-<x> refers to one of the following:
	
	  Windows 4.0, Version-0 is equivalent to Windows 95
	  Windows NT x86, Windows NT Alpha, MIPS, and PPC, Version-0 is equivalent to
	  Windows NT 3.1
	  Windows NT x86, Windows NT Alpha, MIPS, and PPC, Version-1 is equivalent to
	  Windows NT 3.5x
	  Windows NT x86, Windows NT Alpha, MIPS, and PPC, Version-2 is equivalent to
	  Windows NT 4.0
	
	  NOTE: Windows NT PPC support for Version-1 began only with Windows NT 3.51.
	
	   - <Printer driver> is the printer key that will be deleted in Step 5.
	
	4. Make a note of all files referenced in the printer driver key that will be
	  deleted. These files will be removed in Step 6.
	
	  NOTES:
	   - Do not delete the driver for the platform you are on. For example, if you
	     are on a Windows NT 4.0 Intel platform computer, do not delete the
	     "Windows NT x86" driver.
	
	   - Some files may be referenced by other cross-platform printers. In this
	     case, you should check all other related cross-platform registry keys to
	     find out which files are in common, or simply leave the files in the
	     directory referenced and skip Step 6.
	
	5. Delete the unwanted cross-platform printer driver key.
	
	6. Delete the unwanted cross-platform files on the hard drive as noted from Step
	  4. These files should be located in one of the following directories:
	
	  %SystemRoot%\System32\Spool\Drivers\W32alpha\<version>
	  %SystemRoot%\System32\Spool\Drivers\W32mips\<version>
	  %SystemRoot%\System32\Spool\Drivers\W3ppc\<version>
	  %SystemRoot%\System32\Spool\Drivers\w32x86\<version>
	  %SystemRoot%\System32\Spool\Drivers\Win40\<version>
	
	  Where the <version> corresponds to the version-x number from Step 3.
	
	  For example, Windows 95 drivers are located in the directory
	  %SystemRoot%\System32\Spool\Drivers\Win40\0 and Windows NT 4.0 Alpha drivers
	  are located in %SystemRoot%\System32\Spool\Drivers\W32alpha\2.
	
	7. In Control Panel Services, select the Spooler service and click Start.
	
	Additional query words: prodnt win95 .inf uninstall deinstall
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
