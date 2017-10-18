---
layout: page
title: "Q305462: Mouse and Keyboard Stop Working with Windows NT 4.0 SRP"
permalink: kb/305/Q305462/
---

## Q305462: Mouse and Keyboard Stop Working with Windows NT 4.0 SRP

	Article: Q305462
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kbhw
	Last Modified: 31-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Windows NT 4.0 Security Rollup Package (SRP), the mouse
	and keyboard may no longer function.
	
	For additional information about the SRP, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	CAUSE
	=====
	
	This problem can occur if you install the SRP on a computer that is running
	Microsoft IntelliPoint 2.0.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. If your system partition uses the FAT file system, restart your computer by
	  using a bootable MS-DOS or Windows floppy disk. If your system partition uses
	  the NTFS file system, use one of the following procedures:
	
	   - Install a second copy of Windows NT 4.0, and then boot to that parallel
	     installation.
	
	  -or-
	
	   - Use a Windows 2000 CD-ROM to boot to the Recovery Console.
	
	For additional information about parallel installations, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q259003 How and Why to Perform a Parallel Installation of Windows NT 4.0
	
	For additional information about the Windows 2000 Recovery Console, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q229716 Description of the Windows 2000 Recovery Console
	
	2. Change to the %SystemRoot%\System32\Drivers folder.
	
	3. Rename Msi8042.sys to Msi8042.old. Rename the I8042prt.sys file to
	  Msi8042.sys.
	
	4. Restart the computer.
	
	Install the latest version of IntelliPoint software to prevent this problem from
	occurring. IntelliPoint is available from the Download Drivers link on the
	following Microsoft Web site:
	
	  http://www.microsoft.com/hardware/mouse/download.asp
	
	
	Additional query words: intellimouse
	
	======================================================================
	Keywords          : kbhw 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
