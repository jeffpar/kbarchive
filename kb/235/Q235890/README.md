---
layout: page
title: "Q235890: Enterprise Edition Installer Program Requests Service Pack 3"
permalink: /kb/235/Q235890/
---

## Q235890: Enterprise Edition Installer Program Requests Service Pack 3

	Article: Q235890
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Enterprise Edition Installer program (Nhloader.exe) on a
	computer that has Service Pack 4 (SP4) or later installed, you may receive the
	following error message:
	
	  Install Service Pack 3
	  You must install Service Pack 3 to complete the installation of Windows NT
	  Enterprise Edition. Press 'Start Installation' to finish the setup.
	
	If the computer is running SP4, the problem persists even if you reinstall the
	service pack.
	
	CAUSE
	=====
	
	This behavior occurs when a service pack later than Service Pack 3 (SP3) is
	installed in Windows NT Server, and you then upgrade the computer to Windows NT
	Enterprise Edition by using the Winntup.exe utility. The SP3 version of the
	Nhloader.exe file is placed on the computer. The SP3 version of Nhloader.exe
	checks specifically for SP3 to be installed on the computer. If you have a later
	service pack installed, it requests SP3.
	
	The SP4 Update.exe program does not replace the Nhloader.exe file, even though
	the updated file is part of the service pack. Service Pack 5 (SP5) and later
	does replace the Nhloader.exe file if you reinstall the service pack after
	upgrading the computer to Enterprise Edition.
	
	WARNING: Do not to install SP3 on an installation of Windows NT that has already
	had a later service pack installed. Doing so may cause file version mismatches
	that may cause Windows to be unstable or unbootable.
	
	RESOLUTION
	==========
	
	The version of Nhloader.exe in SP4 and later has been updated to recognize the
	presence of service packs later than SP3.
	
	If you are prompted to install SP3, quit without installing SP3. Then, copy the
	Nhloader.exe file from the same service pack version that is installed on the
	computer to the System32 folder in your installation, and run the new version of
	Nhloader.exe.
	
	If SP5 or later is installed, reinstalling the service pack should replace the
	Nhloader.exe file with the updated version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	This problem has been corrected in the latest U.S. service pack for Windows NT
	Server version 4.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
